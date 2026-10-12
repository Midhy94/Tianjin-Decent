import{i as $,a as I,d as E,P as h,C as B,g as T,e as r,b as S}from"./scroll-reveal-BdkMt7qn.js";$();I();const L=new URLSearchParams(window.location.search),_=L.get("id")||"hr-steel-coils",t=E(_)||h[0];var v;const i=t.categoryName||((v=B[t.category])==null?void 0:v.label)||"Industrial Products";document.title=`${t.name} — Technical Specifications | TIANJIN DECENT`;const y=document.getElementById("bc-category");y&&(y.innerHTML=`<a href="/products.html?category=${t.category}">${i}</a>`);const f=document.getElementById("bc-sub-sep"),l=document.getElementById("bc-subcategory");t.subcategory&&(f&&(f.style.display="inline"),l&&(l.style.display="inline",l.innerHTML=`<a href="/products.html?category=${t.category}&subcategory=${encodeURIComponent(t.subcategory)}">${t.subcategory}</a>`));document.getElementById("bc-product").textContent=t.name;const g=document.getElementById("badge-cat");g&&(g.textContent=i,g.href=`/products.html?category=${t.category}`);const o=document.getElementById("badge-sub");o&&t.subcategory&&(o.style.display="inline-block",o.textContent=t.subcategory,o.href=`/products.html?category=${t.category}&subcategory=${encodeURIComponent(t.subcategory)}`);document.getElementById("product-name").textContent=t.name;document.getElementById("product-desc").textContent=t.description;const c=document.getElementById("product-img");c.src=t.heroImage;c.alt=t.name;const p=document.getElementById("gallery-thumbs");if(t.gallery&&t.gallery.length>1){p.style.display="flex",p.innerHTML=t.gallery.map((s,e)=>`
        <button class="gallery-thumb-btn ${e===0?"is-active":""}" type="button" aria-label="View photo ${e+1}" data-src="${s}">
          <img src="${s}" alt="${t.name} preview ${e+1}" loading="lazy" />
        </button>
      `).join("");const a=p.querySelectorAll(".gallery-thumb-btn");a.forEach(s=>{s.addEventListener("click",()=>{a.forEach(e=>e.classList.remove("is-active")),s.classList.add("is-active"),c.style.opacity="0.4",setTimeout(()=>{c.src=s.dataset.src,c.style.opacity="1"},150)})})}const w=`Hello TIANJIN DECENT, I would like to request technical specifications and pricing for: ${t.name}.`;document.getElementById("product-wa-btn").href=T(w);document.getElementById("rfq-product").value=t.name;const x=document.getElementById("specs-table-body");t.specifications&&t.specifications.length>0&&(x.innerHTML=t.specifications.map(a=>`
        <tr>
          <th>${a.label}</th>
          <td>${a.value.replace(/\n/g,"<br/>")}</td>
        </tr>
      `).join(""));if(t.wallThicknessSpecs&&t.wallThicknessSpecs.length>0){const a=document.getElementById("wall-thickness-section"),s=document.getElementById("matrix-table-body"),e=document.getElementById("matrix-note-box");a.style.display="block",s.innerHTML=t.wallThicknessSpecs.map(n=>`
        <tr>
          <td><span class="matrix-badge">${n.standard}</span></td>
          <td><strong>${n.yieldStress}</strong></td>
          <td><span class="matrix-thickness">${n.nominalWallThickness}</span></td>
          <td>${n.description}</td>
        </tr>
      `).join(""),t.wallThicknessNote&&e&&(e.style.display="block",e.innerHTML="<strong>Note:</strong> BS 1139 tubing is equivalent and is acceptable.")}if(t.accessories&&t.accessories.length>0){const a=document.getElementById("accessories-section"),s=document.getElementById("accessory-grid");a.style.display="block",s.innerHTML=t.accessories.map(e=>{const n=e.sizeList||e.sizes.split("/").map(d=>d.trim()).filter(Boolean);return`
          <div class="accessory-card">
            <div class="accessory-media">
              <img src="${e.image}" alt="${e.name}" class="accessory-img" loading="lazy" />
            </div>
            <div>
              <h3 class="accessory-title">${e.name}</h3>
              <div class="accessory-sizes-label">Available Standard Sizes:</div>
              <div class="accessory-sizes">
                ${n.map(d=>`<span class="size-chip">${d}</span>`).join("")}
              </div>
              <p class="accessory-desc">${e.description}</p>
            </div>
          </div>
        `}).join("")}const C=["swivel-coupler","right-angle-coupler","tube-fittings-scaffolding","scaffolding-accessories"].includes(t.slug);if(C&&r&&r.length>0){const a=document.getElementById("fittings-section"),s=document.getElementById("fittings-grid");a.style.display="block",s.innerHTML=r.map(e=>`
        <div class="fitting-item-card">
          <div class="fitting-media">
            <img src="${e.image}" alt="${e.name}" class="fitting-img" loading="lazy" />
          </div>
          <div>
            <div class="fitting-header">
              <h3 class="fitting-name">${e.name}</h3>
              <span class="fitting-badge">${e.standard}</span>
            </div>
            <div class="fitting-specs-mini">
              <div><span>Tube Diameter:</span> <strong>${e.tubeDiameter}</strong></div>
              <div><span>Tightening Torque:</span> <strong>${e.tighteningTorque}</strong></div>
              <div><span>Slip Resistance:</span> <strong>${e.slipLoad}</strong></div>
              <div><span>Failure Load:</span> <strong>${e.failureLoad}</strong></div>
              <div><span>Finish:</span> <strong>${e.finish}</strong></div>
              <div><span>Fasteners:</span> <strong>${e.fastener}</strong></div>
            </div>
            <p class="accessory-desc">${e.description}</p>
          </div>
        </div>
      `).join("")}const k=document.getElementById("features-list");t.features&&t.features.length>0&&(k.innerHTML=t.features.map(a=>`
        <div class="feature-item"><span>${a}</span></div>
      `).join(""));const H=document.getElementById("applications-list");t.applications&&t.applications.length>0&&(H.innerHTML=t.applications.map(a=>`
        <div class="feature-item"><span>${a}</span></div>
      `).join(""));const M=document.getElementById("standards-list");t.standards&&t.standards.length>0&&(M.innerHTML=t.standards.map(a=>`
        <div style="background-color: var(--color-canvas-soft); padding: 10px 14px; border-radius: var(--radius-xs); border: 1px solid var(--color-hairline); display: flex; justify-content: space-between; align-items: center;">
          <strong style="font-family: var(--font-mono); font-size: 13px; color: var(--color-ink);">${a.name}</strong>
          <span style="font-size: 13px; color: var(--color-muted);">${a.description}</span>
        </div>
      `).join(""));const m=document.getElementById("related-section"),b=document.getElementById("related-grid"),N=document.getElementById("related-heading"),u=document.getElementById("related-view-all");if(m&&b){let a=h.filter(s=>s.slug!==t.slug&&s.category===t.category);if(t.subcategory){const s=a.filter(n=>n.subcategory===t.subcategory),e=a.filter(n=>n.subcategory!==t.subcategory);a=[...s,...e]}a=a.slice(0,3),a.length>0?(m.style.display="block",N.textContent=`Related in ${i}`,u&&(u.href=`/products.html?category=${t.category}`,u.textContent=`View All ${i} →`),b.innerHTML=a.map(s=>{const e=s.standards&&s.standards[0]?s.standards[0].name.split("/")[0].trim():"ISO 9001";return`
            <a href="/product.html?id=${s.slug}" class="product-card">
              <div class="product-card__img-wrap">
                <img src="${s.heroImage}" alt="${s.name}" class="product-card__img" loading="lazy" />
              </div>
              <div class="product-card__body">
                <div class="product-card__header">
                  <div class="product-card__title-group">
                    <span class="product-card__category">${s.categoryName||i}${s.subcategory?" • "+s.subcategory:""}</span>
                    <h3 class="product-card__name">${s.name}</h3>
                  </div>
                  <span class="product-card__badge">${e}</span>
                </div>
                <p class="product-card__desc">${s.shortDescription}</p>
                <span class="product-card__cta">View Specifications</span>
              </div>
            </a>
          `}).join("")):m.style.display="none"}S();
