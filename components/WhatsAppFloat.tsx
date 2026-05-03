'use client'

const posts = [
  { titulo: 'Sistema On-Grid: o que é e como funciona?', min: '4 min' },
  { titulo: 'Energias renováveis: o que são e qual o futuro?', min: '5 min' },
  { titulo: '3 sistemas fotovoltaicos para adquirir em 2026', min: '6 min' },
]

export default function Blog() {
  return (
    <section id="blog" style={{ background: 'var(--bg-surface)', padding: '110px 0' }}>
      <div className="wrap">
        <div className="sec-label reveal">Conheça Nosso</div>
        <h2 className="reveal" style={{
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 800, color: 'var(--text-hi)',
          lineHeight: 1.15, letterSpacing: '-0.02em',
          marginBottom: 48,
        }}>
          Blog
        </h2>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {posts.map((p, i) => (
            <a key={i} href="#" style={{ textDecoration: 'none' }}>
              <div className="glass glass-hover" style={{ overflow: 'hidden' }}>
                {/* Thumb */}
                <div className="ph" style={{
                  minHeight: 180, borderRadius: '14px 14px 0 0',
                  border: 'none', borderBottom: '1px solid var(--line)',
                }} />
                <div style={{ padding: '20px 22px 24px' }}>
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: 'var(--blue-400)',
                    marginBottom: 10,
                  }}>{p.min} de leitura</div>
                  <h3 style={{
                    fontSize: 15, fontWeight: 700,
                    color: 'var(--text-hi)', lineHeight: 1.5,
                    marginBottom: 16,
                  }}>{p.titulo}</h3>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontSize: 12, fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--blue-400)',
                  }}>
                    Leia mais
                    <span style={{ fontSize: 16, lineHeight: 1 }}>›</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #blog .wrap > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          #blog .wrap > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
