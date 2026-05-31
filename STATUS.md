# Estado do projeto — handoff entre sessões

Última atualização: 2026-05-31
Branch ativa: `claude/cool-ramanujan-ES8OA`

> Este repo **não** é um site Next.js servido pela Vercel. É um conjunto de
> **scripts que publicam páginas no WordPress/Elementor** via REST API
> (site real hospedado na Hostinger). O `index.html` e a pasta `app/` são
> resquícios do scaffold `create-next-app` e não fazem parte do produto.

---

## Site em produção

- URL base: https://neopowerenergia.com.br
- Stack real: **WordPress + Elementor + Elementor Pro**, hospedado na **Hostinger**.
- Publicação: scripts em `scripts/wp/` rodados pelo workflow `wp-deploy.yml`
  (GitHub Actions, disparo manual `workflow_dispatch`).

---

## Onde estamos agora

### ✅ Feito
- **6 páginas** publicáveis com navbar compartilhado (`shared.mjs`): Home,
  Quem Somos, Serviços, Projetos, Contato, Políticas.
- **Navbar centralizado** em `shared.mjs` — links reais (`/projetos`, etc.),
  não mais âncoras `/#projetos`. Mudança global = editar só lá.
- **Logo em URL absoluta** + fallback `onerror` no footer (corrige logo quebrada).
- **Front page**: `setup-front-page.mjs` define a Home como página inicial
  (resolve o site abrir em `/home/` em vez de `/`).
- **Estilo brutalista**: quinas vivas, azul chapado, inputs visíveis,
  sem hover-transform, `appearance` default do browser.
- **Hero mobile-first**: alinhado à esquerda no padding do navbar, tap targets
  maiores (botões `min-height:48px`), overlay escuro pra texto ficar legível
  sobre o vídeo.
- **Ferramentas de operação**: `diagnose.mjs` (inspeciona front page + menus
  ao vivo) e `cleanup-old-header.mjs` (remove header antigo do Theme Builder).

### 🟡 Em andamento — saga do vídeo do hero
O objetivo é um vídeo de drone **full-bleed** (100% da largura) atrás do hero.
A stack da Hostinger/Elementor envolve a seção em wrappers que quebram o
`100vw`, então passamos por várias abordagens (ver histórico de commits).

- **Abordagem atual** (commits mais recentes): o vídeo é **injetado por JS
  dentro de `#np-hero`** (script vive na navbar, comprovadamente roda), com
  fallback de gradiente e overlay escuro no mobile pra legibilidade.
- `HERO_VIDEO_URL` aponta para o drone footage real:
  `.../uploads/2026/05/Energia-Solar-Campanha-para-Anuncio-4k-drone.mp4`
- **Status**: precisa de validação visual no site ao vivo (desktop + mobile)
  pra confirmar que ficou de fato full-bleed e legível.

---

## 📸 Fotos do site (slots prontos para receber imagens)

Os "slots" de foto (caixas com gradiente + legenda) agora aceitam imagens
reais. Mecanismo: o helper `photo(url, alt)` em `shared.mjs` injeta um
`<img class="np-photo-img">` que **cobre o slot** (object-fit: cover) com a
legenda por cima; URL vazia mantém o gradiente.

**Como subir as fotos:**
1. Suba cada imagem na **Biblioteca de Mídia do WordPress**.
2. Copie a URL e cole no mapa `PHOTOS` em `scripts/wp/shared.mjs`.
3. Rode o workflow `all` (ou a página específica) para republicar.

**Slots disponíveis (9):**
- Home: `homeBandMt`, `homeBandAerea`, `homeBandFixacao`, `homeEquipe`,
  `homeUsina93`, `homeDetalheMt`
- Projetos: `projUsina93`, `projDetalheMt`
- Quem Somos: `quemSomosRenan`

> Serviços, Contato e Políticas não têm slots de foto (só logo + texto).

---

**Responsividade das fotos (mobile-first):** os slots usam `aspect-ratio`
(não mais `min-height` fixo), então a imagem mantém proporção e corta menos em
qualquer tela. O helper `photo(url, alt, pos)` aceita `object-position` para
ajustar o foco do corte (ex.: aéreos com painéis embaixo usam `center 70%`).
Rodapés de Contato/Projetos/Políticas agora empilham no mobile (antes eram
grid de 3 colunas inline sem breakpoint).

