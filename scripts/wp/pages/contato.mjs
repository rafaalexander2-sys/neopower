import { wpFetch } from '../client.mjs'
import { NAVBAR, WA_BUTTON } from '../shared.mjs'
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

const PAGE = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
*{font-family:'Plus Jakarta Sans',sans-serif!important}
.np-wrap{max-width:1280px;margin:0 auto;padding:0 48px}
.np-label{display:inline-flex;align-items:center;gap:10px;font-size:10px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:${C.blue400};margin-bottom:12px}
.np-label::before{content:'';width:18px;height:1.5px;background:linear-gradient(135deg,#1B3F6F,#2B5EA7,#4A90D9);border-radius:99px;flex-shrink:0}
.np-glass{background:rgba(255,255,255,.03);border:1px solid ${C.line};backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:14px;box-shadow:0 4px 24px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.04);position:relative;overflow:hidden}
.np-btn-p{display:inline-flex;align-items:center;justify-content:center;background:${C.blue500};color:#fff;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:13px 26px;text-decoration:none;border-radius:0;border:none;cursor:pointer;transition:background .2s,transform .2s;white-space:nowrap;width:100%;margin-top:4px;box-sizing:border-box}
.np-btn-p:hover{background:${C.blue400};transform:translateY(-1px)}
.np-input{width:100%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.28);color:${C.textHi};font-size:13.5px;padding:12px 15px;outline:none;border-radius:0!important;transition:border-color .2s,background .2s;box-sizing:border-box}
.np-input:focus{border-color:${C.blue400};background:rgba(43,94,167,.06)}
.np-input::placeholder{color:rgba(255,255,255,.22)}
.np-f-lbl{display:block;font-size:9.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${C.textLo};margin-bottom:7px}
.np-f-grp{margin-bottom:14px}
.np-f-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
.np-ct-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
.np-ct-info-item{padding-bottom:24px;margin-bottom:24px;border-bottom:1px solid ${C.line}}
.np-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:56px;margin-bottom:52px}
@media(max-width:900px){.np-ct-grid{grid-template-columns:1fr!important;gap:52px!important}.np-wrap{padding:0 24px}}
@media(max-width:768px){.np-footer-grid{grid-template-columns:1fr!important;gap:40px!important}}
@media(max-width:600px){.np-f-row{grid-template-columns:1fr!important}}
</style>

<section style="background:${C.bgSurface};padding:160px 0 60px;border-bottom:1px solid ${C.line};position:relative;overflow:hidden">
  <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(74,144,217,.3),transparent)"></div>
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 60% 40%,rgba(27,63,111,.12),transparent);pointer-events:none"></div>
  <div class="np-wrap" style="position:relative;z-index:1">
    <div class="np-label">Iniciar Projeto</div>
    <h1 style="font-size:clamp(28px,4vw,52px);font-weight:800;color:${C.textHi};line-height:1.1;letter-spacing:-.025em;margin-bottom:20px;max-width:640px">Solicite Sua Auditoria<br>Técnica Gratuita.</h1>
    <p style="font-size:15px;color:${C.textMid};max-width:520px;line-height:1.85">Não trabalhamos com orçamentos genéricos. Cada projeto exige análise técnica preliminar antes de qualquer proposta. Preencha o formulário para iniciar a qualificação.</p>
  </div>
</section>

