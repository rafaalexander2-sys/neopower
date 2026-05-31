// Shared HTML constants imported by all page scripts

// Global reset + body styles + Elementor full-width override.
// Injected once via NAVBAR so every page that imports NAVBAR gets it.
export const RESET_CSS = `
<style id="np-reset">
html,body{margin:0;padding:0;background:#04070E;color:#EEF0F6;overflow-x:hidden;width:100%;max-width:100vw}
body{font-family:'Plus Jakarta Sans',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
*{box-sizing:border-box}
img,video,iframe{max-width:100%;display:block}
/* Mata o "boxed" do tema e bordas laterais que sobram em volta das seções */
.elementor,.elementor-section,.elementor-container,.elementor-row,.elementor-column-wrap,.elementor-widget-wrap{max-width:none!important;width:100%!important;margin-left:0!important;margin-right:0!important}
.elementor-section-wrap,.site,.site-content,.content-area,#main,#primary,.entry-content,article.page{margin:0!important;padding:0!important;background:#04070E!important;max-width:none!important;width:100%!important}
/* Libera overflow dos wrappers de conteúdo pra seções 100vw (full-bleed) não serem cortadas */
.site,.site-content,.content-area,#main,#primary,#content,#page,.entry-content,.elementor,.elementor-section-wrap,article.page,.page-content{overflow:visible!important}
.elementor-page .elementor-element-populated{padding:0!important}
@media(max-width:600px){html,body{font-size:15px}}
/* Touch-friendly por padrão */
a,button{touch-action:manipulation}

/* ── BRUTALISMO INDUSTRIAL: quinas vivas em TUDO (vence theme defaults) ── */
button,.button,input,textarea,select,
.elementor-button,.elementor-field-group input,.elementor-field-group textarea,.elementor-field-group select,
.np-btn-p,.np-btn-g,.np-nav-cta,.np-input,.np-glass,.np-photo-slot,.np-pb-slot,
.np-sol-grid,.np-sol-card,.np-casos-main,.np-quote,.np-badge,.np-ph,.glass{border-radius:0!important}
/* Mata gradients/sombras herdadas dos botões — azul chapado, sem brilho */
.np-btn-p,.np-nav-cta{background-image:none!important;box-shadow:none!important;text-shadow:none!important}
.np-btn-p:hover,.np-nav-cta:hover{background-image:none!important;box-shadow:none!important;transform:none!important}
.np-btn-g{background-image:none!important;box-shadow:none!important}
.np-btn-g:hover{transform:none!important}
/* Zera appearance default do navegador nos inputs (sem inset shadow do tema) */
button,input,textarea,select{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}
/* Opções do <select> legíveis — corrige o texto na cor do fundo no dropdown */
.np-input option{color:#0b1220!important;background:#ffffff!important}
/* ── FOTOS: imagem cobre o slot, legenda fica por cima ── */
.np-photo-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;border:0;margin:0;max-width:none;display:block}
.np-slot-cap,.np-pb-cap{z-index:2}
/* Quando há foto real no slot, esconde a legenda (placeholder mostra o rótulo) */
.np-photo-img~.np-pb-cap,.np-photo-img~.np-slot-cap,.np-photo-img~.np-cap{display:none!important}
</style>`

