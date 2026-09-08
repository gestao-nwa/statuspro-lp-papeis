# Status Pro — LP de Papéis Profissionais
## Copy final, estrutura e variações para teste

Documento de referência da página `index.html`. Toda a copy abaixo é a que está
publicada no HTML. Onde houver `⚠️ CONFIRMAR`, a informação **não foi validada**
e não deve ir ao ar sem checagem com a Status Pro.

---

## 0. A história comercial única da página

A LP inteira conta **uma** história, na ordem:

> A empresa tem consumo recorrente de papéis → esse consumo precisa ser controlado →
> o produto e o fornecedor escolhidos influenciam desperdício, reposição e custo →
> a Status Pro fornece papéis profissionais e ajuda a estruturar esse abastecimento →
> solicite uma cotação.

Nada entra na página se não empurrar o visitante um passo adiante nessa linha.
Diferente da LP institucional atual (que fala de vários suprimentos), aqui **só existe
papel higiênico, papel-toalha e o abastecimento deles**. O visitante nunca deve sentir
que caiu numa página genérica de produtos de limpeza.

### Cadeia de conclusões que o visitante precisa fazer

1. "Eles vendem exatamente o produto que estou procurando." → Hero + Produtos
2. "Eles atendem empresas como a minha." → Segmentos + microcopy "atendimento B2B"
3. "Eles entendem o problema de consumo e abastecimento." → Problema + Solução
4. "Talvez eu consiga comprar melhor do que compro hoje." → Custo por uso + Diferenciais
5. "Vale pedir uma cotação." → CTAs repetidos + formulário sem atrito

---

## 1. Estrutura da página (ordem final)

| # | Seção | Fundo | Objetivo | CTA |
|---|---|---|---|---|
| — | Topbar (sem menu de navegação) | Branco | Marca + 3 provas rápidas | Solicitar cotação |
| 1 | Hero + formulário | Azul-marinho | Confirmar o match com a busca e capturar o lead pronto | Receber minha cotação |
| 2 | Problema | Gelo | Nomear a dor operacional | — (transição) |
| 3 | Solução | Branco | Mostrar lógica de consultoria | Falar com um especialista |
| 4 | Produtos (3 linhas + dispensers) | Gelo | Provar que temos o produto exato | Cotar [produto] |
| 5 | Custo por uso | Azul-marinho | Tirar a decisão do "menor preço" | Quero avaliar meu consumo |
| 6 | Segmentos | Branco | Identificação ("é para mim") | — |
| 7 | Diferenciais | Gelo | Responder "por que vocês?" | — |
| 8 | Prova social | Branco | Reduzir risco percebido | — |
| 9 | CTA forte + formulário | Azul-marinho | Segunda captura, para quem leu tudo | Receber minha cotação |
| 10 | FAQ | Branco | Derrubar objeções finais | Solicitar cotação |
| 11 | Faixa de fechamento | Azul médio | Última chamada | Solicitar cotação |
| — | Rodapé | Azul escuro | Dados legais + confiança | — |
| — | CTA flutuante | Sobreposto | Recuperar quem está no meio da página | Solicitar cotação |

**Não há menu de navegação.** Qualquer link que tirasse o visitante da LP foi removido —
tráfego de Pesquisa paga não deve ter rota de fuga.

**8 CTAs no total**, todos levando ao mesmo lugar (`#cotacao`), nunca dois competindo
visualmente na mesma dobra. O CTA flutuante some automaticamente quando um formulário
entra na tela.

---

## 2. Hero — versão publicada (Variante A)

**Eyebrow:** PAPÉIS PROFISSIONAIS PARA EMPRESAS

**Headline (H1):**
> Fornecedor de **Papel Higiênico** e **Papel Toalha** Para Empresas

**Subheadline:**
> Papéis profissionais para empresas que precisam comprar em volume, controlar o consumo
> e manter a operação abastecida.

**Checklist de confirmação (o "sim, é isso que eu procuro"):**
- ✅ Papel higiênico profissional (rolão)
- ✅ Papel-toalha interfolhado
- ✅ Papel-toalha em bobina
- ✅ Atendimento e faturamento B2B

**Microcopy de confiança:**
> Cerca de 30 anos fornecendo higiene profissional para empresas.
> Entrega em até 48h* — *prazo conforme a região atendida.*

**CTA mobile:** COTAR PAPÉIS PARA MINHA EMPRESA
**CTA do formulário:** RECEBER MINHA COTAÇÃO

