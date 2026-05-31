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
  blue700: '#1B3F6F', blue600: '#23508C', blue500: '#2B5EA7', blue400: '#4A90D9',
  textHi: '#EEF0F6', textMid: '#7D869E', textLo: '#3E4459',
  line: 'rgba(255,255,255,0.065)',
}

const secoes = [
  {
    id: 'privacidade',
    titulo: 'Política de Privacidade',
    items: [
      { sub: '1. Quem Somos', texto: 'A Neo Power Engenharia Fotovoltaica, inscrita no CNPJ 40.904.108/0001-23, com sede na Estrada União e Indústria, 9200, Loja D5 — Itaipava, Petrópolis, RJ, é responsável pelo tratamento dos dados pessoais coletados neste site.' },
      { sub: '2. Dados que Coletamos', texto: 'Coletamos apenas os dados fornecidos voluntariamente por você no formulário de contato: nome completo, empresa, localização do imóvel, dados de consumo elétrico, tipo de telhado e informações que você nos fornece sobre seu projeto. Não coletamos dados sensíveis.' },
      { sub: '3. Finalidade do Tratamento', texto: 'Os dados coletados são utilizados exclusivamente para: (a) análise técnica de viabilidade do projeto fotovoltaico; (b) contato comercial e técnico; (c) elaboração de propostas e documentação de engenharia. Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.' },
      { sub: '4. Base Legal', texto: 'O tratamento de dados é fundamentado no legítimo interesse (art. 7°, IX, LGPD) para análise técnica preliminar, e no consentimento (art. 7°, I, LGPD) quando aplicável. Ao preencher o formulário, você consente com o tratamento conforme descrito nesta política.' },
      { sub: '5. Retenção de Dados', texto: 'Mantemos seus dados pelo período necessário para a prestação dos serviços e pelo prazo legal aplicável, geralmente por até 5 anos após o encerramento do relacionamento. Você pode solicitar a exclusão a qualquer momento, salvo quando a retenção for legalmente exigida.' },
      { sub: '6. Seus Direitos (LGPD)', texto: 'Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a: confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar a anonimização ou exclusão, revogar o consentimento e obter informações sobre compartilhamento. Para exercer esses direitos, entre em contato pelo e-mail neopowerbr@gmail.com.' },
      { sub: '7. Segurança', texto: 'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda acidental ou destruição. Nenhum sistema é absolutamente seguro, mas mantemos boas práticas de segurança da informação.' },
    ],
  },
  {
    id: 'termos',
    titulo: 'Termos de Uso',
    items: [
      { sub: '1. Aceitação', texto: 'Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Se não concordar com qualquer parte, recomendamos que não utilize o site.' },
      { sub: '2. Conteúdo do Site', texto: 'Todo o conteúdo deste site — textos, imagens, dados técnicos, metodologias e descrições de serviços — é de propriedade exclusiva da Neo Power Engenharia Fotovoltaica e protegido por direitos autorais. É vedada a reprodução total ou parcial sem autorização expressa.' },
      { sub: '3. Uso do Formulário de Contato', texto: 'O formulário de contato destina-se exclusivamente a solicitações legítimas de análise técnica fotovoltaica. É proibido o uso para fins de spam, coleta de dados, automação não autorizada ou qualquer finalidade diversa da prevista.' },
      { sub: '4. Limitação de Responsabilidade', texto: 'As informações disponíveis neste site têm caráter informativo e não constituem proposta técnica formal. Qualquer análise, dimensionamento ou proposta comercial será fornecida exclusivamente mediante estudo técnico individual. A Neo Power não se responsabiliza por decisões tomadas com base exclusivamente nas informações do site.' },
      { sub: '5. Links Externos', texto: 'Este site pode conter links para sites externos. A Neo Power não tem controle sobre o conteúdo desses sites e não se responsabiliza por suas práticas de privacidade ou políticas.' },
      { sub: '6. Modificações', texto: 'Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações relevantes serão comunicadas por meio de aviso no site. O uso continuado após as alterações implica aceitação dos novos termos.' },
      { sub: '7. Foro', texto: 'Para dirimir quaisquer controvérsias decorrentes destes termos, fica eleito o foro da Comarca de Petrópolis, Estado do Rio de Janeiro, com renúncia a qualquer outro, por mais privilegiado que seja.' },
    ],
  },
  {
    id: 'cookies',
    titulo: 'Política de Cookies',
    items: [
      { sub: '1. O que são Cookies', texto: 'Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles são amplamente utilizados para garantir o funcionamento correto do site e fornecer informações aos proprietários.' },
      { sub: '2. Cookies que Utilizamos', texto: 'Este site utiliza apenas cookies essenciais para o funcionamento básico da navegação. Não utilizamos cookies de rastreamento, publicidade ou análise de comportamento sem seu consentimento explícito.' },
      { sub: '3. Como Gerenciar Cookies', texto: 'Você pode controlar e/ou excluir cookies como desejar. Pode excluir todos os cookies que já estão no seu dispositivo e configurar a maioria dos navegadores para não aceitá-los. No entanto, ao fazer isso, talvez seja necessário ajustar manualmente algumas preferências toda vez que visitar um site.' },
      { sub: '4. Contato', texto: 'Para dúvidas sobre nossa política de cookies, entre em contato pelo e-mail neopowerbr@gmail.com.' },
    ],
  },
]

