import { wpFetch, WP_BASE } from './client.mjs'

// Lê settings via REST (precisa de auth de admin — já temos)
async function getSettings() {
  try {
    return await wpFetch(`${WP_BASE}/wp-json/wp/v2/settings`)
  } catch (e) {
    return { _erro: e.message }
  }
}

async function run() {
  console.log('🔎  DIAGNÓSTICO DO WORDPRESS\n')
  console.log(`Site: ${WP_BASE}\n`)

  // 1. Página inicial configurada
  const settings = await getSettings()
  console.log('── CONFIGURAÇÃO DE LEITURA ──')
  console.log(`show_on_front : ${settings.show_on_front ?? '(?)'}`)
  console.log(`page_on_front : ${settings.page_on_front ?? '(?)'}  ← ID da página exibida em "/"`)
  console.log(`posts_per_page: ${settings.posts_per_page ?? '(?)'}`)
  if (settings._erro) console.log(`(aviso ao ler settings: ${settings._erro})`)
  console.log('')

  // 2. Todas as páginas
  const pages = await wpFetch('pages?per_page=100&status=publish,draft,private&_fields=id,slug,title,link,template,status')
  console.log(`── PÁGINAS (${pages.length}) ──`)
  for (const p of pages) {
    const frontMark = String(p.id) === String(settings.page_on_front) ? '  🏠 FRONT PAGE' : ''
    console.log(`#${p.id}  [${p.status}]  slug="${p.slug}"  tmpl="${p.template || '(default)'}"  → ${p.link}${frontMark}`)
  }
  console.log('')

  // 3. Inspeciona o conteúdo da FRONT PAGE
  if (settings.page_on_front) {
    console.log('── CONTEÚDO DA FRONT PAGE ──')
    try {
      const fp = await wpFetch(`pages/${settings.page_on_front}?context=edit&_fields=id,slug,title,template,meta,content`)
      console.log(`ID ${fp.id} · slug="${fp.slug}" · template="${fp.template || '(default)'}"`)
      const data = fp.meta?._elementor_data
      if (data) {
        const str = typeof data === 'string' ? data : JSON.stringify(data)
        console.log(`_elementor_data: ${str.length} chars`)
        console.log(`Contém navbar nova (np-nav)?      ${str.includes('np-nav') ? 'SIM' : 'NÃO'}`)
        console.log(`Contém link "/quem-somos"?         ${str.includes('/quem-somos') ? 'SIM' : 'NÃO'}`)
        console.log(`Contém âncora antiga "#sobre"?     ${str.includes('#sobre') ? 'SIM ⚠️' : 'não'}`)
        console.log(`Contém logo nova (2026/04)?        ${str.includes('2026/04/neo-power') ? 'SIM' : 'NÃO'}`)
      } else {
        console.log('⚠️  Sem _elementor_data — a front page NÃO é uma página Elementor nossa.')
        console.log(`content.rendered (200): ${(fp.content?.rendered || '').slice(0, 200).replace(/\s+/g, ' ')}`)
      }
    } catch (e) {
      console.log(`Erro ao ler front page: ${e.message}`)
    }
    console.log('')
  }

  // 4. Menus do tema (se o plugin de menus REST estiver ativo)
  console.log('── MENUS DO TEMA (Aparência → Menus) ──')
  try {
    const menus = await wpFetch(`${WP_BASE}/wp-json/wp/v2/menus?per_page=20`)
    if (Array.isArray(menus) && menus.length) {
      for (const m of menus) console.log(`menu #${m.id}: "${m.name}" (slug=${m.slug})`)
    } else {
      console.log('(nenhum menu retornado pela API)')
    }
  } catch (e) {
    console.log(`(não foi possível ler menus via REST: ${e.message.split('\n')[0]})`)
  }
  console.log('')

  // 5. Templates do Elementor Theme Builder (header/footer globais)
  console.log('── TEMPLATES ELEMENTOR (Theme Builder: header/footer globais) ──')
  try {
    const tpls = await wpFetch(`${WP_BASE}/wp-json/wp/v2/elementor_library?per_page=50&_fields=id,slug,title,meta`)
    if (Array.isArray(tpls) && tpls.length) {
      for (const t of tpls) {
        const type = t.meta?._elementor_template_type || '(?)'
        console.log(`tpl #${t.id}: "${t.title?.rendered || t.slug}" tipo=${type}`)
      }
    } else {
      console.log('(nenhum template do Elementor retornado — endpoint pode estar privado)')
    }
  } catch (e) {
    console.log(`(não foi possível ler elementor_library via REST: ${e.message.split('\n')[0]})`)
  }

  console.log('\n✅  Diagnóstico concluído. Copie TODO este log e envie ao Claude.')
}

run().catch(err => { console.error('ERRO:', err.message); process.exit(1) })
