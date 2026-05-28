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

// ─── SHARED BASE CSS ─────────────────────────────────────────────────────────
const BASE_CSS = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
.np-wrap { max-width:1280px; margin:0 auto; padding:0 48px; }
.np-label { display:inline-flex; align-items:center; gap:10px; font-size:10px; font-weight:700; letter-spacing:0.28em; text-transform:uppercase; color:${C.blue400}; margin-bottom:12px; font-family:'Plus Jakarta Sans',sans-serif; }
.np-label::before { content:''; width:18px; height:1.5px; background:linear-gradient(135deg,#1B3F6F 0%,#2B5EA7 55%,#4A90D9 100%); border-radius:99px; flex-shrink:0; }
.np-h2 { font-size:clamp(22px,3vw,34px); font-weight:800; color:${C.textHi}; line-height:1.15; letter-spacing:-0.02em; margin-bottom:12px; font-family:'Plus Jakarta Sans',sans-serif; }
.np-btn-p { display:inline-flex; align-items:center; justify-content:center; background:${C.blue500}; color:#fff; font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:13px 26px; text-decoration:none; border:none; cursor:pointer; border-radius:0; transition:background .2s,transform .2s; white-space:nowrap; }
.np-btn-p:hover { background:${C.blue400}; transform:translateY(-1px); }
.np-btn-g { display:inline-flex; align-items:center; justify-content:center; background:transparent; color:${C.textHi}; font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; padding:13px 26px; text-decoration:none; border:1px solid rgba(255,255,255,0.18); cursor:pointer; border-radius:0; transition:all .25s; white-space:nowrap; }
.np-btn-g:hover { background:rgba(255,255,255,.06); border-color:rgba(255,255,255,0.35); transform:translateY(-1px); }
.np-glass { background:rgba(255,255,255,0.03); border:1px solid ${C.line}; backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border-radius:14px; box-shadow:0 4px 24px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.04); position:relative; overflow:hidden; }
.np-photo-slot { background:linear-gradient(135deg,#0C1221,#080D1A); border:1px solid ${C.line}; border-radius:14px; position:relative; overflow:hidden; }
.np-photo-slot::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(27,63,111,.10),transparent 60%); }
.np-slot-cap { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top,rgba(4,7,14,.88),transparent); padding:20px 18px 14px; }
.np-slot-cap span { font-size:9px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:${C.textLo}; font-family:'Plus Jakarta Sans',sans-serif; }
@media (max-width:768px) { .np-wrap { padding:0 24px; } }
</style>`

// ─── 1. HERO (mobile-first) ──────────────────────────────────────────────────
// VIDEO_URL: troque pelo URL do .mp4 na biblioteca de Mídia do WP quando subir.
// Ex.: https://neopowerenergia.com.br/wp-content/uploads/2026/05/hero-bg.mp4
const HERO_VIDEO_URL = 'https://neopowerenergia.com.br/wp-content/uploads/2026/05/Energia-Solar-Campanha-para-Anuncio-4k-drone.mp4'

const HERO = `${BASE_CSS}
<style>
/* ── base = mobile ───────────────────────────────────────────────────────── */
.np-hero{position:relative;min-height:100svh;display:flex;flex-direction:column;background:${C.bgBase};overflow:hidden}
.np-hero video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;pointer-events:none}
.np-ov1{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(4,7,14,.85) 0%,rgba(4,7,14,.65) 40%,rgba(4,7,14,.55) 100%);pointer-events:none}
.np-ov2{position:absolute;top:0;left:0;right:0;height:35%;z-index:1;background:linear-gradient(to bottom,rgba(4,7,14,.7),transparent);pointer-events:none}
.np-ov3{position:absolute;bottom:0;left:0;right:0;height:50%;z-index:1;background:linear-gradient(to top,rgba(4,7,14,1) 0%,rgba(4,7,14,.7) 50%,transparent 100%);pointer-events:none}
.np-hero-body{position:relative;z-index:2;flex:1;display:flex;align-items:center;padding:120px 22px 28px;width:100%;box-sizing:border-box}
.np-hero-inner{max-width:1280px;margin:0 auto;width:100%}
.np-hero-tag{display:flex;align-items:center;gap:10px;font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:rgba(74,144,217,.85);margin-bottom:18px;font-family:'Plus Jakarta Sans',sans-serif;flex-wrap:wrap}
.np-hero-tag i{display:inline-block;width:18px;height:1.5px;background:linear-gradient(90deg,#1B3F6F,#4A90D9);border-radius:99px;flex-shrink:0;font-style:normal}
h1.np-h1{margin:0 0 18px;max-width:560px}
.np-h1-sub{display:block;font-size:clamp(15px,4.4vw,26px);font-weight:500;color:rgba(255,255,255,.7);line-height:1.2;letter-spacing:.01em;text-transform:uppercase;margin-bottom:.18em;font-family:'Plus Jakarta Sans',sans-serif}
.np-h1-main{display:block;font-size:clamp(26px,7.2vw,42px);font-weight:800;color:#fff;line-height:1.08;letter-spacing:-.015em;text-transform:uppercase;font-family:'Plus Jakarta Sans',sans-serif}
.np-hero-p1{font-size:14px;color:rgba(255,255,255,.66);max-width:420px;line-height:1.7;margin:0 0 20px;font-family:'Plus Jakarta Sans',sans-serif}
.np-hero-p2{display:none}
.np-hero-btns{display:flex;flex-direction:column;gap:10px;max-width:320px}
.np-hero-btns a{width:100%;justify-content:center;min-height:48px;box-sizing:border-box}
.np-metrics{display:grid;grid-template-columns:1fr 1fr;background:rgba(4,7,14,.88);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-top:1px solid rgba(255,255,255,.055);position:relative;z-index:3}
.np-metric{padding:18px 10px;text-align:center;border-right:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05)}
.np-metric:nth-child(2n){border-right:none}
.np-metric:nth-last-child(-n+2){border-bottom:none}
.np-metric-val{font-size:18px;font-weight:800;color:#fff;line-height:1;letter-spacing:-.02em;font-family:'Plus Jakarta Sans',sans-serif}
.np-metric-lbl{font-size:8.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-top:6px;line-height:1.5;font-family:'Plus Jakarta Sans',sans-serif}

/* ── tablet ──────────────────────────────────────────────────────────────── */
@media (min-width:640px){
  .np-hero-body{padding:140px 32px 36px}
  .np-hero-btns{flex-direction:row;flex-wrap:wrap;max-width:none}
  .np-hero-btns a{width:auto}
  .np-metrics{grid-template-columns:repeat(4,1fr)}
  .np-metric{border-bottom:none}
  .np-metric:last-child{border-right:none}
  .np-metric-val{font-size:clamp(17px,1.8vw,22px)}
  .np-hero-p2{display:block;font-size:13px;color:rgba(255,255,255,.5);max-width:480px;line-height:1.8;margin:0 0 30px;font-family:'Plus Jakarta Sans',sans-serif}
  .np-hero-p1{margin-bottom:10px}
}

/* ── desktop ─────────────────────────────────────────────────────────────── */
@media (min-width:1024px){
  .np-hero-body{padding:160px 48px 48px}
  .np-hero video{width:max(100vw,177.78vh);height:max(100vh,56.25vw);top:50%;left:50%;transform:translate(-50%,-50%);inset:auto}
  .np-ov1{background:linear-gradient(110deg,rgba(4,7,14,.92) 0%,rgba(4,7,14,.72) 50%,rgba(4,7,14,.32) 100%)}
}
</style>
<div class="np-hero">
  <video autoplay muted loop playsinline preload="metadata" poster="${HERO_VIDEO_URL.replace(/\.mp4$/, '.jpg')}">
    <source src="${HERO_VIDEO_URL}" type="video/mp4">
  </video>
  <div class="np-ov1"></div><div class="np-ov2"></div><div class="np-ov3"></div>
  <div class="np-hero-body">
    <div class="np-hero-inner">
      <p class="np-hero-tag"><i></i>Engenharia Solar — Alto Padrão</p>
      <h1 class="np-h1">
        <span class="np-h1-sub">Engenharia Fotovoltaica</span>
        <span class="np-h1-main">de Alta Complexidade.</span>
      </h1>
      <p class="np-hero-p1">O rigor da engenharia industrial aplicado à proteção de patrimônios de luxo.</p>
      <p class="np-hero-p2">Projetos de Média e Baixa Tensão com supervisão técnica e assinatura de diretoria. Não somos distribuidores de equipamentos. Projetamos, executamos e auditamos sistemas sob nosso Protocolo Proprietário, onde a margem de erro é zero e a estética da sua propriedade é intocável.</p>
      <div class="np-hero-btns">
        <a href="/contato" class="np-btn-p">Solicitar Auditoria Técnica</a>
        <a href="/servicos" class="np-btn-g">Ver Soluções</a>
      </div>
    </div>
  </div>
  <div class="np-metrics">
    <div class="np-metric"><div class="np-metric-val">8+</div><div class="np-metric-lbl">Anos de Engenharia de Campo</div></div>
    <div class="np-metric"><div class="np-metric-val">100%</div><div class="np-metric-lbl">Projetos com ART</div></div>
    <div class="np-metric"><div class="np-metric-val">93kWp</div><div class="np-metric-lbl">Maior Projeto Residencial</div></div>
    <div class="np-metric"><div class="np-metric-val">0</div><div class="np-metric-lbl">Tolerância a Falhas</div></div>
  </div>
</div>`

// ─── 2. SOLUÇÕES ─────────────────────────────────────────────────────────────
const SOLUCOES = `
<style>
#np-sol { background:${C.bgSurface}; padding:100px 0; font-family:'Plus Jakarta Sans',sans-serif; }
.np-sol-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; border:1px solid ${C.line}; border-radius:14px; overflow:hidden; }
.np-sol-card { padding:40px 36px; background:rgba(255,255,255,.03); transition:background .3s; position:relative; }
.np-sol-card:hover { background:rgba(27,63,111,.08); }
.np-sol-card:nth-child(odd) { border-right:1px solid ${C.line}; }
.np-sol-card:nth-child(-n+2) { border-bottom:1px solid ${C.line}; }
.np-sol-num-row { display:flex; align-items:center; gap:12px; margin-bottom:18px; }
.np-sol-num { font-size:9.5px; font-weight:700; letter-spacing:.22em; color:${C.blue400}; }
.np-sol-divider { flex:1; height:1px; background:linear-gradient(90deg,${C.blue700},transparent); }
.np-sol-title { font-size:16px; font-weight:700; color:${C.textHi}; line-height:1.3; margin-bottom:12px; }
.np-sol-desc { font-size:13px; color:${C.textLo}; line-height:1.85; margin:0; }
@media (max-width:700px) {
  .np-sol-grid { grid-template-columns:1fr; }
  .np-sol-card { border-right:none !important; }
  .np-sol-card:not(:last-child) { border-bottom:1px solid ${C.line} !important; }
}
</style>
<section id="np-sol">
<div class="np-wrap">
  <div class="np-label">Soluções Técnicas</div>
  <h2 class="np-h2">Engenharia Aplicada<br>a Cada Cenário.</h2>
  <p style="font-size:14.5px;color:${C.textMid};max-width:500px;line-height:1.8;margin-bottom:48px;font-family:'Plus Jakarta Sans',sans-serif">Dimensionamento, execução e auditoria sob Protocolo Proprietário — do residencial de alto padrão à infraestrutura industrial.</p>
  <div class="np-sol-grid">
    <div class="np-sol-card"><div class="np-sol-num-row"><span class="np-sol-num">01</span><div class="np-sol-divider"></div></div><div class="np-sol-title">Geração Distribuída</div><p class="np-sol-desc">Engenharia de alta potência para grandes propriedades e negócios de alto padrão. Média e Baixa Tensão com Demanda Contratada. Independência financeira com a precisão exigida por infraestruturas de luxo. Redução de até 95% na conta de energia, retorno em 3 a 5 anos, garantia de eficiência de 25 anos.</p></div>
    <div class="np-sol-card"><div class="np-sol-num-row"><span class="np-sol-num">02</span><div class="np-sol-divider"></div></div><div class="np-sol-title">Geração Isolada &amp; Backup</div><p class="np-sol-desc">Sistemas autônomos com bancos de bateria de lítio (vida útil de até 30 anos). Segurança energética ininterrupta, acionamento instantâneo e totalmente silencioso. O banco de baterias assume a carga integral da propriedade em milissegundos — sem diesel, sem emissões, sem ruído.</p></div>
    <div class="np-sol-card"><div class="np-sol-num-row"><span class="np-sol-num">03</span><div class="np-sol-divider"></div></div><div class="np-sol-title">Auditoria e Manutenção de Performance</div><p class="np-sol-desc">Inspeção termográfica, análise de string, verificação de aterramento e laudos de integridade. Validamos e corrigimos sistemas para garantir a curva máxima de eficiência projetada. Auditoria independente em sistemas instalados por terceiros — identificamos falhas de dimensionamento e perdas ocultas.</p></div>
    <div class="np-sol-card"><div class="np-sol-num-row"><span class="np-sol-num">04</span><div class="np-sol-divider"></div></div><div class="np-sol-title">Estudo de Viabilidade Técnico-Financeira</div><p class="np-sol-desc">Consultoria de engenharia pura antes de qualquer proposta comercial. Analisamos irradiação, sombreamento, configuração elétrica e impacto estético. Se o projeto não fizer sentido técnico, nossa diretoria emitirá a recusa técnica formal.</p></div>
  </div>
</div>
</section>`

// ─── 3. PHOTO BAND ───────────────────────────────────────────────────────────
const PHOTOBAND = `
<style>
.np-photoband { display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid ${C.line}; background:${C.bgBase}; font-family:'Plus Jakarta Sans',sans-serif; }
.np-pb-slot { min-height:260px; background:linear-gradient(135deg,#0C1221,#080D1A); border-right:1px solid ${C.line}; position:relative; overflow:hidden; }
.np-pb-slot:last-child { border-right:none; }
.np-pb-slot::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(27,63,111,.10),transparent 60%); }
.np-pb-cap { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top,rgba(4,7,14,.88),transparent); padding:20px 18px 14px; z-index:2; }
.np-pb-cap span { font-size:9px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:${C.textLo}; }
@media (max-width:600px) {
  .np-photoband { grid-template-columns:1fr; }
  .np-pb-slot { border-right:none; border-bottom:1px solid ${C.line}; }
}
</style>
<div class="np-photoband">
  <div class="np-pb-slot"><div class="np-pb-cap"><span>Infraestrutura elétrica — Quadro de proteção MT</span></div></div>
  <div class="np-pb-slot"><div class="np-pb-cap"><span>Usina fotovoltaica — Vista aérea</span></div></div>
  <div class="np-pb-slot"><div class="np-pb-cap"><span>Detalhe técnico — Fixação e impermeabilização</span></div></div>
</div>`

// ─── 4. PROTOCOLO / SOBRE ────────────────────────────────────────────────────
const PROTOCOLO = `
<style>
#np-proto { background:${C.bgBase}; padding:100px 0; font-family:'Plus Jakarta Sans',sans-serif; }
.np-proto-grid { display:grid; grid-template-columns:5fr 4fr; }
.np-proto-left { padding-right:56px; }
.np-proto-p { font-size:13.5px; color:${C.textMid}; line-height:1.85; margin-bottom:18px; }
.np-proto-right { border-left:1px solid ${C.line}; padding-left:48px; }
.np-badge { padding:28px; margin-bottom:32px; border-left:2px solid ${C.blue500}; }
.np-badge::after { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(74,144,217,.3),transparent); border-radius:14px 14px 0 0; }
.np-badge-title { font-size:13px; font-weight:700; color:${C.textHi}; letter-spacing:.04em; margin-bottom:14px; line-height:1.4; }
.np-badge-p { font-size:12.5px; color:${C.textLo}; line-height:1.8; margin-bottom:16px; }
.np-badge-hr { width:32px; height:1px; background:${C.line}; margin:16px 0; }
.np-badge-italic { font-size:11.5px; color:${C.textLo}; line-height:1.7; font-style:italic; }
.np-proto-item { display:flex; gap:20px; padding:18px 0; border-bottom:1px solid ${C.line}; }
.np-proto-item:first-of-type { border-top:1px solid ${C.line}; }
.np-proto-item:last-of-type { border-bottom:none; }
.np-proto-num { font-size:20px; font-weight:800; color:${C.blue700}; min-width:28px; line-height:1; padding-top:2px; }
.np-proto-item-title { font-size:13px; font-weight:700; color:${C.textHi}; margin-bottom:4px; }
.np-proto-item-desc { font-size:12px; color:${C.textLo}; line-height:1.7; margin:0; }
@media (max-width:900px) {
  .np-proto-grid { display:flex !important; flex-direction:column; gap:48px; }
  .np-proto-left { padding-right:0; }
  .np-proto-right { border-left:none; padding-left:0; border-top:1px solid ${C.line}; padding-top:40px; }
}
</style>
<section id="np-proto">
<div class="np-wrap">
  <div class="np-label">Sobre Nós — O Protocolo</div>
  <h2 class="np-h2">Rigor Técnico e<br>Protocolo Proprietário.</h2>
  <p style="font-size:14.5px;color:${C.textMid};max-width:480px;line-height:1.8;margin-bottom:56px">A precisão da engenharia industrial aplicada à proteção do seu patrimônio.</p>
  <div class="np-proto-grid">
    <div class="np-proto-left">
      <p class="np-proto-p">A Neo Power não nasceu para distribuir equipamentos. Operamos estruturados em torno de um método inegociável de execução. Todo projeto de alta complexidade — seja em Média ou Baixa Tensão — é submetido ao nosso protocolo proprietário de validação.</p>
      <p class="np-proto-p">Nossa metodologia, forjada a partir de mais de 8 anos de engenharia de campo, dita que a tolerância a falhas é zero. A inteligência do seu projeto nunca é terceirizada para montadores genéricos.</p>
      <p class="np-proto-p">Nossa equipe de elite garante que do estudo de viabilidade ao start-up do sistema, a integridade estrutural e estética da sua propriedade seja tratada com rigor máximo.</p>
      <p class="np-proto-p">Trabalhamos com propriedades onde o telhado vale mais que o sistema inteiro. A nossa engenharia protege a integridade estrutural, elimina riscos de infiltração e garante que a instalação fotovoltaica valoriza — nunca compromete — o patrimônio do cliente.</p>
      <div class="np-photo-slot" style="min-height:280px;margin-top:36px"><div class="np-slot-cap"><span>Fotografia — Equipe técnica em campo</span></div></div>
    </div>
    <div class="np-proto-right">
      <div class="np-glass np-badge">
        <div class="np-badge-title">Supervisão e Assinatura de Diretoria</div>
        <p class="np-badge-p">Todo projeto de Média Tensão e Alto Padrão é validado, assinado e inspecionado pessoalmente pelo Sócio-Diretor de Engenharia.</p>
        <div class="np-badge-hr"></div>
        <p class="np-badge-p"><strong style="color:${C.textHi};font-weight:600">Renan Alves</strong> — Engenheiro Eletricista, 8+ anos de engenharia de campo em sistemas fotovoltaicos de alta complexidade. O cliente tem a estrutura operacional de uma firma de engenharia, mas com a garantia pessoal e o rigor técnico direto da diretoria.</p>
        <div class="np-badge-hr"></div>
        <p class="np-badge-italic">Não delegamos a assinatura. Não delegamos a inspeção. O seu projeto é responsabilidade direta de quem fundou a empresa.</p>
      </div>
      <div>
        <div class="np-proto-item"><div class="np-proto-num">01</div><div><div class="np-proto-item-title">Estudo antes da venda</div><p class="np-proto-item-desc">Consultoria técnica independente antes de qualquer proposta comercial.</p></div></div>
        <div class="np-proto-item"><div class="np-proto-num">02</div><div><div class="np-proto-item-title">Rastreabilidade total</div><p class="np-proto-item-desc">Cada etapa documentada, fotografada e assinada pelo responsável técnico.</p></div></div>
        <div class="np-proto-item"><div class="np-proto-num">03</div><div><div class="np-proto-item-title">Recusa técnica formal</div><p class="np-proto-item-desc">Se o projeto não faz sentido técnico-financeiro, a diretoria emite parecer de recusa formal.</p></div></div>
        <div class="np-proto-item"><div class="np-proto-num">04</div><div><div class="np-proto-item-title">Tolerância zero</div><p class="np-proto-item-desc">Nenhuma infiltração. Nenhuma falha estética. Nenhum atalho de execução.</p></div></div>
      </div>
    </div>
  </div>
