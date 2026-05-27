const WP_URL    = process.env.WP_URL?.replace(/\/$/, '')
const WP_USER   = process.env.WP_USER
const WP_PASS   = process.env.WP_APP_PASSWORD

if (!WP_URL || !WP_USER || !WP_PASS) {
  console.error('❌  Variáveis faltando. Verifique .env.wp')
  process.exit(1)
}

const auth = Buffer.from(`${WP_USER}:${WP_PASS}`).toString('base64')

export async function wpFetch(endpoint, options = {}) {
  const base = endpoint.startsWith('http') ? endpoint : `${WP_URL}/wp-json/wp/v2/${endpoint}`

  let res
  try {
    res = await fetch(base, {
      ...options,
      headers: {
        Authorization:  `Basic ${auth}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })
  } catch (err) {
    throw new Error(`Falha de conexão com ${base}\nCausa: ${err.cause?.message ?? err.message}`)
  }

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`WP API ${res.status} → ${base}\n${body}`)
  }

  return res.json()
}

export const WP_BASE = WP_URL
