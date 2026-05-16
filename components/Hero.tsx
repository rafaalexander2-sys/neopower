'use client'
import { useEffect, useRef, useState } from 'react'

/* ── Contador animado ────────────────────────────────────── */
function MetricCounter({
  num, suffix, label, index,
}: { num: number; suffix: string; label: string; index: number }) {
  const [display, setDisplay] = useState(0)
  const [done, setDone] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (done || num === 0) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      setDone(true)
      observer.disconnect()
      const dur = 1500 + index * 160
      let t0 = 0
      const tick = (ts: number) => {
        if (!t0) t0 = ts
        const p = Math.min((ts - t0) / dur, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        setDisplay(Math.floor(ease * num))
        if (p < 1) requestAnimationFrame(tick)
        else setDisplay(num)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [done, num, index])

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '16px 12px' }}>
      <div style={{
        fontSize: 'clamp(16px,1.8vw,22px)',
        fontWeight: 800, color: '#fff',
        lineHeight: 1, letterSpacing: '-0.02em',
        fontVariantNumeric: 'tabular-nums',
      }}>{num === 0 ? 0 : display}{suffix}</div>
      <div style={{
        fontSize: 8, fontWeight: 700,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.28)', marginTop: 6, lineHeight: 1.5,
      }}>{label}</div>
    </div>
  )
}

const metrics = [
  { num: 8,   suffix: '+',   label: 'Anos de Engenharia de Campo' },
  { num: 100, suffix: '%',   label: 'Projetos com ART' },
  { num: 93,  suffix: 'kWp', label: 'Maior Projeto Residencial' },
  { num: 0,   suffix: '',    label: 'Tolerância a Falhas' },
]

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', height: '100svh', minHeight: 560, overflow: 'clip' }}>

      {/* ── Vídeo ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/FDFZO3nxbZk?autoplay=1&mute=1&loop=1&playlist=FDFZO3nxbZk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&playsinline=1"
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '177.78vh', minWidth: '100%',
            height: '56.25vw', minHeight: '100%',
            border: 'none', pointerEvents: 'none',
          }}
          allow="autoplay; encrypted-media"
          title="Neo Power background"
        />
      </div>

      {/* ── Overlays ── */}
      <div style={{ position:'absolute', inset:0, zIndex:1, background:'linear-gradient(110deg,rgba(4,7,14,0.92) 0%,rgba(4,7,14,0.72) 50%,rgba(4,7,14,0.32) 100%)' }} />
      {/* top half darkening overlay */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'55%', zIndex:1, background:'linear-gradient(to bottom,rgba(4,7,14,0.72) 0%,transparent 100%)' }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'45%', zIndex:1, background:'linear-gradient(to top,rgba(4,7,14,1) 0%,transparent 100%)' }} />
      <div style={{ position:'absolute', top:'10%', left:'0', zIndex:1, width:500, height:500, background:'radial-gradient(ellipse,rgba(27,63,111,0.16) 0%,transparent 70%)', pointerEvents:'none' }} />

      {/* ── Conteúdo — posicionado no topo-esquerdo, abaixo da navbar ── */}
      <div style={{
        position: 'absolute',
        top: 64, left: 0, right: 0,
        zIndex: 2,
        paddingTop: 72,
      }}>
        <div className="wrap">

          {/* Label */}
          <p style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontSize: 10, fontWeight: 700,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(74,144,217,0.85)',
            marginBottom: 18,
          }}>
            <span style={{ width: 18, height: 1.5, background: 'linear-gradient(90deg,#1B3F6F,#4A90D9)', borderRadius: 99, flexShrink: 0, display: 'inline-block' }} />
            Engenharia Solar — Alto Padrão
          </p>

          {/* Título com hierarquia de peso */}
          <h1 style={{ marginBottom: 20, maxWidth: 560, fontSize: 'inherit', fontWeight: 'inherit' }}>
            <span style={{
              display: 'block',
              fontSize: 'clamp(18px,1.9vw,26px)',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.68)',
              lineHeight: 1.2,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              marginBottom: '0.15em',
            }}>
              Engenharia Fotovoltaica
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(22px,2.5vw,34px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
              textTransform: 'uppercase',
            }}>
              de Alta Complexidade.
            </span>
          </h1>

          <p style={{ fontSize: 14.5, fontWeight: 400, color: 'rgba(255,255,255,0.58)', maxWidth: 420, lineHeight: 1.75, marginBottom: 10 }}>
            O rigor da engenharia industrial aplicado à proteção de patrimônios de luxo.
          </p>
          <p style={{ fontSize: 12.5, fontWeight: 400, color: 'rgba(255,255,255,0.28)', maxWidth: 420, lineHeight: 1.85, marginBottom: 34 }}>
            Projetos de Média e Baixa Tensão com supervisão técnica e assinatura de diretoria. Não somos distribuidores de equipamentos. Projetamos, executamos e auditamos sistemas sob nosso Protocolo Proprietário, onde a margem de erro é zero e a estética da sua propriedade é intocável.
          </p>

          <div className="hero-btns">
            <a href="#contato" className="btn-primary">Solicitar Auditoria Técnica</a>
            <a href="#solucoes" className="btn-ghost">Ver Soluções</a>
          </div>

          <p style={{ marginTop: 32, fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.14)' }}>
            Fotografia autoral — Usina residencial de alto padrão
          </p>
        </div>
      </div>

      {/* ── Barra de métricas ── */}
      <div className="metrics-bar" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        background: 'rgba(4,7,14,0.86)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(255,255,255,0.055)',
      }}>
        {metrics.map((m, i) => (
          <div key={i} style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
            <MetricCounter num={m.num} suffix={m.suffix} label={m.label} index={i} />
          </div>
        ))}
      </div>

      <style>{`
        /* ── Mobile ── */
        @media (max-width: 768px) {
          #home { min-height: 100svh; }

          .hero-btns {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            max-width: 320px;
          }
          .hero-btns a { width: 100%; justify-content: center; }

          .metrics-bar {
            grid-template-columns: 1fr 1fr !important;
          }
          .metrics-bar > div:nth-child(2) { border-right: none !important; }
          .metrics-bar > div:nth-child(1),
          .metrics-bar > div:nth-child(2) {
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
        }

        @media (max-width: 480px) {
          .metrics-bar > div > div:first-child { font-size: 24px !important; }
        }

        /* Desktop — botões lado a lado */
        @media (min-width: 769px) {
          .hero-btns { display: flex; gap: 10px; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  )
}