</div>
</section>`

// ─── 5. CASOS ────────────────────────────────────────────────────────────────
const CASOS = `
<style>
#np-casos { background:${C.bgSurface}; padding:100px 0; font-family:'Plus Jakarta Sans',sans-serif; }
.np-casos-main { display:grid; grid-template-columns:1fr 1fr; overflow:hidden; margin-bottom:16px; }
.np-casos-narrative { padding:44px 40px; display:flex; flex-direction:column; justify-content:center; }
.np-casos-tag { font-size:9.5px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:${C.blue400}; margin-bottom:16px; }
.np-casos-h3 { font-size:20px; font-weight:800; color:${C.textHi}; letter-spacing:-.015em; line-height:1.2; margin-bottom:20px; }
.np-casos-p { font-size:13px; color:${C.textMid}; line-height:1.85; margin-bottom:12px; }
.np-casos-data { border-left:1px solid ${C.line}; display:grid; grid-template-columns:1fr 1fr; position:relative; }
.np-casos-data::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(27,63,111,.07),transparent); pointer-events:none; }
.np-data-cell { padding:32px 24px; text-align:center; display:flex; flex-direction:column; justify-content:center; align-items:center; border-bottom:1px solid ${C.line}; border-right:1px solid ${C.line}; }
.np-data-cell:nth-child(even) { border-right:none; }
.np-data-cell:nth-child(n+3) { border-bottom:none; }
.np-data-val { font-size:28px; font-weight:800; color:#fff; line-height:1; letter-spacing:-.02em; }
.np-data-lbl { font-size:9px; font-weight:600; letter-spacing:.16em; text-transform:uppercase; color:${C.textLo}; margin-top:6px; }
.np-quote { padding:28px 36px; margin-bottom:16px; border-left:2px solid ${C.blue500}; }
.np-quote::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,${C.blue700},transparent); }
.np-quote-text { font-size:13.5px; font-style:italic; color:${C.textHi}; line-height:1.8; margin:0; }
.np-quote-attr { margin-top:14px; font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:${C.textLo}; }
.np-strip { display:grid; grid-template-columns:2fr 1fr; gap:16px; }
@media (max-width:800px) {
  .np-casos-main { grid-template-columns:1fr !important; }
  .np-casos-data { border-left:none; border-top:1px solid ${C.line}; }
  .np-strip { grid-template-columns:1fr; }
}
</style>
<section id="np-casos">
<div class="np-wrap">
  <div class="np-label">Referência Técnica</div>
  <h2 class="np-h2">O Seu Patrimônio sob<br>o Nosso Protocolo.</h2>
  <p style="font-size:14.5px;color:${C.textMid};max-width:480px;line-height:1.8;margin-bottom:48px">Da residência premium à infraestrutura industrial de Média Tensão.</p>
  <div class="np-glass np-casos-main">
    <div class="np-casos-narrative">
      <div class="np-casos-tag">Projeto de Referência — Média Tensão Residencial</div>
      <h3 class="np-casos-h3">93 kWp — Residência de Ultra Alto Padrão</h3>
      <p class="np-casos-p">Nossa engenharia foi testada e validada nos cenários mais rigorosos do país. Nosso maior case documentado envolve a entrega de 93 kWp em Média Tensão com Demanda Contratada para a residência de ultra alto padrão da liderança de um grande grupo corporativo brasileiro.</p>
      <p class="np-casos-p">Um projeto executado sob o rigoroso crivo do escritório de engenharia particular da cliente. Aprovação integral, sem ressalvas, provando que nosso método entrega excelência técnica onde a margem para erro é absolutamente zero.</p>
      <p style="font-size:13px;color:${C.textHi};font-weight:600;line-height:1.75;margin:0">Aplicamos esse exato mesmo protocolo de rigor industrial a todos os nossos projetos, independentemente do tamanho da usina.</p>
    </div>
    <div class="np-casos-data">
      <div class="np-data-cell"><div class="np-data-val">93kWp</div><div class="np-data-lbl">Potência do Flagship</div></div>
      <div class="np-data-cell"><div class="np-data-val">MT/DC</div><div class="np-data-lbl">Infraestrutura</div></div>
      <div class="np-data-cell"><div class="np-data-val">100%</div><div class="np-data-lbl">Aprovação em Auditoria Externa</div></div>
      <div class="np-data-cell"><div class="np-data-val">0</div><div class="np-data-lbl">Infiltrações</div></div>
    </div>
  </div>
  <div class="np-glass np-quote">
    <p class="np-quote-text">"O projeto passou pelo crivo mais rigoroso possível: a equipe de engenharia particular da própria cliente. Não existe validação mais exigente do que um escritório técnico contratado para encontrar falhas — e aprovar integralmente."</p>
    <div class="np-quote-attr">— Protocolo de auditoria independente</div>
  </div>
  <div class="np-strip">
    <div class="np-photo-slot" style="min-height:240px"><div class="np-slot-cap"><span>Fotografia autoral — Vista geral da usina de 93 kWp</span></div></div>
    <div class="np-photo-slot" style="min-height:240px"><div class="np-slot-cap"><span>Detalhe — Infraestrutura de Média Tensão</span></div></div>
  </div>
