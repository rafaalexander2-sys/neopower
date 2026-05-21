import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarInner from '@/components/NavbarInner'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import FotoSlot from '@/components/FotoSlot'

export const metadata: Metadata = {
  title: 'Projetos | Neo Power Engenharia Fotovoltaica',
  description: 'Portfólio de projetos fotovoltaicos executados pela Neo Power. Sistemas de Média e Baixa Tensão com protocolo de engenharia de alta complexidade.',
}

/**
 * COMO ADICIONAR FOTOS:
 * 1. Coloque os arquivos em /public/fotos/   ex: /public/fotos/proj-usina.jpg
 * 2. Preencha foto1Src / foto2Src com o caminho   ex: foto1Src: '/fotos/proj-usina.jpg'
 */
const projetos = [
  {
    tag: 'Projeto de Referência — Flagship',
    titulo: '93 kWp — Residência de Ultra Alto Padrão',
    local: 'Mato Grosso, MT',
    tipo: 'Média Tensão · Demanda Contratada',
    dados: [
      { val: '93 kWp', label: 'Potência Instalada' },
      { val: 'MT/DC',  label: 'Infraestrutura' },
      { val: '100%',   label: 'Aprovação em Auditoria' },
      { val: '0',      label: 'Infiltrações' },
    ],
    desc: 'Nossa engenharia foi testada e validada nos cenários mais rigorosos do país. Este projeto foi executado sob o crivo do escritório de engenharia particular da cliente — e aprovado integralmente, sem ressalvas. Uma prova de que nosso protocolo entrega excelência onde a margem para erro é zero.',
    foto1Src:     '',
    foto1Caption: 'Vista geral da usina de 93 kWp',
    foto2Src:     '',
    foto2Caption: 'Detalhe — Infraestrutura de Média Tensão',
  },
]

const metricas = [
  { val: '8+',   label: 'Anos de Campo' },
  { val: '100+', label: 'Projetos Entregues' },
  { val: '0',    label: 'Infiltrações Registradas' },
  { val: '100%', label: 'Aprovações em Concessionária' },
]

export default function Projetos() {
  return (
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      <RevealObserver />
      <NavbarInner />

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
          <div className="sec-label reveal">Portfólio</div>
          <h1 className="reveal" style={{
            fontSize: 'clamp(28px,4vw,52px)',
            fontWeight: 800, color: 'var(--text-hi)',
            lineHeight: 1.1, letterSpacing: '-0.025em',
            marginBottom: 20, maxWidth: 660,
          }}>
            Projetos Executados<br />sob Protocolo.
          </h1>
          <p className="reveal" style={{ fontSize: 15, color: 'var(--text-mid)', maxWidth: 540, lineHeight: 1.85 }}>
            Cada projeto documentado com rastreabilidade total. Da proposta técnica ao start-up, cada etapa registrada, fotografada e assinada.
          </p>
        </div>
      </section>

      {/* Métricas */}
      <section style={{ padding: '0', background: 'var(--bg-base)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {metricas.map((m, i) => (
              <div key={i} style={{
                padding: '44px 32px',
                borderRight: i < metricas.length - 1 ? '1px solid var(--line)' : 'none',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--text-hi)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 8 }}>{m.val}</div>
                <div style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-lo)' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section style={{ padding: '96px 0', background: 'var(--bg-base)' }}>
        <div className="wrap">
          <div className="sec-label reveal">Referências Técnicas</div>
          <h2 className="reveal" style={{
            fontSize: 'clamp(20px,2.5vw,32px)',
            fontWeight: 800, color: 'var(--text-hi)',
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 12,
          }}>
            O Seu Patrimônio sob<br />o Nosso Protocolo.
          </h2>
          <p className="reveal" style={{ fontSize: 14.5, color: 'var(--text-mid)', maxWidth: 480, lineHeight: 1.8, marginBottom: 56 }}>
            Da residência premium à infraestrutura industrial de Média Tensão.
          </p>

          {projetos.map((p, idx) => (
            <div key={idx} style={{ marginBottom: 40 }}>
              <div className="reveal glass" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', marginBottom: 16 }}>
                <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue-400)', marginBottom: 16 }}>
                    {p.tag}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-hi)', letterSpacing: '-0.015em', lineHeight: 1.2, marginBottom: 8 }}>{p.titulo}</h3>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-lo)', marginBottom: 20 }}>
                    {p.local} · {p.tipo}
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.85 }}>{p.desc}</p>
                </div>

                <div style={{ borderLeft: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(27,63,111,0.07),transparent)', pointerEvents: 'none' }} />
                  {p.dados.map((d, i) => (
                    <div key={i} style={{
                      padding: '32px 24px', textAlign: 'center',
                      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                      borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                      borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                    }}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>{d.val}</div>
                      <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-lo)', marginTop: 6, textAlign: 'center' }}>{d.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fotos */}
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
                <FotoSlot src={p.foto1Src || undefined} caption={p.foto1Caption} style={{ minHeight: 280 }} />
                <FotoSlot src={p.foto2Src || undefined} caption={p.foto2Caption} style={{ minHeight: 280 }} />
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width:800px){
            .proj-card { grid-template-columns:1fr !important; }
            .proj-card > div:last-child { border-left:none !important; border-top:1px solid var(--line); }
            .foto-grid { grid-template-columns:1fr !important; }
          }
        `}</style>
      </section>

      {/* Quote */}
      <section style={{ padding: '0 0 96px', background: 'var(--bg-base)' }}>
        <div className="wrap">
          <div className="reveal glass" style={{ padding: '32px 40px', borderLeft: '2px solid var(--blue-500)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,var(--blue-700),transparent)' }} />
            <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--text-hi)', lineHeight: 1.8 }}>
              "O projeto passou pelo crivo mais rigoroso possível: a equipe de engenharia particular da própria cliente. Não existe validação mais exigente do que um escritório técnico contratado para encontrar falhas — e aprovar integralmente."
            </p>
            <div style={{ marginTop: 14, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-lo)' }}>
              — Protocolo de auditoria independente · 93 kWp · MT
            </div>
          </div>
        </div>
      </section>

      {/* Aviso privacidade */}
      <section style={{ padding: '40px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <p style={{ fontSize: 12, color: 'var(--text-lo)', lineHeight: 1.7, textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
            Por respeito à privacidade dos nossos clientes, os projetos são apresentados sem identificação de pessoas ou propriedades. Documentação completa disponível mediante NDA para clientes em processo de qualificação.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="sec-label reveal" style={{ justifyContent: 'center', marginBottom: 16 }}>Próximo Projeto</div>
          <h2 className="reveal" style={{ fontSize: 'clamp(20px,2.5vw,32px)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Aplique o Mesmo Protocolo<br />no Seu Projeto.
          </h2>
          <div className="reveal" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 28 }}>
            <Link href="/contato" className="btn-primary">Solicitar Auditoria Técnica</Link>
            <Link href="/servicos" className="btn-ghost">Ver Nossos Serviços</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
