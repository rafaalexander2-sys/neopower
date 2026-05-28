# Estado do projeto — handoff entre sessões

Última atualização: 2026-05-28
Branch ativa: `claude/admiring-turing-HZFNA` (já contém merge da `master` + página Políticas)

---

## Site em produção

- URL base: https://neopowerenergia.com.br
- Home aparece em `/home/` (e NÃO em `/`).

### Diagnóstico CONFIRMADO dos problemas

| Sintoma | Causa-raiz | Correção |
|---|---|---|
| Menu vai para `/#projetos` (âncora) | A Home no ar ainda é a **versão antiga de página única** (menu rolava pra âncoras). O navbar novo (`shared.mjs`, links reais `/projetos`) **não foi publicado** | Rodar workflow `all` |
| Site abre em `/home/` em vez de `/` | `setup-front-page.mjs` nunca rodou — Home não foi definida como front page | Rodar workflow `setup-front-page` |
| Logo quebrado / menu hambúrguer mobile não abre | Permissão WordPress `unfiltered_html` ausente | Restaurar permissão no WP (não é config do Elementor) |

### IMPORTANTE — mito a evitar
- **NÃO existe** opção "Enable Unsafe HTML" no Elementor → Configurações → Avançado.
- Permissão `unfiltered_html` é do WordPress, não do Elementor nem do Pro.
- Os links do menu são `<a href>` normais — funcionam SEM `unfiltered_html`.

---

## Ordem recomendada para colocar no ar

1. Rodar workflow **`all`** → republica 6 páginas com navbar novo. Corrige `/#projetos`.
2. Rodar workflow **`setup-front-page`** → define Home como página inicial. Corrige `/home/`.
3. (Opcional) Restaurar `unfiltered_html` no WordPress para logo + hambúrguer mobile.

---

## Inventário do repo

### Scripts WP/Elementor (`scripts/wp/pages/`) — 6
`home.mjs` · `quem-somos.mjs` · `servicos.mjs` · `projetos.mjs` · `contato.mjs` · `politicas.mjs`
- Todas importam `NAVBAR` de `../shared.mjs`.
- Footer com logo em URL absoluta + fallback onerror.

### Infra WP (`scripts/wp/`)
- `client.mjs`, `shared.mjs` (NAVBAR + FOOTER_LOGO), `setup-kit.mjs`, `setup-front-page.mjs`, `push-page.mjs`, `elementor.mjs`.

### Workflow (`wp-deploy.yml`) — opções
`all` · `home` · `quem-somos` · `servicos` · `projetos` · `contato` · `politicas` · `setup-front-page` · `kit` · `ping`

---

## Convenções

- Paleta: `bgBase #04070E`, `bgSurface #070C18`, `blue500 #2B5EA7`, `blue400 #4A90D9`, `textHi #EEF0F6`, `textMid #7D869E`, `textLo #3E4459`.
- Fonte: Plus Jakarta Sans (400–800).
- Logo: `https://neopowerenergia.com.br/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png`
- Navbar centralizado em `shared.mjs` — mudança global só precisa editar lá.
