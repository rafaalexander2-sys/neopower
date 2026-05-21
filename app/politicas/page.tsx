import type { Metadata } from 'next'
import NavbarInner from '@/components/NavbarInner'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Políticas de Privacidade e Termos de Uso | Neo Power',
  description: 'Políticas de privacidade, termos de uso e política de cookies da Neo Power Engenharia Fotovoltaica.',
}

const secoes = [
  {
    id: 'privacidade',
    titulo: 'Política de Privacidade',
    items: [
      {
        sub: '1. Quem Somos',
        texto: 'A Neo Power Engenharia Fotovoltaica, inscrita no CNPJ 40.904.108/0001-23, com sede na Estrada União e Indústria, 9200, Loja D5 — Itaipava, Petrópolis, RJ, é responsável pelo tratamento dos dados pessoais coletados neste site.',
      },
      {
        sub: '2. Dados que Coletamos',
        texto: 'Coletamos apenas os dados fornecidos voluntariamente por você no formulário de contato: nome completo, empresa, localização do imóvel, dados de consumo elétrico, tipo de telhado e informações que você nos fornece sobre seu projeto. Não coletamos dados sensíveis.',
      },
      {
        sub: '3. Finalidade do Tratamento',
        texto: 'Os dados coletados são utilizados exclusivamente para: (a) análise técnica de viabilidade do projeto fotovoltaico; (b) contato comercial e técnico; (c) elaboração de propostas e documentação de engenharia. Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.',
      },
      {
        sub: '4. Base Legal',
        texto: 'O tratamento de dados é fundamentado no legítimo interesse (art. 7°, IX, LGPD) para análise técnica preliminar, e no consentimento (art. 7°, I, LGPD) quando aplicável. Ao preencher o formulário, você consente com o tratamento conforme descrito nesta política.',
      },
      {
        sub: '5. Retenção de Dados',
        texto: 'Mantemos seus dados pelo período necessário para a prestação dos serviços e pelo prazo legal aplicável, geralmente por até 5 anos após o encerramento do relacionamento. Você pode solicitar a exclusão a qualquer momento, salvo quando a retenção for legalmente exigida.',
      },
      {
        sub: '6. Seus Direitos (LGPD)',
        texto: 'Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a: confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar a anonimização ou exclusão, revogar o consentimento e obter informações sobre compartilhamento. Para exercer esses direitos, entre em contato pelo e-mail neopowerbr@gmail.com.',
      },
      {
        sub: '7. Segurança',
        texto: 'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda acidental ou destruição. Nenhum sistema é absolutamente seguro, mas mantemos boas práticas de segurança da informação.',
      },
    ],
  },
  {
    id: 'termos',
    titulo: 'Termos de Uso',
    items: [
      {
        sub: '1. Aceitação',
        texto: 'Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Se não concordar com qualquer parte, recomendamos que não utilize o site.',
      },
      {
        sub: '2. Conteúdo do Site',
        texto: 'Todo o conteúdo deste site — textos, imagens, dados técnicos, metodologias e descrições de serviços — é de propriedade exclusiva da Neo Power Engenharia Fotovoltaica e protegido por direitos autorais. É vedada a reprodução total ou parcial sem autorização expressa.',
      },
      {
        sub: '3. Uso do Formulário de Contato',
        texto: 'O formulário de contato destina-se exclusivamente a solicitações legítimas de análise técnica fotovoltaica. É proibido o uso para fins de spam, coleta de dados, automação não autorizada ou qualquer finalidade diversa da prevista.',
      },
      {
        sub: '4. Limitação de Responsabilidade',
        texto: 'As informações disponíveis neste site têm caráter informativo e não constituem proposta técnica formal. Qualquer análise, dimensionamento ou proposta comercial será fornecida exclusivamente mediante estudo técnico individual. A Neo Power não se responsabiliza por decisões tomadas com base exclusivamente nas informações do site.',
      },
      {
        sub: '5. Links Externos',
        texto: 'Este site pode conter links para sites externos. A Neo Power não tem controle sobre o conteúdo desses sites e não se responsabiliza por suas práticas de privacidade ou políticas.',
      },
      {
        sub: '6. Modificações',
        texto: 'Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações relevantes serão comunicadas por meio de aviso no site. O uso continuado após as alterações implica aceitação dos novos termos.',
      },
      {
        sub: '7. Foro',
        texto: 'Para dirimir quaisquer controvérsias decorrentes destes termos, fica eleito o foro da Comarca de Petrópolis, Estado do Rio de Janeiro, com renúncia a qualquer outro, por mais privilegiado que seja.',
      },
    ],
  },
  {
    id: 'cookies',
    titulo: 'Política de Cookies',
    items: [
      {
        sub: '1. O que são Cookies',
        texto: 'Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles são amplamente utilizados para garantir o funcionamento correto do site e fornecer informações aos proprietários.',
      },
      {
        sub: '2. Cookies que Utilizamos',
        texto: 'Este site utiliza apenas cookies essenciais para o funcionamento básico da navegação. Não utilizamos cookies de rastreamento, publicidade ou análise de comportamento sem seu consentimento explícito.',
      },
      {
        sub: '3. Como Gerenciar Cookies',
        texto: 'Você pode controlar e/ou excluir cookies como desejar. Pode excluir todos os cookies que já estão no seu dispositivo e configurar a maioria dos navegadores para não aceitá-los. No entanto, ao fazer isso, talvez seja necessário ajustar manualmente algumas preferências toda vez que visitar um site.',
      },
      {
        sub: '4. Contato',
        texto: 'Para dúvidas sobre nossa política de cookies, entre em contato pelo e-mail neopowerbr@gmail.com.',
      },
    ],
  },
]

