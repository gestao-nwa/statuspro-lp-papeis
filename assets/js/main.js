/* =========================================================================
   Status Pro — LP Papéis Profissionais
   Sem dependências. Carregado com defer.
   ========================================================================= */
(function () {
  'use strict';

  /* -----------------------------------------------------------------------
     CONFIGURAÇÃO — preencher antes de publicar
     [CONFIRMAR COM A STATUS PRO] todos os valores abaixo.
     ----------------------------------------------------------------------- */
  var CONFIG = {
    // Endpoint que recebe o lead (CRM, RD Station, Zapier, e-mail, etc.).
    // Deixe vazio para modo demonstração (mostra mensagem de sucesso sem enviar).
    formEndpoint: '',

    // Número de WhatsApp comercial, só dígitos, com DDI. Ex.: '5511999999999'.
    // Se vazio, o fallback de WhatsApp fica desativado (nada quebra na página).
    whatsappNumber: '',

    // Rótulo de conversão do Google Ads. Ex.: 'AW-000000000/AbC-D_efG'.
    adsConversionLabel: '',

    // Página para onde redirecionar após o envio (opcional).
    // Recomendado criar uma /obrigado para medir conversão também por URL.
    thankYouUrl: ''
  };

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* -----------------------------------------------------------------------
     1. Ano do rodapé
     ----------------------------------------------------------------------- */
  var ano = $('#ano');
  if (ano) { ano.textContent = new Date().getFullYear(); }

  /* -----------------------------------------------------------------------
     2. Teste A/B do Hero — ?hero=b ou ?hero=c
        As variantes ficam em data-variant-b / data-variant-c no HTML.
        Documentação completa em docs/COPY-E-ESTRUTURA.md.
     ----------------------------------------------------------------------- */
  (function heroVariant() {
    var params = new URLSearchParams(window.location.search);
    var v = (params.get('hero') || '').toLowerCase();
    if (v !== 'b' && v !== 'c') { return; }

    [['#hero-title', 'variant' + v.toUpperCase()], ['#hero-sub', 'variant' + v.toUpperCase()]]
      .forEach(function (pair) {
        var el = $(pair[0]);
        if (el && el.dataset[pair[1]]) { el.textContent = el.dataset[pair[1]]; }
      });

    push({ event: 'hero_variant', variante: v });
  })();

  /* -----------------------------------------------------------------------
     3. Tracking — dataLayer (GTM) + gtag (GA4 / Google Ads)
     ----------------------------------------------------------------------- */
  function push(payload) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }

  function trackCta(nome) {
    push({ event: 'cta_click', cta: nome });
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', { cta: nome });
    }
  }

  function trackLead(dados) {
    push({ event: 'lead_form_submit', formulario: dados.origem, produto: dados.produto });
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        form_id: dados.origem,
        produto_interesse: dados.produto
      });
      if (CONFIG.adsConversionLabel) {
        window.gtag('event', 'conversion', { send_to: CONFIG.adsConversionLabel });
      }
    }
  }

  $$('[data-cta]').forEach(function (el) {
    if (el.tagName === 'BUTTON') { return; } // botões de form são medidos no submit
    el.addEventListener('click', function () { trackCta(el.dataset.cta); });
  });

  /* -----------------------------------------------------------------------
     4. Origem do tráfego (UTMs, gclid) — enviada junto com o lead
     ----------------------------------------------------------------------- */
  var TRAFEGO = (function () {
    var p = new URLSearchParams(window.location.search);
    var chaves = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'];
    var out = {};
    chaves.forEach(function (k) { if (p.get(k)) { out[k] = p.get(k); } });
    out.pagina = window.location.href.split('#')[0];
    out.referrer = document.referrer || '(direto)';
    return out;
  })();

  /* -----------------------------------------------------------------------
     5. Máscara de telefone (BR)
     ----------------------------------------------------------------------- */
  function mascaraTelefone(valor) {
    var d = valor.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 2)  { return d.length ? '(' + d : ''; }
    if (d.length <= 6)  { return '(' + d.slice(0, 2) + ') ' + d.slice(2); }
    if (d.length <= 10) { return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6); }
    return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
  }

  $$('input[type="tel"]').forEach(function (input) {
    input.addEventListener('input', function () {
      var pos = input.selectionStart === input.value.length;
      input.value = mascaraTelefone(input.value);
      if (pos) { input.selectionStart = input.selectionEnd = input.value.length; }
    });
  });

  /* -----------------------------------------------------------------------
     6. Validação
     ----------------------------------------------------------------------- */
  var RE_EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  function campoDe(el) { return el.closest('.field'); }

  function valida(el) {
    var v = (el.value || '').trim();
    var ok = true;

    if (el.hasAttribute('required') && !v) { ok = false; }
    if (ok && el.type === 'email' && v) { ok = RE_EMAIL.test(v); }
    if (ok && el.type === 'tel' && v) { ok = v.replace(/\D/g, '').length >= 10; }

    var campo = campoDe(el);
    if (campo) { campo.classList.toggle('is-invalid', !ok); }
    el.classList.toggle('is-invalid', !ok);
    el.setAttribute('aria-invalid', ok ? 'false' : 'true');
    return ok;
  }

  function validaForm(form) {
    var campos = $$('input[required], select[required], input[type="email"], input[type="tel"]', form);
    var primeiroErro = null;
    campos.forEach(function (el) {
      if (!valida(el) && !primeiroErro) { primeiroErro = el; }
    });
    if (primeiroErro) {
      primeiroErro.focus();
      primeiroErro.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    return !primeiroErro;
  }

  /* -----------------------------------------------------------------------
     7. Envio do formulário
     ----------------------------------------------------------------------- */
  function mensagem(form, texto, tipo) {
    var box = $('.form__status', form);
    if (!box) { return; }
    box.textContent = texto;
    box.className = 'form__status ' + (tipo === 'erro' ? 'is-err' : 'is-ok');
  }

  function textoWhatsApp(dados) {
    return encodeURIComponent(
      'Olá! Gostaria de uma cotação de papéis profissionais para a minha empresa.\n\n' +
      'Nome: ' + dados.nome + '\n' +
      'Empresa: ' + dados.empresa + '\n' +
      'Telefone: ' + dados.telefone + '\n' +
      'E-mail: ' + dados.email + '\n' +
      'Produto de interesse: ' + dados.produto + '\n' +
      (dados.observacoes ? 'Observações: ' + dados.observacoes : '')
    );
  }

  $$('form.lead-form').forEach(function (form) {
    // valida ao sair do campo, depois da primeira tentativa
    $$('input, select, textarea', form).forEach(function (el) {
      el.addEventListener('blur', function () {
        if (form.dataset.tentou === '1') { valida(el); }
      });
      el.addEventListener('input', function () {
        var campo = campoDe(el);
        if (campo && campo.classList.contains('is-invalid')) { valida(el); }
      });
    });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      form.dataset.tentou = '1';

      // honeypot: se preenchido, é bot — encerra em silêncio
      if (form.elements.empresa_site && form.elements.empresa_site.value) { return; }

      if (!validaForm(form)) {
        mensagem(form, 'Revise os campos destacados para enviar sua solicitação.', 'erro');
        return;
      }

      var dados = {
        nome: form.elements.nome.value.trim(),
        empresa: form.elements.empresa.value.trim(),
        telefone: form.elements.telefone.value.trim(),
        email: form.elements.email.value.trim(),
        produto: form.elements.produto.value,
        observacoes: form.elements.observacoes.value.trim(),
        origem: form.id,
        trafego: TRAFEGO,
        enviado_em: new Date().toISOString()
      };

      var botao = $('button[type="submit"]', form);
      var rotulo = botao ? botao.innerHTML : '';
      if (botao) { botao.disabled = true; botao.textContent = 'Enviando...'; }

      trackLead(dados);

      function sucesso() {
        form.reset();
        mensagem(form, 'Recebemos sua solicitação. Nossa equipe entrará em contato para apresentar a cotação.', 'ok');
        if (botao) { botao.disabled = false; botao.innerHTML = rotulo; }
        if (CONFIG.thankYouUrl) { window.location.href = CONFIG.thankYouUrl; }
      }

      function falha() {
        if (botao) { botao.disabled = false; botao.innerHTML = rotulo; }
        if (CONFIG.whatsappNumber) {
          mensagem(form, 'Não conseguimos enviar agora. Abrimos o WhatsApp com seus dados para você concluir a solicitação.', 'erro');
          window.open('https://wa.me/' + CONFIG.whatsappNumber + '?text=' + textoWhatsApp(dados), '_blank', 'noopener');
        } else {
          mensagem(form, 'Não conseguimos enviar sua solicitação agora. Tente novamente em instantes.', 'erro');
        }
      }

      if (!CONFIG.formEndpoint) {
        // Modo demonstração — nenhum endpoint configurado ainda.
        console.warn('[Status Pro LP] CONFIG.formEndpoint não configurado. Lead capturado apenas em memória:', dados);
        sucesso();
        return;
      }

      fetch(CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      })
        .then(function (r) { if (!r.ok) { throw new Error('HTTP ' + r.status); } sucesso(); })
        .catch(function (e) { console.error('[Status Pro LP] Falha no envio:', e); falha(); });
    });
  });

  /* -----------------------------------------------------------------------
     8. Pré-seleção do produto ao clicar nos CTAs dos cards
     ----------------------------------------------------------------------- */
  $$('[data-prefill]').forEach(function (link) {
    link.addEventListener('click', function () {
      var valor = link.dataset.prefill;
      $$('select[name="produto"]').forEach(function (sel) {
        var achou = Array.prototype.some.call(sel.options, function (o) { return o.value === valor; });
        if (achou) { sel.value = valor; }
      });
    });
  });

  /* -----------------------------------------------------------------------
     8b. Links para #cotacao levam o foco ao primeiro campo do formulário
         (no desktop o formulário já está visível no hero — sem o foco,
         o clique no CTA parece não fazer nada).
     ----------------------------------------------------------------------- */
  $$('a[href="#cotacao"]').forEach(function (link) {
    link.addEventListener('click', function () {
      window.setTimeout(function () {
        var primeiro = document.querySelector('#form-hero input[name="nome"]');
        if (primeiro) { primeiro.focus({ preventScroll: true }); }
      }, 420);
    });
  });

  /* -----------------------------------------------------------------------
     9. CTA flutuante — aparece após o hero e desaparece sempre que um
        formulário ou qualquer CTA da página estiver na tela.
        Regra de CRO: nunca dois CTAs competindo visualmente.
     ----------------------------------------------------------------------- */
  (function stickyCta() {
    var sticky = $('#sticky-cta');
    var hero = $('.hero');
    if (!sticky || !hero) { return; }
    sticky.hidden = false;

    if (!('IntersectionObserver' in window)) { return; }

    var passouHero = false;
    var concorrentes = new Set();

    function atualiza() {
      sticky.classList.toggle('is-visible', passouHero && concorrentes.size === 0);
    }

    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { passouHero = !e.isIntersecting; });
      atualiza();
    }, { threshold: 0 }).observe(hero);

    // Concorrentes: os dois formulários e todos os CTAs internos da página.
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { concorrentes.add(e.target); } else { concorrentes.delete(e.target); }
      });
      atualiza();
    }, { threshold: 0.4 });

    $$('.formcard').forEach(function (el) { obs.observe(el); });
    $$('a.btn[data-cta]').forEach(function (el) {
      if (!sticky.contains(el)) { obs.observe(el); }
    });
  })();

  /* -----------------------------------------------------------------------
     10. Medição do FAQ (quais dúvidas o tráfego pago realmente abre)
     ----------------------------------------------------------------------- */
  $$('details.acc').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) { return; }
      var titulo = $('.acc__btn', d);
      push({ event: 'faq_open', pergunta: titulo ? titulo.textContent.trim() : '' });
    });
  });

})();
