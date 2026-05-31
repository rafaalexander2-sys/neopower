import { wpFetch } from '../client.mjs'
import { NAVBAR, PHOTOS, photo } from '../shared.mjs'
import { randomBytes } from 'crypto'

const uid = () => randomBytes(4).toString('hex')
const sec = (settings, els) => ({ id: uid(), elType: 'section', isInner: false, settings, elements: els })
const col = (settings, els) => ({ id: uid(), elType: 'column', settings, elements: els })
const w   = (type, settings) => ({ id: uid(), elType: 'widget', widgetType: type, settings, elements: [] })
const htmlSec = (html) => sec(
  { content_width: 'full', padding: { unit: 'px', top: '0', right: '0', bottom: '0', left: '0', isLinked: false } },
  [col({ _column_size: 100, padding: { unit: 'px', top: '0', right: '0', bottom: '0', left: '0', isLinked: false } }, [w('html', { html })])]
)

const C = {
  bgBase: '#04070E', bgSurface: '#070C18',
  blue800: '#163360', blue700: '#1B3F6F', blue500: '#2B5EA7', blue400: '#4A90D9',
  textHi: '#EEF0F6', textMid: '#7D869E', textLo: '#3E4459',
  line: 'rgba(255,255,255,0.065)',
}

const BASE = `<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
*{font-family:'Plus Jakarta Sans',sans-serif!important}
.np-wrap{max-width:1280px;margin:0 auto;padding:0 48px}
.np-label{display:inline-flex;align-items:center;gap:10px;font-size:10px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:${C.blue400};margin-bottom:12px}
.np-label::before{content:'';width:18px;height:1.5px;background:linear-gradient(135deg,#1B3F6F,#2B5EA7,#4A90D9);border-radius:99px;flex-shrink:0}
.np-h2{font-size:clamp(20px,2.5vw,32px);font-weight:800;color:${C.textHi};line-height:1.2;letter-spacing:-.02em;margin-bottom:12px}
.np-btn-p{display:inline-flex;align-items:center;justify-content:center;background:${C.blue500};color:#fff;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:13px 26px;text-decoration:none;border-radius:0;transition:background .2s,transform .2s;white-space:nowrap}
.np-btn-p:hover{background:${C.blue400};transform:translateY(-1px)}
.np-btn-g{display:inline-flex;align-items:center;justify-content:center;background:transparent;color:${C.textHi};font-size:11.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:13px 26px;text-decoration:none;border:1px solid rgba(255,255,255,.18);border-radius:0;transition:all .25s;white-space:nowrap}
.np-btn-g:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.35);transform:translateY(-1px)}
.np-glass{background:rgba(255,255,255,.03);border:1px solid ${C.line};backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:14px;box-shadow:0 4px 24px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.04);position:relative;overflow:hidden}
.np-ph{background:linear-gradient(135deg,#0C1221,#080D1A);border:1px solid ${C.line};border-radius:14px;position:relative;overflow:hidden}
.np-ph::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(27,63,111,.10),transparent 60%)}
@media(max-width:768px){.np-wrap{padding:0 24px}}
</style>`

const PAGE_HERO = `${BASE}
<style>
#np-qs-hero{background:${C.bgSurface};padding:160px 0 80px;border-bottom:1px solid ${C.line};position:relative;overflow:hidden}
#np-qs-hero::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(74,144,217,.3),transparent)}
#np-qs-hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 60% 40%,rgba(27,63,111,.12),transparent);pointer-events:none}
</style>
<section id="np-qs-hero">
<div class="np-wrap" style="position:relative;z-index:1">
  <div class="np-label">Quem Somos</div>
  <h1 style="font-size:clamp(28px,4vw,52px);font-weight:800;color:${C.textHi};line-height:1.1;letter-spacing:-.025em;margin-bottom:20px;max-width:660px">Engenharia como<br>Responsabilidade Pessoal.</h1>
  <p style="font-size:15px;color:${C.textMid};max-width:540px;line-height:1.85">A Neo Power não nasceu para distribuir equipamentos. Operamos estruturados em torno de um método inegociável de execução — onde a inteligência do projeto nunca é terceirizada para montadores genéricos.</p>
</div>
</section>`

