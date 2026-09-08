# Status Pro — LP de Papéis Profissionais
## Design, comportamento responsivo, tracking e pendências

---

## 1. Sistema visual

Preserva o conceito da marca (azul, azul escuro, turquesa, branco), mas com uma
identidade mais comercial e mais focada em papéis do que a LP institucional atual.

| Token | Valor | Uso |
|---|---|---|
| `--navy-900` | `#071A2E` | Rodapé, base do hero |
| `--navy-800` | `#0A2540` | Seções escuras (custo por uso, CTA final) |
| `--navy-700` | `#103458` | Faixa de fechamento |
| `--blue-600` / `--blue-500` | `#14508A` / `#1C6BB0` | Ícones, traços das ilustrações |
| `--turq-500` | `#10A9BE` | **Cor exclusiva dos CTAs** e de destaques |
| `--turq-400` | `#2CC4D6` | Destaques sobre fundo escuro |
| `--ice` / `--ice-2` | `#F2F7FB` / `#E8F1F8` | Fundos alternados, ícones |

**Regra de contraste:** turquesa é reservado para ação. Nada que não seja clicável
usa `--turq-500` como fundo. É o que faz o olho encontrar o CTA em qualquer dobra.

**Tipografia:** Inter (Google Fonts, carregada de forma não bloqueante) com fallback
para a fonte do sistema. Corpo em 17 px — acima do mínimo confortável, porque parte
relevante do público comprador lê em telas de escritório e no celular sem óculos.
Headlines em `clamp()`, então escalam sem quebra entre 320 px e 1440 px.

**Ritmo de fundos:** branco → gelo → branco → gelo → **marinho** → branco → gelo →
branco → **marinho** → branco → azul médio → marinho. As duas seções escuras marcam
os dois momentos de maior peso comercial (custo por uso e CTA final).

---

## 2. Sugestões visuais por seção

| Seção | Tratamento atual | Recomendação de arte |
|---|---|---|
| **Topbar** | Wordmark placeholder + 3 chips de confiança | Substituir pelo logo oficial em SVG. Manter os chips: eles são a primeira prova antes do H1. |
| **Hero** | Gradiente marinho + halo azul; formulário branco flutuando à direita | Opcional: foto real de banheiro corporativo ou de dispensers instalados, em `background` com overlay marinho a 88–92% de opacidade. **Nunca** foto de banheiro doméstico. Se não houver foto de qualidade, o gradiente atual funciona melhor que uma foto de banco de imagens genérica. |
| **Problema** | 4 cards brancos com ícones de linha | Manter ícones de linha (rolo, relógio, prancheta, moedas). Evitar ilustrações "fofas": o público é comprador técnico. |
| **Solução** | Duas colunas: critérios em chips + painel marinho | Opcional: foto de um atendimento/visita técnica na coluna esquerda. Se entrar foto, mover os critérios para baixo dela. |
| **Produtos** | Ilustrações SVG vetoriais dos 3 formatos | **Prioridade máxima de arte.** Substituir por foto real dos produtos Status Pro em fundo claro, recortadas, mesmo enquadramento nas três. Produto real converte muito acima de ilustração. |
| **Dispensers** | Faixa tracejada, CTA outline | Foto de dispenser instalado em parede reforça a ideia de "solução", não de "item avulso". |
| **Custo por uso** | Seção marinho + box de vidro com ícone de calculadora | Se existir dado real de rendimento (folhas por rolo, usos por bobina), transformar o box num comparativo numérico simples. Seria o elemento mais persuasivo da página. |
| **Segmentos** | 10 cards com ícone e rótulo | Manter. Se houver fotos por segmento, usar no máximo 4 e em card maior — 10 fotos poluem. |
| **Diferenciais** | 6 cards com ícone à esquerda | Manter. Não transformar em carrossel. |
| **Prova social** | 3 blocos com aspas e placeholder amarelo | Trocar por depoimentos reais + foto ou logo do cliente (com autorização). Faixa de logos opcional abaixo. |
| **CTA final** | Marinho, argumentos à esquerda, formulário à direita | Manter o formulário completo (não só um botão): quem chegou até aqui está pronto. |
| **FAQ** | Acordeão nativo `<details>` em 2 colunas | Manter. Nativo = zero JS para abrir, funciona sem script e é indexável. |
| **Rodapé** | Marinho, dados legais + 3 chips | Completar dados legais. |

**Sem carrosséis, sem contadores animados, sem vídeo em autoplay, sem pop-up de saída.**
Cada um deles custa velocidade e nenhum deles resolve uma objeção que a página já não resolva.

---

## 3. Comportamento desktop × mobile

### Desktop (≥ 980 px)
- Hero em duas colunas: copy à esquerda, **formulário visível sem rolagem** à direita.
  Essa é a principal diferença em relação à LP atual — o visitante de Pesquisa que já
  está pronto para cotar não precisa atravessar a página inteira para encontrar o campo.
