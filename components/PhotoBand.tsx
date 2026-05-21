const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const fotos = [
  { src: `${BASE}/foto-obra-1.jpg`, caption: 'Infraestrutura elétrica — Quadro de proteção MT' },
  { src: `${BASE}/foto-obra-2.jpg`, caption: 'Usina fotovoltaica — Vista aérea' },
  { src: `${BASE}/foto-obra-3.jpg`, caption: 'Detalhe técnico — Fixação e impermeabilização' },
]

export default function PhotoBand() {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', borderTop:'1px solid var(--line)' }}>
      {fotos.map((f, i) => (
        <div key={i} className="ph" style={{
          minHeight: 260,
          borderRadius: 0,
          border: 'none',
          borderRight: i < fotos.length - 1 ? '1px solid var(--line)' : 'none',
        }}>
          {/* Coloque a foto em /public/foto-obra-{i+1}.jpg */}
          <img
            src={f.src}
            alt={f.caption}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
            }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(to top,rgba(4,7,14,0.88),transparent)',
            padding: '20px 18px 14px', zIndex: 2,
          }}>
            <span style={{ fontSize:9, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-lo)' }}>{f.caption}</span>
          </div>
        </div>
      ))}
      <style>{`
        @media (max-width:600px){
          div[style*="repeat(3,1fr)"] { grid-template-columns:1fr !important; }
          div[style*="repeat(3,1fr)"] > div { border-right:none !important; border-bottom:1px solid var(--line); }
        }
      `}</style>
    </div>
  )
}
