import { wpFetch } from '../client.mjs'
import { NAVBAR } from '../shared.mjs'
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
  blue700: '#1B3F6F', blue500: '#2B5EA7', blue400: '#4A90D9',
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

const PAGE = `${BASE}
<style>
#np-pj-hero{background:${C.bgSurface};padding:160px 0 80px;border-bottom:1px solid ${C.line};position:relative;overflow:hidden}
#np-pj-hero::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(74,144,217,.3),transparent)}
#np-pj-hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 60% 40%,rgba(27,63,111,.12),transparent);pointer-events:none}
.np-met-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.np-met-cell{padding:44px 32px;border-right:1px solid ${C.line};text-align:center}
.np-met-cell:last-child{border-right:none}
.np-proj-card{display:grid;grid-template-columns:1fr 1fr;overflow:hidden;margin-bottom:16px}
.np-pj-data{border-left:1px solid ${C.line};display:grid;grid-template-columns:1fr 1fr;position:relative}
.np-pj-data::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(27,63,111,.07),transparent);pointer-events:none}
.np-pj-dc{padding:32px 24px;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;border-bottom:1px solid ${C.line};border-right:1px solid ${C.line}}
.np-pj-dc:nth-child(even){border-right:none}
.np-pj-dc:nth-child(n+3){border-bottom:none}
.np-strip{display:grid;grid-template-columns:2fr 1fr;gap:16px}
@media(max-width:700px){.np-met-grid{grid-template-columns:1fr 1fr!important}.np-met-cell:nth-child(2n){border-right:none!important}.np-met-cell{border-bottom:1px solid ${C.line}}}
@media(max-width:800px){.np-proj-card{grid-template-columns:1fr!important}.np-pj-data{border-left:none;border-top:1px solid ${C.line}}.np-strip{grid-template-columns:1fr!important}}
</style>

<section id="np-pj-hero">
<div class="np-wrap" style="position:relative;z-index:1">
  <div class="np-label">Portfólio</div>
  <h1 style="font-size:clamp(28px,4vw,52px);font-weight:800;color:${C.textHi};line-height:1.1;letter-spacing:-.025em;margin-bottom:20px;max-width:660px">Projetos Executados<br>sob Protocolo.</h1>
  <p style="font-size:15px;color:${C.textMid};max-width:540px;line-height:1.85">Cada projeto documentado com rastreabilidade total. Da proposta técnica ao start-up, cada etapa registrada, fotografada e assinada.</p>
</div>
</section>

<section style="background:${C.bgBase};border-bottom:1px solid ${C.line};padding:0">
<div class="np-wrap">
  <div class="np-met-grid">
    <div class="np-met-cell"><div style="font-size:36px;font-weight:800;color:${C.textHi};line-height:1;letter-spacing:-.03em;margin-bottom:8px">8+</div><div style="font-size:9.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:${C.textLo}">Anos de Campo</div></div>
    <div class="np-met-cell"><div style="font-size:36px;font-weight:800;color:${C.textHi};line-height:1;letter-spacing:-.03em;margin-bottom:8px">100+</div><div style="font-size:9.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:${C.textLo}">Projetos Entregues</div></div>
    <div class="np-met-cell"><div style="font-size:36px;font-weight:800;color:${C.textHi};line-height:1;letter-spacing:-.03em;margin-bottom:8px">0</div><div style="font-size:9.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:${C.textLo}">Infiltrações Registradas</div></div>
    <div class="np-met-cell"><div style="font-size:36px;font-weight:800;color:${C.textHi};line-height:1;letter-spacing:-.03em;margin-bottom:8px">100%</div><div style="font-size:9.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:${C.textLo}">Aprovações em Concessionária</div></div>
  </div>
</div>
</section>

<section style="background:${C.bgBase};padding:96px 0">
<div class="np-wrap">
  <div class="np-label">Referências Técnicas</div>
  <h2 class="np-h2">O Seu Patrimônio sob<br>o Nosso Protocolo.</h2>
  <p style="font-size:14.5px;color:${C.textMid};max-width:480px;line-height:1.8;margin-bottom:56px">Da residência premium à infraestrutura industrial de Média Tensão.</p>

  <div class="np-glass np-proj-card">
    <div style="padding:44px 40px;display:flex;flex-direction:column;justify-content:center">
      <div style="font-size:9.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.blue400};margin-bottom:16px">Projeto de Referência — Flagship</div>
      <h3 style="font-size:20px;font-weight:800;color:${C.textHi};letter-spacing:-.015em;line-height:1.2;margin-bottom:8px">93 kWp — Residência de Ultra Alto Padrão</h3>
      <div style="font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:${C.textLo};margin-bottom:20px">Mato Grosso, MT · Média Tensão · Demanda Contratada</div>
      <p style="font-size:13px;color:${C.textMid};line-height:1.85;margin:0">Nossa engenharia foi testada e validada nos cenários mais rigorosos do país. Este projeto foi executado sob o crivo do escritório de engenharia particular da cliente — e aprovado integralmente, sem ressalvas. Uma prova de que nosso protocolo entrega excelência onde a margem para erro é zero.</p>
    </div>
    <div class="np-pj-data">
      <div class="np-pj-dc"><div style="font-size:28px;font-weight:800;color:#fff;line-height:1;letter-spacing:-.02em">93 kWp</div><div style="font-size:9px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${C.textLo};margin-top:6px">Potência Instalada</div></div>
      <div class="np-pj-dc"><div style="font-size:28px;font-weight:800;color:#fff;line-height:1;letter-spacing:-.02em">MT/DC</div><div style="font-size:9px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${C.textLo};margin-top:6px">Infraestrutura</div></div>
      <div class="np-pj-dc"><div style="font-size:28px;font-weight:800;color:#fff;line-height:1;letter-spacing:-.02em">100%</div><div style="font-size:9px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${C.textLo};margin-top:6px">Aprovação em Auditoria</div></div>
      <div class="np-pj-dc"><div style="font-size:28px;font-weight:800;color:#fff;line-height:1;letter-spacing:-.02em">0</div><div style="font-size:9px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${C.textLo};margin-top:6px">Infiltrações</div></div>
    </div>
  </div>

  <div class="np-strip" style="margin-top:16px">
    <div class="np-ph" style="min-height:280px"><div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(4,7,14,.82),transparent);padding:16px 18px;z-index:2"><span style="font-size:9px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:${C.textLo}">Vista geral da usina de 93 kWp</span></div></div>
    <div class="np-ph" style="min-height:280px"><div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(4,7,14,.82),transparent);padding:16px 18px;z-index:2"><span style="font-size:9px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:${C.textLo}">Detalhe — Infraestrutura de Média Tensão</span></div></div>
  </div>
</div>
</section>

<section style="padding:0 0 96px;background:${C.bgBase}">
<div class="np-wrap">
  <div class="np-glass" style="padding:32px 40px;border-left:2px solid ${C.blue500};position:relative;overflow:hidden">
    <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,${C.blue700},transparent)"></div>
    <p style="font-size:14px;font-style:italic;color:${C.textHi};line-height:1.8;margin:0">"O projeto passou pelo crivo mais rigoroso possível: a equipe de engenharia particular da própria cliente. Não existe validação mais exigente do que um escritório técnico contratado para encontrar falhas — e aprovar integralmente."</p>
    <div style="margin-top:14px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:${C.textLo}">— Protocolo de auditoria independente · 93 kWp · MT</div>
  </div>
</div>
</section>

<section style="padding:40px 0;background:${C.bgSurface};border-top:1px solid ${C.line};border-bottom:1px solid ${C.line}">
<div class="np-wrap">
  <p style="font-size:12px;color:${C.textLo};line-height:1.7;text-align:center;max-width:680px;margin:0 auto">Por respeito à privacidade dos nossos clientes, os projetos são apresentados sem identificação de pessoas ou propriedades. Documentação completa disponível mediante NDA para clientes em processo de qualificação.</p>
</div>
</section>

<section style="padding:80px 0;background:${C.bgSurface}">
<div class="np-wrap" style="text-align:center">
  <div class="np-label" style="justify-content:center;margin-bottom:16px">Próximo Projeto</div>
  <h2 class="np-h2" style="margin-bottom:12px">Aplique o Mesmo Protocolo<br>no Seu Projeto.</h2>
  <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:28px">
    <a href="/contato" class="np-btn-p">Solicitar Auditoria Técnica</a>
    <a href="/servicos" class="np-btn-g">Ver Nossos Serviços</a>
  </div>
</div>
</section>

<footer style="background:${C.bgSurface};border-top:1px solid ${C.line}">
  <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(74,144,217,.25),transparent)"></div>
  <div style="max-width:1180px;margin:0 auto;padding:60px 48px 36px">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:56px;margin-bottom:52px">
      <div><img src="/wp-content/uploads/logo-white.png" alt="Neo Power" style="height:146px;width:auto;object-fit:contain;margin-bottom:18px;display:block" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px;display:block">NEO POWER</span><p style="font-size:13px;color:${C.textLo};line-height:1.75;max-width:270px">Engenharia fotovoltaica de alta complexidade. Tolerância zero a falhas.</p></div>
      <div><p style="font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:22px">Menu</p><div style="display:flex;flex-direction:column;gap:13px"><a href="/" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Home</a><a href="/quem-somos" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Quem Somos</a><a href="/projetos" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Projetos</a><a href="/servicos" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Serviços</a><a href="/contato" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Contato</a></div></div>
      <div><p style="font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:22px">Contato</p><div style="font-size:13.5px;color:${C.textLo};line-height:2"><a href="tel:+5524981114255" style="color:${C.textLo};text-decoration:none">(24) 9 8111-4255</a><br><a href="mailto:neopowerbr@gmail.com" style="color:${C.textLo};text-decoration:none">neopowerbr@gmail.com</a><br>Est. União e Indústria, 9200<br>Loja D5 — Itaipava, Petrópolis · RJ</div></div>
    </div>
    <div style="border-top:1px solid ${C.line};padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
      <span style="font-size:11.5px;color:${C.textLo};opacity:.6">© 2026 Neo Power · CNPJ 40.904.108/0001-23 · Todos os direitos reservados.</span>
      <a href="/politicas" style="font-size:11.5px;color:${C.textLo};opacity:.6;text-decoration:none">Políticas de Privacidade</a>
    </div>
  </div>
</footer>`

const pageData = [htmlSec(NAVBAR), htmlSec(PAGE)]

async function run() {
  console.log('📁  Construindo página Projetos...\n')
  const existing = await wpFetch('pages?slug=projetos&per_page=1')
  const payload = {
    title: 'Projetos', slug: 'projetos', status: 'publish', template: 'elementor_canvas',
    meta: { _elementor_edit_mode: 'builder', _elementor_template_type: 'wp-page', _elementor_version: '3.0.0', _elementor_data: JSON.stringify(pageData), _elementor_page_settings: { hide_title: 'yes' } },
  }
  const result = existing.length > 0
    ? await wpFetch(`pages/${existing[0].id}`, { method: 'POST', body: JSON.stringify(payload) })
    : await wpFetch('pages', { method: 'POST', body: JSON.stringify(payload) })
  console.log(`✅  Projetos publicada: ${result.link}`)
}

run().catch(err => { console.error(err.message); process.exit(1) })
