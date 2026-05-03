const protocolo = [
  { num:'01', titulo:'Estudo antes da venda', desc:'Consultoria técnica independente antes de qualquer proposta comercial.' },
  { num:'02', titulo:'Rastreabilidade total', desc:'Cada etapa documentada, fotografada e assinada pelo responsável técnico.' },
  { num:'03', titulo:'Recusa técnica formal', desc:'Se o projeto não faz sentido técnico-financeiro, a diretoria emite parecer de recusa formal.' },
  { num:'04', titulo:'Tolerância zero', desc:'Nenhuma infiltração. Nenhuma falha estética. Nenhum atalho de execução.' },
]

export default function Protocolo() {
  return (
    <section id="protocolo" style={{ background:'var(--bg-base)', padding:'100px 0' }}>
      <div className="wrap">
        <div className="sec-label reveal">Sobre Nós — O Protocolo</div>
        <h2 className="reveal" style={{
          fontSize:'clamp(22px,3vw,34px)',
          fontWeight:800, color:'var(--text-hi)',
          lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:12,
        }}>
          Rigor Técnico e<br />Protocolo Proprietário.
        </h2>
        <p className="reveal" style={{ fontSize:14.5, color:'var(--text-mid)', maxWidth:480, lineHeight:1.8, marginBottom:56 }}>
          A precisão da engenharia industrial aplicada à proteção do seu patrimônio.
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'5fr 4fr', gap:0 }}>
          {/* Left — texto + foto */}
          <div className="reveal" style={{ paddingRight:56 }}>
            {[
              'A Neo Power não nasceu para distribuir equipamentos. Operamos estruturados em torno de um método inegociável de execução. Todo projeto de alta complexidade — seja em Média ou Baixa Tensão — é submetido ao nosso protocolo proprietário de validação.',
              'Nossa metodologia, forjada a partir de mais de 8 anos de engenharia de campo, dita que a tolerância a falhas é zero. A inteligência do seu projeto nunca é terceirizada para montadores genéricos.',
              'Nossa equipe de elite garante que do estudo de viabilidade ao start-up do sistema, a integridade estrutural e estética da sua propriedade seja tratada com rigor máximo.',
              'Trabalhamos com propriedades onde o telhado vale mais que o sistema inteiro. A nossa engenharia protege a integridade estrutural, elimina riscos de infiltração e garante que a instalação fotovoltaica valoriza — nunca compromete — o patrimônio do cliente.',
            ].map((p, i) => (
              <p key={i} style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.85, marginBottom:18 }}>{p}</p>
            ))}

            <div className="ph" style={{ minHeight:280, marginTop:36 }}>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top,rgba(4,7,14,0.85),transparent)', padding:'16px 18px', zIndex:2 }}>
                <span style={{ fontSize:9, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-lo)' }}>Fotografia — Equipe técnica em campo</span>
              </div>
            </div>
          </div>

          {/* Right — badge + protocolo */}
          <div className="reveal" style={{ borderLeft:'1px solid var(--line)', paddingLeft:48 }}>
            {/* Badge */}
            <div className="glass" style={{ padding:'28px 28px', marginBottom:32, borderLeft:'2px solid var(--blue-500)' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(74,144,217,0.3),transparent)', borderRadius:'14px 14px 0 0' }} />
              <h4 style={{ fontSize:13, fontWeight:700, color:'var(--text-hi)', letterSpacing:'0.04em', marginBottom:14, lineHeight:1.4 }}>
                Supervisão e Assinatura de Diretoria
              </h4>
              <p style={{ fontSize:12.5, color:'var(--text-lo)', lineHeight:1.8, marginBottom:16 }}>
                Todo projeto de Média Tensão e Alto Padrão é validado, assinado e inspecionado pessoalmente pelo Sócio-Diretor de Engenharia.
              </p>
              <div style={{ width:32, height:1, background:'var(--line)', margin:'16px 0' }} />
              <p style={{ fontSize:12.5, color:'var(--text-lo)', lineHeight:1.8, marginBottom:16 }}>
                <strong style={{ color:'var(--text-hi)', fontWeight:600 }}>Renan Alves</strong> — Engenheiro Eletricista, 8+ anos de engenharia de campo em sistemas fotovoltaicos de alta complexidade. O cliente tem a estrutura operacional de uma firma de engenharia, mas com a garantia pessoal e o rigor técnico direto da diretoria.
              </p>
              <div style={{ width:32, height:1, background:'var(--line)', margin:'16px 0' }} />
              <p style={{ fontSize:11.5, color:'var(--text-lo)', lineHeight:1.7, fontStyle:'italic' }}>
                Não delegamos a assinatura. Não delegamos a inspeção. O seu projeto é responsabilidade direta de quem fundou a empresa.
              </p>
            </div>

            {/* Protocolo */}
            <div>
              {protocolo.map((p, i) => (
                <div key={i} style={{
                  display:'flex', gap:20, padding:'18px 0',
                  borderBottom: i < protocolo.length - 1 ? '1px solid var(--line)' : 'none',
                  borderTop: i === 0 ? '1px solid var(--line)' : 'none',
                }}>
                  <div style={{ fontSize:20, fontWeight:800, color:'var(--blue-700)', minWidth:28, lineHeight:1, paddingTop:2 }}>{p.num}</div>
                  <div>
                    <div style={{ fontSize:13, fontWeight:700, color:'var(--text-hi)', marginBottom:4 }}>{p.titulo}</div>
                    <p style={{ fontSize:12, color:'var(--text-lo)', lineHeight:1.7 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:900px){
          #protocolo .wrap > div:last-child { display:flex !important; flex-direction:column !important; gap:48px; }
          #protocolo .wrap > div:last-child > div:first-child { padding-right:0 !important; }
          #protocolo .wrap > div:last-child > div:last-child { border-left:none !important; padding-left:0 !important; border-top:1px solid var(--line); padding-top:40px; }
        }
      `}</style>
    </section>
  )
}
