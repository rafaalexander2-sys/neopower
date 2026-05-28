// Shared HTML constants imported by all page scripts

export const NAVBAR = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
.np-nav{position:fixed;top:0;left:0;width:100%;z-index:9999;background:rgba(4,7,14,.72);backdrop-filter:blur(22px) saturate(180%);-webkit-backdrop-filter:blur(22px) saturate(180%);border-bottom:1px solid rgba(255,255,255,.06);transition:background .35s,box-shadow .35s;font-family:'Plus Jakarta Sans',sans-serif}
.np-nav.scrolled{background:rgba(4,7,14,.92);box-shadow:0 1px 24px rgba(0,0,0,.4)}
.np-nav-inner{max-width:1280px;margin:0 auto;padding:0 48px;height:88px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.np-nav-links{list-style:none;padding:0;margin:0;display:flex;gap:28px;align-items:center;flex:1;justify-content:center}
.np-nav-link{color:rgba(255,255,255,.6);font-size:12px;font-weight:500;letter-spacing:.02em;text-decoration:none;transition:color .2s;white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif}
.np-nav-link:hover,.np-nav-link.active{color:#fff}
.np-nav-cta{display:inline-flex;align-items:center;justify-content:center;background:#2B5EA7;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:10px 22px;text-decoration:none;border-radius:0;cursor:pointer;flex-shrink:0;transition:background .2s;white-space:nowrap}
.np-nav-cta:hover{background:#4A90D9}
.np-nav-burger{display:none;background:none;border:none;cursor:pointer;padding:8px;flex-direction:column;gap:5px;align-items:center}
.np-nav-burger span{display:block;width:22px;height:1.5px;background:rgba(255,255,255,.7);border-radius:99px}
.np-mob-menu{display:none;position:fixed;inset:0;z-index:9998;background:rgba(4,7,14,.97);flex-direction:column;align-items:center;justify-content:center;gap:28px}
.np-mob-menu.open{display:flex}
.np-mob-lnk{color:rgba(255,255,255,.7);font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:500;text-decoration:none;transition:color .2s}
.np-mob-lnk:hover{color:#fff}
.np-mob-x{position:absolute;top:22px;right:22px;background:none;border:none;cursor:pointer;color:rgba(255,255,255,.4);font-size:24px;line-height:1;font-family:sans-serif}
@media(max-width:900px){.np-nav-links,.np-nav-cta{display:none!important}.np-nav-burger{display:flex}.np-nav-inner{padding:0 24px}}
</style>
<nav class="np-nav" id="np-topnav">
  <div class="np-nav-inner">
    <a href="/" style="text-decoration:none;display:flex;align-items:center;flex-shrink:0">
      <img src="/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png" alt="Neo Power" style="height:161px;width:auto;object-fit:contain;display:block" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex'">
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
})();
</script>`

export const FOOTER_LOGO = `<img src="/wp-content/uploads/2026/04/neo-power-cores-finalbrancookokk-Renan-Alves-1.png" alt="Neo Power" style="height:146px;width:auto;object-fit:contain;margin-bottom:18px;display:block" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;letter-spacing:.12em;text-transform:uppercase;margin-bottom:18px">NEO POWER</span>`
