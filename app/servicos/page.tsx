import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarInner from '@/components/NavbarInner'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export const metadata: Metadata = {
  title: 'Serviços | Neo Power Engenharia Fotovoltaica',
  description: 'Geração Distribuída, Geração Isolada & Backup, Auditoria de Performance e Estudo de Viabilidade. Engenharia fotovoltaica de alta complexidade em Petrópolis, RJ.',
}

const servicos = [
  {
    num: '01',
    titulo: 'Geração Distribuída',
    subtitulo: 'Média e Baixa Tensão com Demanda Contratada',
    desc: 'Engenharia de alta potência para grandes propriedades e negócios de alto padrão. Dimensionamos, projetamos e executamos sistemas fotovoltaicos conectados à rede com integração total à infraestrutura elétrica existente.',
    beneficios: [
      'Redução de até 95% na conta de energia',
      'Retorno sobre investimento em 3 a 5 anos',
      'Garantia de eficiência de 25 anos',
      'Infraestrutura de Média Tensão com Demanda Contratada',
      'Documentação completa e ART de engenharia',
    ],
    ideal: 'Residências de alto padrão, fazendas, indústrias e condomínios com consumo acima de 1.000 kWh/mês.',
  },
  {
    num: '02',
    titulo: 'Geração Isolada & Backup',
    subtitulo: 'Autonomia energética total com baterias de lítio',
    desc: 'Sistemas autônomos com bancos de bateria de lítio (vida útil de até 30 anos). Segurança energética ininterrupta, acionamento instantâneo e totalmente silencioso — sem diesel, sem emissões, sem ruído.',
    beneficios: [
      'Banco de baterias de lítio com vida útil de 30 anos',
      'Acionamento instantâneo em milissegundos',
      'Zero ruído, zero emissões, zero combustível',
      'Carga integral da propriedade em emergência',
      'Monitoramento remoto 24/7',
    ],
    ideal: 'Propriedades em áreas rurais, regiões com instabilidade na rede e instalações críticas que não podem ter interrupção de energia.',
  },
  {
    num: '03',
    titulo: 'Auditoria e Manutenção de Performance',
    subtitulo: 'Validação técnica e otimização de sistemas existentes',
    desc: 'Inspeção termográfica, análise de string, verificação de aterramento e laudos de integridade. Validamos e corrigimos sistemas instalados por terceiros — identificamos falhas de dimensionamento e perdas ocultas.',
    beneficios: [
      'Inspeção termográfica de módulos e inversores',
      'Análise de curva I-V e performance ratio',
      'Verificação de aterramento e proteções elétricas',
      'Laudo técnico assinado por engenheiro',
      'Relatório de perdas e plano de correção',
    ],
    ideal: 'Sistemas instalados há mais de 2 anos, sistemas com queda de geração inexplicada, e sistemas adquiridos como parte de propriedade ou empresa.',
  },
  {
    num: '04',
    titulo: 'Estudo de Viabilidade Técnico-Financeira',
    subtitulo: 'Consultoria de engenharia antes de qualquer decisão',
    desc: 'Consultoria de engenharia pura antes de qualquer proposta comercial. Analisamos irradiação, sombreamento, configuração elétrica e impacto estético. Se o projeto não fizer sentido técnico, nossa diretoria emitirá a recusa técnica formal.',
    beneficios: [
      'Análise de irradiação e sombreamento in loco',
      'Simulação energética com software profissional',
      'Análise de viabilidade financeira com payback real',
      'Estudo de impacto visual e construtivo',
      'Parecer técnico formal da diretoria',
    ],
    ideal: 'Antes de qualquer investimento em energia solar. Essencial para projetos acima de 30 kWp ou propriedades de alto valor arquitetônico.',
  },
]

const processo = [
  { step: '01', titulo: 'Pré-qualificação', desc: 'Análise inicial do perfil de consumo, localização e objetivos do cliente para validar o enquadramento no protocolo.' },
  { step: '02', titulo: 'Visita Técnica', desc: 'Vistoria presencial com levantamento de dados elétricos, estruturais e de irradiação. Documentação fotográfica completa.' },
  { step: '03', titulo: 'Projeto e Aprovação', desc: 'Desenvolvimento do projeto elétrico, memorial de cálculo, ART e submissão à concessionária. Aprovação garantida.' },
  { step: '04', titulo: 'Execução Protocolada', desc: 'Instalação com rastreabilidade total, cada etapa documentada e inspecionada pela diretoria antes do avanço.' },
  { step: '05', titulo: 'Comissionamento', desc: 'Start-up técnico, testes elétricos, configuração de monitoramento e entrega de documentação completa ao cliente.' },
]

