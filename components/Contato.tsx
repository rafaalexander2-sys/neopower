'use client'
import { useState } from 'react'

export default function Contato() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contato" style={{ background:'var(--bg-base)', padding:'100px 0' }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'start' }}>

          {/* Left — form */}
          <div className="reveal">
            <div className="sec-label">Iniciar Projeto</div>
            <h2 style={{
              fontSize:'clamp(22px,3vw,34px)',
              fontWeight:800, color:'var(--text-hi)',
              lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:14,
            }}>
              Inicie o Seu Estudo de Viabilidade.
            </h2>
            <p style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.85, marginBottom:36 }}>
              Não fornecemos orçamentos genéricos. Para manter o rigor de nossa entrega, filtramos cada solicitação através de uma análise técnica preliminar.
            </p>

            {sent ? (
              <div className="glass" style={{ padding:'48px 32px', textAlign:'center' }}>
                <div style={{ width:44, height:44, borderRadius:'50%', background:'rgba(74,144,217,0.1)', border:'1px solid rgba(74,144,217,0.25)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', fontSize:18, color:'var(--blue-400)' }}>✓</div>
                <div style={{ fontSize:17, fontWeight:700, color:'var(--text-hi)', marginBottom:10 }}>Solicitação Enviada</div>
                <p style={{ fontSize:13, color:'var(--text-lo)', lineHeight:1.75 }}>Nossa equipe de engenharia analisará e entrará em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                  {[
                    { label:'Nome Completo', type:'text', placeholder:'Seu nome', req:true },
                    { label:'Empresa', type:'text', placeholder:'Empresa ou patrimônio', req:false },
                  ].map(f => (
                    <div key={f.label}>
                      <label style={{ display:'block', fontSize:9.5, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-lo)', marginBottom:7 }}>{f.label}</label>
                      <input className="np-input" type={f.type} placeholder={f.placeholder} required={f.req} />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ display:'block', fontSize:9.5, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-lo)', marginBottom:7 }}>Localização do Imóvel</label>
                  <input className="np-input" type="text" placeholder="Cidade, bairro ou endereço" required />
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                  <div>
                    <label style={{ display:'block', fontSize:9.5, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-lo)', marginBottom:7 }}>Consumo Médio / Demanda Contratada</label>
                    <input className="np-input" type="text" placeholder="Ex.: 1.200 kWh ou 50 kW" />
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:9.5, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-lo)', marginBottom:7 }}>Tipo de Telhado / Estrutura</label>
                    <select className="np-input" style={{ cursor:'pointer' }}>
                      <option value="">Selecione</option>
                      <option>Telhado cerâmico</option>
                      <option>Telhado metálico (trapezoidal)</option>
                      <option>Laje</option>
                      <option>Fibrocimento</option>
                      <option>Solo / Estrutura dedicada</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display:'block', fontSize:9.5, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-lo)', marginBottom:7 }}>O que é inegociável no seu projeto?</label>
                  <textarea className="np-input" rows={4} placeholder="Descreva exigências estéticas, restrições técnicas, prazos ou qualquer aspecto que não pode ser comprometido." style={{ resize:'vertical' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ width:'100%', marginTop:4 }}>Enviar Solicitação</button>
              </form>
            )}
          </div>

          {/* Right — info */}
          <div className="reveal" style={{ paddingTop:8 }}>
            {[
              {
                titulo:'Telefone / WhatsApp',
                conteudo: <a href="tel:+5524981114255" style={{ fontSize:14.5, color:'var(--text-mid)', textDecoration:'none' }}>(24) 9 8111-4255</a>,
              },
              {
                titulo:'Escritório Técnico',
                conteudo: (
                  <div style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.9 }}>
                    <span style={{ display:'block' }}>Estrada União e Indústria, 9200</span>
                    <span style={{ display:'block' }}>Loja D5 — Itaipava</span>
                    <span style={{ display:'block' }}>Petrópolis — RJ</span>
                    <span style={{ display:'block', marginTop:8, fontSize:11.5, color:'var(--blue-400)', fontWeight:600, letterSpacing:'0.04em' }}>
                      Atendimento exclusivamente por agendamento.
                    </span>
                  </div>
                ),
              },
              {
                titulo:'CNPJ',
                conteudo: <span style={{ fontSize:13.5, color:'var(--text-mid)' }}>40.904.108/0001-23</span>,
              },
            ].map((item, i) => (
              <div key={i} style={{ paddingBottom:24, marginBottom:24, borderBottom:'1px solid var(--line)' }}>
                <div style={{ fontSize:9.5, fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--text-lo)', marginBottom:10 }}>{item.titulo}</div>
                {item.conteudo}
              </div>
            ))}

            <div className="glass" style={{ padding:'22px 24px', borderLeft:'2px solid var(--blue-700)' }}>
              <p style={{ fontSize:12.5, color:'var(--text-lo)', lineHeight:1.8 }}>
                <strong style={{ color:'var(--text-mid)', fontWeight:600 }}>Por que um formulário de qualificação?</strong><br />
                Não trabalhamos com orçamentos genéricos. Cada projeto exige análise técnica preliminar — irradiação, consumo, configuração elétrica, tipo de telhado — antes de qualquer proposta. Este formulário nos permite avaliar a viabilidade do seu projeto antes do primeiro contato.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:900px){
          #contato .wrap > div { grid-template-columns:1fr !important; gap:52px !important; }
        }
        @media (max-width:600px){
          #contato form > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  )
}
