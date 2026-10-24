import{i as V,a as F,d as U,P as j,C as X,g as Y,e as L,b as O}from"./scroll-reveal-DHtoWoss.js";V();F();const W=new URLSearchParams(window.location.search),J=W.get("id")||"hr-steel-coils",e=U(J)||j[0];var A;const u=e.categoryName||((A=X[e.category])==null?void 0:A.label)||"Industrial Products";document.title=`${e.name} — Technical Specifications | TIANJIN DECENT`;const _=document.getElementById("bc-category");_&&(_.innerHTML=`<a href="/products.html?category=${e.category}">${u}</a>`);const p=document.getElementById("bc-sub-sep"),g=document.getElementById("bc-subcategory"),K=e.subcategory&&e.subcategory.trim().toLowerCase()!==e.name.trim().toLowerCase();K?(p&&(p.style.display="inline"),g&&(g.style.display="inline",g.innerHTML=`<a href="/products.html?category=${e.category}&subcategory=${encodeURIComponent(e.subcategory)}">${e.subcategory}</a>`)):(p&&(p.style.display="none"),g&&(g.style.display="none"));document.getElementById("bc-product").textContent=e.name;const S=document.getElementById("badge-cat");S&&(S.textContent=u,S.href=`/products.html?category=${e.category}`);const m=document.getElementById("badge-sub");m&&e.subcategory&&(m.style.display="inline-block",m.textContent=e.subcategory,m.href=`/products.html?category=${e.category}&subcategory=${encodeURIComponent(e.subcategory)}`);document.getElementById("product-name").textContent=e.name;const y=document.getElementById("product-short-desc");var z;y&&(e.shortDescription&&e.shortDescription.trim()&&e.shortDescription.trim()!==((z=e.description)==null?void 0:z.trim())?(y.textContent=e.shortDescription.trim(),y.style.display="block"):y.style.display="none");document.getElementById("product-desc").textContent=e.description;const d=document.getElementById("product-img");d.src=e.heroImage;d.alt=e.name;const w=document.getElementById("slider-stage"),f=document.getElementById("slider-prev-btn"),h=document.getElementById("slider-next-btn"),D=document.getElementById("gallery-thumbs-wrapper"),v=document.getElementById("thumbs-prev-btn"),b=document.getElementById("thumbs-next-btn"),$=document.getElementById("gallery-thumbs"),E=document.getElementById("product-img-caption-box"),N=document.getElementById("product-img-title"),M=document.getElementById("product-img-note"),I=document.getElementById("product-img-counter"),x=e.gallery&&e.gallery.length>0?e.gallery:[e.heroImage||"/src/assets/images/hr-steel-coils.jpg"],l=x.map((t,n)=>typeof t=="string"?{src:t,title:x.length>1?`${e.name} (View ${n+1})`:e.name,note:e.shortDescription||e.name}:{src:t.src||t.image||t,title:t.title||(x.length>1?`${e.name} (View ${n+1})`:e.name),note:t.note||t.description||e.shortDescription||e.name}),P=t=>{const n=l[t]||l[0];n&&(n.note||n.title)?(E&&(E.style.display="block"),N&&(N.textContent=n.title),M&&(M.textContent=n.note||e.shortDescription||""),I&&(l.length>1?(I.textContent=`${t+1} / ${l.length}`,I.style.display="inline"):I.style.display="none")):E&&(E.style.display="none")};P(0);if(l.length>1){let t=0;f&&(f.style.display="flex"),h&&(h.style.display="flex"),D&&(D.style.display="flex"),l.length>4&&(v&&(v.style.display="flex"),b&&(b.style.display="flex")),$.innerHTML=l.map((s,i)=>`
        <button class="gallery-thumb-btn ${i===0?"is-active":""}" 
                type="button" 
                aria-label="View photo ${i+1}: ${s.title}" 
                data-src="${s.src}" 
                data-index="${i}">
          <img src="${s.src}" alt="${s.title}" loading="lazy" />
        </button>
      `).join("");const n=$.querySelectorAll(".gallery-thumb-btn"),a=s=>{s<0&&(s=l.length-1),s>=l.length&&(s=0),t=s,n.forEach((i,c)=>{c===t?(i.classList.add("is-active"),i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})):i.classList.remove("is-active")}),P(t),d.classList.add("is-changing"),setTimeout(()=>{d.src=l[t].src,d.alt=l[t].title||e.name,d.classList.remove("is-changing")},130)};if(f&&f.addEventListener("click",s=>{s.preventDefault(),a(t-1)}),h&&h.addEventListener("click",s=>{s.preventDefault(),a(t+1)}),v&&v.addEventListener("click",s=>{s.preventDefault(),$.scrollBy({left:-160,behavior:"smooth"})}),b&&b.addEventListener("click",s=>{s.preventDefault(),$.scrollBy({left:160,behavior:"smooth"})}),n.forEach(s=>{s.addEventListener("click",()=>{const i=parseInt(s.dataset.index,10)||0;a(i)})}),document.addEventListener("keydown",s=>{var i;["INPUT","TEXTAREA","SELECT"].includes((i=document.activeElement)==null?void 0:i.tagName)||(s.key==="ArrowLeft"?a(t-1):s.key==="ArrowRight"&&a(t+1))}),w){let s=0,i=0;w.addEventListener("touchstart",c=>{c.changedTouches&&c.changedTouches[0]&&(s=c.changedTouches[0].screenX,i=c.changedTouches[0].screenY)},{passive:!0}),w.addEventListener("touchend",c=>{if(c.changedTouches&&c.changedTouches[0]){const R=c.changedTouches[0].screenX,q=c.changedTouches[0].screenY,T=R-s,G=q-i;Math.abs(T)>40&&Math.abs(T)>Math.abs(G)&&(T<0?a(t+1):a(t-1))}},{passive:!0})}const o=document.getElementById("visual-gallery-section"),r=document.getElementById("visual-gallery-grid"),B=l.filter(s=>s.note&&s.note!==e.shortDescription&&s.note!==e.name);o&&r&&B.length>1&&(o.style.display="block",r.innerHTML=l.map((s,i)=>`
          <div class="visual-gallery-card" data-index="${i}" title="Click to view in main viewer">
            <div class="visual-gallery-media">
              <img src="${s.src}" alt="${s.title}" class="visual-gallery-img" loading="lazy" />
            </div>
            <div class="visual-gallery-body">
              <h3 class="visual-gallery-title">${s.title}</h3>
              <p class="visual-gallery-note">${s.note}</p>
            </div>
          </div>
        `).join(""),r.querySelectorAll(".visual-gallery-card").forEach(s=>{s.addEventListener("click",()=>{const i=parseInt(s.dataset.index,10);if(!isNaN(i)){a(i);const c=document.querySelector(".detail-media");c&&c.scrollIntoView({behavior:"smooth",block:"start"})}})}))}const Q=`Hello TIANJIN DECENT, I would like to request technical specifications and pricing for: ${e.name}.`;document.getElementById("product-wa-btn").href=Y(Q);document.getElementById("rfq-product").value=e.name;const Z=document.getElementById("specs-table-body");e.specifications&&e.specifications.length>0&&(Z.innerHTML=e.specifications.map(t=>`
        <tr>
          <th>${t.label}</th>
          <td>${t.value.replace(/\n/g,"<br/>")}</td>
        </tr>
      `).join(""));if(e.wallThicknessSpecs&&e.wallThicknessSpecs.length>0){const t=document.getElementById("wall-thickness-section"),n=document.getElementById("matrix-table-body"),a=document.getElementById("matrix-note-box");t.style.display="block",n.innerHTML=e.wallThicknessSpecs.map(o=>`
        <tr>
          <td><span class="matrix-badge">${o.standard}</span></td>
          <td><strong>${o.yieldStress}</strong></td>
          <td><span class="matrix-thickness">${o.nominalWallThickness}</span></td>
          <td>${o.description}</td>
        </tr>
      `).join(""),e.wallThicknessNote&&a&&(a.style.display="block",a.innerHTML="<strong>Note:</strong> BS 1139 tubing is equivalent and is acceptable.")}if(e.accessories&&e.accessories.length>0){const t=document.getElementById("accessories-section"),n=document.getElementById("accessory-grid");t.style.display="block";const a=t.querySelector("h2");a&&(a.innerHTML=`${e.name} Components &amp; Standard Hardware`);const o=t.querySelector("p");o&&(o.innerHTML="Precision-engineered modular uprights, ledgers, braces, locking nodes, base collars, and foundation hardware certified to international scaffolding standards."),n.innerHTML=e.accessories.map(r=>{const B=r.sizeList||r.sizes.split("/").map(s=>s.trim()).filter(Boolean);return`
          <div class="accessory-card">
            <div class="accessory-media">
              <img src="${r.image}" alt="${r.name}" class="accessory-img" loading="lazy" />
            </div>
            <div>
              <h3 class="accessory-title">${r.name}</h3>
              <div class="accessory-sizes-label">Available Standard Sizes:</div>
              <div class="accessory-sizes">
                ${B.map(s=>`<span class="size-chip">${s}</span>`).join("")}
              </div>
              <p class="accessory-desc">${r.description}</p>
            </div>
          </div>
        `}).join("")}const ee=["swivel-coupler","right-angle-coupler","tube-fittings-scaffolding","scaffolding-accessories"].includes(e.slug);if(ee&&L&&L.length>0){const t=document.getElementById("fittings-section"),n=document.getElementById("fittings-grid");t.style.display="block",n.innerHTML=L.map(a=>`
        <div class="fitting-item-card">
          <div class="fitting-media">
            <img src="${a.image}" alt="${a.name}" class="fitting-img" loading="lazy" />
          </div>
          <div>
            <div class="fitting-header">
              <h3 class="fitting-name">${a.name}</h3>
              <span class="fitting-badge">${a.standard}</span>
            </div>
            <div class="fitting-specs-mini">
              <div><span>Tube Diameter:</span> <strong>${a.tubeDiameter}</strong></div>
              <div><span>Tightening Torque:</span> <strong>${a.tighteningTorque}</strong></div>
              <div><span>Slip Resistance:</span> <strong>${a.slipLoad}</strong></div>
              <div><span>Failure Load:</span> <strong>${a.failureLoad}</strong></div>
              <div><span>Finish:</span> <strong>${a.finish}</strong></div>
              <div><span>Fasteners:</span> <strong>${a.fastener}</strong></div>
            </div>
            <p class="accessory-desc">${a.description}</p>
          </div>
        </div>
      `).join("")}const te=document.getElementById("features-list");e.features&&e.features.length>0&&(te.innerHTML=e.features.map(t=>`
        <div class="feature-item"><span>${t}</span></div>
      `).join(""));const se=document.getElementById("applications-list");e.applications&&e.applications.length>0&&(se.innerHTML=e.applications.map(t=>`
        <div class="feature-item"><span>${t}</span></div>
      `).join(""));const ne=document.getElementById("standards-list");e.standards&&e.standards.length>0&&(ne.innerHTML=e.standards.map(t=>`
        <div style="background-color: var(--color-canvas-soft); padding: 10px 14px; border-radius: var(--radius-xs); border: 1px solid var(--color-hairline); display: flex; justify-content: space-between; align-items: center;">
          <strong style="font-family: var(--font-mono); font-size: 13px; color: var(--color-ink);">${t.name}</strong>
          <span style="font-size: 13px; color: var(--color-muted);">${t.description}</span>
        </div>
      `).join(""));const k=document.getElementById("related-section"),H=document.getElementById("related-grid"),ae=document.getElementById("related-heading"),C=document.getElementById("related-view-all");if(k&&H){let t=j.filter(n=>n.slug!==e.slug&&n.category===e.category);if(e.subcategory){const n=t.filter(o=>o.subcategory===e.subcategory),a=t.filter(o=>o.subcategory!==e.subcategory);t=[...n,...a]}t=t.slice(0,3),t.length>0?(k.style.display="block",ae.textContent=`Related in ${u}`,C&&(C.href=`/products.html?category=${e.category}`,C.textContent=`View All ${u} →`),H.innerHTML=t.map(n=>{const a=n.standards&&n.standards[0]?n.standards[0].name.split("/")[0].trim():"ISO 9001";return`
            <a href="/product.html?id=${n.slug}" class="product-card">
              <div class="product-card__img-wrap">
                <img src="${n.heroImage}" alt="${n.name}" class="product-card__img" loading="lazy" />
              </div>
              <div class="product-card__body">
                <div class="product-card__header">
                  <div class="product-card__title-group">
                    <span class="product-card__category">${n.categoryName||u}${n.subcategory?" • "+n.subcategory:""}</span>
                    <h3 class="product-card__name">${n.name}</h3>
                  </div>
                  <span class="product-card__badge">${a}</span>
                </div>
                <p class="product-card__desc">${n.shortDescription}</p>
                <span class="product-card__cta">View Specifications</span>
              </div>
            </a>
          `}).join("")):k.style.display="none"}O();
