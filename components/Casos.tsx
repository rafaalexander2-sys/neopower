const dados = [
  { val:'93kWp', label:'Potência do Flagship' },
  { val:'MT/DC', label:'Infraestrutura' },
  { val:'100%', label:'Aprovação em Auditoria Externa' },
  { val:'0', label:'Infiltrações' },
]

export default function Casos() {
  return (
    <section id="casos" style={{ background:'var(--bg-surface)', padding:'100px 0' }}>
      <div className="wrap">
        <div className="sec-label reveal">Referência Técnica</div>
        <h2 className="reveal" style={{
          fontSize:'clamp(22px,3vw,34px)',
          fontWeight:800, color:'var(--text-hi)',
          lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:12,
        }}>
          O Seu Patrimônio sob<br />o Nosso Protocolo.
        </h2>
        <p className="reveal" style={{ fontSize:14.5, color:'var(--text-mid)', maxWidth:480, lineHeight:1.8, marginBottom:48 }}>
          Da residência premium à infraestrutura industrial de Média Tensão.
        </p>

        {/* Case block */}
        <div className="reveal glass" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', overflow:'hidden', marginBottom:16 }}>
          {/* Narrative */}
          <div style={{ padding:'44px 40px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <div style={{ fontSize:9.5, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--blue-400)', marginBottom:16 }}>
              Projeto de Referência — Média Tensão Residencial
            </div>
            <h3 style={{ fontSize:20, fontWeight:800, color:'var(--text-hi)', letterSpacing:'-0.015em', lineHeight:1.2, marginBottom:20 }}>
              93 kWp — Residência de Ultra Alto Padrão
            </h3>
            <p style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.85, marginBottom:12 }}>
              Nossa engenharia foi testada e validada nos cenários mais rigorosos do país. Nosso maior case documentado envolve a entrega de 93 kWp em Média Tensão com Demanda Contratada para a residência de ultra alto padrão da liderança de um grande grupo corporativo brasileiro.
            </p>
            <p style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.85, marginBottom:12 }}>
              Um projeto executado sob o rigoroso crivo do escritório de engenharia particular da cliente. Aprovação integral, sem ressalvas, provando que nosso método entrega excelência técnica onde a margem para erro é absolutamente zero.
            </p>
            <p style={{ fontSize:13, color:'var(--text-hi)', fontWeight:600, lineHeight:1.75 }}>
              Aplicamos esse exato mesmo protocolo de rigor industrial a todos os nossos projetos, independentemente do tamanho da usina.
            </p>
          </div>

          {/* Data grid */}
          <div style={{ borderLeft:'1px solid var(--line)', display:'grid', gridTemplateColumns:'1fr 1fr', position:'relative' }}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(27,63,111,0.07),transparent)', pointerEvents:'none' }} />
            {dados.map((d, i) => (
              <div key={i} style={{
                padding:'32px 24px', textAlign:'center',
                display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
                borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
              }}>
                <div style={{ fontSize:28, fontWeight:800, color:'#fff', lineHeight:1, letterSpacing:'-0.02em' }}>{d.val}</div>
                <div style={{ fontSize:9, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--text-lo)', marginTop:6, textAlign:'center' }}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="reveal glass" style={{ padding:'28px 36px', marginBottom:16, borderLeft:'2px solid var(--blue-500)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,var(--blue-700),transparent)' }} />
          <p style={{ fontSize:13.5, fontStyle:'italic', color:'var(--text-hi)', lineHeight:1.8 }}>
            "O projeto passou pelo crivo mais rigoroso possível: a equipe de engenharia particular da própria cliente. Não existe validação mais exigente do que um escritório técnico contratado para encontrar falhas — e aprovar integralmente."
          </p>
          <div style={{ marginTop:14, fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--text-lo)' }}>
            — Protocolo de auditoria independente
          </div>
        </div>

        {/* Photo strip */}
        <div className="reveal" style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:16 }}>
          <div className="ph" style={{ minHeight:240 }}>
            <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top,rgba(4,7,14,0.82),transparent)', padding:'16px 18px', zIndex:2 }}>
              <span style={{ fontSize:9, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-lo)' }}>Fotografia autoral — Vista geral da usina de 93 kWp</span>
            </div>
          </div>
          <div className="ph" style={{ minHeight:240 }}>
            <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top,rgba(4,7,14,0.82),transparent)', padding:'16px 18px', zIndex:2 }}>
              <span style={{ fontSize:9, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-lo)' }}>Detalhe — Infraestrutura de Média Tensão</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:800px){
          #casos .glass[style*="grid-template-columns: 1fr 1fr"] { display:flex !important; flex-direction:column !important; }
          #casos .glass[style*="grid-template-columns: 1fr 1fr"] > div:last-child { border-left:none !important; border-top:1px solid var(--line); }
          #casos div[style*="gridTemplateColumns: '2fr 1fr'"] { grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  )
}
