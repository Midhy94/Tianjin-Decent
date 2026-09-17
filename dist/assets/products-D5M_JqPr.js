import{i as p,a as g,P as c,C as _}from"./footer-A4nm93HK.js";p();g();const u=document.getElementById("catalog-grid"),v=document.getElementById("products-count"),e=document.querySelectorAll(".filter-chip"),m=new URLSearchParams(window.location.search),i=m.get("category")||"all";function r(s="all"){const t=s==="all"?c:c.filter(a=>a.category===s);v.textContent=`Displaying ${t.length} technical product lines`,u.innerHTML=t.map(a=>{const l=_[a.category]||{label:"Industrial"},n=a.standards&&a.standards[0]?a.standards[0].name.split("/")[0].trim():"ISO 9001",o=a.specifications&&a.specifications[2]?a.specifications[2].value.substring(0,22):"Export Spec",d=a.specifications&&a.specifications[3]?a.specifications[3].value.substring(0,20):"Full MTC 3.1";return`
          <a href="/product.html?id=${a.slug}" class="product-card">
            <div class="product-card__img-wrap">
              <img src="${a.heroImage}" alt="${a.name}" class="product-card__img" loading="lazy" />
              <button class="product-card__bookmark" type="button" aria-label="Save to Inquiry" onclick="event.preventDefault(); this.classList.toggle('is-saved');">
                <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
            <div class="product-card__body">
              <div class="product-card__header">
                <div class="product-card__title-group">
                  <span class="product-card__category">${l.label}</span>
                  <h2 class="product-card__name">${a.name}</h2>
                </div>
                <span class="product-card__badge">${n}</span>
              </div>
              <p class="product-card__desc">${a.shortDescription}</p>
              
              <div class="product-card__specs">
                <span class="product-card__spec-pill">⭐ MTC 3.1</span>
                <span class="product-card__spec-pill">${o}</span>
                <span class="product-card__spec-pill">${d}</span>
              </div>

              <span class="product-card__cta">View Specifications</span>
            </div>
          </a>
        `}).join("")}e.forEach(s=>{s.dataset.category===i?s.classList.add("is-active"):s.classList.remove("is-active"),s.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("is-active")),s.classList.add("is-active"),r(s.dataset.category);const t=s.dataset.category==="all"?window.location.pathname:`${window.location.pathname}?category=${s.dataset.category}`;window.history.replaceState({},"",t)})});r(i);
