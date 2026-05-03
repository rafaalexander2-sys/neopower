'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Protocolo', href: '#protocolo' },
  { label: 'Casos', href: '#casos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* ── Estilos do efeito fosco ── */}
      <style>{`
        .np-nav {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
          /* fosco base — sempre semi-transparente para deixar o fundo aparecer */
          background: rgba(248, 249, 252, 0.72);
          backdrop-filter: blur(22px) saturate(180%);
          -webkit-backdrop-filter: blur(22px) saturate(180%);
          border-bottom: 1px solid rgba(0,0,0,0.07);
          transition: background 0.35s, box-shadow 0.35s;
        }
        .np-nav.scrolled {
          background: rgba(248, 249, 252, 0.82);
          box-shadow: 0 1px 24px rgba(0,0,0,0.07);
        }
        /* ruído tipo fosco sobre o vidro */
        .np-nav::after {
          content: '';
          position: absolute; inset: 0;
          pointer-events: none; z-index: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
        }
        .np-nav > div { position: relative; z-index: 1; }
        .np-nav-link {
          color: #2C3357;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: color .2s;
        }
        .np-nav-link:hover { color: #1B3F6F; }
        @media (max-width: 768px) {
          .np-nav > div { padding: 0 24px !important; }
        }
      `}</style>

      <nav className={`np-nav${scrolled ? ' scrolled' : ''}`}>
        <div style={{
          maxWidth: 1120, margin: '0 auto', padding: '0 64px',
          height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/logo-dark.png" alt="Neo Power"
              width={96} height={68}
              style={{ height: 30, width: 'auto', objectFit: 'contain' }}
              priority
            />
          </a>

          <ul className="hide-mobile" style={{ listStyle: 'none', display: 'flex', gap: 36, alignItems: 'center', margin: '0 auto' }}>
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} className="np-nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contato" className="btn-primary hide-mobile" style={{ padding: '10px 20px', fontSize: 11, flexShrink: 0 }}>
            Solicitar Auditoria
          </a>

          <button
            className="hide-desktop"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: 20, height: 1.5, background: '#2C3357', borderRadius: 99 }} />
            ))}
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay${open ? ' open' : ''}`}>
        <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: 22, right: 22, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', fontSize: 22 }}>✕</button>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contato" onClick={() => setOpen(false)} className="btn-primary">Solicitar Auditoria</a>
      </div>
    </>
  )
}
