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
@media(max-width:768px){.np-wrap{padding:0 24px}}
</style>`

const HERO = `${BASE}
<style>
#np-sv-hero{background:${C.bgSurface};padding:160px 0 80px;border-bottom:1px solid ${C.line};position:relative;overflow:hidden}
#np-sv-hero::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(74,144,217,.3),transparent)}
#np-sv-hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 60% 40%,rgba(27,63,111,.12),transparent);pointer-events:none}
</style>
<section id="np-sv-hero">
<div class="np-wrap" style="position:relative;z-index:1">
  <div class="np-label">Soluções Técnicas</div>
  <h1 style="font-size:clamp(28px,4vw,52px);font-weight:800;color:${C.textHi};line-height:1.1;letter-spacing:-.025em;margin-bottom:20px;max-width:660px">Engenharia Aplicada<br>a Cada Cenário.</h1>
  <p style="font-size:15px;color:${C.textMid};max-width:540px;line-height:1.85">Quatro soluções de engenharia fotovoltaica — todas executadas sob o mesmo Protocolo Proprietário de rigor industrial.</p>
</div>
</section>`

const serviceCard = (num, titulo, subtitulo, desc, ideal, beneficios) => `
<div class="np-glass sv-card" style="display:grid;grid-template-columns:1fr 1fr;overflow:hidden;margin-bottom:16px">
  <div style="padding:48px 44px;border-right:1px solid ${C.line}">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
      <span style="font-size:9.5px;font-weight:700;letter-spacing:.22em;color:${C.blue400}">${num}</span>
      <div style="flex:1;height:1px;background:linear-gradient(90deg,${C.blue700},transparent)"></div>
    </div>
    <h2 style="font-size:22px;font-weight:800;color:${C.textHi};line-height:1.2;margin-bottom:8px">${titulo}</h2>
    <p style="font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:${C.blue400};margin-bottom:20px">${subtitulo}</p>
    <p style="font-size:13.5px;color:${C.textMid};line-height:1.85;margin-bottom:24px">${desc}</p>
    <div style="font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${C.textLo};margin-bottom:12px">Ideal Para</div>
    <p style="font-size:12.5px;color:${C.textLo};line-height:1.75;font-style:italic;margin:0">${ideal}</p>
  </div>
  <div style="padding:48px 44px;background:rgba(27,63,111,.04)">
    <div style="font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${C.textLo};margin-bottom:20px">Inclui</div>
    <ul style="list-style:none;display:flex;flex-direction:column;gap:14px;margin:0;padding:0">
      ${beneficios.map(b => `<li style="display:flex;gap:12px;align-items:flex-start"><span style="width:6px;height:6px;border-radius:50%;background:${C.blue500};flex-shrink:0;margin-top:6px"></span><span style="font-size:13px;color:${C.textMid};line-height:1.75">${b}</span></li>`).join('')}
    </ul>
  </div>