- Chips de confiança visíveis na topbar a partir de 1040 px; botão "Solicitar cotação"
  na topbar a partir de 760 px.
- Produtos em 3 colunas; segmentos em 5; diferenciais em 3.
- CTA flutuante vira um botão arredondado no canto inferior direito.

### Tablet (620–979 px)
- Formulário do hero desce para baixo da copy, ainda na primeira rolagem.
- Grades caem para 2 colunas; segmentos para 3.

### Mobile (< 620 px)
- Coluna única, tudo empilhado. Ordem: copy → checklist → botão → formulário.
- Botão do hero com largura total e alvo de toque de 52 px de altura.
- Campos de formulário com fonte de 16 px — evita o zoom automático do iOS ao focar.
- Telefone abre teclado numérico (`inputmode="tel"`) e recebe máscara em tempo real.
- Barra fixa inferior com "Solicitar cotação", respeitando `safe-area-inset-bottom`
  (não fica sob o gesture bar do iPhone).
- **Um CTA por vez:** a barra fixa some automaticamente quando qualquer formulário
  entra em 25% da tela, e só reaparece quando ele sai. Nunca há dois CTAs competindo.

### Acessibilidade
- Contraste AA em todos os textos sobre fundo escuro.
- Foco visível (`:focus-visible` turquesa) em todos os elementos interativos.
- Erros de formulário com `aria-invalid` e status com `aria-live="polite"`.
- `prefers-reduced-motion` desliga transições e a rolagem suave.
- Ícones decorativos com `aria-hidden`; ilustrações de produto com `role="img"` e rótulo.

---

## 4. Performance (afeta o Índice de qualidade do Google Ads)

O que já está feito:
- Zero frameworks, zero jQuery, zero bibliotecas. Um CSS e um JS, ambos locais.
- JS com `defer`; nenhum script bloqueia a renderização.
- Ícones em sprite SVG inline — nenhuma requisição extra de ícone.
- Fonte carregada de forma não bloqueante (`media="print"` + `onload`), com fallback
  de sistema, e `noscript` para quem desativou JS.
- Ilustrações de produto em SVG (poucos KB), sem imagens pesadas no caminho crítico.

O que fazer ao inserir as fotos reais:
- WebP com fallback JPG; `width` e `height` declarados em todas as tags `<img>`.
- `loading="lazy"` em tudo, **exceto** a imagem do hero (`eager` + `fetchpriority="high"`).
- Meta de Largest Contentful Paint abaixo de 2,5 s no 4G e CLS abaixo de 0,1.
- Se entrar Google Tag Manager, mantenha o contêiner enxuto — é o item que mais
  costuma derrubar o desempenho de LPs de Ads.

---

## 5. Formulário e integração

Configuração centralizada em `assets/js/main.js`, no objeto `CONFIG` (topo do arquivo):

```js
var CONFIG = {
  formEndpoint:       '',  // endpoint que recebe o lead (CRM, RD, Zapier, e-mail)
  whatsappNumber:     '',  // só dígitos com DDI — usado como fallback de envio
  adsConversionLabel: '',  // ex.: 'AW-000000000/AbC-D_efG'
  thankYouUrl:        ''   // opcional: /obrigado para medir conversão por URL
};
```

**Comportamento conforme a configuração:**

| Situação | O que acontece |
|---|---|
| `formEndpoint` vazio | Modo demonstração: valida, mostra a mensagem de sucesso e registra o lead no console. Nada é enviado. |
| `formEndpoint` preenchido | `POST` JSON com todos os campos + UTMs + `gclid` + página + referrer + timestamp. |
| Envio falha e `whatsappNumber` preenchido | Abre o WhatsApp com a mensagem já montada, para o lead não se perder. |
| Envio falha e sem WhatsApp | Mensagem de erro pedindo nova tentativa. Nada quebra. |

**Payload enviado:**
```json
{
  "nome": "", "empresa": "", "telefone": "", "email": "",
  "produto": "", "observacoes": "", "origem": "form-hero",
  "trafego": { "utm_source": "", "utm_campaign": "", "gclid": "", "pagina": "", "referrer": "" },
  "enviado_em": "2026-01-01T00:00:00.000Z"
}
```

O campo `origem` (`form-hero` ou `form-final`) permite descobrir qual dos dois
formulários converte mais — dado direto para decidir o layout das próximas campanhas.

---

## 6. Tracking

Eventos já disparados para `dataLayer` (GTM) e, quando `gtag` existir, para GA4/Ads:

| Evento | Quando | Parâmetros |
|---|---|---|
| `cta_click` | Clique em qualquer CTA da página | `cta` (topbar, hero-mobile, solucao, produto-higienico, produto-interfolha, produto-bobina, dispensers, custo-por-uso, faq, faixa-final, sticky) |
| `lead_form_submit` / `generate_lead` | Envio válido do formulário | `formulario`, `produto` |
| `conversion` | Envio válido, se `adsConversionLabel` estiver preenchido | `send_to` |
| `faq_open` | Abertura de uma pergunta do FAQ | `pergunta` |
| `hero_variant` | Carregamento com `?hero=b` ou `?hero=c` | `variante` |