export default function Politicas() {
  return (
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      <NavbarInner />

      {/* Hero */}
      <section style={{
        background: 'var(--bg-surface)',
        paddingTop: 160, paddingBottom: 60,
        borderBottom: '1px solid var(--line)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(74,144,217,0.3),transparent)' }} />
        <div className="wrap">
          <div className="sec-label">Documentos Legais</div>
          <h1 style={{
            fontSize: 'clamp(24px,3.5vw,44px)',
            fontWeight: 800, color: 'var(--text-hi)',
            lineHeight: 1.15, letterSpacing: '-0.025em',
            marginBottom: 16, marginTop: 12,
          }}>
            Políticas e Termos de Uso
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-mid)', maxWidth: 520, lineHeight: 1.8 }}>
            Última atualização: 20 de maio de 2026. Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).
          </p>

          {/* Índice */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            {secoes.map(s => (
              <a key={s.id} href={`#${s.id}`} className="btn-ghost" style={{ padding: '8px 18px', fontSize: 11 }}>
                {s.titulo}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section style={{ padding: '80px 0', background: 'var(--bg-base)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: 72 }}>
            {secoes.map(secao => (
              <div key={secao.id} id={secao.id} style={{ scrollMarginTop: 100 }}>
                <h2 style={{
                  fontSize: 'clamp(18px,2vw,26px)',
                  fontWeight: 800, color: 'var(--text-hi)',
                  letterSpacing: '-0.02em', marginBottom: 40,
                  paddingBottom: 20, borderBottom: '1px solid var(--line)',
                }}>
                  {secao.titulo}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  {secao.items.map((item, i) => (
                    <div key={i}>
                      <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-hi)', marginBottom: 10, letterSpacing: '0.01em' }}>
                        {item.sub}
                      </h3>
                      <p style={{ fontSize: 13.5, color: 'var(--text-mid)', lineHeight: 1.85 }}>
                        {item.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contato DPO */}
            <div className="glass" style={{ padding: '28px 32px', borderLeft: '2px solid var(--blue-600)' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue-400)', marginBottom: 12 }}>
                Encarregado de Proteção de Dados
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 12 }}>
                Para exercer seus direitos como titular de dados ou esclarecer dúvidas sobre nossas políticas:
              </p>
              <div style={{ fontSize: 13.5, color: 'var(--text-hi)', lineHeight: 2 }}>
                <div><strong style={{ color: 'var(--text-mid)', fontWeight: 600 }}>E-mail:</strong> <a href="mailto:neopowerbr@gmail.com" style={{ color: 'var(--blue-400)', textDecoration: 'none' }}>neopowerbr@gmail.com</a></div>
                <div><strong style={{ color: 'var(--text-mid)', fontWeight: 600 }}>Telefone:</strong> <a href="tel:+5524981114255" style={{ color: 'var(--text-mid)', textDecoration: 'none' }}>(24) 9 8111-4255</a></div>
                <div><strong style={{ color: 'var(--text-mid)', fontWeight: 600 }}>CNPJ:</strong> 40.904.108/0001-23</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
