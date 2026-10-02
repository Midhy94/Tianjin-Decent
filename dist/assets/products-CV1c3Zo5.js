import{i as _,a as v,b as m,P as i,C as h,e as f}from"./scroll-reveal-C1fBGJyb.js";_();v();m();const r=document.getElementById("catalog-grid"),y=document.getElementById("products-count"),l=document.querySelectorAll(".filter-chip"),w=new URLSearchParams(window.location.search),n=w.get("category")||"all";function o(s="all"){const t=s==="all"?i:i.filter(a=>a.category===s);y.textContent=`Displaying ${t.length} technical product lines`,r.innerHTML=t.map(a=>{const d=h[a.category]||{label:"Industrial"},p=a.standards&&a.standards[0]?a.standards[0].name.split("/")[0].trim():"ISO 9001",e=a.specifications&&a.specifications.find(c=>c.label.toLowerCase().includes("specification")||c.label.toLowerCase().includes("thickness")),g=e?e.value.split("|")[0].split(`
`)[0].trim().substring(0,26):"Certified Spec",u=a.specifications&&a.specifications[2]?a.specifications[2].value.substring(0,22):"Export Standard";return`
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
                  <span class="product-card__category">${d.label}</span>
                  <h2 class="product-card__name">${a.name}</h2>
                </div>
                <span class="product-card__badge">${p}</span>
              </div>
              <p class="product-card__desc">${a.shortDescription}</p>
              
              <div class="product-card__specs">
                <span class="product-card__spec-pill">⭐ Certified Test Report</span>
                <span class="product-card__spec-pill">${g}</span>
                <span class="product-card__spec-pill">${u}</span>
              </div>

              <span class="product-card__cta">View Specifications</span>
            </div>
          </a>
        `}).join(""),f(r)}l.forEach(s=>{s.dataset.category===n?s.classList.add("is-active"):s.classList.remove("is-active"),s.addEventListener("click",()=>{l.forEach(a=>a.classList.remove("is-active")),s.classList.add("is-active"),o(s.dataset.category);const t=s.dataset.category==="all"?window.location.pathname:`${window.location.pathname}?category=${s.dataset.category}`;window.history.replaceState({},"",t)})});o(n);