const DIRETOR = `
<style>
#np-diretor{background:${C.bgBase};padding:96px 0}
.np-dir-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
@media(max-width:900px){.np-dir-grid{grid-template-columns:1fr!important}}
</style>
<section id="np-diretor">
<div class="np-wrap">
  <div class="np-dir-grid">
    <div>
      <div class="np-label" style="margin-bottom:20px">Diretoria Técnica</div>
      <h2 style="font-size:clamp(20px,2.5vw,32px);font-weight:800;color:${C.textHi};letter-spacing:-.02em;line-height:1.2;margin-bottom:20px">Renan Alves</h2>
      <p style="font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:${C.blue400};margin-bottom:28px">Sócio-Diretor · Engenheiro Eletricista</p>
      <p style="font-size:13.5px;color:${C.textMid};line-height:1.85;margin-bottom:16px">8+ anos de engenharia de campo em sistemas fotovoltaicos de alta complexidade. Especialização em Média Tensão, Demanda Contratada e integração de infraestrutura elétrica de alto padrão.</p>
      <p style="font-size:13.5px;color:${C.textMid};line-height:1.85;margin-bottom:16px">A metodologia da Neo Power foi forjada a partir da experiência direta em projetos onde a margem para erro é zero — seja por exigência do cliente, da concessionária ou da própria integridade patrimonial da propriedade.</p>
      <p style="font-size:13.5px;color:${C.textMid};line-height:1.85">Todo projeto de Média Tensão e Alto Padrão é validado, assinado e inspecionado pessoalmente. Não delegamos a assinatura. Não delegamos a inspeção. O seu projeto é responsabilidade direta de quem fundou a empresa.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:16px">
      <div class="np-ph" style="aspect-ratio:16/9">
        ${photo(PHOTOS.quemSomosRenan,'Renan Alves — Diretoria Técnica','center 18%')}<div class="np-cap" style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(4,7,14,.9),transparent);padding:20px 22px;z-index:2"><span style="font-size:9px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:${C.textLo}">Renan Alves — Diretoria Técnica</span></div>
      </div>
      <div class="np-glass" style="padding:24px 28px;border-left:2px solid ${C.blue500}">
        <p style="font-size:13px;font-style:italic;color:${C.textHi};line-height:1.8;margin:0">"O cliente tem a estrutura operacional de uma firma de engenharia, mas com a garantia pessoal e o rigor técnico direto da diretoria."</p>
      </div>
    </div>
  </div>
</div>
</section>`

const VALORES = `
<style>
#np-valores{background:${C.bgSurface};padding:96px 0}
.np-val-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;border:1px solid ${C.line};border-radius:14px;overflow:hidden}
.np-val-card{padding:40px 36px;background:rgba(255,255,255,.03);transition:background .3s}
.np-val-card:hover{background:rgba(27,63,111,.08)}
.np-val-card:nth-child(odd){border-right:1px solid ${C.line}}
.np-val-card:nth-child(-n+2){border-bottom:1px solid ${C.line}}
.np-val-num-row{display:flex;align-items:center;gap:12px;margin-bottom:18px}
@media(max-width:900px){.np-val-grid{grid-template-columns:1fr!important}.np-val-card{border-right:none!important}}
</style>
<section id="np-valores">
<div class="np-wrap">
  <div class="np-label">Princípios</div>
  <h2 class="np-h2">Os Pilares do Protocolo.</h2>
  <p style="font-size:14.5px;color:${C.textMid};max-width:480px;line-height:1.8;margin-bottom:48px">Quatro princípios inegociáveis que definem cada decisão técnica e cada relação com o cliente.</p>
  <div class="np-val-grid">
    <div class="np-val-card"><div class="np-val-num-row"><span style="font-size:9.5px;font-weight:700;letter-spacing:.22em;color:${C.blue400}">01</span><div style="flex:1;height:1px;background:linear-gradient(90deg,${C.blue700},transparent)"></div></div><h3 style="font-size:16px;font-weight:700;color:${C.textHi};line-height:1.3;margin-bottom:12px">Rigor Técnico</h3><p style="font-size:13px;color:${C.textLo};line-height:1.85;margin:0">Cada projeto passa por validação em múltiplas etapas antes da execução. Dimensionamento, irradiação, aterramento, integração elétrica — tudo documentado e assinado.</p></div>
    <div class="np-val-card"><div class="np-val-num-row"><span style="font-size:9.5px;font-weight:700;letter-spacing:.22em;color:${C.blue400}">02</span><div style="flex:1;height:1px;background:linear-gradient(90deg,${C.blue700},transparent)"></div></div><h3 style="font-size:16px;font-weight:700;color:${C.textHi};line-height:1.3;margin-bottom:12px">Responsabilidade Direta</h3><p style="font-size:13px;color:${C.textLo};line-height:1.85;margin:0">A assinatura técnica de cada projeto é da diretoria. Não delegamos a responsabilidade. Não terceirizamos a inteligência de engenharia.</p></div>
    <div class="np-val-card"><div class="np-val-num-row"><span style="font-size:9.5px;font-weight:700;letter-spacing:.22em;color:${C.blue400}">03</span><div style="flex:1;height:1px;background:linear-gradient(90deg,${C.blue700},transparent)"></div></div><h3 style="font-size:16px;font-weight:700;color:${C.textHi};line-height:1.3;margin-bottom:12px">Tolerância Zero</h3><p style="font-size:13px;color:${C.textLo};line-height:1.85;margin:0">Nenhuma infiltração. Nenhuma falha estética. Nenhum atalho de execução. Zero compromissos com o padrão construtivo da propriedade do cliente.</p></div>
    <div class="np-val-card"><div class="np-val-num-row"><span style="font-size:9.5px;font-weight:700;letter-spacing:.22em;color:${C.blue400}">04</span><div style="flex:1;height:1px;background:linear-gradient(90deg,${C.blue700},transparent)"></div></div><h3 style="font-size:16px;font-weight:700;color:${C.textHi};line-height:1.3;margin-bottom:12px">Integridade Patrimonial</h3><p style="font-size:13px;color:${C.textLo};line-height:1.85;margin:0">Trabalhamos com propriedades onde o telhado vale mais que o sistema. Nossa engenharia protege o patrimônio — nunca o compromete.</p></div>
  </div>
</div>
</section>`

