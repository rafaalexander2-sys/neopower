import { randomBytes } from 'crypto'

const uid = () => randomBytes(4).toString('hex')

// ─── Estrutura base ───────────────────────────────────────────

export function section(settings = {}, columns = []) {
  return { id: uid(), elType: 'section', isInner: false, settings, elements: columns }
}

export function column(settings = {}, widgets = []) {
  return { id: uid(), elType: 'column', settings, elements: widgets }
}

export function widget(widgetType, settings = {}) {
  return { id: uid(), elType: 'widget', widgetType, settings, elements: [] }
}

export function container(settings = {}, children = []) {
  return { id: uid(), elType: 'container', settings, elements: children }
}

// ─── Widgets comuns ───────────────────────────────────────────

export const heading = (title, tag = 'h2', settings = {}) =>
  widget('heading', { title, header_size: tag, ...settings })

export const text = (editor, settings = {}) =>
  widget('text-editor', { editor, ...settings })

export const button = (text, url = '#', settings = {}) =>
  widget('button', { text, link: { url }, ...settings })

export const image = (url, alt = '', settings = {}) =>
  widget('image', { image: { url, alt }, ...settings })

export const divider = (settings = {}) =>
  widget('divider', settings)

export const spacer = (height = '50px') =>
  widget('spacer', { space: { size: parseInt(height), unit: 'px' } })

export const icon = (library = 'fa-solid', value = 'fa-check', settings = {}) =>
  widget('icon', { selected_icon: { library, value }, ...settings })

export const iconBox = (title, description, iconValue = 'fa-star', settings = {}) =>
  widget('icon-box', {
    title_text: title,
    description_text: description,
    selected_icon: { library: 'fa-solid', value: iconValue },
    ...settings,
  })

export const imageBox = (title, description, imageUrl, settings = {}) =>
  widget('image-box', {
    title_text: title,
    description_text: description,
    image: { url: imageUrl },
    ...settings,
  })

export const video = (url, settings = {}) =>
  widget('video', { link: url, video_type: 'youtube', ...settings })

export const googleMaps = (address, settings = {}) =>
  widget('google_maps', { address, ...settings })

// Elementor Form (Pro)
export const form = (fields = [], submitText = 'Enviar', settings = {}) =>
  widget('form', {
    button_text: submitText,
    form_fields: fields,
    ...settings,
  })

export const formField = (label, type = 'text', required = true) => ({
  _id:          uid(),
  field_type:   type,
  field_label:  label,
  placeholder:  label,
  required:     required ? 'true' : '',
  width:        '100',
})

// ─── Helpers de layout ────────────────────────────────────────

export function oneColumn(widgets, sectionSettings = {}, colSettings = {}) {
  return section(sectionSettings, [column({ width: { unit: '%', size: 100 }, ...colSettings }, widgets)])
}

export function twoColumns(leftWidgets, rightWidgets, sectionSettings = {}) {
  return section(sectionSettings, [
    column({ _column_size: 50 }, leftWidgets),
    column({ _column_size: 50 }, rightWidgets),
  ])
}

export function threeColumns(col1, col2, col3, sectionSettings = {}) {
  return section(sectionSettings, [
    column({ _column_size: 33 }, col1),
    column({ _column_size: 33 }, col2),
    column({ _column_size: 33 }, col3),
  ])
}
