import FotoSlot from './FotoSlot'

/**
 * COMO ADICIONAR FOTOS:
 * 1. Coloque os arquivos em /public/fotos/   ex: /public/fotos/banda-1.jpg
 * 2. Preencha o campo  src  abaixo com o caminho   ex: src: '/fotos/banda-1.jpg'
 * 3. Deixe src vazio ('') para manter o placeholder escuro.
 */
const fotos = [
  { src: '', caption: 'Infraestrutura elétrica — Quadro de proteção MT' },
  { src: '', caption: 'Usina fotovoltaica — Vista aérea' },
  { src: '', caption: 'Detalhe técnico — Fixação e impermeabilização' },
]

export default function PhotoBand() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid var(--line)' }}>
      {fotos.map((f, i) => (
        <FotoSlot
          key={i}
          src={f.src || undefined}
          caption={f.caption}
          style={{
            minHeight: 240,
            borderRadius: 0,
            border: 'none',
            borderRight: i < fotos.length - 1 ? '1px solid var(--line)' : 'none',
          }}
        />
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
