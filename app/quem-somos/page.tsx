import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarInner from '@/components/NavbarInner'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export const metadata: Metadata = {
  title: 'Quem Somos | Neo Power Engenharia Fotovoltaica',
  description: 'Conheça a Neo Power: 8+ anos de engenharia fotovoltaica de alta complexidade, protocolo proprietário e tolerância zero a falhas. Petrópolis, RJ.',
}

const valores = [
  { num: '01', titulo: 'Rigor Técnico', desc: 'Cada projeto passa por validação em múltiplas etapas antes da execução. Dimensionamento, irradiação, aterramento, integração elétrica — tudo documentado e assinado.' },
  { num: '02', titulo: 'Responsabilidade Direta', desc: 'A assinatura técnica de cada projeto é da diretoria. Não delegamos a responsabilidade. Não terceirizamos a inteligência de engenharia.' },
  { num: '03', titulo: 'Tolerância Zero', desc: 'Nenhuma infiltração. Nenhuma falha estética. Nenhum atalho de execução. Zero compromissos com o padrão construtivo da propriedade do cliente.' },
  { num: '04', titulo: 'Integridade Patrimonial', desc: 'Trabalhamos com propriedades onde o telhado vale mais que o sistema. Nossa engenharia protege o patrimônio — nunca o compromete.' },
]

const timeline = [
  { ano: '2016', desc: 'Início das atividades em engenharia elétrica de campo com foco em sistemas de alta complexidade.' },
  { ano: '2019', desc: 'Primeiros projetos fotovoltaicos em Média Tensão. Desenvolvimento do Protocolo Proprietário de Execução.' },
  { ano: '2021', desc: 'Caso de referência: 93 kWp em Média Tensão com Demanda Contratada aprovado integralmente por escritório de engenharia particular.' },
  { ano: '2023', desc: 'Expansão para Petrópolis, RJ. Estruturação da equipe técnica de elite.' },
  { ano: '2026', desc: 'Mais de 100 projetos executados. Zero infiltrações. Zero falhas estruturais documentadas.' },
]