</div>
</section>`

// ─── 6. CONTATO ──────────────────────────────────────────────────────────────
const CONTATO = `
<style>
#np-contato { background:${C.bgBase}; padding:100px 0; font-family:'Plus Jakarta Sans',sans-serif; }
.np-ct-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:start; }
.np-ct-info-item { padding-bottom:24px; margin-bottom:24px; border-bottom:1px solid ${C.line}; }
.np-ct-info-lbl { font-size:9.5px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:${C.textLo}; margin-bottom:10px; }
.np-input { width:100%; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.14); color:${C.textHi}; font-family:'Plus Jakarta Sans',sans-serif; font-size:13.5px; padding:12px 15px; outline:none; border-radius:0; transition:border-color .2s,background .2s; box-sizing:border-box; }
.np-input:focus { border-color:${C.blue400}; background:rgba(43,94,167,.06); }
.np-input::placeholder { color:rgba(255,255,255,.22); }
.np-f-lbl { display:block; font-size:9.5px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:${C.textLo}; margin-bottom:7px; }
.np-f-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px; }
.np-f-grp { margin-bottom:14px; }
@media (max-width:900px) { .np-ct-grid { grid-template-columns:1fr !important; gap:52px !important; } }
@media (max-width:600px) { .np-f-row { grid-template-columns:1fr !important; } }
</style>
<section id="np-contato">
<div class="np-wrap">
  <div class="np-ct-grid">
    <div>
      <div class="np-label">Iniciar Projeto</div>
      <h2 class="np-h2">Inicie o Seu Estudo de Viabilidade.</h2>
      <p style="font-size:13.5px;color:${C.textMid};line-height:1.85;margin-bottom:36px">Não fornecemos orçamentos genéricos. Para manter o rigor de nossa entrega, filtramos cada solicitação através de uma análise técnica preliminar.</p>
      <form style="display:flex;flex-direction:column">
        <div class="np-f-row">
          <div><label class="np-f-lbl">Nome Completo</label><input class="np-input" type="text" placeholder="Seu nome" required></div>
          <div><label class="np-f-lbl">Empresa</label><input class="np-input" type="text" placeholder="Empresa ou patrimônio"></div>
        </div>
        <div class="np-f-grp"><label class="np-f-lbl">Localização do Imóvel</label><input class="np-input" type="text" placeholder="Cidade, bairro ou endereço" required></div>
        <div class="np-f-row">
          <div><label class="np-f-lbl">Consumo Médio / Demanda Contratada</label><input class="np-input" type="text" placeholder="Ex.: 1.200 kWh ou 50 kW"></div>
          <div><label class="np-f-lbl">Tipo de Telhado / Estrutura</label><select class="np-input" style="cursor:pointer"><option value="">Selecione</option><option>Telhado cerâmico</option><option>Telhado metálico (trapezoidal)</option><option>Laje</option><option>Fibrocimento</option><option>Solo / Estrutura dedicada</option><option>Outro</option></select></div>
        </div>
        <div class="np-f-grp"><label class="np-f-lbl">O que é inegociável no seu projeto?</label><textarea class="np-input" rows="4" placeholder="Descreva exigências estéticas, restrições técnicas, prazos ou qualquer aspecto que não pode ser comprometido." style="resize:vertical"></textarea></div>
        <button type="submit" class="np-btn-p" style="width:100%;margin-top:4px">Enviar Solicitação</button>
      </form>
    </div>
    <div style="padding-top:8px">
      <div class="np-ct-info-item"><div class="np-ct-info-lbl">Telefone / WhatsApp</div><a href="tel:+5524981114255" style="font-size:14.5px;color:${C.textMid};text-decoration:none">(24) 9 8111-4255</a></div>
      <div class="np-ct-info-item"><div class="np-ct-info-lbl">Escritório Técnico</div><div style="font-size:13.5px;color:${C.textMid};line-height:1.9">Estrada União e Indústria, 9200<br>Loja D5 — Itaipava<br>Petrópolis — RJ<br><span style="display:block;margin-top:8px;font-size:11.5px;color:${C.blue400};font-weight:600;letter-spacing:.04em">Atendimento exclusivamente por agendamento.</span></div></div>
      <div class="np-ct-info-item"><div class="np-ct-info-lbl">CNPJ</div><span style="font-size:13.5px;color:${C.textMid}">40.904.108/0001-23</span></div>
      <div class="np-glass" style="padding:22px 24px;border-left:2px solid ${C.blue700}"><p style="font-size:12.5px;color:${C.textLo};line-height:1.8;margin:0"><strong style="color:${C.textMid};font-weight:600">Por que um formulário de qualificação?</strong><br>Não trabalhamos com orçamentos genéricos. Cada projeto exige análise técnica preliminar — irradiação, consumo, configuração elétrica, tipo de telhado — antes de qualquer proposta.</p></div>
    </div>
  </div>