**Por que o H1 é esse:** ele repete literalmente o termo pesquisado ("fornecedor de papel
higiênico", "papel toalha para empresas"). Em Pesquisa paga, a correspondência entre
anúncio e headline é o que segura o visitante nos primeiros 3 segundos e sustenta o
Índice de qualidade. Não substitua por uma headline "criativa".

---

## 3. Três Heros para teste A/B

As três estão implementadas. Para visualizar: `?hero=b` ou `?hero=c` na URL.
Em produção, use o Google Optimize/Ads ou duas URLs distintas — a leitura por
querystring existe para revisão interna e testes rápidos.

### Variante A — Correspondência com a busca *(publicada, controle)*
> **Fornecedor de Papel Higiênico e Papel Toalha Para Empresas**
> Papéis profissionais para empresas que precisam comprar em volume, controlar o consumo e manter a operação abastecida.

Aposta: máxima correspondência com o termo pesquisado. É o controle porque é a
mais segura para tráfego de Pesquisa.

### Variante B — Origem e volume
> **Compre Papel Higiênico e Papel-Toalha Direto de Quem Atende Empresas**
> Papel higiênico rolão, papel-toalha interfolhado e bobina para empresas que compram em volume e precisam de um fornecedor que responda.

Aposta: fala com quem busca "atacado", "direto da fábrica", "distribuidora". O gancho
é o canal de compra e o porte, não o produto. Boa para grupos de anúncios de
atacado/volume.

> ⚠️ **CONFIRMAR** antes de usar "direto da fábrica" em anúncio ou copy: a Status Pro
> é fabricante, distribuidora ou ambos? A variante B, como está escrita, evita a
> afirmação — diz apenas "de quem atende empresas". Não altere isso sem validação.

### Variante C — Consequência operacional
> **Sua Empresa Não Pode Ficar Sem Papel. Nós Cuidamos Desse Abastecimento.**
> Papéis profissionais, fornecimento recorrente e apoio para escolher o produto certo para o consumo da sua operação.

Aposta: ataca a dor (falta de produto) em vez do produto. Tende a converter melhor
com facilities e gestores de limpeza, que sentem o problema na pele; tende a converter
pior com o comprador que só quer preço. Boa para remarketing.

**Como ler o teste:** compare taxa de envio do formulário **e** qualidade do lead
(volume informado no campo de observações). Uma variante que traz mais leads pequenos
pode ser pior que outra com menos leads e mais volume.

---

## 4. Seção 2 — Problema

**Eyebrow:** EVITE PROBLEMAS NA SUA OPERAÇÃO

**Headline:** Quanto sua empresa perde com papel inadequado, desperdício e falta de produto?

**Apoio:** Papel higiênico e papel-toalha parecem itens simples de comprar. Na prática, é
onde aparecem reposições fora de hora, pedidos emergenciais e reclamação de usuário.

| Card | Texto |
|---|---|
| **Produto inadequado ao consumo** | Um papel inadequado à sua operação pode gerar trocas constantes, consumo acima do necessário e mais trabalho para a equipe de limpeza. |
| **Falta de produto** | Quando o estoque acaba, o problema deixa de ser do fornecedor e passa a ser da operação — banheiro sem papel é reclamação no mesmo dia. |
| **Compras sem planejamento** | Pedidos emergenciais reduzem o poder de negociação, aumentam o trabalho do setor de compras e obrigam a pesquisar preço toda vez que o estoque zera. |
| **Desperdício** | O menor preço por pacote nem sempre representa o menor custo por uso. Papel que rende pouco sai do estoque mais rápido do que a planilha previa. |

**Transição:** A escolha do papel e do sistema de abastecimento influencia diretamente
consumo, reposição e custo.

---

## 5. Seção 3 — Solução

**Eyebrow:** NOSSA SOLUÇÃO
**Headline:** O papel certo para o consumo da sua empresa

**Corpo:** A Status Pro não trabalha com a lógica de empurrar qualquer papel. Antes de
indicar um produto, entendemos como a sua operação consome — porque é isso que define
rendimento, frequência de reposição e custo ao longo do mês.

**O que analisamos com você:** quantidade de usuários por dia · frequência de utilização ·
tipo de ambiente (banheiro, copa, produção) · nível de consumo da operação · formato de
dispenser utilizado · necessidade e ritmo de reposição · recorrência de compra · número
de unidades a abastecer.

**Painel lateral — "O que muda no seu dia a dia":**
- Você compra o papel adequado ao consumo, e não o que sobrou no estoque do fornecedor.
- Menos trocas de rolo e bobina ao longo do dia.
- Reposição previsível, com menos pedido de urgência.
- Um só fornecedor para papel higiênico, papel-toalha e itens complementares.
- Padrão de produto igual em todas as unidades da empresa.

**Fechamento:** O objetivo é encontrar uma solução compatível com o consumo real da sua
operação — não apenas fechar um pedido.

**CTA:** FALAR COM UM ESPECIALISTA

---

## 6. Seção 4 — Produtos

**Eyebrow:** NOSSOS PRODUTOS
**Headline:** Papéis profissionais para diferentes necessidades
**Apoio:** Três linhas para cobrir banheiros, lavatórios, copas e áreas de produção da sua
empresa. Cotação por produto ou para o conjunto da operação.

### Papel Higiênico Profissional
*Rolão · Folha simples e dupla*
Linha institucional para banheiros com uso constante e alto número de usuários.
- Papel higiênico rolão para operações com consumo recorrente
- Opções de folha simples e folha dupla
- Maior autonomia por reposição do que o rolo doméstico
- Indicado para empresas, indústrias e instituições

**CTA:** COTAR PAPEL HIGIÊNICO

### Papel-Toalha Interfolhado
*Interfolha · Folha simples e dupla*
Interfolha profissional para lavatórios corporativos, com reposição organizada.
- Uma folha por retirada: menos desperdício por uso
- Opções de folha simples e folha dupla
- Reposição rápida e organizada para a equipe de limpeza
- Indicado para banheiros, lavatórios e ambientes corporativos

**CTA:** COTAR PAPEL INTERFOLHA

### Papel-Toalha em Bobina
*Bobina · Alto consumo*
Bobinas profissionais para áreas de maior consumo e necessidade de autonomia.
- Bobinas profissionais de papel-toalha
- Adequado a locais de alto consumo e uso intenso
- Mais autonomia entre reposições em ambientes movimentados
- Indicado para indústrias, cozinhas e áreas de produção

**CTA:** COTAR PAPEL EM BOBINA

### Dispensers (bloco complementar, não é um quarto produto)
> O dispenser define quanto papel sai por retirada. Escolher o formato certo ajuda a
> organizar a reposição, reduzir desperdício e padronizar o abastecimento entre unidades.
> Modelos disponíveis e condições de comodato: ⚠️ **CONFIRMAR COM A STATUS PRO**

**CTA:** Consultar dispensers *(secundário, estilo outline — não compete com os três acima)*

> **Comportamento:** cada CTA de produto pré-seleciona a opção correspondente no campo
> "Produto de interesse" do formulário. Menos um clique para o visitante e um dado a
> mais de qualificação para o comercial.

---

## 7. Seção 5 — Custo por uso

**Eyebrow:** CUSTO POR USO, NÃO APENAS PREÇO
**Headline:** O papel mais barato nem sempre é o que custa menos para sua empresa

**Corpo:**
> Uma diferença pequena no consumo diário pode representar milhares de utilizações ao
> longo do mês. Por isso, a escolha deve considerar custo por uso, e não apenas preço do pacote.
>
> Um papel que rende menos exige mais folhas por uso, mais trocas por semana e mais
> pedidos por trimestre. O valor da nota fiscal pode ser menor e o custo total da
> operação, maior.

**Fatores listados:** consumo real por dia · rendimento do produto · frequência de
reposição · desperdício por retirada · quantidade utilizada por pessoa · logística e
frequência de entrega · espaço e necessidade de estoque · horas da equipe gastas na reposição.

**Box de conversão:** Avalie o consumo antes de comparar preço.
**CTA:** QUERO AVALIAR MEU CONSUMO
**Microcopy:** Sem compromisso de compra. Atendimento voltado para empresas.

> ⚠️ **Regra fixa desta seção:** nenhum percentual de economia foi prometido, porque
> não há dado que sustente. Se a Status Pro tiver um estudo de caso real com números,
> ele entra aqui — e passa a ser o argumento mais forte da página.

---

## 8. Seção 6 — Segmentos

**Eyebrow:** PARA QUEM É
**Headline:** Papéis profissionais para operações de diferentes portes
**Apoio:** Onde tem gente circulando, tem consumo de papel higiênico e papel-toalha — e tem
a necessidade de um abastecimento confiável.

Empresas e escritórios · Indústrias · Hospitais e clínicas · Escolas e universidades ·
Hotéis e hospedagem · Bares e restaurantes · Facilities e terceirizadas ·
Instituições e órgãos · Operações de alto fluxo · Redes com várias unidades

**Fechamento:** Compra centralizada para várias unidades? Informe na cotação — o
atendimento é estruturado para esse tipo de operação.

---

## 9. Seção 7 — Diferenciais

**Eyebrow:** POR QUE ESCOLHER A STATUS PRO
**Headline:** Mais do que um fornecedor, um parceiro para o seu abastecimento

| Card | Texto |
|---|---|
| **Atendimento especializado** | Você fala com quem entende de higiene profissional e ajuda a escolher o produto compatível com o consumo e a rotina da sua operação — em vez de comparar códigos em um catálogo. |
| **Gestão de consumo** | Avaliamos junto com você onde existe oportunidade de melhorar rendimento e reduzir desperdício, considerando número de usuários, tipo de ambiente e ritmo de reposição. |
| **Fornecimento recorrente** | Estruture as compras em um ciclo previsível e reduza pedidos de urgência, risco de falta e retrabalho do setor de compras a cada estoque zerado. |
| **Logística** | Receba o abastecimento de acordo com as condições comerciais acordadas e a região atendida, com entrega em até 48h* quando aplicável. ⚠️ **CONFIRMAR região e prazo** |
| **Cerca de 30 anos de experiência** | Décadas atendendo necessidades de higiene profissional e abastecimento empresarial — tempo suficiente para saber o que costuma dar errado em cada tipo de operação. |
| **Mix profissional** | Papel higiênico, papel-toalha e soluções complementares em um só fornecedor, o que permite centralizar o abastecimento e padronizar o produto entre as unidades. |

Cada card termina em **consequência para o comprador**, não em adjetivo sobre a empresa.
Ao editar, mantenha essa regra.

---

## 10. Seção 8 — Prova social

**Nenhum depoimento foi escrito.** A página traz três placeholders visualmente marcados
em amarelo (`INSERIR DEPOIMENTO REAL DE CLIENTE`), que **precisam ser substituídos ou
removidos antes de publicar** — um placeholder visível no ar destrói a credibilidade
que a seção deveria construir.

### O que pedir a cada cliente (um depoimento por objeção)

1. **Atendimento e escolha do produto** — "vocês me ajudaram a escolher?"
   Peça: *"O que mudou depois que passamos a indicar o produto adequado ao consumo de vocês?"*
2. **Entrega e disponibilidade** — "eles cumprem prazo?"
   Peça: *"Como funciona a entrega e o cumprimento de prazo no dia a dia de vocês?"*
3. **Redução de problemas e recorrência** — "vale a pena trocar de fornecedor?"
   Peça: *"O que mudou na rotina de compras e no risco de faltar produto?"*

Colete **nome, cargo, empresa e autorização por escrito** para uso do depoimento e do
logotipo. Sem autorização, publique apenas cargo e segmento ("Gerente de Facilities,
indústria do setor alimentício").

### Outras provas que podem entrar aqui (⚠️ todas a confirmar)
- Faixa de logotipos de clientes (só com autorização de uso de marca).
- Número de empresas atendidas ou de unidades abastecidas.
- Tempo médio de relacionamento com clientes ativos.
- Fotos reais de entregas, estoque ou frota — provam estrutura melhor que qualquer adjetivo.

---

## 11. Seção 9 — CTA forte + formulário

**Eyebrow:** SOLICITE SUA COTAÇÃO
**Headline:** Precisa de **Papel Higiênico** ou **Papel Toalha** Para Sua Empresa?
**Subheadline:** Informe sua necessidade e receba uma cotação adequada ao perfil da sua operação.

**Reforços:**
- Cotação para papel higiênico, papel-toalha interfolhado e bobina.
- Atendimento B2B, com compra em volume e fornecimento recorrente.
- Apoio para identificar o produto compatível com o seu consumo.
- Cerca de 30 anos fornecendo higiene profissional para empresas.

**Microcopy:** Atendimento voltado para empresas. Não realizamos venda para consumidor final.

> Essa última frase é intencional: ela **desqualifica** o tráfego doméstico antes de virar
> lead ruim, e ao mesmo tempo reforça o posicionamento B2B para o comprador certo.

---

## 12. Formulário

Seis campos, um obrigatório a menos do que parece — o último é opcional.

| Campo | Tipo | Obrigatório | Observação |
|---|---|---|---|
| Nome | texto | Sim | `autocomplete="name"` |
| Empresa | texto | Sim | `autocomplete="organization"` — qualifica B2B já na captura |
| WhatsApp / Telefone | tel | Sim | Máscara `(00) 00000-0000`, teclado numérico no mobile |
| E-mail | email | Sim | Validação de formato |
| Produto de interesse | select | Sim | Papel higiênico · Papel-toalha interfolhado · Papel-toalha bobina · Mais de uma opção |
| Consumo aproximado / observações | textarea | **Não** | *Ex.: 3 unidades, cerca de 250 pessoas por dia, compra mensal.* |

**Botão:** RECEBER MINHA COTAÇÃO *(nunca "Enviar")*
**Microcopy de privacidade:** 🔒 Seus dados são utilizados apenas para contato comercial
sobre esta solicitação.

**Decisões de CRO aplicadas:**
- Não pedimos CNPJ, cargo, endereço ou quantidade exata — informação que o comercial
  levanta na conversa não deve custar uma conversão no formulário.
- O placeholder do campo de observações **ensina** o que responder. É o campo que mais
  qualifica o lead, e ele é opcional justamente para não travar o envio.
- Honeypot invisível contra bots (campo `empresa_site`), sem CAPTCHA — CAPTCHA em
  formulário B2B curto derruba conversão.
- Erros aparecem campo a campo, só depois da primeira tentativa de envio.
- UTMs, `gclid`, página e referrer viajam junto com o lead: dá para saber qual campanha
  e qual palavra-chave geraram cada cotação.

---

## 13. FAQ

12 perguntas, escolhidas por objeção de compra e não por SEO. As sete que têm resposta
factual estão marcadas em `schema.org/FAQPage` no HTML (as com pendência ficaram fora
do schema de propósito).

| Pergunta | Resposta | Status |
|---|---|---|
| Vocês vendem para empresas? | Sim. Atendimento B2B, com os segmentos listados. | ✅ |
| Quais tipos de papel higiênico vocês trabalham? | Profissional/institucional, rolão, folha simples e dupla. | ⚠️ metragens e gramaturas a confirmar |
| Vocês fornecem papel-toalha interfolhado? | Sim, folha simples e dupla. | ✅ |
| Vocês possuem papel-toalha em bobina? | Sim, para alto consumo. | ⚠️ tamanhos a confirmar |
| É possível comprar em grande quantidade? | Sim, fornecimento em volume e recorrente. | ⚠️ pedido mínimo a confirmar |
| Vocês ajudam a identificar o produto adequado ao consumo? | Sim — lista os critérios de análise. | ✅ |
| Qual é a região de atendimento? | — | ⚠️ **a confirmar** |
| Qual é o prazo de entrega? | Até 48h quando aplicável. | ⚠️ prazos por região a confirmar |
| É possível fazer pedidos recorrentes? | Sim. | ⚠️ periodicidade/contrato a confirmar |
| Vocês trabalham com dispensers em comodato? | — | ⚠️ **a confirmar** |
| Como funciona o pagamento e o faturamento? | — | ⚠️ **a confirmar** |
| Vocês atendem empresas com várias unidades? | Sim, com abastecimento centralizado. | ✅ |

As pendências aparecem na página com uma etiqueta amarela **CONFIRMAR COM A STATUS PRO**,
propositalmente visível: é um lembrete de que a página ainda não está pronta para o ar.

---

## 14. Vocabulário de busca coberto pela página

Os termos abaixo aparecem de forma natural em headlines, subtítulos, cards e FAQ —
sem repetição forçada:

fornecedor de papel higiênico · distribuidora de papel higiênico · papel higiênico atacado ·
papel higiênico industrial · papel higiênico institucional · papel higiênico rolão ·
papel higiênico profissional · fornecedor de papel-toalha · papel-toalha atacado ·
papel-toalha interfolhado · papel-toalha interfolha · papel-toalha profissional ·
papel-toalha institucional · papel-toalha bobina · papel higiênico para empresas ·
papel toalha para empresas.

> ⚠️ **"Fabricante" e "fábrica" não foram usados na página.** São termos de alto volume
> de busca, mas afirmá-los sem confirmação seria uma informação inventada. Se a Status Pro
> fabricar, esses termos devem entrar no H1 e no FAQ — é um ganho relevante de conversão
> para quem busca "comprar direto da fábrica". **Confirmar antes.**

---

## 15. Palavras e construções banidas nesta página

Não use, em nenhuma edição futura: "eleve sua empresa a outro nível" · "solução completa
e inovadora" · "excelência em cada detalhe" · "transforme sua experiência" · "qualidade
que você merece" · "revolucione sua operação" · "somos referência" · "a melhor empresa" ·
"qualidade incomparável" · "soluções personalizadas para cada necessidade" (sem explicar como).

**Teste antes de publicar qualquer frase nova:** se o concorrente puder colocar a mesma
frase no site dele sem alterar nada, a frase não diz nada. Reescreva com a consequência
concreta para o comprador.