const TIMELINE = `
<style>
#np-timeline{background:${C.bgBase};padding:96px 0}
.np-tl-item{position:relative;padding-bottom:40px}
.np-tl-item:last-child{padding-bottom:0}
.np-tl-dot{position:absolute;left:-44px;top:4px;width:8px;height:8px;border-radius:50%;background:${C.blue500};box-shadow:0 0 0 3px rgba(43,94,167,.25)}
</style>
<section id="np-timeline">
<div class="np-wrap">
  <div class="np-label">Trajetória</div>
  <h2 class="np-h2" style="margin-bottom:48px">8 Anos de Engenharia de Campo.</h2>
  <div style="position:relative;padding-left:40px">
    <div style="position:absolute;left:0;top:8px;bottom:8px;width:1px;background:linear-gradient(to bottom,${C.blue700},transparent)"></div>
    <div class="np-tl-item"><div class="np-tl-dot"></div><div style="font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${C.blue400};margin-bottom:6px">2016</div><p style="font-size:13.5px;color:${C.textMid};line-height:1.8;max-width:580px;margin:0">Início das atividades em engenharia elétrica de campo com foco em sistemas de alta complexidade.</p></div>
    <div class="np-tl-item"><div class="np-tl-dot"></div><div style="font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${C.blue400};margin-bottom:6px">2019</div><p style="font-size:13.5px;color:${C.textMid};line-height:1.8;max-width:580px;margin:0">Primeiros projetos fotovoltaicos em Média Tensão. Desenvolvimento do Protocolo Proprietário de Execução.</p></div>
    <div class="np-tl-item"><div class="np-tl-dot"></div><div style="font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${C.blue400};margin-bottom:6px">2021</div><p style="font-size:13.5px;color:${C.textMid};line-height:1.8;max-width:580px;margin:0">Caso de referência: 93 kWp em Média Tensão com Demanda Contratada aprovado integralmente por escritório de engenharia particular.</p></div>
    <div class="np-tl-item"><div class="np-tl-dot"></div><div style="font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${C.blue400};margin-bottom:6px">2023</div><p style="font-size:13.5px;color:${C.textMid};line-height:1.8;max-width:580px;margin:0">Expansão para Petrópolis, RJ. Estruturação da equipe técnica de elite.</p></div>
    <div class="np-tl-item"><div class="np-tl-dot"></div><div style="font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${C.blue400};margin-bottom:6px">2026</div><p style="font-size:13.5px;color:${C.textMid};line-height:1.8;max-width:580px;margin:0">Mais de 100 projetos executados. Zero infiltrações. Zero falhas estruturais documentadas.</p></div>
  </div>
</div>
</section>`

const CTA = `
<style>
#np-qs-cta{background:${C.bgSurface};padding:80px 0;border-top:1px solid ${C.line}}
</style>
<section id="np-qs-cta">
<div class="np-wrap" style="text-align:center">
  <div class="np-label" style="justify-content:center;margin-bottom:16px">Próximo Passo</div>
  <h2 class="np-h2" style="margin-bottom:12px">Pronto para Começar?</h2>
  <p style="font-size:14px;color:${C.textMid};margin-bottom:32px;max-width:420px;margin-left:auto;margin-right:auto;line-height:1.8">Solicite uma auditoria técnica gratuita e descubra se o seu projeto se qualifica para o protocolo Neo Power.</p>
  <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
    <a href="/contato" class="np-btn-p">Solicitar Auditoria Técnica</a>
    <a href="/servicos" class="np-btn-g">Ver Serviços</a>
  </div>
</div>
</section>`