export default function Servicos() {
  return (
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      <RevealObserver />
      <NavbarInner />

      <style>{`
        .serv-card { display:grid; grid-template-columns:1fr 1fr; overflow:hidden; margin-bottom:16px; }
        .serv-card > div:first-child { border-right:1px solid var(--line); }
        .proc-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:0; border:1px solid var(--line); border-radius:var(--r-md); overflow:hidden; }
        .np-proc-card { transition:background .3s; }
        .np-proc-card:hover { background:rgba(27,63,111,0.1) !important; }
        @media (max-width:800px){
          .serv-card { grid-template-columns:1fr !important; }
          .serv-card > div:first-child { border-right:none !important; border-bottom:1px solid var(--line); }
        }
        @media (max-width:900px){
          .proc-grid { grid-template-columns:1fr 1fr !important; }
          .proc-grid > div { border-right:1px solid var(--line) !important; border-bottom:1px solid var(--line); }
          .proc-grid > div:nth-child(2n) { border-right:none !important; }
        }
        @media (max-width:600px){
          .proc-grid { grid-template-columns:1fr !important; }
          .proc-grid > div { border-right:none !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{
        background: 'var(--bg-surface)',
        paddingTop: 160, paddingBottom: 80,
        borderBottom: '1px solid var(--line)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(74,144,217,0.3),transparent)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 60% 40%,rgba(27,63,111,0.12),transparent)', pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="sec-label reveal">Soluções Técnicas</div>
          <h1 className="reveal" style={{
            fontSize: 'clamp(28px,4vw,52px)',
            fontWeight: 800, color: 'var(--text-hi)',
            lineHeight: 1.1, letterSpacing: '-0.025em',
            marginBottom: 20, maxWidth: 660,
          }}>
            Engenharia Aplicada<br />a Cada Cenário.
          </h1>
          <p className="reveal" style={{ fontSize: 15, color: 'var(--text-mid)', maxWidth: 540, lineHeight: 1.85 }}>
            Quatro soluções de engenharia fotovoltaica — todas executadas sob o mesmo Protocolo Proprietário de rigor industrial.
          </p>
        </div>
      </section>

      {/* Serviços detalhados */}
      <section style={{ padding: '96px 0', background: 'var(--bg-base)' }}>
        <div className="wrap">
          {servicos.map((s, i) => (
            <div key={i} className="reveal glass serv-card">
              <div style={{ padding: '48px 44px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--blue-400)' }}>{s.num}</span>
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,var(--blue-700),transparent)' }} />
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-hi)', lineHeight: 1.2, marginBottom: 8 }}>{s.titulo}</h2>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue-400)', marginBottom: 20 }}>{s.subtitulo}</p>
                <p style={{ fontSize: 13.5, color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: 24 }}>{s.desc}</p>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-lo)', marginBottom: 12 }}>Ideal Para</div>
                <p style={{ fontSize: 12.5, color: 'var(--text-lo)', lineHeight: 1.75, fontStyle: 'italic' }}>{s.ideal}</p>
              </div>
              <div style={{ padding: '48px 44px', background: 'rgba(27,63,111,0.04)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-lo)', marginBottom: 20 }}>Inclui</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {s.beneficios.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue-500)', flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.75 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section style={{ padding: '96px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-label reveal">Metodologia</div>
          <h2 className="reveal" style={{
            fontSize: 'clamp(20px,2.5vw,32px)',
            fontWeight: 800, color: 'var(--text-hi)',
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 12,
          }}>
            Do Primeiro Contato<br />ao Start-up do Sistema.
          </h2>
          <p className="reveal" style={{ fontSize: 14.5, color: 'var(--text-mid)', maxWidth: 480, lineHeight: 1.8, marginBottom: 56 }}>
            Cinco etapas protocoladas. Cada uma documentada, fotografada e validada antes de avançar para a próxima.
          </p>

          <div className="reveal proc-grid">
            {processo.map((p, i) => (
              <div key={i} className="np-proc-card" style={{
                padding: '32px 24px',
                background: 'var(--bg-card)',
                borderRight: i < processo.length - 1 ? '1px solid var(--line)' : 'none',
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--blue-800)', lineHeight: 1, marginBottom: 16 }}>{p.step}</div>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-hi)', lineHeight: 1.3, marginBottom: 10 }}>{p.titulo}</h3>
                <p style={{ fontSize: 11.5, color: 'var(--text-lo)', lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-base)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="sec-label reveal" style={{ justifyContent: 'center', marginBottom: 16 }}>Qualificação</div>
          <h2 className="reveal" style={{ fontSize: 'clamp(20px,2.5vw,32px)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Seu Projeto se Qualifica?
          </h2>
          <p className="reveal" style={{ fontSize: 14, color: 'var(--text-mid)', marginBottom: 32, maxWidth: 420, margin: '0 auto 32px' }}>
            Nem todo projeto se enquadra no protocolo Neo Power. Solicite uma análise técnica gratuita e descubra se o seu perfil de consumo justifica a nossa engenharia.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contato" className="btn-primary">Solicitar Análise Técnica Gratuita</Link>
            <Link href="/projetos" className="btn-ghost">Ver Projetos Realizados</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