</div>`

const SERVICOS = `
<style>
#np-sv-cards{background:${C.bgBase};padding:96px 0}
.sv-card{margin-bottom:16px}
@media(max-width:800px){.sv-card{grid-template-columns:1fr!important}.sv-card>div:first-child{border-right:none!important;border-bottom:1px solid ${C.line}}}
</style>
<section id="np-sv-cards">
<div class="np-wrap">
  ${serviceCard('01','Geração Distribuída','Média e Baixa Tensão com Demanda Contratada','Engenharia de alta potência para grandes propriedades e negócios de alto padrão. Dimensionamos, projetamos e executamos sistemas fotovoltaicos conectados à rede com integração total à infraestrutura elétrica existente.','Residências de alto padrão, fazendas, indústrias e condomínios com consumo acima de 1.000 kWh/mês.',['Redução de até 95% na conta de energia','Retorno sobre investimento em 3 a 5 anos','Garantia de eficiência de 25 anos','Infraestrutura de Média Tensão com Demanda Contratada','Documentação completa e ART de engenharia'])}
  ${serviceCard('02','Geração Isolada & Backup','Autonomia energética total com baterias de lítio','Sistemas autônomos com bancos de bateria de lítio (vida útil de até 30 anos). Segurança energética ininterrupta, acionamento instantâneo e totalmente silencioso — sem diesel, sem emissões, sem ruído.','Propriedades em áreas rurais, regiões com instabilidade na rede e instalações críticas que não podem ter interrupção de energia.',['Banco de baterias de lítio com vida útil de 30 anos','Acionamento instantâneo em milissegundos','Zero ruído, zero emissões, zero combustível','Carga integral da propriedade em emergência','Monitoramento remoto 24/7'])}
  ${serviceCard('03','Auditoria e Manutenção de Performance','Validação técnica e otimização de sistemas existentes','Inspeção termográfica, análise de string, verificação de aterramento e laudos de integridade. Validamos e corrigimos sistemas instalados por terceiros — identificamos falhas de dimensionamento e perdas ocultas.','Sistemas instalados há mais de 2 anos, sistemas com queda de geração inexplicada, e sistemas adquiridos como parte de propriedade ou empresa.',['Inspeção termográfica de módulos e inversores','Análise de curva I-V e performance ratio','Verificação de aterramento e proteções elétricas','Laudo técnico assinado por engenheiro','Relatório de perdas e plano de correção'])}
  ${serviceCard('04','Estudo de Viabilidade Técnico-Financeira','Consultoria de engenharia antes de qualquer decisão','Consultoria de engenharia pura antes de qualquer proposta comercial. Analisamos irradiação, sombreamento, configuração elétrica e impacto estético. Se o projeto não fizer sentido técnico, nossa diretoria emitirá a recusa técnica formal.','Antes de qualquer investimento em energia solar. Essencial para projetos acima de 30 kWp ou propriedades de alto valor arquitetônico.',['Análise de irradiação e sombreamento in loco','Simulação energética com software profissional','Análise de viabilidade financeira com payback real','Estudo de impacto visual e construtivo','Parecer técnico formal da diretoria'])}
</div>
</section>`

const PROCESSO = `
<style>
#np-processo{background:${C.bgSurface};padding:96px 0;border-top:1px solid ${C.line}}
.np-proc-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;border:1px solid ${C.line};border-radius:14px;overflow:hidden}
.np-proc-card{padding:32px 24px;background:rgba(255,255,255,.03);transition:background .3s;border-right:1px solid ${C.line}}
.np-proc-card:last-child{border-right:none}
.np-proc-card:hover{background:rgba(27,63,111,.1)}
@media(max-width:900px){.np-proc-grid{grid-template-columns:1fr 1fr!important}.np-proc-card{border-right:1px solid ${C.line}!important;border-bottom:1px solid ${C.line}}.np-proc-card:nth-child(2n){border-right:none!important}}
@media(max-width:600px){.np-proc-grid{grid-template-columns:1fr!important}.np-proc-card{border-right:none!important}}
</style>
<section id="np-processo">
<div class="np-wrap">
  <div class="np-label">Metodologia</div>
  <h2 class="np-h2">Do Primeiro Contato<br>ao Start-up do Sistema.</h2>
  <p style="font-size:14.5px;color:${C.textMid};max-width:480px;line-height:1.8;margin-bottom:56px">Cinco etapas protocoladas. Cada uma documentada, fotografada e validada antes de avançar para a próxima.</p>
  <div class="np-proc-grid">
    <div class="np-proc-card"><div style="font-size:28px;font-weight:800;color:${C.blue800};line-height:1;margin-bottom:16px">01</div><h3 style="font-size:13px;font-weight:700;color:${C.textHi};line-height:1.3;margin-bottom:10px">Pré-qualificação</h3><p style="font-size:11.5px;color:${C.textLo};line-height:1.75;margin:0">Análise inicial do perfil de consumo, localização e objetivos do cliente para validar o enquadramento no protocolo.</p></div>
    <div class="np-proc-card"><div style="font-size:28px;font-weight:800;color:${C.blue800};line-height:1;margin-bottom:16px">02</div><h3 style="font-size:13px;font-weight:700;color:${C.textHi};line-height:1.3;margin-bottom:10px">Visita Técnica</h3><p style="font-size:11.5px;color:${C.textLo};line-height:1.75;margin:0">Vistoria presencial com levantamento de dados elétricos, estruturais e de irradiação. Documentação fotográfica completa.</p></div>
    <div class="np-proc-card"><div style="font-size:28px;font-weight:800;color:${C.blue800};line-height:1;margin-bottom:16px">03</div><h3 style="font-size:13px;font-weight:700;color:${C.textHi};line-height:1.3;margin-bottom:10px">Projeto e Aprovação</h3><p style="font-size:11.5px;color:${C.textLo};line-height:1.75;margin:0">Desenvolvimento do projeto elétrico, memorial de cálculo, ART e submissão à concessionária. Aprovação garantida.</p></div>
    <div class="np-proc-card"><div style="font-size:28px;font-weight:800;color:${C.blue800};line-height:1;margin-bottom:16px">04</div><h3 style="font-size:13px;font-weight:700;color:${C.textHi};line-height:1.3;margin-bottom:10px">Execução Protocolada</h3><p style="font-size:11.5px;color:${C.textLo};line-height:1.75;margin:0">Instalação com rastreabilidade total, cada etapa documentada e inspecionada pela diretoria antes do avanço.</p></div>
    <div class="np-proc-card"><div style="font-size:28px;font-weight:800;color:${C.blue800};line-height:1;margin-bottom:16px">05</div><h3 style="font-size:13px;font-weight:700;color:${C.textHi};line-height:1.3;margin-bottom:10px">Comissionamento</h3><p style="font-size:11.5px;color:${C.textLo};line-height:1.75;margin:0">Start-up técnico, testes elétricos, configuração de monitoramento e entrega de documentação completa ao cliente.</p></div>
  </div>
