import{i as o,a as d,P as e,C as p}from"./footer-S7LgaTH1.js";o();d();const g=document.getElementById("catalog-grid"),m=document.getElementById("products-count"),c=document.querySelectorAll(".filter-chip"),h=new URLSearchParams(window.location.search),i=h.get("category")||"all";function n(s="all"){const t=s==="all"?e:e.filter(a=>a.category===s);m.textContent=`Displaying ${t.length} technical product lines`,g.innerHTML=t.map(a=>{const r=p[a.category]||{label:"Industrial"},l=a.standards&&a.standards[0]?a.standards[0].name:"ISO 9001";return`
          <a href="/product.html?id=${a.slug}" class="product-card">
            <div class="product-card__img-wrap">
              <img src="${a.heroImage}" alt="${a.name}" class="product-card__img" loading="lazy" />
            </div>
            <div class="product-card__body">
              <span class="product-card__category">${r.label}</span>
              <h2 class="product-card__name">${a.name}</h2>
              <p class="product-card__desc">${a.shortDescription}</p>
              
              <div class="product-card__specs">
                <span class="tech-tag">${l}</span>
                ${a.specifications&&a.specifications[2]?`<span class="tech-tag">${a.specifications[2].value.substring(0,24)}</span>`:""}
              </div>

              <div class="product-card__footer">
                <span>View Full Specs</span>
                <span>→</span>
              </div>
            </div>
          </a>
        `}).join("")}c.forEach(s=>{s.dataset.category===i?s.classList.add("is-active"):s.classList.remove("is-active"),s.addEventListener("click",()=>{c.forEach(a=>a.classList.remove("is-active")),s.classList.add("is-active"),n(s.dataset.category);const t=s.dataset.category==="all"?window.location.pathname:`${window.location.pathname}?category=${s.dataset.category}`;window.history.replaceState({},"",t)})});n(i);
