import{i as T,a as x,b as A,n as b,c as y,t,P as R,C as I,f as P}from"./scroll-reveal-DjojszHI.js";T();x();A();const v=document.getElementById("catalog-grid"),U=document.getElementById("products-count"),S=document.getElementById("category-filters"),o=document.getElementById("subcategory-filters"),C=new URLSearchParams(window.location.search);let s=b(C.get("category"))||"all",c=C.get("subcategory")||"all";function $(){const e=new URLSearchParams;s&&s!=="all"&&(e.set("category",s),c&&c!=="all"&&e.set("subcategory",c));const i=e.toString(),l=i?`${window.location.pathname}?${i}`:window.location.pathname;window.history.replaceState({},"",l)}function g(){if(!s||s==="all"||!y[s]){o.style.display="none",o.innerHTML="";return}const e=y[s];o.style.display="flex";let i=`<span class="subcategory-filter-label">${t(e.name)}:</span>`;i+=`<button class="subfilter-chip ${c==="all"?"is-active":""}" data-sub="all">${t("All")} ${t(e.name)}</button>`,e.subcategories.forEach(l=>{i+=`<button class="subfilter-chip ${c===l?"is-active":""}" data-sub="${l}">${t(l)}</button>`}),o.innerHTML=i,o.querySelectorAll(".subfilter-chip").forEach(l=>{l.addEventListener("click",()=>{o.querySelectorAll(".subfilter-chip").forEach(p=>p.classList.remove("is-active")),l.classList.add("is-active"),c=l.dataset.sub,$(),d()})})}function d(){var p;let e=R;s&&s!=="all"&&(e=e.filter(a=>a.category===s)),c&&c!=="all"&&(e=e.filter(a=>a.subcategory===c));const i=s!=="all"&&y[s]?t(y[s].name):t("All Products"),l=c!=="all"?` — ${t(c)}`:"";if(U.textContent=`${t("Displaying")} ${e.length} ${t("technical product lines")} (${i}${l})`,e.length===0){v.innerHTML=`
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-muted);">
            <p style="font-size: 16px; margin-bottom: 12px;">${t("No products found in this category / subcategory.")}</p>
            <button class="btn btn--primary" id="reset-filter-btn">${t("Reset Filters")}</button>
          </div>
        `,(p=document.getElementById("reset-filter-btn"))==null||p.addEventListener("click",()=>{s="all",c="all",h(),g(),$(),d()});return}v.innerHTML=e.map(a=>{var E;const w=t(a.categoryName||((E=I[a.category])==null?void 0:E.label)||"Industrial"),L=a.subcategory?t(a.subcategory):"";let _="ISO 9001";if(a.standards&&a.standards.length>0)_=a.standards[0].name.split("/")[0].trim();else if(a.specifications){const n=a.specifications.find(r=>/standard/i.test(r.label));n&&(_=n.value.split(/[,;\n]/)[0].trim().substring(0,18))}let u="ISO 9001, CE, Full Mill Test Certificate";if(a.standards&&a.standards.length>0)u=a.standards.map(n=>n.name.split("/")[0].trim()).join(", ");else if(a.specifications){const n=a.specifications.find(r=>/standard/i.test(r.label));n&&(u=n.value.split(`
`)[0].trim())}let m="Standard Certified Dimensions";a.specification?m=a.specification:a.specifications&&a.specifications.length>0&&(m=(a.specifications.find(r=>/specification|dimension|size|diameter|scope|range/i.test(r.label))||a.specifications[0]).value.split(`
`)[0].trim());let f=a.shortDescription||"";if(a.uses)f=a.uses;else if(a.specifications){const n=a.specifications.find(r=>/use|application/i.test(r.label));n&&(f=n.value.split(`
`)[0].trim())}return!f&&a.applications&&a.applications.length>0&&(f=a.applications[0]),`
          <div class="product-card">
            <a href="/product.html?id=${a.slug}" class="product-card__img-wrap" aria-label="${t("View specifications for")} ${t(a.name)}">
              <img src="${a.heroImage}" alt="${t(a.name)}" class="product-card__img" loading="lazy" />
              <span class="product-card__category-pill">${w}</span>
            </a>
            <div class="product-card__body">
              <div class="product-card__meta-row">
                <span class="product-card__subcat">${L||w}</span>
                <span class="product-card__badge">${_}</span>
              </div>
              <h3 class="product-card__title">
                <a href="/product.html?id=${a.slug}" class="product-card__title-link">${t(a.name)}</a>
              </h3>
              <div class="product-card__spec-box">
                <div class="product-card__spec-row">
                  <span class="product-card__spec-lbl">${t("Specification:")}</span>
                  <span class="product-card__spec-val" title="${t(m)}">${t(m)}</span>
                </div>
                <div class="product-card__spec-row">
                  <span class="product-card__spec-lbl">${t("Standards:")}</span>
                  <span class="product-card__spec-val" title="${t(u)}">${t(u)}</span>
                </div>
              </div>
              <p class="product-card__uses">
                <strong>${t("Uses:")}</strong> ${t(f)}
              </p>
              <div class="product-card__footer">
                <a href="/product.html?id=${a.slug}" class="product-card__cta">
                  ${t("Explore Specs & MTC")} <span class="product-card__cta-arrow">→</span>
                </a>
                <a href="/contact.html?product=${a.slug}" class="btn btn--primary btn--sm product-card__quote-btn">
                  ${t("Quote")}
                </a>
              </div>
            </div>
          </div>
        `}).join(""),P(v)}function h(){S.querySelectorAll(".filter-chip").forEach(i=>{b(i.dataset.category)===s?i.classList.add("is-active"):i.classList.remove("is-active")})}S.querySelectorAll(".filter-chip").forEach(e=>{e.addEventListener("click",()=>{const i=b(e.dataset.category);s!==i&&(s=i,c="all",h(),g(),$(),d())})});window.addEventListener("popstate",()=>{const e=new URLSearchParams(window.location.search);s=b(e.get("category"))||"all",c=e.get("subcategory")||"all",h(),g(),d()});window.addEventListener("td:languageChanged",()=>{g(),d()});h();g();d();