</div>
</section>`

const CTA = `
<style>#np-sv-cta{background:${C.bgBase};padding:80px 0;border-top:1px solid ${C.line}}</style>
<section id="np-sv-cta">
<div class="np-wrap" style="text-align:center">
  <div class="np-label" style="justify-content:center;margin-bottom:16px">Qualificação</div>
  <h2 class="np-h2" style="margin-bottom:12px">Seu Projeto se Qualifica?</h2>
  <p style="font-size:14px;color:${C.textMid};max-width:420px;margin:0 auto 32px;line-height:1.8">Nem todo projeto se enquadra no protocolo Neo Power. Solicite uma análise técnica gratuita e descubra se o seu perfil de consumo justifica a nossa engenharia.</p>
  <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
    <a href="/contato" class="np-btn-p">Solicitar Análise Técnica Gratuita</a>
    <a href="/projetos" class="np-btn-g">Ver Projetos Realizados</a>
  </div>
</div>
</section>`

// Galeria de projetos realizados. Dados fictícios — ajustar depois.
const PROJETOS_GAL = [
  { img: 'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20250107_190316_0001-scaled.jpg', nome: 'Paulo Sodré',     tipo: 'Residencial Alto Padrão', dados: '92 kWp · Itaipava — RJ',         pos: 'center' },
  { img: 'https://neopowerenergia.com.br/wp-content/uploads/2026/05/DJI_0608-scaled.jpg',                  nome: 'Marina Castro',    tipo: 'Usina Solo',             dados: '210 kWp · Média Tensão',         pos: 'center 72%' },
  { img: 'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20220304_135550_0199-scaled.jpg',  nome: 'Eduardo Lima',     tipo: 'Industrial — MT',        dados: '120 kWp · Demanda Contratada',   pos: 'center' },
  { img: 'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20200310_180525_0006-scaled.jpg',  nome: 'Ricardo Menezes',  tipo: 'Comercial',              dados: '48 kWp · Petrópolis — RJ',       pos: 'center' },
  { img: 'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20200603_135750_0063-scaled.jpg',  nome: 'Fernando Alves',   tipo: 'Residencial',            dados: '36 kWp · Teresópolis — RJ',      pos: 'center' },
  { img: 'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20240130_185623_0430-scaled.jpg',  nome: 'Beatriz Tavares',  tipo: 'Rural / Agro',           dados: '75 kWp · Demanda Contratada',    pos: 'center 60%' },
]

const galCard = p => `
  <div class="np-gal-card">
    <img class="np-gal-img" src="${p.img}" alt="${p.nome}" loading="lazy" style="object-position:${p.pos || 'center'}" onerror="this.style.display='none'">
    <div class="np-gal-meta">
      <div class="np-gal-tipo">${p.tipo}</div>
      <div class="np-gal-name">${p.nome}</div>
      <div class="np-gal-data">${p.dados}</div>
    </div>
  </div>`

const GALERIA = `
<style>
#np-galeria{background:${C.bgBase};padding:96px 0;border-top:1px solid ${C.line}}
.np-gal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:48px}
.np-gal-card{position:relative;aspect-ratio:4/3;overflow:hidden;border:1px solid ${C.line};background:linear-gradient(135deg,#0C1221,#080D1A);border-radius:0}
.np-gal-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;display:block;transition:transform .5s ease}
.np-gal-card:hover .np-gal-img{transform:scale(1.05)}
.np-gal-meta{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:22px 18px 16px;background:linear-gradient(to top,rgba(4,7,14,.94),rgba(4,7,14,.45) 55%,transparent)}
.np-gal-tipo{font-size:9px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${C.blue400};margin-bottom:7px}
.np-gal-name{font-size:15px;font-weight:800;color:#fff;letter-spacing:-.01em;margin-bottom:3px}
.np-gal-data{font-size:11px;font-weight:600;letter-spacing:.04em;color:${C.textMid}}
@media(max-width:900px){.np-gal-grid{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.np-gal-grid{grid-template-columns:1fr}}
</style>
<section id="np-galeria">
<div class="np-wrap">
  <div class="np-label">Projetos Realizados</div>
  <h2 class="np-h2">Engenharia Entregue<br>em Campo.</h2>
  <p style="font-size:14.5px;color:${C.textMid};max-width:480px;line-height:1.8">Seleção de projetos executados sob o Protocolo Proprietário — da residência de alto padrão à usina de solo em Média Tensão.</p>
  <div class="np-gal-grid">
    ${PROJETOS_GAL.map(galCard).join('')}
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
.np-footer-links a,.np-fc a{color:${C.textLo};text-decoration:none;transition:color .2s;font-size:13.5px}
.np-footer-links a:hover,.np-fc a:hover{color:${C.textHi}}
.np-footer-bottom{border-top:1px solid ${C.line};padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
@media(max-width:768px){.np-footer-grid{grid-template-columns:1fr!important;gap:40px!important}.np-footer-body{padding:44px 24px 32px!important}}
</style>
<footer class="np-footer">
  <div class="np-footer-glow"></div>
  <div class="np-footer-body">
    <div class="np-footer-grid">
      <div><img src="https://neopowerenergia.com.br/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png" alt="Neo Power" style="height:146px;width:auto;object-fit:contain;margin-bottom:18px;display:block" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px">NEO POWER</span><p style="font-size:13px;color:${C.textLo};line-height:1.75;max-width:270px;margin-bottom:24px">Engenharia fotovoltaica de alta complexidade. Tolerância zero a falhas, protocolo proprietário de execução.</p></div>
      <div><p style="font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:22px">Menu</p><ul class="np-footer-links"><li><a href="/">Home</a></li><li><a href="/quem-somos">Quem Somos</a></li><li><a href="/projetos">Projetos</a></li><li><a href="/servicos">Serviços</a></li><li><a href="/contato">Contato</a></li></ul></div>
      <div><p style="font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:22px">Contato</p><div class="np-fc" style="font-size:13.5px;color:${C.textLo};line-height:2"><a href="https://wa.me/5524981114255" target="_blank" rel="noopener">(24) 9 8111-4255</a><br><a href="mailto:neopowerbr@gmail.com">neopowerbr@gmail.com</a><br>Est. União e Indústria, 9200<br>Loja D5 — Itaipava, Petrópolis · RJ</div></div>
    </div>
    <div class="np-footer-bottom"><span style="font-size:11.5px;color:${C.textLo};opacity:.6">© 2026 Neo Power · CNPJ 40.904.108/0001-23 · Todos os direitos reservados.</span><a href="/politicas" style="font-size:11.5px;color:${C.textLo};opacity:.6;text-decoration:none">Políticas de Privacidade</a></div>
  </div>
</footer>`

const pageData = [htmlSec(NAVBAR), htmlSec(HERO), htmlSec(SERVICOS), htmlSec(GALERIA), htmlSec(PROCESSO), htmlSec(CTA), htmlSec(FOOTER)]

async function run() {
  console.log('⚙️  Construindo página Serviços...\n')
  const existing = await wpFetch('pages?slug=servicos&per_page=1')
  const payload = {
    title: 'Serviços', slug: 'servicos', status: 'publish', template: 'elementor_canvas',
    meta: { _elementor_edit_mode: 'builder', _elementor_template_type: 'wp-page', _elementor_version: '3.0.0', _elementor_data: JSON.stringify(pageData), _elementor_page_settings: { hide_title: 'yes' } },
  }
  const result = existing.length > 0
    ? await wpFetch(`pages/${existing[0].id}`, { method: 'POST', body: JSON.stringify(payload) })
    : await wpFetch('pages', { method: 'POST', body: JSON.stringify(payload) })
  console.log(`✅  Serviços publicada: ${result.link}`)
}

run().catch(err => { console.error(err.message); process.exit(1) })