// ─── WHATSAPP ───────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '5524981114255'
export const WA_URL = 'https://wa.me/5524981114255?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20um%20projeto%20de%20energia%20solar.'
const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
const waSvg = (s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="#fff" style="display:block;flex-shrink:0"><path d="${WA_PATH}"/></svg>`

// Botão flutuante de WhatsApp (injetado em todas as páginas via NAVBAR)
export const WHATSAPP_FLOAT = `
<style>
.np-wa-float{position:fixed;right:18px;bottom:18px;z-index:99999;width:58px;height:58px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 22px rgba(0,0,0,.4);transition:transform .2s,box-shadow .2s}
.np-wa-float:hover{transform:scale(1.08);box-shadow:0 10px 28px rgba(37,211,102,.45)}
@media(max-width:600px){.np-wa-float{right:14px;bottom:14px;width:54px;height:54px}}
</style>
<a href="${WA_URL}" target="_blank" rel="noopener" class="np-wa-float" aria-label="Falar no WhatsApp">${waSvg(32)}</a>`

// Botão verde de WhatsApp para usar dentro das páginas (CTA)
export const WA_BUTTON = `<a href="${WA_URL}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;background:#25D366;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:14px 24px;text-decoration:none;border-radius:0;width:100%;box-sizing:border-box">${waSvg(18)}Falar no WhatsApp</a>`

export const NAVBAR = `${RESET_CSS}
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
.np-nav{position:fixed;top:0;left:0;width:100%;z-index:9999;background:rgba(4,7,14,.72);backdrop-filter:blur(22px) saturate(180%);-webkit-backdrop-filter:blur(22px) saturate(180%);border-bottom:1px solid rgba(255,255,255,.06);transition:background .35s,box-shadow .35s;font-family:'Plus Jakarta Sans',sans-serif}
.np-nav.scrolled{background:rgba(4,7,14,.92);box-shadow:0 1px 24px rgba(0,0,0,.4)}
.np-nav-inner{max-width:1280px;margin:0 auto;padding:0 48px;height:88px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.np-nav-links{list-style:none;padding:0;margin:0;display:flex;gap:28px;align-items:center;flex:1;justify-content:center}
.np-nav-link{color:rgba(255,255,255,.6);font-size:12px;font-weight:500;letter-spacing:.02em;text-decoration:none;transition:color .2s;white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif}
.np-nav-link:hover,.np-nav-link.active{color:#fff}
.np-nav-cta{display:inline-flex;align-items:center;justify-content:center;background:#2B5EA7;background-image:none;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:10px 22px;text-decoration:none;border:none;border-radius:0;box-shadow:none;cursor:pointer;flex-shrink:0;transition:background .15s;white-space:nowrap}
.np-nav-cta:hover{background:#4A90D9}
.np-nav-burger{display:none;background:none;border:none;cursor:pointer;padding:8px;flex-direction:column;gap:5px;align-items:center}
.np-nav-burger span{display:block;width:22px;height:1.5px;background:rgba(255,255,255,.7);border-radius:99px}
.np-mob-menu{display:none;position:fixed;inset:0;z-index:9998;background:rgba(4,7,14,.97);flex-direction:column;align-items:center;justify-content:center;gap:28px}
.np-mob-menu.open{display:flex}
.np-mob-lnk{color:rgba(255,255,255,.7);font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:500;text-decoration:none;transition:color .2s;padding:12px 24px;min-height:44px;display:inline-flex;align-items:center}
.np-mob-lnk:hover{color:#fff}
.np-mob-x{position:absolute;top:22px;right:22px;background:none;border:none;cursor:pointer;color:rgba(255,255,255,.4);font-size:24px;line-height:1;font-family:sans-serif}
@media(max-width:900px){.np-nav-links,.np-nav-cta{display:none!important}.np-nav-burger{display:flex}.np-nav-inner{padding:0 24px}}
</style>
<nav class="np-nav" id="np-topnav">
  <div class="np-nav-inner">
    <a href="/" style="text-decoration:none;display:flex;align-items:center;flex-shrink:0">
      <img src="https://neopowerenergia.com.br/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png" alt="Neo Power" style="height:161px;width:auto;object-fit:contain;display:block" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex'">
      <span style="display:none;align-items:center;height:161px;font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;letter-spacing:.14em;text-transform:uppercase">NEO POWER</span>
    </a>
    <ul class="np-nav-links">
      <li><a href="/" class="np-nav-link">Home</a></li>
      <li><a href="/quem-somos" class="np-nav-link">Quem Somos</a></li>
      <li><a href="/servicos" class="np-nav-link">Serviços</a></li>
      <li><a href="/projetos" class="np-nav-link">Projetos</a></li>
      <li><a href="/contato" class="np-nav-link">Contato</a></li>
    </ul>
    <a href="/contato" class="np-nav-cta">Solicitar Auditoria</a>
    <button class="np-nav-burger" id="np-burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="np-mob-menu" id="np-mob">
  <button class="np-mob-x" id="np-mob-x">✕</button>
  <a href="/" class="np-mob-lnk">Home</a>
  <a href="/quem-somos" class="np-mob-lnk">Quem Somos</a>
  <a href="/servicos" class="np-mob-lnk">Serviços</a>
  <a href="/projetos" class="np-mob-lnk">Projetos</a>
  <a href="/contato" class="np-mob-lnk">Contato</a>
  <a href="/contato" class="np-nav-cta" style="margin-top:8px">Solicitar Auditoria</a>
</div>
<script>
(function(){
  var nav=document.getElementById('np-topnav');
  var mob=document.getElementById('np-mob');
  document.getElementById('np-burger').addEventListener('click',function(){mob.classList.toggle('open')});
  document.getElementById('np-mob-x').addEventListener('click',function(){mob.classList.remove('open')});
  mob.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mob.classList.remove('open')})});
  function upd(){nav.classList.toggle('scrolled',window.scrollY>40)}
  window.addEventListener('scroll',upd,{passive:true});
  upd();

  // ── Hero video injection (roda aqui porque este script já provou que executa)
  function injectHero(){
    var h=document.getElementById('np-hero');
    if(!h||document.getElementById('np-hero-vid'))return false;
    var url=h.getAttribute('data-hero-video');
    if(!url)return false;
    var v=document.createElement('video');
    v.id='np-hero-vid';
    v.muted=true;v.defaultMuted=true;v.autoplay=true;v.loop=true;v.playsInline=true;
    v.setAttribute('muted','');v.setAttribute('autoplay','');v.setAttribute('loop','');v.setAttribute('playsinline','');v.setAttribute('preload','auto');
    var s=document.createElement('source');s.src=url;s.type='video/mp4';v.appendChild(s);
    h.insertBefore(v,h.firstChild);
    function reposition(){
      var vw=document.documentElement.clientWidth||window.innerWidth;
      var r=h.getBoundingClientRect();
      v.style.cssText='position:absolute;top:0;left:'+(-r.left)+'px;width:'+vw+'px;height:'+h.offsetHeight+'px;object-fit:cover;object-position:center;z-index:0;pointer-events:none;display:block;margin:0;border:0;max-width:none;max-height:none';
    }
    reposition();
    var p=v.play();if(p&&p.catch)p.catch(function(){});
    window.addEventListener('resize',reposition,{passive:true});
    window.addEventListener('orientationchange',reposition,{passive:true});
    v.addEventListener('loadedmetadata',reposition);
    if(window.ResizeObserver)new ResizeObserver(reposition).observe(h);
    return true;
  }
  // tenta agora, se não rolou (DOM ainda não tem #np-hero), tenta de novo no DOMContentLoaded e no load
  if(!injectHero()){
    document.addEventListener('DOMContentLoaded',injectHero);
    window.addEventListener('load',injectHero);
    // retry adicional pra casos onde o widget HTML carrega async
    var tries=0,timer=setInterval(function(){if(injectHero()||++tries>20)clearInterval(timer);},250);
  }
})();
</script>
${WHATSAPP_FLOAT}`

// ─── MAPA DE FOTOS ──────────────────────────────────────────────────────────
// Suba cada foto na Biblioteca de Mídia do WordPress e cole a URL aqui.
// Vazio ('') = mantém o placeholder com gradiente. Depois rode o workflow `all`.
export const PHOTOS = {
  // HOME — faixa de 3 fotos logo abaixo do hero
  homeBandMt:      'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20220304_135550_0199-scaled.jpg', // Infraestrutura elétrica — Quadro de proteção MT
  homeBandAerea:   'https://neopowerenergia.com.br/wp-content/uploads/2026/05/DJI_0608-scaled.jpg', // Usina fotovoltaica — Vista aérea
  homeBandFixacao: 'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20200310_180525_0006-scaled.jpg', // Detalhe técnico — Fixação e impermeabilização
  // HOME — outras seções
  homeEquipe:      'https://neopowerenergia.com.br/wp-content/uploads/2026/04/foreman-businessman-solar-energy-station-scaled.jpg', // Rigor Técnico — equipe em campo
  homeUsina93:     'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20250107_190316_0001-scaled.jpg', // Vista geral da usina de 93 kWp
  homeDetalheMt:   'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20200603_135750_0063-scaled.jpg', // Detalhe — Infraestrutura de Média Tensão
  // PROJETOS
  projUsina93:     'https://neopowerenergia.com.br/wp-content/uploads/2026/05/DJI_0608-scaled.jpg', // Vista geral da usina de 93 kWp
  projDetalheMt:   'https://neopowerenergia.com.br/wp-content/uploads/2026/05/IMG_20240130_185623_0430-scaled.jpg', // Detalhe — Infraestrutura de Média Tensão
  // QUEM SOMOS
  quemSomosRenan:  'https://neopowerenergia.com.br/wp-content/uploads/2026/05/renan-ia.png', // Renan Alves — Diretoria Técnica
}

// Renderiza <img> que cobre o slot quando há URL; senão, mantém o gradiente.
// pos = object-position opcional (ex.: 'center 70%') para controlar o corte.
export function photo(url, alt = '', pos = '') {
  const st = pos ? ` style="object-position:${pos}"` : ''
  return url ? `<img class="np-photo-img" src="${url}" alt="${alt}" loading="lazy"${st} onerror="this.remove()">` : ''
}

export const FOOTER_LOGO = `<img src="https://neopowerenergia.com.br/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png" alt="Neo Power" style="height:146px;width:auto;object-fit:contain;margin-bottom:18px;display:block" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px">NEO POWER</span>`
