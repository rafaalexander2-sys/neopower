# Estado do projeto — handoff entre sessões

Última atualização: 2026-05-28
Branch ativa: `claude/admiring-turing-HZFNA` (1 commit à frente de `master`)

---

## Site em produção

- URL base: https://neopowerenergia.com.br
- Página confirmada no ar: https://neopowerenergia.com.br/home/

### Problema observado pelo usuário
No site público, **o menu da página `/home/` não está linkando para as outras páginas**. Não está claro se isso é porque:
- (a) as outras páginas **não foram publicadas** no WordPress ainda (os scripts existem no repo mas talvez não tenham rodado), ou
- (b) as páginas **existem no WP mas o menu/navegação não foi configurado** apontando para elas, ou
- (c) os slugs publicados não batem com os links do menu (ex: `/home/` em vez de `/`, ou faltando trailing slash).

**Pendente verificar** em sessão futura, antes de mexer em qualquer coisa.

---

## Inventário do repo

### Páginas Next.js (`app/`) — 6, todas presentes
- `/` (`app/page.tsx`)
- `/quem-somos` (`app/quem-somos/page.tsx`)
- `/projetos` (`app/projetos/page.tsx`)
- `/servicos` (`app/servicos/page.tsx`)
- `/contato` (`app/contato/page.tsx`)
- `/politicas` (`app/politicas/page.tsx`)

### Scripts de publicação WP/Elementor (`scripts/wp/pages/`) — 6, todos presentes
- `home.mjs` · `quem-somos.mjs` · `projetos.mjs` · `servicos.mjs` · `contato.mjs` · `politicas.mjs`

Cada script:
- Gera um único `section` Elementor com um widget `html` contendo a página inteira (CSS + markup).
- Publica via REST API do WP (`wpFetch` em `scripts/wp/client.mjs`) usando `.env.wp`.
- Define `template: 'elementor_canvas'` e `hide_title: 'yes'`.
- Atualiza se já existir página com mesmo slug; cria se não.

### Infra WP (`scripts/wp/`)
- `client.mjs` — wrapper `wpFetch` para REST API.
- `elementor.mjs` — helpers Elementor.
- `setup-kit.mjs` — script `npm run wp:kit`.
- `push-page.mjs` — script `npm run wp:page` (helper `pushPage`).

### Workflows GitHub Actions (`.github/workflows/`)
- `deploy.yml`
- `wp-deploy.yml` — deploy das páginas para o WordPress. **Verificar histórico de runs** para saber se as outras 5 páginas (além de `home`) chegaram a ser publicadas com sucesso.

---

## Estado do git

- `master` (origin): até `36eb6ac` — "Add remaining page scripts: Quem Somos, Serviços, Projetos, Contato"
- `claude/admiring-turing-HZFNA`: + 1 commit `68dd1e0` — "add WP/Elementor publish script for Políticas page"
- Working tree: limpo (exceto este STATUS.md no momento da criação)

### Histórico recente relevante
```
68dd1e0 add WP/Elementor publish script for Políticas page         (branch atual)
36eb6ac Add remaining page scripts: Quem Somos, Serviços, Projetos, Contato
d6c8e23 Fix: pass _elementor_page_settings as object not JSON string
465b29b Add Home page builder script for Elementor
4008d56 Improve WP API error reporting and add ping diagnostic step
71cccd5 Add GitHub Action for WordPress deploy
e65561f Add WordPress/Elementor API builder scripts
```

---

## Próximos passos sugeridos (não executar sem confirmação)

1. **Diagnóstico do menu quebrado em https://neopowerenergia.com.br/home/**
   - Conferir histórico de runs do `wp-deploy.yml` no GitHub Actions.
   - Listar via WP REST API quais páginas existem publicadas (`GET /wp-json/wp/v2/pages?per_page=20`) e seus slugs.
   - Comparar slugs publicados com os hrefs do menu no `home.mjs` / footer.
2. Se as 5 páginas faltantes não tiverem sido publicadas: rodar `wp-deploy.yml` (ou os scripts locais com `.env.wp`).
3. Se as páginas existirem mas o menu apontar errado: ajustar hrefs nos scripts (`/quem-somos` vs `/quem-somos/` etc.) e republicar.
4. Configurar o menu nativo do WordPress (Aparência → Menus) caso o tema use o menu do WP em vez do menu hardcoded no HTML widget.
5. Merge de `claude/admiring-turing-HZFNA` em `master` quando o `politicas.mjs` estiver validado.

---

## Convenções importantes

- `AGENTS.md` avisa: **esta versão do Next.js tem breaking changes**. Sempre consultar `node_modules/next/dist/docs/` antes de escrever código novo de Next.
- Paleta padrão (objeto `C` nos scripts WP):
  - `bgBase #04070E`, `bgSurface #070C18`
  - `blue700 #1B3F6F`, `blue500 #2B5EA7`, `blue400 #4A90D9`
  - `textHi #EEF0F6`, `textMid #7D869E`, `textLo #3E4459`
  - `line rgba(255,255,255,0.065)`
- Fonte: Plus Jakarta Sans (Google Fonts), pesos 400–800.
- Footer e CSS base são duplicados em cada script WP — qualquer mudança global precisa ser replicada nos 6 arquivos.
