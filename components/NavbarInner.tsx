'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const links = [
  { label: 'Home',        href: '/' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Serviços',   href: '/servicos' },
  { label: 'Projetos',   href: '/projetos' },
  { label: 'Contato',    href: '/contato' },
]

export default function NavbarInner() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <style>{`
        .np-nav {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
          background: rgba(4, 7, 14, 0.72);
          backdrop-filter: blur(22px) saturate(180%);
          -webkit-backdrop-filter: blur(22px) saturate(180%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: background 0.35s, box-shadow 0.35s;
        }
        .np-nav.scrolled {
          background: rgba(4, 7, 14, 0.92);
          box-shadow: 0 1px 24px rgba(0,0,0,0.4);
        }
        .np-nav > div { position: relative; z-index: 1; }
        .np-nav-link {
          color: rgba(255,255,255,0.6);
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: color .2s;
          white-space: nowrap;
        }
        .np-nav-link:hover { color: #fff; }
        @media (max-width: 900px) {
          .np-nav > div { padding: 0 24px !important; }
        }
      `}</style>

      <nav className={`np-nav${scrolled ? ' scrolled' : ''}`}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 48px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24,
        }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src={`${BASE}/logo-white.png`} alt="Neo Power"
              style={{ height: 96, width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          <ul className="hide-mobile" style={{ listStyle: 'none', display: 'flex', gap: 28, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {links.map(l => (
              <li key={l.label}>
                <Link href={l.href} className="np-nav-link">{l.label}</Link>
              </li>
            ))}
          </ul>

          <Link href="/contato" className="btn-primary hide-mobile" style={{ padding: '10px 22px', fontSize: 11, flexShrink: 0 }}>
            Solicitar Auditoria
          </Link>

          <button
            className="hide-desktop"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: 'rgba(255,255,255,0.7)', borderRadius: 99 }} />
            ))}
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay${open ? ' open' : ''}`}>
        <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: 22, right: 22, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', fontSize: 22 }}>✕</button>
        {links.map(l => (
          <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/contato" onClick={() => setOpen(false)} className="btn-primary">Solicitar Auditoria</Link>
      </div>
    </>
  )
}
