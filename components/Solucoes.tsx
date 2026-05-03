'use client'

const solucoes = [
  {
    num: '01',
    titulo: 'Geração Distribuída',
    desc: 'Engenharia de alta potência para grandes propriedades e negócios de alto padrão. Média e Baixa Tensão com Demanda Contratada. Independência financeira com a precisão exigida por infraestruturas de luxo. Redução de até 95% na conta de energia, retorno em 3 a 5 anos, garantia de eficiência de 25 anos.',
  },
  {
    num: '02',
    titulo: 'Geração Isolada & Backup',
    desc: 'Sistemas autônomos com bancos de bateria de lítio (vida útil de até 30 anos). Segurança energética ininterrupta, acionamento instantâneo e totalmente silencioso. O banco de baterias assume a carga integral da propriedade em milissegundos — sem diesel, sem emissões, sem ruído.',
  },
  {
    num: '03',
    titulo: 'Auditoria e Manutenção de Performance',
    desc: 'Inspeção termográfica, análise de string, verificação de aterramento e laudos de integridade. Validamos e corrigimos sistemas para garantir a curva máxima de eficiência projetada. Auditoria independente em sistemas instalados por terceiros — identificamos falhas de dimensionamento e perdas ocultas.',
  },
  {
    num: '04',
    titulo: 'Estudo de Viabilidade Técnico-Financeira',
    desc: 'Consultoria de engenharia pura antes de qualquer proposta comercial. Analisamos irradiação, sombreamento, configuração elétrica e impacto estético. Se o projeto não fizer sentido técnico, nossa diretoria emitirá a recusa técnica formal.',
  },
]

export default function Solucoes() {
  return (
    <section id="solucoes" style={{ background:'var(--bg-surface)', padding:'100px 0' }}>
      <div className="wrap">
        <div className="sec-label reveal">Soluções Técnicas</div>
        <h2 className="reveal" style={{
          fontSize:'clamp(22px,3vw,34px)',
          fontWeight:800, color:'var(--text-hi)',
          lineHeight:1.15, letterSpacing:'-0.02em',
          marginBottom:12,
        }}>
          Engenharia Aplicada<br />a Cada Cenário.
        </h2>
        <p className="reveal" style={{ fontSize:14.5, color:'var(--text-mid)', maxWidth:500, lineHeight:1.8, marginBottom:48 }}>
          Dimensionamento, execução e auditoria sob Protocolo Proprietário — do residencial de alto padrão à infraestrutura industrial.
        </p>

        <div className="reveal" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, border:'1px solid var(--line)', borderRadius:'var(--r-md)', overflow:'hidden' }}>
          {solucoes.map((s, i) => (
            <div key={i} style={{
              padding:'40px 36px',
              background:'var(--bg-card)',
              borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
              borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
              position:'relative', overflow:'hidden',
              transition:'background .3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(27,63,111,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-card)')}
            >
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:18 }}>
                <span style={{ fontSize:9.5, fontWeight:700, letterSpacing:'0.22em', color:'var(--blue-400)' }}>{s.num}</span>
                <div style={{ flex:1, height:1, background:'linear-gradient(90deg,var(--blue-700),transparent)' }} />
              </div>
              <h3 style={{ fontSize:16, fontWeight:700, color:'var(--text-hi)', lineHeight:1.3, marginBottom:12 }}>{s.titulo}</h3>
              <p style={{ fontSize:13, color:'var(--text-lo)', lineHeight:1.85 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width:700px){
          #solucoes .wrap > div:last-child { grid-template-columns:1fr !important; }
          #solucoes .wrap > div:last-child > div { border-right:none !important; }
        }
      `}</style>
    </section>
  )
}
