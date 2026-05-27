import { wpFetch } from './client.mjs'

/**
 * Cria ou atualiza uma página com dados do Elementor.
 * @param {object} opts
 * @param {string} opts.title    - Título da página
 * @param {string} opts.slug     - Slug da URL (ex: 'quem-somos')
 * @param {Array}  opts.data     - Array de seções do Elementor
 * @param {string} [opts.status] - 'publish' | 'draft' (default: 'publish')
 */
export async function pushPage({ title, slug, data, status = 'publish' }) {
  const elementorData = JSON.stringify(data)

  const payload = {
    title,
    slug,
    status,
    meta: {
      _elementor_edit_mode: 'builder',
      _elementor_template_type: 'wp-page',
      _elementor_version: '3.0.0',
      _elementor_data: elementorData,
    },
  }

  // Verifica se a página já existe
  const existing = await wpFetch(`pages?slug=${encodeURIComponent(slug)}&per_page=1`)

  let result
  if (existing.length > 0) {
    const id = existing[0].id
    console.log(`🔄  Atualizando página existente: "${title}" (ID ${id})`)
    result = await wpFetch(`pages/${id}`, { method: 'POST', body: JSON.stringify(payload) })
  } else {
    console.log(`✨  Criando nova página: "${title}"`)
    result = await wpFetch('pages', { method: 'POST', body: JSON.stringify(payload) })
  }

  console.log(`✅  Página publicada: ${result.link}`)
  return result
}
