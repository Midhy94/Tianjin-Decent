import{i as L,a as T,b as x,n as m,c as u,P as A,C as R,f as I}from"./scroll-reveal-Ym039B2P.js";L();T();x();const _=document.getElementById("catalog-grid"),P=document.getElementById("products-count"),S=document.getElementById("category-filters"),r=document.getElementById("subcategory-filters"),E=new URLSearchParams(window.location.search);let e=m(E.get("category"))||"all",i=E.get("subcategory")||"all";function v(){const t=new URLSearchParams;e&&e!=="all"&&(t.set("category",e),i&&i!=="all"&&t.set("subcategory",i));const s=t.toString(),c=s?`${window.location.pathname}?${s}`:window.location.pathname;window.history.replaceState({},"",c)}function y(){if(!e||e==="all"||!u[e]){r.style.display="none",r.innerHTML="";return}const t=u[e];r.style.display="flex";let s=`<span class="subcategory-filter-label">${t.name}:</span>`;s+=`<button class="subfilter-chip ${i==="all"?"is-active":""}" data-sub="all">All ${t.name}</button>`,t.subcategories.forEach(c=>{s+=`<button class="subfilter-chip ${i===c?"is-active":""}" data-sub="${c}">${c}</button>`}),r.innerHTML=s,r.querySelectorAll(".subfilter-chip").forEach(c=>{c.addEventListener("click",()=>{r.querySelectorAll(".subfilter-chip").forEach(o=>o.classList.remove("is-active")),c.classList.add("is-active"),i=c.dataset.sub,v(),p()})})}function p(){var o;let t=A;e&&e!=="all"&&(t=t.filter(a=>a.category===e)),i&&i!=="all"&&(t=t.filter(a=>a.subcategory===i));const s=e!=="all"&&u[e]?u[e].name:"All Products",c=i!=="all"?` — ${i}`:"";if(P.textContent=`Displaying ${t.length} technical product lines (${s}${c})`,t.length===0){_.innerHTML=`
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-muted);">
            <p style="font-size: 16px; margin-bottom: 12px;">No products found in this category / subcategory.</p>
            <button class="btn btn--primary" id="reset-filter-btn">Reset Filters</button>
          </div>
        `,(o=document.getElementById("reset-filter-btn"))==null||o.addEventListener("click",()=>{e="all",i="all",b(),y(),v(),p()});return}_.innerHTML=t.map(a=>{var w;const $=a.categoryName||((w=R[a.category])==null?void 0:w.label)||"Industrial",C=a.subcategory||"";let h="ISO 9001";if(a.standards&&a.standards.length>0)h=a.standards[0].name.split("/")[0].trim();else if(a.specifications){const l=a.specifications.find(n=>/standard/i.test(n.label));l&&(h=l.value.split(/[,;\n]/)[0].trim().substring(0,18))}let f="ISO 9001, CE, Full Mill Test Certificate";if(a.standards&&a.standards.length>0)f=a.standards.map(l=>l.name.split("/")[0].trim()).join(", ");else if(a.specifications){const l=a.specifications.find(n=>/standard/i.test(n.label));l&&(f=l.value.split(`
`)[0].trim())}let g="Standard Certified Dimensions";a.specification?g=a.specification:a.specifications&&a.specifications.length>0&&(g=(a.specifications.find(n=>/specification|dimension|size|diameter|scope|range/i.test(n.label))||a.specifications[0]).value.split(`
`)[0].trim());let d=a.shortDescription||"";if(a.uses)d=a.uses;else if(a.specifications){const l=a.specifications.find(n=>/use|application/i.test(n.label));l&&(d=l.value.split(`
`)[0].trim())}return!d&&a.applications&&a.applications.length>0&&(d=a.applications[0]),`
          <div class="product-card">
            <a href="/product.html?id=${a.slug}" class="product-card__img-wrap" aria-label="View specifications for ${a.name}">
              <img src="${a.heroImage}" alt="${a.name}" class="product-card__img" loading="lazy" />
              <span class="product-card__category-pill">${$}</span>
            </a>
            <div class="product-card__body">
              <div class="product-card__meta-row">
                <span class="product-card__subcat">${C||$}</span>
                <span class="product-card__badge">${h}</span>
              </div>
              <h3 class="product-card__title">
                <a href="/product.html?id=${a.slug}" class="product-card__title-link">${a.name}</a>
              </h3>
              <div class="product-card__spec-box">
                <div class="product-card__spec-row">
                  <span class="product-card__spec-lbl">Specification:</span>
                  <span class="product-card__spec-val" title="${g}">${g}</span>
                </div>
                <div class="product-card__spec-row">
                  <span class="product-card__spec-lbl">Standards:</span>
                  <span class="product-card__spec-val" title="${f}">${f}</span>
                </div>
              </div>
              <p class="product-card__uses">
                <strong>Uses:</strong> ${d}
              </p>
              <div class="product-card__footer">
                <a href="/product.html?id=${a.slug}" class="product-card__cta">
                  Explore Specs &amp; MTC <span class="product-card__cta-arrow">→</span>
                </a>
                <a href="/contact.html?product=${a.slug}" class="btn btn--primary btn--sm product-card__quote-btn">
                  Quote
                </a>
              </div>
            </div>
          </div>
        `}).join(""),I(_)}function b(){S.querySelectorAll(".filter-chip").forEach(s=>{m(s.dataset.category)===e?s.classList.add("is-active"):s.classList.remove("is-active")})}S.querySelectorAll(".filter-chip").forEach(t=>{t.addEventListener("click",()=>{const s=m(t.dataset.category);e!==s&&(e=s,i="all",b(),y(),v(),p())})});window.addEventListener("popstate",()=>{const t=new URLSearchParams(window.location.search);e=m(t.get("category"))||"all",i=t.get("subcategory")||"all",b(),y(),p()});b();y();p();
