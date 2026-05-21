/**
 * FotoSlot — slot de imagem com fallback para placeholder escuro.
 *
 * Para adicionar uma imagem:
 *   1. Coloque o arquivo em /public/fotos/  (ex: /public/fotos/usina-mt.jpg)
 *   2. Passe  src="/fotos/usina-mt.jpg"  para este componente
 *
 * Sem src → exibe o placeholder escuro padrão.
 */

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

interface FotoSlotProps {
  src?: string
  alt?: string
  caption?: string
  style?: React.CSSProperties
  className?: string
}

export default function FotoSlot({ src, alt = '', caption, style, className }: FotoSlotProps) {
  const imgStyle: React.CSSProperties = src
    ? {
        backgroundImage: `url(${BASE}${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <div
      className={`ph${className ? ` ${className}` : ''}`}
      style={{ ...imgStyle, ...style }}
    >
      {src && (
        <img
          src={`${BASE}${src}`}
          alt={alt}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0 }}
          aria-hidden="true"
        />
      )}
      {caption && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top,rgba(4,7,14,0.88),transparent)',
          padding: '20px 18px 14px', zIndex: 2,
        }}>
          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-lo)' }}>
            {caption}
          </span>
        </div>
      )}
    </div>
  )
}