const FOOTER = `
<style>
.np-footer{background:${C.bgSurface};border-top:1px solid ${C.line}}
.np-footer-glow{height:1px;background:linear-gradient(90deg,transparent,rgba(74,144,217,.25),transparent)}
.np-footer-body{max-width:1180px;margin:0 auto;padding:60px 48px 36px}
.np-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:56px;margin-bottom:52px}
.np-footer-links{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:13px}
.np-footer-links a,.np-footer-contact a{color:${C.textLo};text-decoration:none;transition:color .2s;font-size:13.5px}
.np-footer-links a:hover,.np-footer-contact a:hover{color:${C.textHi}}
.np-footer-bottom{border-top:1px solid ${C.line};padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
@media(max-width:768px){.np-footer-grid{grid-template-columns:1fr!important;gap:40px!important}.np-footer-body{padding:44px 24px 32px!important}}
</style>
<footer class="np-footer">
  <div class="np-footer-glow"></div>
  <div class="np-footer-body">
    <div class="np-footer-grid">
      <div>
        <img src="https://neopowerenergia.com.br/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png" alt="Neo Power" style="height:146px;width:auto;object-fit:contain;margin-bottom:18px;display:block" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px">NEO POWER</span>
        <p style="font-size:13px;color:${C.textLo};line-height:1.75;max-width:270px;margin-bottom:24px">Engenharia fotovoltaica de alta complexidade. Tolerância zero a falhas, protocolo proprietário de execução.</p>
        <div style="display:flex;gap:16px">
          <a href="https://instagram.com/neopowerbr" target="_blank" rel="noopener" style="font-size:10.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${C.textLo};text-decoration:none">Instagram</a>
          <a href="https://facebook.com/neopowerbr" target="_blank" rel="noopener" style="font-size:10.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${C.textLo};text-decoration:none">Facebook</a>
        </div>
      </div>
      <div>
        <p style="font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:22px">Menu</p>
        <ul class="np-footer-links"><li><a href="/">Home</a></li><li><a href="/quem-somos">Quem Somos</a></li><li><a href="/projetos">Projetos</a></li><li><a href="/servicos">Serviços</a></li><li><a href="/contato">Contato</a></li></ul>
      </div>
      <div>
        <p style="font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:22px">Contato</p>
        <div class="np-footer-contact" style="font-size:13.5px;color:${C.textLo};line-height:2">
          <a href="tel:+5524981114255">(24) 9 8111-4255</a><br>
          <a href="mailto:neopowerbr@gmail.com">neopowerbr@gmail.com</a><br>
          Est. União e Indústria, 9200<br>Loja D5 — Itaipava, Petrópolis · RJ
        </div>
      </div>
    </div>
    <div class="np-footer-bottom">
      <span style="font-size:11.5px;color:${C.textLo};opacity:.6">© 2026 Neo Power · CNPJ 40.904.108/0001-23 · Todos os direitos reservados.</span>
      <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap">
        <a href="/politicas" style="font-size:11.5px;color:${C.textLo};opacity:.6;text-decoration:none">Políticas de Privacidade</a>
        <span style="font-size:11.5px;color:${C.textLo};opacity:.6">Itaipava · Petrópolis · RJ</span>
      </div>
    </div>
  </div>
</footer>`

const pageData = [
  htmlSec(NAVBAR),
  htmlSec(PAGE_HERO),
  htmlSec(DIRETOR),
  htmlSec(VALORES),
  htmlSec(TIMELINE),
  htmlSec(CTA),
  htmlSec(FOOTER),
]

async function run() {
  console.log('👥  Construindo página Quem Somos...\n')
  const existing = await wpFetch('pages?slug=quem-somos&per_page=1')
  const payload = {
    title: 'Quem Somos',
    slug: 'quem-somos',
    status: 'publish',
    template: 'elementor_canvas',
    meta: {
      _elementor_edit_mode: 'builder',
      _elementor_template_type: 'wp-page',
      _elementor_version: '3.0.0',
      _elementor_data: JSON.stringify(pageData),
      _elementor_page_settings: { hide_title: 'yes' },
    },
  }
  let result
  if (existing.length > 0) {
    result = await wpFetch(`pages/${existing[0].id}`, { method: 'POST', body: JSON.stringify(payload) })
  } else {
    result = await wpFetch('pages', { method: 'POST', body: JSON.stringify(payload) })
  }
  console.log(`✅  Quem Somos publicada: ${result.link}`)
}

run().catch(err => { console.error(err.message); process.exit(1) })
