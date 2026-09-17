# Status Pro — Landing Page de Papéis Profissionais

Landing page de geração de leads B2B para a linha de **papel higiênico profissional,
papel-toalha interfolhado e papel-toalha em bobina** da Status Pro, construída para
receber tráfego de campanhas de Pesquisa do Google Ads.

O visitante que chega aqui já quer comprar. A página não tenta criar interesse:
ela convence quem procura um fornecedor de que vale solicitar uma cotação com a
Status Pro em vez de continuar procurando.

## Arquivos

```
index.html                       página completa (11 seções + 2 formulários)
assets/css/styles.css            design system e layout responsivo
assets/js/main.js                formulário, máscara, tracking, teste A/B, CTA flutuante
assets/img/                      logo, favicon e fotos de produto (ver README da pasta)
docs/COPY-E-ESTRUTURA.md         copy final de todas as seções, 3 heros para A/B, FAQ, prova social
docs/DESIGN-E-IMPLEMENTACAO.md   design, responsivo, tracking, integração e pendências
```

## Rodar localmente

```bash
python3 -m http.server 8000
```

Sem build e sem dependências. Variantes de hero para teste: `?hero=b` e `?hero=c`.

## Antes de publicar

A página **não está pronta para o ar**. Há 6 bloqueadores e 13 informações a confirmar
com a Status Pro, listados em
[`docs/DESIGN-E-IMPLEMENTACAO.md` § 8](docs/DESIGN-E-IMPLEMENTACAO.md#8-️-pendências-antes-de-publicar).

Os mais críticos:

1. **Depoimentos reais** — a seção de prova social está com placeholders visíveis.
2. **Endpoint do formulário** — hoje o lead não é enviado a lugar nenhum
   (`CONFIG.formEndpoint` em `assets/js/main.js`).
3. **Logo oficial** e **telefone/e-mail comercial** no rodapé.
4. **IDs de GA4 / Google Ads / GTM.**

Nenhuma informação sobre a empresa foi inventada. Tudo que não foi confirmado aparece
na página com a etiqueta amarela **CONFIRMAR COM A STATUS PRO** e está catalogado na
documentação.
