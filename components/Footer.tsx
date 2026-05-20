'use client'
import Link from 'next/link'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Contato', href: '/contato' },
  { label: 'Políticas', href: '/politicas' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--line)',
    }}>
      {/* Top glow */}
      <div style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(74,144,217,0.25) 50%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 48px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 56, marginBottom: 52 }}>

          {/* Brand */}
          <div>
            <img
              src={`${BASE}/logo-white.png`} alt="Neo Power"
              width={110} height={78}
              style={{ height: 36, width: 'auto', objectFit: 'contain', marginBottom: 18 }}
            />
            <p style={{ fontSize: 13, color: 'var(--text-lo)', lineHeight: 1.75, maxWidth: 270, marginBottom: 24 }}>
              Engenharia fotovoltaica de alta complexidade. Tolerância zero a falhas, protocolo proprietário de execução.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { label: 'Instagram', href: 'https://instagram.com/neopowerbr' },
                { label: 'Facebook', href: 'https://facebook.com/neopowerbr' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--text-lo)',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-hi)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-lo)')}
                >{s.label}</a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--text-lo)', marginBottom: 22,
            }}>Menu</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
              {menuLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={{
                    fontSize: 13.5, fontWeight: 400, color: 'var(--text-lo)',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-hi)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-lo)')}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--text-lo)', marginBottom: 22,
            }}>Contato</p>
            <div style={{ fontSize: 13.5, color: 'var(--text-lo)', lineHeight: 2 }}>
              <a href="tel:+5524981114255" style={{ display: 'block', color: 'var(--text-lo)', textDecoration: 'none' }}>(24) 9 8111-4255</a>
              <a href="mailto:neopowerbr@gmail.com" style={{ display: 'block', color: 'var(--text-lo)', textDecoration: 'none' }}>neopowerbr@gmail.com</a>
              <span style={{ display: 'block', marginTop: 8 }}>Est. União e Indústria, 9200</span>
              <span style={{ display: 'block' }}>Loja D5 — Itaipava, Petrópolis · RJ</span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--line)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 10,
        }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-lo)', opacity: 0.6 }}>
            © 2026 Neo Power · CNPJ 40.904.108/0001-23 · Todos os direitos reservados.
          </span>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/politicas" style={{ fontSize: 11.5, color: 'var(--text-lo)', opacity: 0.6, textDecoration: 'none', transition: 'opacity .2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
            >Políticas de Privacidade</Link>
            <span style={{ fontSize: 11.5, color: 'var(--text-lo)', opacity: 0.6 }}>Itaipava · Petrópolis · RJ</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:last-child > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          footer > div:last-child { padding: 44px 24px 32px !important; }
        }
      `}</style>
    </footer>
  )
}
