import type { Metadata } from 'next'
import NavbarInner from '@/components/NavbarInner'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import ContatoForm from '@/components/Contato'

export const metadata: Metadata = {
  title: 'Contato | Neo Power Engenharia Fotovoltaica',
  description: 'Solicite uma auditoria técnica gratuita. Engenharia fotovoltaica de alta complexidade em Petrópolis, RJ. Atendimento exclusivamente por agendamento.',
}

export default function ContatoPage() {
  return (
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      <RevealObserver />
      <NavbarInner />

      {/* Hero */}
      <section style={{
        background: 'var(--bg-surface)',
        paddingTop: 140, paddingBottom: 60,
        borderBottom: '1px solid var(--line)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(74,144,217,0.3),transparent)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 60% 40%,rgba(27,63,111,0.12),transparent)', pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="sec-label reveal">Iniciar Projeto</div>
          <h1 className="reveal" style={{
            fontSize: 'clamp(28px,4vw,52px)',
            fontWeight: 800, color: 'var(--text-hi)',
            lineHeight: 1.1, letterSpacing: '-0.025em',
            marginBottom: 20, maxWidth: 640,
          }}>
            Solicite Sua Auditoria<br />Técnica Gratuita.
          </h1>
          <p className="reveal" style={{ fontSize: 15, color: 'var(--text-mid)', maxWidth: 520, lineHeight: 1.85 }}>
            Não trabalhamos com orçamentos genéricos. Cada projeto exige análise técnica preliminar antes de qualquer proposta. Preencha o formulário para iniciar a qualificação.
          </p>
        </div>
      </section>

      {/* Formulário completo */}
      <ContatoForm />

      <Footer />
    </main>
  )
}
