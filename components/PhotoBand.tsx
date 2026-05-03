const fotos = [
  'Infraestrutura elétrica — Quadro de proteção MT',
  'Usina fotovoltaica — Vista aérea',
  'Detalhe técnico — Fixação e impermeabilização',
]

export default function PhotoBand() {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', borderTop:'1px solid var(--line)' }}>
      {fotos.map((f, i) => (
        <div key={i} className="ph" style={{
          minHeight:240,
          borderRadius:0,
          border:'none',
          borderRight: i < fotos.length - 1 ? '1px solid var(--line)' : 'none',
        }}>
          <div style={{
            position:'absolute', bottom:0, left:0, right:0,
            background:'linear-gradient(to top,rgba(4,7,14,0.88),transparent)',
            padding:'20px 18px 14px', zIndex:2,
          }}>
            <span style={{ fontSize:9, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-lo)' }}>{f}</span>
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
