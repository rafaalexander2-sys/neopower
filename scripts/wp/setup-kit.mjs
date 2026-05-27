/**
 * Configura o Kit Global do Elementor com o design system da Neo Power.
 * Cores, tipografia e estilos de botão/formulário.
 */
import { wpFetch, WP_BASE } from './client.mjs'

const kitSettings = {
  // ─── Cores do sistema (4 slots padrão do Elementor) ─────────
  system_colors: [
    { _id: 'primary',   title: 'Primário',  color: '#2B5EA7' },
    { _id: 'secondary', title: 'Secundário', color: '#4A90D9' },
    { _id: 'text',      title: 'Texto',      color: '#EEF0F6' },
    { _id: 'accent',    title: 'Destaque',   color: '#1B3F6F' },
  ],

  // ─── Cores customizadas ───────────────────────────────────────
  custom_colors: [
    { _id: 'bg-base',    title: 'BG Base',    color: '#04070E' },
    { _id: 'bg-surface', title: 'BG Surface', color: '#070C18' },
    { _id: 'text-mid',   title: 'Texto Médio', color: '#7D869E' },
    { _id: 'text-lo',    title: 'Texto Fraco', color: '#3E4459' },
    { _id: 'blue-800',   title: 'Azul 800',   color: '#163360' },
    { _id: 'blue-700',   title: 'Azul 700',   color: '#1B3F6F' },
    { _id: 'blue-600',   title: 'Azul 600',   color: '#2457A0' },
    { _id: 'blue-500',   title: 'Azul 500',   color: '#2B5EA7' },
    { _id: 'blue-400',   title: 'Azul 400',   color: '#4A90D9' },
  ],

  // ─── Tipografia do sistema ────────────────────────────────────
  system_typography: [
    {
      _id: 'primary', title: 'Primário',
      typography_typography:   'custom',
      typography_font_family:  'Plus Jakarta Sans',
      typography_font_weight:  '700',
    },
    {
      _id: 'secondary', title: 'Secundário',
      typography_typography:   'custom',
      typography_font_family:  'Plus Jakarta Sans',
      typography_font_weight:  '400',
    },
    {
      _id: 'text', title: 'Texto',
      typography_typography:   'custom',
      typography_font_family:  'Plus Jakarta Sans',
      typography_font_weight:  '400',
    },
    {
      _id: 'accent', title: 'Destaque',
      typography_typography:   'custom',
      typography_font_family:  'Plus Jakarta Sans',
      typography_font_weight:  '600',
    },
  ],

  // ─── Tipografia customizada ───────────────────────────────────
  custom_typography: [
    {
      _id: 'label', title: 'Label (uppercase)',
      typography_typography:       'custom',
      typography_font_family:      'Plus Jakarta Sans',
      typography_font_weight:      '700',
      typography_text_transform:   'uppercase',
      typography_letter_spacing:   { unit: 'em', size: 0.28 },
    },
  ],

  // ─── Fundo padrão do body ─────────────────────────────────────
  body_background_background:   'classic',
  body_background_color:        '#04070E',

  // ─── Cor padrão do texto ──────────────────────────────────────
  body_color_color:             '#7D869E',

  // ─── Links ───────────────────────────────────────────────────
  link_normal_color:            '#4A90D9',
  link_hover_color:             '#EEF0F6',
}

async function setupKit() {
  console.log('🎨  Configurando Kit Global do Elementor...\n')

  // Busca o kit ativo
  const kits = await wpFetch(
    `${WP_BASE}/wp-json/wp/v2/elementor_library?type=kit&per_page=1`
  )

  if (!kits.length) {
    console.error('❌  Nenhum Kit do Elementor encontrado. Ative o Elementor no site primeiro.')
    process.exit(1)
  }

  const kit = kits[0]
  console.log(`📦  Kit encontrado: "${kit.title.rendered}" (ID ${kit.id})`)

  // Atualiza as configurações do kit
  await wpFetch(`${WP_BASE}/wp-json/wp/v2/elementor_library/${kit.id}`, {
    method: 'POST',
    body: JSON.stringify({
      meta: {
        _elementor_page_settings: JSON.stringify(kitSettings),
        _elementor_edit_mode:     'builder',
      },
    }),
  })

  console.log('\n✅  Kit configurado com sucesso!')
  console.log('   • 9 cores customizadas (paleta Neo Power)')
  console.log('   • 4 tipografias do sistema (Plus Jakarta Sans)')
  console.log('   • 1 tipografia customizada (Label)')
  console.log('   • Fundo padrão: #04070E')
}

setupKit().catch(err => { console.error(err.message); process.exit(1) })
