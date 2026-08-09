import{g as s,a as i,b as d,i as l,c as n,d as g}from"./animations-BxStJXFt.js";import{C as u,P as m}from"./products-JcpdNqFq.js";document.getElementById("nav-placeholder").outerHTML=s();document.getElementById("footer-placeholder").outerHTML=i();function h(t){const a=document.getElementById("product-grid");a&&(a.innerHTML=t.map(r=>{const e=u[r.category],c=r.heroImage||(e==null?void 0:e.image)||"/src/assets/images/warehouse.jpg";return`
          <a href="/product.html?slug=${r.slug}" class="product-card reveal" data-category="${r.category}" aria-label="${r.name}">
            <div class="product-card__image">
              <img src="${c}" alt="${r.name}" loading="lazy" />
            </div>
            <div class="product-card__body">
              <div class="product-card__category">${(e==null?void 0:e.shortLabel)||r.category}</div>
              <h2 class="product-card__title">${r.name}</h2>
              <p class="product-card__desc">${r.shortDescription}</p>
              <div class="product-card__footer">
                <span class="product-card__cta">
                  View Product
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
                </span>
              </div>
            </div>
          </a>
        `}).join(""))}const p=new URLSearchParams(window.location.search),o=p.get("category");h(m);if(o){const t=document.querySelector(`.filter-pill[data-filter="${o}"]`);t&&t.click()}d();l();n();g();
