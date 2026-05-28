import { wpFetch, WP_BASE } from './client.mjs'

async function run() {
  console.log('🧹  Limpeza: remover Header antigo do Elementor Theme Builder\n')

  // 1. Inspecionar tpl #22
  console.log('── 1. Inspecionando template "Header" #22 ──')
  let header
  try {
    header = await wpFetch(`${WP_BASE}/wp-json/wp/v2/elementor_library/22?context=edit`)
  } catch (e) {
    console.error('❌  Não foi possível ler tpl #22:', e.message)
    process.exit(1)
  }
  const raw = header.meta?._elementor_data
  const data = typeof raw === 'string' ? raw : JSON.stringify(raw || '')
  console.log(`título   : ${header.title?.rendered || '(sem título)'}`)
  console.log(`status   : ${header.status}`)
  console.log(`tipo     : ${header.meta?._elementor_template_type || '(?)'}`)
  console.log(`tamanho  : ${data.length} chars`)
  console.log(`tem "#sobre"?     ${data.includes('#sobre') ? '🎯 SIM — confirma o problema' : 'não'}`)
  console.log(`tem "#projetos"?  ${data.includes('#projetos') ? 'SIM' : 'não'}`)
  console.log(`tem "/quem-somos"? ${data.includes('/quem-somos') ? 'SIM' : 'NÃO (é antigo mesmo)'}`)

  // 2. Mandar pro lixo
  console.log('\n── 2. Movendo template para o lixo ──')
  try {
    const res = await wpFetch(`${WP_BASE}/wp-json/wp/v2/elementor_library/22`, { method: 'DELETE' })
    console.log(`✅  Template "Header" movido para o lixo. Status agora: ${res.status || '(deletado)'}`)
    console.log('   Para reverter: WP Admin → Templates → Lixeira → Restaurar')
  } catch (e) {
    console.error('❌  Falha ao mover para o lixo:', e.message)
    process.exit(1)
  }

  // 3. Listar duplicatas
  console.log('\n── 3. Páginas duplicadas (NÃO removidas, só listadas) ──')
  try {
    const dups = await wpFetch('pages?per_page=100&include=388,9&_fields=id,slug,title')
    for (const p of dups) {
      console.log(`  #${p.id}  slug="${p.slug}"  título="${p.title?.rendered}"`)
    }
    console.log('   → Considere remover via WP Admin se confirmar que não são usadas.')
  } catch (e) {
    console.log(`  (não foi possível listar duplicatas: ${e.message.split('\n')[0]})`)
  }

  console.log('\n✅  Pronto. Recarregue o site com Ctrl+Shift+R (limpa cache do navegador).')
  console.log('   Se ainda mostrar o menu antigo: limpe o cache do WP (plugin de cache / Cloudflare).')
}

run().catch(err => { console.error('ERRO:', err.message); process.exit(1) })