const indiceHtml = secoes.map(s =>
  `<a href="#${s.id}" class="np-btn-g" style="padding:8px 18px;font-size:11px">${s.titulo}</a>`
).join('')

const secoesHtml = secoes.map(s => `
  <div id="${s.id}" style="scroll-margin-top:100px">
    <h2 style="font-size:clamp(18px,2vw,26px);font-weight:800;color:${C.textHi};letter-spacing:-.02em;margin:0 0 40px;padding-bottom:20px;border-bottom:1px solid ${C.line}">${s.titulo}</h2>
    <div style="display:flex;flex-direction:column;gap:28px">
      ${s.items.map(it => `
        <div>
          <h3 style="font-size:13px;font-weight:700;color:${C.textHi};margin:0 0 10px;letter-spacing:.01em">${it.sub}</h3>
          <p style="font-size:13.5px;color:${C.textMid};line-height:1.85;margin:0">${it.texto}</p>
        </div>
      `).join('')}
    </div>
  </div>
`).join('')

const PAGE = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
*{font-family:'Plus Jakarta Sans',sans-serif!important}
.np-wrap{max-width:1280px;margin:0 auto;padding:0 48px}
.np-label{display:inline-flex;align-items:center;gap:10px;font-size:10px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:${C.blue400};margin-bottom:12px}
.np-label::before{content:'';width:18px;height:1.5px;background:linear-gradient(135deg,#1B3F6F,#2B5EA7,#4A90D9);border-radius:99px;flex-shrink:0}
.np-glass{background:rgba(255,255,255,.03);border:1px solid ${C.line};backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:14px;box-shadow:0 4px 24px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.04);position:relative;overflow:hidden}
.np-btn-g{display:inline-flex;align-items:center;justify-content:center;background:transparent;color:${C.textHi};font-size:11.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:13px 26px;text-decoration:none;border:1px solid rgba(255,255,255,.18);border-radius:0;transition:all .25s;white-space:nowrap}
.np-btn-g:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.35);transform:translateY(-1px)}
.np-pol-link{color:${C.blue400};text-decoration:none}
.np-pol-link:hover{text-decoration:underline}
.np-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:56px;margin-bottom:52px}
@media(max-width:768px){.np-wrap{padding:0 24px}.np-footer-grid{grid-template-columns:1fr!important;gap:40px!important}}
</style>

<section style="background:${C.bgSurface};padding:160px 0 60px;border-bottom:1px solid ${C.line};position:relative;overflow:hidden">
  <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(74,144,217,.3),transparent)"></div>
  <div class="np-wrap" style="position:relative;z-index:1">
    <div class="np-label">Documentos Legais</div>
    <h1 style="font-size:clamp(24px,3.5vw,44px);font-weight:800;color:${C.textHi};line-height:1.15;letter-spacing:-.025em;margin:12px 0 16px">Políticas e Termos de Uso</h1>
    <p style="font-size:14px;color:${C.textMid};max-width:520px;line-height:1.8;margin:0">Última atualização: 20 de maio de 2026. Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:28px">${indiceHtml}</div>
  </div>
</section>

<section style="padding:80px 0;background:${C.bgBase}">
  <div class="np-wrap">
    <div style="max-width:760px;display:flex;flex-direction:column;gap:72px">
      ${secoesHtml}

      <div class="np-glass" style="padding:28px 32px;border-left:2px solid ${C.blue600}">
        <div style="font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${C.blue400};margin-bottom:12px">Encarregado de Proteção de Dados</div>
        <p style="font-size:13px;color:${C.textMid};line-height:1.8;margin:0 0 12px">Para exercer seus direitos como titular de dados ou esclarecer dúvidas sobre nossas políticas:</p>
        <div style="font-size:13.5px;color:${C.textHi};line-height:2">
          <div><strong style="color:${C.textMid};font-weight:600">E-mail:</strong> <a href="mailto:neopowerbr@gmail.com" class="np-pol-link">neopowerbr@gmail.com</a></div>
          <div><strong style="color:${C.textMid};font-weight:600">Telefone:</strong> <a href="tel:+5524981114255" style="color:${C.textMid};text-decoration:none">(24) 9 8111-4255</a></div>
          <div><strong style="color:${C.textMid};font-weight:600">CNPJ:</strong> 40.904.108/0001-23</div>
        </div>
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
  console.log('📜  Construindo página Políticas...\n')
  const existing = await wpFetch('pages?slug=politicas&per_page=1')
  const payload = {
    title: 'Políticas', slug: 'politicas', status: 'publish', template: 'elementor_canvas',
    meta: { _elementor_edit_mode: 'builder', _elementor_template_type: 'wp-page', _elementor_version: '3.0.0', _elementor_data: JSON.stringify(pageData), _elementor_page_settings: { hide_title: 'yes' } },
  }
  const result = existing.length > 0
    ? await wpFetch(`pages/${existing[0].id}`, { method: 'POST', body: JSON.stringify(payload) })
    : await wpFetch('pages', { method: 'POST', body: JSON.stringify(payload) })
  console.log(`✅  Políticas publicada: ${result.link}`)
}

run().catch(err => { console.error(err.message); process.exit(1) })
