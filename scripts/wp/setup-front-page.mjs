import { wpFetch } from './client.mjs'

async function run() {
  console.log('🏠  Configurando página inicial do WordPress...\n')

  const pages = await wpFetch('pages?slug=home&per_page=1')
  if (!pages.length) throw new Error('Página "home" não encontrada. Publique-a primeiro.')

  const homeId = pages[0].id
  console.log(`   ID da página Home: ${homeId}`)

  await wpFetch('settings', {
    method: 'POST',
    body: JSON.stringify({ show_on_front: 'page', page_on_front: homeId }),
  })

  console.log('✅  Página inicial configurada como "Home"')
  console.log('   WordPress → Configurações → Leitura agora aponta para a página Home.')
}

run().catch(err => { console.error(err.message); process.exit(1) })