</div>
</section>`

// ─── 7. FOOTER ───────────────────────────────────────────────────────────────
const FOOTER = `
<style>
.np-footer { background:${C.bgSurface}; border-top:1px solid ${C.line}; font-family:'Plus Jakarta Sans',sans-serif; }
.np-footer-glow { height:1px; background:linear-gradient(90deg,transparent,rgba(74,144,217,.25),transparent); }
.np-footer-body { max-width:1180px; margin:0 auto; padding:60px 48px 36px; }
.np-footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr; gap:56px; margin-bottom:52px; }
.np-footer-links { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:13px; }
.np-footer-links a,.np-footer-contact a { color:${C.textLo}; text-decoration:none; transition:color .2s; font-size:13.5px; }
.np-footer-links a:hover,.np-footer-contact a:hover { color:${C.textHi}; }
.np-footer-bottom { border-top:1px solid ${C.line}; padding-top:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; }
.np-footer-copy { font-size:11.5px; color:${C.textLo}; opacity:.6; }
.np-social a { font-size:10.5px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:${C.textLo}; text-decoration:none; transition:color .2s; }
.np-social a:hover { color:${C.textHi}; }
@media (max-width:768px) {
  .np-footer-grid { grid-template-columns:1fr !important; gap:40px !important; }
  .np-footer-body { padding:44px 24px 32px !important; }
}
</style>
<footer class="np-footer">
  <div class="np-footer-glow"></div>
  <div class="np-footer-body">
    <div class="np-footer-grid">
      <div>
        <img src="https://neopowerenergia.com.br/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png" alt="Neo Power" style="height:146px;width:auto;object-fit:contain;margin-bottom:18px;display:block" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px">NEO POWER</span>
        <p style="font-size:13px;color:${C.textLo};line-height:1.75;max-width:270px;margin-bottom:24px">Engenharia fotovoltaica de alta complexidade. Tolerância zero a falhas, protocolo proprietário de execução.</p>
        <div class="np-social" style="display:flex;gap:16px">
          <a href="https://instagram.com/neopowerbr" target="_blank" rel="noopener">Instagram</a>
          <a href="https://facebook.com/neopowerbr" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
      <div>
        <p style="font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:22px">Menu</p>
        <ul class="np-footer-links">
          <li><a href="/">Home</a></li><li><a href="/quem-somos">Quem Somos</a></li>
          <li><a href="/projetos">Projetos</a></li><li><a href="/servicos">Serviços</a></li>
          <li><a href="/contato">Contato</a></li><li><a href="/politicas">Políticas</a></li>
        </ul>
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
      <span class="np-footer-copy">© 2026 Neo Power · CNPJ 40.904.108/0001-23 · Todos os direitos reservados.</span>
      <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap">
        <a href="/politicas" style="font-size:11.5px;color:${C.textLo};opacity:.6;text-decoration:none">Políticas de Privacidade</a>
        <span class="np-footer-copy">Itaipava · Petrópolis · RJ</span>
      </div>
    </div>
  </div>