**A instalar antes de publicar** (o espaço já está marcado no `<head>` do `index.html`):
GA4, Google Ads e/ou GTM. ⚠️ IDs a confirmar.

O evento `faq_open` costuma ser o mais subestimado: ele revela qual objeção o tráfego
pago realmente tem. Se "Qual é a região de atendimento?" for a mais aberta, essa
informação precisa subir para o hero.

---

## 7. Teste A/B do hero

Três variantes prontas (copy completa em `COPY-E-ESTRUTURA.md`, seção 3).
Para revisar: `?hero=b` ou `?hero=c`.

Em produção, rode o teste pela ferramenta de experimentos do Google Ads ou por duas
URLs distintas — a leitura por querystring serve para revisão interna, não para
divisão de tráfego.

**Amostra mínima sugerida:** ao menos 100 conversões por variante antes de decidir,
e leia **qualidade** junto com volume (o campo de observações mostra o porte do lead).

---

## 8. ⚠️ Pendências antes de publicar

### Bloqueadores — a página **não** deve ir ao ar sem isso

| # | Item | Onde |
|---|---|---|
| 1 | **Depoimentos reais** (ou remover a seção inteira) | Seção Prova social — 3 placeholders amarelos visíveis |
| 2 | **Endpoint do formulário** — hoje o lead não é enviado a lugar nenhum | `assets/js/main.js` → `CONFIG.formEndpoint` |
| 3 | **Logo oficial** da Status Pro (topbar e rodapé) | `index.html` + `assets/img/` |
| 4 | **Dados legais**: razão social, CNPJ, endereço, telefone, e-mail | Rodapé |
| 5 | **Política de Privacidade** — link real (LGPD) | Rodapé |
| 6 | **IDs de tracking**: GA4, Google Ads, GTM | `<head>` do `index.html` |
| 7 | **URL canônica** definitiva | `<link rel="canonical">` |

### A confirmar com a Status Pro (marcado na página com etiqueta amarela)

| # | Item | Impacto |
|---|---|---|
| 8 | **Região de atendimento** (estados/cidades) | Alto — é objeção nº 1 em fornecimento B2B |
| 9 | **Prazo de entrega por região** — o "48h*" está com asterisco e ressalva | Alto |
| 10 | **A Status Pro é fabricante?** | Alto — libera "fábrica"/"fabricante", termos de alto volume em Ads |
| 11 | **Dispensers em comodato**: modelos, disponibilidade, condições | Médio |
| 12 | **Pedido mínimo / quantidade mínima** | Médio |
| 13 | **Pagamento e faturamento PJ**: prazos e formas | Médio |
| 14 | Metragens, gramaturas e apresentações de cada produto | Médio — enriquece os cards |
| 15 | Fornecimento recorrente: periodicidade e formato de contrato | Médio |
| 16 | Número de WhatsApp comercial da campanha | Médio — hoje o fallback está desativado |
| 17 | "Cerca de 30 anos" — ano exato de fundação | Baixo — permite trocar por número exato |
| 18 | Fotos reais dos três produtos | Alto para conversão — hoje há ilustrações SVG |
| 19 | Autorização de uso de logos de clientes | Baixo |
| 20 | Existe estudo de caso com números de economia? | Alto se existir — vira o argumento central da seção de custo |

**Como as pendências aparecem na página:** etiqueta amarela `CONFIRMAR COM A STATUS PRO`,
propositalmente visível. Nenhuma informação foi inventada para preencher lacuna —
publicar com a etiqueta no ar é erro, mas publicar com um dado inventado é pior.

---

## 9. Checklist de publicação

- [ ] Itens 1 a 7 acima resolvidos
- [ ] Todas as etiquetas amarelas removidas do HTML (`grep -n "placeholder-tag\|pending" index.html`)
- [ ] Formulário testado ponta a ponta: lead chega ao destino e ao CRM
- [ ] Conversão do Google Ads disparando (teste com o Google Tag Assistant)
- [ ] Testado em Chrome, Safari iOS e Android
- [ ] PageSpeed Insights: mobile acima de 90
- [ ] Política de Privacidade publicada e vinculada
- [ ] Anúncios apontando para a URL com UTMs e `gclid` habilitado (auto-tagging ligado)
- [ ] Landing page marcada como "não indexar" **apenas** se a campanha exigir; caso
      contrário, manter `index, follow` (o FAQ já tem schema e pode trazer tráfego orgânico)

---

## 10. Como rodar localmente

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
# variantes de hero: http://localhost:8000/?hero=b  ·  ?hero=c
```

Não há build, dependências nem etapa de compilação. Os três arquivos
(`index.html`, `assets/css/styles.css`, `assets/js/main.js`) podem ser publicados
diretamente em qualquer hospedagem estática ou colados em um CMS.
