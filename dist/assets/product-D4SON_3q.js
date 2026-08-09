import{i as g}from"./animations-BnItFa_1.js";import"./main-DCmXHJI0.js";import{P as i,C as d}from"./products-JcpdNqFq.js";const h=new URLSearchParams(window.location.search),y=h.get("slug"),e=i.find(s=>s.slug===y);if(!e)document.getElementById("product-detail-container").innerHTML=`
        <div class="container" style="padding: 96px 0; text-align: center;">
          <h1 class="page-hero__title" style="color: var(--color-ink);">Product Not Found</h1>
          <p style="margin-top: 16px; color: var(--color-body);">The requested product could not be located in our database.</p>
          <a href="/products.html" class="btn btn--primary" style="margin-top: 24px; display: inline-flex;">Back to Products</a>
        </div>
      `;else{const s=d[e.category];document.title=`${e.name} — Tianjin Decent International Trading`,document.getElementById("breadcrumb-current").textContent=e.name,document.getElementById("product-category").textContent=s?s.label.toUpperCase():"PRODUCT SPECIFICATION",document.getElementById("product-name").textContent=e.name,document.getElementById("product-short-desc").textContent=e.shortDescription,document.getElementById("product-description").textContent=e.description;const p=e.heroImage||(s==null?void 0:s.image)||"/src/assets/images/warehouse.jpg";document.getElementById("product-hero-image").src=p,document.getElementById("product-hero-image").alt=`${e.name} - Technical Drawing`,document.getElementById("product-quote-btn").href=`/contact.html?product=${e.slug}`;const o=document.getElementById("product-standards");e.standards&&e.standards.length>0?o.innerHTML='<span class="p-standards__label">COMPLIANCE //</span>'+e.standards.map(t=>`<span class="p-standard-badge" title="${t.description}">${t.name}</span>`).join(""):o.style.display="none";const c=document.getElementById("product-spec-rows");e.specifications&&e.specifications.length>0?c.innerHTML=e.specifications.map(t=>`
          <tr>
            <td class="p-spec-label">${t.label}</td>
            <td class="p-spec-val">${t.value}</td>
          </tr>
        `).join(""):c.innerHTML='<tr><td colspan="2" class="p-spec-val">Contact dispatch desk for full metallurgical certificate tables.</td></tr>';const r=document.getElementById("product-features");e.features&&e.features.length>0?r.innerHTML=e.features.map(t=>`
          <div class="p-bullet-item">
            <span class="p-bullet-dot">✓</span>
            <span class="p-bullet-text">${t}</span>
          </div>
        `).join(""):r.innerHTML='<p class="p-bullet-text">Refer to core load tables catalog.</p>';const l=document.getElementById("product-applications");e.applications&&e.applications.length>0?l.innerHTML=e.applications.map(t=>`
          <div class="p-bullet-item">
            <span class="p-bullet-dot">→</span>
            <span class="p-bullet-text">${t}</span>
          </div>
        `).join(""):l.innerHTML='<p class="p-bullet-text">Refer to technical access manuals.</p>';const u=document.getElementById("related-grid");if(e.relatedProducts&&e.relatedProducts.length>0){const t=i.filter(a=>e.relatedProducts.includes(a.slug));t.length>0?u.innerHTML=t.map(a=>{const n=d[a.category],m=a.heroImage||(n==null?void 0:n.image)||"/src/assets/images/warehouse.jpg";return`
              <a href="/product.html?slug=${a.slug}" class="product-card" data-category="${a.category}" aria-label="${a.name}">
                <div class="product-card__image">
                  <img src="${m}" alt="${a.name}" loading="lazy" />
                </div>
                <div class="product-card__body">
                  <div class="product-card__category">${(n==null?void 0:n.shortLabel)||a.category}</div>
                  <h2 class="product-card__title">${a.name}</h2>
                  <p class="product-card__desc">${a.shortDescription}</p>
                  <div class="product-card__footer">
                    <span class="product-card__cta">
                      View Product
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
                    </span>
                  </div>
                </div>
              </a>
            `}).join(""):document.querySelector(".related-section").style.display="none"}else document.querySelector(".related-section").style.display="none"}g();