</footer>`

// ─── Assemble & push ─────────────────────────────────────────────────────────
const pageData = [
  htmlSec(NAVBAR),
  htmlSec(HERO),
  htmlSec(SOLUCOES),
  htmlSec(PHOTOBAND),
  htmlSec(PROTOCOLO),
  htmlSec(CASOS),
  htmlSec(CONTATO),
  htmlSec(FOOTER),
]

async function run() {
  console.log('🏠  Construindo página Home...\n')

  const existing = await wpFetch('pages?slug=home&per_page=1')
  const payload = {
    title: 'Home',
    slug: 'home',
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
    console.log(`🔄  Atualizando página existente (ID ${existing[0].id})`)
    result = await wpFetch(`pages/${existing[0].id}`, { method: 'POST', body: JSON.stringify(payload) })
  } else {
    console.log('✨  Criando nova página Home')
    result = await wpFetch('pages', { method: 'POST', body: JSON.stringify(payload) })
  }

  console.log(`✅  Home publicada: ${result.link}`)
  console.log('\n📋  Próximos passos:')
  console.log('   1. WP Admin → Configurações → Leitura → "Página estática" → selecione "Home"')
  console.log('   2. Faça upload do logo: Mídia → logo-white.png')
  console.log('   3. Faça upload do vídeo: Mídia → hero-bg.mp4')
}

run().catch(err => { console.error(err.message); process.exit(1) })