<section style="background:${C.bgBase};padding:100px 0">
<div class="np-wrap">
  <div class="np-ct-grid">
    <div>
      <div class="np-label">Iniciar Projeto</div>
      <h2 style="font-size:clamp(22px,3vw,34px);font-weight:800;color:${C.textHi};line-height:1.15;letter-spacing:-.02em;margin-bottom:14px">Inicie o Seu Estudo de Viabilidade.</h2>
      <p style="font-size:13.5px;color:${C.textMid};line-height:1.85;margin-bottom:36px">Não fornecemos orçamentos genéricos. Para manter o rigor de nossa entrega, filtramos cada solicitação através de uma análise técnica preliminar.</p>
      <form action="https://formsubmit.co/neopowerbr@gmail.com" method="POST" style="display:flex;flex-direction:column">
        <input type="hidden" name="_subject" value="Nova solicitação — site Neo Power (Contato)">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://neopowerenergia.com.br/?enviado=1">
        <div class="np-f-row">
          <div><label class="np-f-lbl">Nome Completo</label><input class="np-input" type="text" name="Nome" placeholder="Seu nome" required></div>
          <div><label class="np-f-lbl">Empresa</label><input class="np-input" type="text" name="Empresa" placeholder="Empresa ou patrimônio"></div>
        </div>
        <div class="np-f-grp"><label class="np-f-lbl">Localização do Imóvel</label><input class="np-input" type="text" name="Localizacao" placeholder="Cidade, bairro ou endereço" required></div>
        <div class="np-f-row">
          <div><label class="np-f-lbl">Consumo Médio / Demanda Contratada</label><input class="np-input" type="text" name="Consumo" placeholder="Ex.: 1.200 kWh ou 50 kW"></div>
          <div><label class="np-f-lbl">Tipo de Telhado / Estrutura</label><select class="np-input" name="Tipo de Telhado" style="cursor:pointer"><option value="">Selecione</option><option>Telhado cerâmico</option><option>Telhado metálico (trapezoidal)</option><option>Laje</option><option>Fibrocimento</option><option>Solo / Estrutura dedicada</option><option>Outro</option></select></div>
        </div>
        <div class="np-f-grp"><label class="np-f-lbl">O que é inegociável no seu projeto?</label><textarea class="np-input" name="Inegociavel" rows="4" placeholder="Descreva exigências estéticas, restrições técnicas, prazos ou qualquer aspecto que não pode ser comprometido." style="resize:vertical"></textarea></div>
        <button type="submit" class="np-btn-p">Enviar Solicitação</button>
      </form>
    </div>
    <div style="padding-top:8px">
      <div style="margin-bottom:28px">${WA_BUTTON}</div>
      <div class="np-ct-info-item"><div style="font-size:9.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:10px">Telefone / WhatsApp</div><a href="https://wa.me/5524981114255" target="_blank" rel="noopener" style="font-size:14.5px;color:${C.textMid};text-decoration:none">(24) 9 8111-4255</a></div>
      <div class="np-ct-info-item"><div style="font-size:9.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:10px">Horário de Atendimento</div><span style="font-size:14.5px;color:${C.textMid}">Segunda a Sexta · 9h às 18h</span></div>
      <div class="np-ct-info-item"><div style="font-size:9.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:10px">Escritório Técnico</div><div style="font-size:13.5px;color:${C.textMid};line-height:1.9">Estrada União e Indústria, 9200<br>Loja D5 — Itaipava<br>Petrópolis — RJ<br><span style="display:block;margin-top:8px;font-size:11.5px;color:${C.blue400};font-weight:600;letter-spacing:.04em">Atendimento exclusivamente por agendamento.</span></div></div>
      <div class="np-ct-info-item"><div style="font-size:9.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:10px">CNPJ</div><span style="font-size:13.5px;color:${C.textMid}">40.904.108/0001-23</span></div>
      <div class="np-glass" style="padding:22px 24px;border-left:2px solid ${C.blue700}"><p style="font-size:12.5px;color:${C.textLo};line-height:1.8;margin:0"><strong style="color:${C.textMid};font-weight:600">Por que um formulário de qualificação?</strong><br>Não trabalhamos com orçamentos genéricos. Cada projeto exige análise técnica preliminar — irradiação, consumo, configuração elétrica, tipo de telhado — antes de qualquer proposta.</p></div>
    </div>
  </div>
</div>
</section>

<footer style="background:${C.bgSurface};border-top:1px solid ${C.line}">
  <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(74,144,217,.25),transparent)"></div>
  <div style="max-width:1180px;margin:0 auto;padding:60px 48px 36px">
    <div class="np-footer-grid">
      <div><img src="https://neopowerenergia.com.br/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png" alt="Neo Power" style="height:146px;width:auto;object-fit:contain;margin-bottom:18px;display:block" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px">NEO POWER</span><p style="font-size:13px;color:${C.textLo};line-height:1.75;max-width:270px">Engenharia fotovoltaica de alta complexidade. Tolerância zero a falhas.</p></div>
      <div><p style="font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:22px">Menu</p><div style="display:flex;flex-direction:column;gap:13px"><a href="/" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Home</a><a href="/quem-somos" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Quem Somos</a><a href="/projetos" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Projetos</a><a href="/servicos" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Serviços</a><a href="/contato" style="font-size:13.5px;color:${C.textLo};text-decoration:none">Contato</a></div></div>
      <div><p style="font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.textLo};margin-bottom:22px">Contato</p><div style="font-size:13.5px;color:${C.textLo};line-height:2"><a href="https://wa.me/5524981114255" target="_blank" rel="noopener" style="color:${C.textLo};text-decoration:none">(24) 9 8111-4255</a><br><a href="mailto:neopowerbr@gmail.com" style="color:${C.textLo};text-decoration:none">neopowerbr@gmail.com</a><br>Est. União e Indústria, 9200<br>Loja D5 — Itaipava, Petrópolis · RJ</div></div>
    </div>
    <div style="border-top:1px solid ${C.line};padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
      <span style="font-size:11.5px;color:${C.textLo};opacity:.6">© 2026 Neo Power · CNPJ 40.904.108/0001-23 · Todos os direitos reservados. · <a href="https://casacriative.com.br/sites-e-landing-pages" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">Design by Casa Criative Digital</a></span>
      <a href="/politicas" style="font-size:11.5px;color:${C.textLo};opacity:.6;text-decoration:none">Políticas de Privacidade</a>
    </div>
  </div>
</footer>`

const pageData = [htmlSec(NAVBAR), htmlSec(PAGE)]

async function run() {
  console.log('📬  Construindo página Contato...\n')
  const existing = await wpFetch('pages?slug=contato&per_page=1')
  const payload = {
    title: 'Contato', slug: 'contato', status: 'publish', template: 'elementor_canvas',
    meta: { _elementor_edit_mode: 'builder', _elementor_template_type: 'wp-page', _elementor_version: '3.0.0', _elementor_data: JSON.stringify(pageData), _elementor_page_settings: { hide_title: 'yes' } },
  }
  const result = existing.length > 0
    ? await wpFetch(`pages/${existing[0].id}`, { method: 'POST', body: JSON.stringify(payload) })
    : await wpFetch('pages', { method: 'POST', body: JSON.stringify(payload) })
  console.log(`✅  Contato publicada: ${result.link}`)
}

run().catch(err => { console.error(err.message); process.exit(1) })
