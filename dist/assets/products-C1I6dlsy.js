import{i as S,a as C,b as R,n as d,c as o,P as A,C as T,f as x}from"./scroll-reveal-CSHfa4PC.js";S();C();R();const g=document.getElementById("catalog-grid"),I=document.getElementById("products-count"),v=document.getElementById("category-filters"),r=document.getElementById("subcategory-filters"),_=new URLSearchParams(window.location.search);let a=d(_.get("category"))||"all",c=_.get("subcategory")||"all";function y(){const t=new URLSearchParams;a&&a!=="all"&&(t.set("category",a),c&&c!=="all"&&t.set("subcategory",c));const s=t.toString(),i=s?`${window.location.pathname}?${s}`:window.location.pathname;window.history.replaceState({},"",i)}function p(){if(!a||a==="all"||!o[a]){r.style.display="none",r.innerHTML="";return}const t=o[a];r.style.display="flex";let s=`<span class="subcategory-filter-label">${t.name}:</span>`;s+=`<button class="subfilter-chip ${c==="all"?"is-active":""}" data-sub="all">All ${t.name}</button>`,t.subcategories.forEach(i=>{s+=`<button class="subfilter-chip ${c===i?"is-active":""}" data-sub="${i}">${i}</button>`}),r.innerHTML=s,r.querySelectorAll(".subfilter-chip").forEach(i=>{i.addEventListener("click",()=>{r.querySelectorAll(".subfilter-chip").forEach(l=>l.classList.remove("is-active")),i.classList.add("is-active"),c=i.dataset.sub,y(),n()})})}function n(){var l;let t=A;a&&a!=="all"&&(t=t.filter(e=>e.category===a)),c&&c!=="all"&&(t=t.filter(e=>e.subcategory===c));const s=a!=="all"&&o[a]?o[a].name:"All Products",i=c!=="all"?` — ${c}`:"";if(I.textContent=`Displaying ${t.length} technical product lines (${s}${i})`,t.length===0){g.innerHTML=`
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-muted);">
            <p style="font-size: 16px; margin-bottom: 12px;">No products found in this category / subcategory.</p>
            <button class="btn btn--primary" id="reset-filter-btn">Reset Filters</button>
          </div>
        `,(l=document.getElementById("reset-filter-btn"))==null||l.addEventListener("click",()=>{a="all",c="all",u(),p(),y(),n()});return}g.innerHTML=t.map(e=>{var b;const w=e.categoryName||((b=T[e.category])==null?void 0:b.label)||"Industrial",m=e.subcategory||"",$=e.standards&&e.standards[0]?e.standards[0].name.split("/")[0].trim():"ISO 9001",f=e.specifications&&e.specifications.find(h=>h.label.toLowerCase().includes("specification")||h.label.toLowerCase().includes("thickness")),E=f?f.value.split("|")[0].split(`
`)[0].trim().substring(0,26):"Certified Spec",L=e.specifications&&e.specifications[2]?e.specifications[2].value.substring(0,22):"Export Standard";return`
          <a href="/product.html?id=${e.slug}" class="product-card">
            <div class="product-card__img-wrap">
              <img src="${e.heroImage}" alt="${e.name}" class="product-card__img" loading="lazy" />
              <button class="product-card__bookmark" type="button" aria-label="Save to Inquiry" onclick="event.preventDefault(); this.classList.toggle('is-saved');">
                <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
            <div class="product-card__body">
              <div class="product-card__header">
                <div class="product-card__title-group">
                  <span class="product-card__category">${w}${m?" • "+m:""}</span>
                  <h2 class="product-card__name">${e.name}</h2>
                </div>
                <span class="product-card__badge">${$}</span>
              </div>
              <p class="product-card__desc">${e.shortDescription}</p>
              
              <div class="product-card__specs">
                <span class="product-card__spec-pill">⭐ Certified Test Report</span>
                <span class="product-card__spec-pill">${E}</span>
                <span class="product-card__spec-pill">${L}</span>
              </div>

              <span class="product-card__cta">View Specifications</span>
            </div>
          </a>
        `}).join(""),x(g)}function u(){v.querySelectorAll(".filter-chip").forEach(s=>{d(s.dataset.category)===a?s.classList.add("is-active"):s.classList.remove("is-active")})}v.querySelectorAll(".filter-chip").forEach(t=>{t.addEventListener("click",()=>{const s=d(t.dataset.category);a!==s&&(a=s,c="all",u(),p(),y(),n())})});window.addEventListener("popstate",()=>{const t=new URLSearchParams(window.location.search);a=d(t.get("category"))||"all",c=t.get("subcategory")||"all",u(),p(),n()});u();p();n();