export default function QuemSomos() {
  return (
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      <RevealObserver />
      <NavbarInner />

      <style>{`
        .np-val-card { transition: background .3s; }
        .np-val-card:hover { background: rgba(27,63,111,0.08) !important; }
        .qs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .val-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; border: 1px solid var(--line); border-radius: var(--r-md); overflow: hidden; }
        @media (max-width:900px) {
          .qs-grid { grid-template-columns:1fr !important; }
          .val-grid { grid-template-columns:1fr !important; }
          .np-val-card { border-right:none !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{
        background: 'var(--bg-surface)',
        paddingTop: 140, paddingBottom: 80,
        borderBottom: '1px solid var(--line)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(74,144,217,0.3),transparent)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 60% 40%,rgba(27,63,111,0.12),transparent)', pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="sec-label reveal">Quem Somos</div>
          <h1 className="reveal" style={{
            fontSize: 'clamp(28px,4vw,52px)',
            fontWeight: 800, color: 'var(--text-hi)',
            lineHeight: 1.1, letterSpacing: '-0.025em',
            marginBottom: 20, maxWidth: 660,
          }}>
            Engenharia como<br />Responsabilidade Pessoal.
          </h1>
          <p className="reveal" style={{ fontSize: 15, color: 'var(--text-mid)', maxWidth: 540, lineHeight: 1.85 }}>
            A Neo Power não nasceu para distribuir equipamentos. Operamos estruturados em torno de um método inegociável de execução — onde a inteligência do projeto nunca é terceirizada para montadores genéricos.
          </p>
        </div>
      </section>

      {/* Diretor */}
      <section style={{ padding: '96px 0', background: 'var(--bg-base)' }}>
        <div className="wrap">
          <div className="qs-grid">
            <div className="reveal">
              <div className="sec-label" style={{ marginBottom: 20 }}>Diretoria Técnica</div>
              <h2 style={{ fontSize: 'clamp(20px,2.5vw,32px)', fontWeight: 800, color: 'var(--text-hi)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 20 }}>
                Renan Alves
              </h2>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue-400)', marginBottom: 28 }}>
                Sócio-Diretor · Engenheiro Eletricista
              </p>
              {[
                '8+ anos de engenharia de campo em sistemas fotovoltaicos de alta complexidade. Especialização em Média Tensão, Demanda Contratada e integração de infraestrutura elétrica de alto padrão.',
                'A metodologia da Neo Power foi forjada a partir da experiência direta em projetos onde a margem para erro é zero — seja por exigência do cliente, da concessionária ou da própria integridade patrimonial da propriedade.',
                'Todo projeto de Média Tensão e Alto Padrão é validado, assinado e inspecionado pessoalmente. Não delegamos a assinatura. Não delegamos a inspeção. O seu projeto é responsabilidade direta de quem fundou a empresa.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 13.5, color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: 16 }}>{p}</p>
              ))}
            </div>

            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="ph" style={{ minHeight: 340, borderRadius: 'var(--r-md)' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top,rgba(4,7,14,0.9),transparent)', padding: '20px 22px', zIndex: 2 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-lo)' }}>Renan Alves — Diretoria Técnica</span>
                </div>
              </div>
              <div className="glass" style={{ padding: '24px 28px', borderLeft: '2px solid var(--blue-500)' }}>
                <p style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--text-hi)', lineHeight: 1.8 }}>
                  "O cliente tem a estrutura operacional de uma firma de engenharia, mas com a garantia pessoal e o rigor técnico direto da diretoria."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section style={{ padding: '96px 0', background: 'var(--bg-surface)' }}>
        <div className="wrap">
          <div className="sec-label reveal">Princípios</div>
          <h2 className="reveal" style={{
            fontSize: 'clamp(20px,2.5vw,32px)',
            fontWeight: 800, color: 'var(--text-hi)',
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 12,
          }}>
            Os Pilares do Protocolo.
          </h2>
          <p className="reveal" style={{ fontSize: 14.5, color: 'var(--text-mid)', maxWidth: 480, lineHeight: 1.8, marginBottom: 48 }}>
            Quatro princípios inegociáveis que definem cada decisão técnica e cada relação com o cliente.
          </p>

          <div className="reveal val-grid">
            {valores.map((v, i) => (
              <div key={i} className="np-val-card" style={{
                padding: '40px 36px',
                background: 'var(--bg-card)',
                borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--blue-400)' }}>{v.num}</span>
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,var(--blue-700),transparent)' }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-hi)', lineHeight: 1.3, marginBottom: 12 }}>{v.titulo}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-lo)', lineHeight: 1.85 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '96px 0', background: 'var(--bg-base)' }}>
        <div className="wrap">
          <div className="sec-label reveal">Trajetória</div>
          <h2 className="reveal" style={{
            fontSize: 'clamp(20px,2.5vw,32px)',
            fontWeight: 800, color: 'var(--text-hi)',
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 48,
          }}>
            8 Anos de Engenharia de Campo.
          </h2>

          <div className="reveal" style={{ position: 'relative', paddingLeft: 40 }}>
            <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 1, background: 'linear-gradient(to bottom,var(--blue-700),transparent)' }} />
            {timeline.map((t, i) => (
              <div key={i} style={{ position: 'relative', paddingBottom: i < timeline.length - 1 ? 40 : 0 }}>
                <div style={{ position: 'absolute', left: -44, top: 4, width: 8, height: 8, borderRadius: '50%', background: 'var(--blue-500)', boxShadow: '0 0 0 3px rgba(43,94,167,0.25)' }} />
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue-400)', marginBottom: 6 }}>{t.ano}</div>
                <p style={{ fontSize: 13.5, color: 'var(--text-mid)', lineHeight: 1.8, maxWidth: 580 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="sec-label reveal" style={{ justifyContent: 'center', marginBottom: 16 }}>Próximo Passo</div>
          <h2 className="reveal" style={{ fontSize: 'clamp(20px,2.5vw,32px)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Pronto para Começar?
          </h2>
          <p className="reveal" style={{ fontSize: 14, color: 'var(--text-mid)', marginBottom: 32, maxWidth: 420, margin: '0 auto 32px' }}>
            Solicite uma auditoria técnica gratuita e descubra se o seu projeto se qualifica para o protocolo Neo Power.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contato" className="btn-primary">Solicitar Auditoria Técnica</Link>
            <Link href="/servicos" className="btn-ghost">Ver Serviços</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
