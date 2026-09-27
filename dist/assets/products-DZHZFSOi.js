import{i as g,a as _,b as v,P as e,C as u,e as m}from"./scroll-reveal-BloW1ITc.js";g();_();v();const c=document.getElementById("catalog-grid"),h=document.getElementById("products-count"),i=document.querySelectorAll(".filter-chip"),f=new URLSearchParams(window.location.search),r=f.get("category")||"all";function l(s="all"){const t=s==="all"?e:e.filter(a=>a.category===s);h.textContent=`Displaying ${t.length} technical product lines`,c.innerHTML=t.map(a=>{const o=u[a.category]||{label:"Industrial"},n=a.standards&&a.standards[0]?a.standards[0].name.split("/")[0].trim():"ISO 9001",d=a.specifications&&a.specifications[2]?a.specifications[2].value.substring(0,22):"Export Spec",p=a.specifications&&a.specifications[3]?a.specifications[3].value.substring(0,20):"Test Reports";return`
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
                  <span class="product-card__category">${o.label}</span>
                  <h2 class="product-card__name">${a.name}</h2>
                </div>
                <span class="product-card__badge">${n}</span>
              </div>
              <p class="product-card__desc">${a.shortDescription}</p>
              
              <div class="product-card__specs">
                <span class="product-card__spec-pill">⭐ Certified Test Report</span>
                <span class="product-card__spec-pill">${d}</span>
                <span class="product-card__spec-pill">${p}</span>
              </div>

              <span class="product-card__cta">View Specifications</span>
            </div>
          </a>
        `}).join(""),m(c)}i.forEach(s=>{s.dataset.category===r?s.classList.add("is-active"):s.classList.remove("is-active"),s.addEventListener("click",()=>{i.forEach(a=>a.classList.remove("is-active")),s.classList.add("is-active"),l(s.dataset.category);const t=s.dataset.category==="all"?window.location.pathname:`${window.location.pathname}?category=${s.dataset.category}`;window.history.replaceState({},"",t)})});l(r);