**Estado atual:** 9/9 slots preenchidos com fotos reais (Home + Projetos + Renan).
A foto `foreman-businessman-solar-energy-station` está no slot de Rigor Técnico
da Home (`homeEquipe`). Falta só `quemSomosRenan` (retrato do Renan, sem foto ainda).

**Galeria de Serviços:** a página `/servicos` ganhou uma seção "Projetos
Realizados" (`GALERIA` em `servicos.mjs`) com as 6 fotos de projeto em cards —
nome do cliente + dados **fictícios** (`PROJETOS_GAL`). Ajustar dados reais depois.

---

## ⏭️ O que ainda planejamos fazer

1. **Republicar** com `all` para subir as fotos + galeria ao ar.
2. **Ajustar dados reais** dos projetos na galeria (`PROJETOS_GAL` em `servicos.mjs`)
   — hoje são fictícios.
3. **Foto do Renan** (`quemSomosRenan`) quando houver retrato.
4. **Validar o hero ao vivo** (desktop + mobile): confirmar full-bleed,
   legibilidade do texto e que o vídeo carrega/dá play.
2. **Restaurar `unfiltered_html` no WordPress** → corrige logo + menu
   hambúrguer mobile que não abre. É permissão do **WordPress**, não do
   Elementor (ver "Mitos a evitar").
3. **Limpar resquícios do scaffold Next.js** (`index.html`, `app/`, README
   genérico) pra evitar confusão sobre o que o repo realmente é. (Avaliar
   antes de deletar — confirmar que nada do deploy depende deles.)
4. **Revisar conteúdo das páginas internas** (Quem Somos, Serviços, Projetos,
   Contato, Políticas) com o mesmo capricho do hero.

---

## Ordem recomendada para colocar no ar

1. Rodar workflow **`all`** → republica as 6 páginas com navbar + hero atuais.
2. Rodar workflow **`setup-front-page`** → define a Home como página inicial.
3. Rodar **`diagnose`** → confere front page e menus ao vivo.
4. (Se necessário) **`cleanup-header`** → remove header antigo do Theme Builder.
5. Restaurar `unfiltered_html` no WordPress para logo + hambúrguer mobile.

---

## Mitos a evitar (aprendizados duros)

- **NÃO existe** opção "Enable Unsafe HTML" no Elementor → Configurações → Avançado.
- Permissão `unfiltered_html` é do **WordPress**, não do Elementor nem do Pro.
- Os links do menu são `<a href>` normais — funcionam **sem** `unfiltered_html`.
- O `100vw` puro **não** dá full-bleed nessa stack: os wrappers do tema/Hostinger
  cortam. Por isso o vídeo é injetado por JS dentro de `#np-hero`.

---

## Inventário do repo

### Scripts de página (`scripts/wp/pages/`) — 6
`home.mjs` · `quem-somos.mjs` · `servicos.mjs` · `projetos.mjs` · `contato.mjs` · `politicas.mjs`
- Todas importam `NAVBAR` de `../shared.mjs`.
- Footer com logo em URL absoluta + fallback `onerror`.

### Infra WP (`scripts/wp/`)
- `client.mjs` — cliente da REST API do WordPress.
- `shared.mjs` — `NAVBAR` + `FOOTER_LOGO` (fonte única de verdade).
- `elementor.mjs` — helpers de payload do Elementor.
- `push-page.mjs` — publica uma página.
- `setup-kit.mjs` — configura o Kit do Elementor (cores/fontes globais).
- `setup-front-page.mjs` — define a Home como front page.
- `diagnose.mjs` — inspeciona front page + menus ao vivo.
- `cleanup-old-header.mjs` — remove header antigo do Theme Builder.

### Workflow (`.github/workflows/wp-deploy.yml`) — ações
`all` · `home` · `quem-somos` · `servicos` · `projetos` · `contato` · `politicas` ·
`setup-front-page` · `kit` · `ping` · `diagnose` · `cleanup-header`

---

## Convenções

- Paleta: `bgBase #04070E`, `bgSurface #070C18`, `blue500 #2B5EA7`,
  `blue400 #4A90D9`, `textHi #EEF0F6`, `textMid #7D869E`, `textLo #3E4459`.
- Fonte: Plus Jakarta Sans (400–800).
- Logo: `https://neopowerenergia.com.br/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png`
- Hero video: `https://neopowerenergia.com.br/wp-content/uploads/2026/05/Energia-Solar-Campanha-para-Anuncio-4k-drone.mp4`
- Navbar e footer centralizados em `shared.mjs` — mudança global só precisa editar lá.
