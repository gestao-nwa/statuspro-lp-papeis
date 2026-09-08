# Imagens da LP

Esta pasta está preparada para receber os arquivos oficiais da Status Pro.

## Pendências de arte

| Arquivo | Uso | Situação |
|---|---|---|
| `logo-statuspro.svg` | Topbar e rodapé | **Pendente** — hoje há um placeholder tipográfico (`SP` + wordmark) no HTML |
| `favicon.svg` | Aba do navegador | Placeholder gerado — substituir pelo símbolo oficial |
| `hero-papeis.jpg` | Fundo do hero (opcional) | **Pendente** — ver `docs/DESIGN-E-IMPLEMENTACAO.md` |
| `produto-higienico.jpg` | Card "Papel Higiênico Profissional" | **Pendente** — hoje há ilustração SVG |
| `produto-interfolha.jpg` | Card "Papel-Toalha Interfolhado" | **Pendente** — hoje há ilustração SVG |
| `produto-bobina.jpg` | Card "Papel-Toalha em Bobina" | **Pendente** — hoje há ilustração SVG |

## Recomendações técnicas

- Fotos de produto em fundo claro e neutro, recortadas, **1200 × 900 px**, exportadas em WebP (com JPG de fallback), abaixo de 150 KB cada.
- Foto de hero (se usada) em **1920 × 1080 px**, WebP abaixo de 250 KB, com `loading="eager"` e `fetchpriority="high"`.
- Todas as demais imagens com `loading="lazy"` e `width`/`height` declarados, para não gerar deslocamento de layout (CLS) — isso afeta o Índice de qualidade do Google Ads.
