import{i as U,a as X,d as Y,P as R,C as O,g as W,e as S,b as J}from"./scroll-reveal-Ym039B2P.js";U();X();const _=new URLSearchParams(window.location.search),K=_.get("id")||_.get("slug")||"hr-steel-coils",e=Y(K)||R[0];var j;const p=e.categoryName||((j=O[e.category])==null?void 0:j.label)||"Industrial Products";document.title=`${e.name} — Technical Specifications | TIANJIN DECENT`;const D=document.getElementById("bc-category");D&&(D.innerHTML=`<a href="/products.html?category=${e.category}">${p}</a>`);const m=document.getElementById("bc-sub-sep"),u=document.getElementById("bc-subcategory"),Q=e.subcategory&&e.subcategory.trim().toLowerCase()!==e.name.trim().toLowerCase();Q?(m&&(m.style.display="inline"),u&&(u.style.display="inline",u.innerHTML=`<a href="/products.html?category=${e.category}&subcategory=${encodeURIComponent(e.subcategory)}">${e.subcategory}</a>`)):(m&&(m.style.display="none"),u&&(u.style.display="none"));document.getElementById("bc-product").textContent=e.name;const L=document.getElementById("badge-cat");L&&(L.textContent=p,L.href=`/products.html?category=${e.category}`);const y=document.getElementById("badge-sub");y&&e.subcategory&&(y.style.display="inline-block",y.textContent=e.subcategory,y.href=`/products.html?category=${e.category}&subcategory=${encodeURIComponent(e.subcategory)}`);document.getElementById("product-name").textContent=e.name;const f=document.getElementById("product-short-desc");var P;f&&(e.shortDescription&&e.shortDescription.trim()&&e.shortDescription.trim()!==((P=e.description)==null?void 0:P.trim())?(f.textContent=e.shortDescription.trim(),f.style.display="block"):f.style.display="none");document.getElementById("product-desc").textContent=e.description;const g=document.getElementById("product-img");g.src=e.heroImage;g.alt=e.name;const x=document.getElementById("slider-stage"),h=document.getElementById("slider-prev-btn"),v=document.getElementById("slider-next-btn"),M=document.getElementById("gallery-thumbs-wrapper"),b=document.getElementById("thumbs-prev-btn"),$=document.getElementById("thumbs-next-btn"),E=document.getElementById("gallery-thumbs"),I=document.getElementById("product-img-caption-box"),N=document.getElementById("product-img-title"),H=document.getElementById("product-img-note"),B=document.getElementById("product-img-counter"),w=e.gallery&&e.gallery.length>0?e.gallery:[e.heroImage||"/src/assets/images/hr-steel-coils.webp"],r=w.map((t,a)=>typeof t=="string"?{src:t,title:w.length>1?`${e.name} (View ${a+1})`:e.name,note:e.shortDescription||e.name}:{src:t.src||t.image||t,title:t.title||(w.length>1?`${e.name} (View ${a+1})`:e.name),note:t.note||t.description||e.shortDescription||e.name}),q=t=>{const a=r[t]||r[0];a&&(a.note||a.title)?(I&&(I.style.display="block"),N&&(N.textContent=a.title),H&&(H.textContent=a.note||e.shortDescription||""),B&&(r.length>1?(B.textContent=`${t+1} / ${r.length}`,B.style.display="inline"):B.style.display="none")):I&&(I.style.display="none")};q(0);if(r.length>1){let t=0;h&&(h.style.display="flex"),v&&(v.style.display="flex"),M&&(M.style.display="flex"),r.length>4&&(b&&(b.style.display="flex"),$&&($.style.display="flex")),E.innerHTML=r.map((s,i)=>`
        <button class="gallery-thumb-btn ${i===0?"is-active":""}" 
                type="button" 
                aria-label="View photo ${i+1}: ${s.title}" 
                data-src="${s.src}" 
                data-index="${i}">
          <img src="${s.src}" alt="${s.title}" loading="lazy" />
        </button>
      `).join("");const a=E.querySelectorAll(".gallery-thumb-btn"),n=s=>{s<0&&(s=r.length-1),s>=r.length&&(s=0),t=s,a.forEach((i,l)=>{l===t?(i.classList.add("is-active"),i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})):i.classList.remove("is-active")}),q(t),g.classList.add("is-changing"),setTimeout(()=>{g.src=r[t].src,g.alt=r[t].title||e.name,g.classList.remove("is-changing")},130)};if(h&&h.addEventListener("click",s=>{s.preventDefault(),n(t-1)}),v&&v.addEventListener("click",s=>{s.preventDefault(),n(t+1)}),b&&b.addEventListener("click",s=>{s.preventDefault(),E.scrollBy({left:-160,behavior:"smooth"})}),$&&$.addEventListener("click",s=>{s.preventDefault(),E.scrollBy({left:160,behavior:"smooth"})}),a.forEach(s=>{s.addEventListener("click",()=>{const i=parseInt(s.dataset.index,10)||0;n(i)})}),document.addEventListener("keydown",s=>{var i;["INPUT","TEXTAREA","SELECT"].includes((i=document.activeElement)==null?void 0:i.tagName)||(s.key==="ArrowLeft"?n(t-1):s.key==="ArrowRight"&&n(t+1))}),x){let s=0,i=0;x.addEventListener("touchstart",l=>{l.changedTouches&&l.changedTouches[0]&&(s=l.changedTouches[0].screenX,i=l.changedTouches[0].screenY)},{passive:!0}),x.addEventListener("touchend",l=>{if(l.changedTouches&&l.changedTouches[0]){const G=l.changedTouches[0].screenX,V=l.changedTouches[0].screenY,T=G-s,F=V-i;Math.abs(T)>40&&Math.abs(T)>Math.abs(F)&&(T<0?n(t+1):n(t-1))}},{passive:!0})}const o=document.getElementById("visual-gallery-section"),c=document.getElementById("visual-gallery-grid"),d=r.filter(s=>s.note&&s.note!==e.shortDescription&&s.note!==e.name);o&&c&&d.length>1&&(o.style.display="block",c.innerHTML=r.map((s,i)=>`
          <div class="visual-gallery-card" data-index="${i}" title="Click to view in main viewer">
            <div class="visual-gallery-media">
              <img src="${s.src}" alt="${s.title}" class="visual-gallery-img" loading="lazy" />
            </div>
            <div class="visual-gallery-body">
              <h3 class="visual-gallery-title">${s.title}</h3>
              <p class="visual-gallery-note">${s.note}</p>
            </div>
          </div>
        `).join(""),c.querySelectorAll(".visual-gallery-card").forEach(s=>{s.addEventListener("click",()=>{const i=parseInt(s.dataset.index,10);if(!isNaN(i)){n(i);const l=document.querySelector(".detail-media");l&&l.scrollIntoView({behavior:"smooth",block:"start"})}})}))}const Z=`Hello TIANJIN DECENT, I would like to request technical specifications and pricing for: ${e.name}.`;document.getElementById("product-wa-btn").href=W(Z);document.getElementById("rfq-product").value=e.name;const ee=document.getElementById("specs-table-body");e.specifications&&e.specifications.length>0&&(ee.innerHTML=e.specifications.map(t=>`
        <tr>
          <th>${t.label}</th>
          <td>${t.value.replace(/\n/g,"<br/>")}</td>
        </tr>
      `).join(""));if(e.wallThicknessSpecs&&e.wallThicknessSpecs.length>0){const t=document.getElementById("wall-thickness-section"),a=document.getElementById("matrix-table-body"),n=document.getElementById("matrix-note-box");t.style.display="block",a.innerHTML=e.wallThicknessSpecs.map(o=>`
        <tr>
          <td><span class="matrix-badge">${o.standard}</span></td>
          <td><strong>${o.yieldStress}</strong></td>
          <td><span class="matrix-thickness">${o.nominalWallThickness}</span></td>
          <td>${o.description}</td>
        </tr>
      `).join(""),e.wallThicknessNote&&n&&(n.style.display="block",n.innerHTML="<strong>Note:</strong> BS 1139 tubing is equivalent and is acceptable.")}const k=e.standardSizesTables||(e.standardSizesTable?[e.standardSizesTable]:null);if(k&&k.length>0){const t=document.getElementById("standard-sizes-section"),a=document.getElementById("standard-sizes-container");t&&a&&(t.style.display="block",a.innerHTML=k.map(n=>`
          <div style="margin-bottom: var(--space-xl);">
            ${n.title?`<h3 style="font-size: 15px; font-weight: 700; color: var(--color-ink); margin-bottom: 4px;">${n.title}</h3>`:""}
            ${n.subtitle?`<p style="font-size: 13px; color: var(--color-muted); margin-bottom: 10px;">${n.subtitle}</p>`:""}
            <div class="matrix-card">
              <table class="matrix-table">
                <thead>
                  <tr>${(n.columns||[]).map(o=>`<th>${o}</th>`).join("")}</tr>
                </thead>
                <tbody>
                  ${(n.rows||[]).map(o=>`
                    <tr>
                      ${o.map((c,d)=>d===0?`<td><strong>${c}</strong></td>`:d===1?`<td><span class="matrix-thickness">${c}</span></td>`:d===3?`<td><span class="matrix-badge">${c}</span></td>`:`<td>${c}</td>`).join("")}
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `).join(""))}if(e.accessories&&e.accessories.length>0){const t=document.getElementById("accessories-section"),a=document.getElementById("accessory-grid");t.style.display="block";const n=t.querySelector("h2");n&&(n.innerHTML=`${e.name} Components &amp; Standard Hardware`);const o=t.querySelector("p");o&&(o.innerHTML=e.accessoriesSubtitle||"Precision-engineered modular uprights, ledgers, braces, locking nodes, base collars, and foundation hardware certified to international scaffolding standards."),a.innerHTML=e.accessories.map(c=>{const d=c.sizeList||c.sizes.split("/").map(s=>s.trim()).filter(Boolean);return`
          <div class="accessory-card">
            <div class="accessory-media">
              <img src="${c.image}" alt="${c.name}" class="accessory-img" loading="lazy" />
            </div>
            <div>
              <h3 class="accessory-title">${c.name}</h3>
              <div class="accessory-sizes-label">Available Standard Sizes:</div>
              <div class="accessory-sizes">
                ${d.map(s=>`<span class="size-chip">${s}</span>`).join("")}
              </div>
              <p class="accessory-desc">${c.description}</p>
            </div>
          </div>
        `}).join("")}const te=["couplers","swivel-coupler","right-angle-coupler","tube-fittings-scaffolding","scaffolding-accessories"].includes(e.slug);if(te&&S&&S.length>0){const t=document.getElementById("fittings-section"),a=document.getElementById("fittings-grid");t.style.display="block",a.innerHTML=S.map(n=>`
        <div class="fitting-item-card">
          <div class="fitting-media">
            <img src="${n.image}" alt="${n.name}" class="fitting-img" loading="lazy" />
          </div>
          <div>
            <div class="fitting-header">
              <h3 class="fitting-name">${n.name}</h3>
              <span class="fitting-badge">${n.standard}</span>
            </div>
            <div class="fitting-specs-mini">
              <div><span>Tube Diameter:</span> <strong>${n.tubeDiameter}</strong></div>
              <div><span>Tightening Torque:</span> <strong>${n.tighteningTorque}</strong></div>
              <div><span>Slip Resistance:</span> <strong>${n.slipLoad}</strong></div>
              <div><span>Failure Load:</span> <strong>${n.failureLoad}</strong></div>
              <div><span>Finish:</span> <strong>${n.finish}</strong></div>
              <div><span>Fasteners:</span> <strong>${n.fastener}</strong></div>
            </div>
            <p class="accessory-desc">${n.description}</p>
          </div>
        </div>
      `).join("")}const se=document.getElementById("features-list");e.features&&e.features.length>0&&(se.innerHTML=e.features.map(t=>`
        <div class="feature-item"><span>${t}</span></div>
      `).join(""));const ne=document.getElementById("applications-list");e.applications&&e.applications.length>0&&(ne.innerHTML=e.applications.map(t=>`
        <div class="feature-item"><span>${t}</span></div>
      `).join(""));const ae=document.getElementById("standards-list");e.standards&&e.standards.length>0&&(ae.innerHTML=e.standards.map(t=>`
        <div style="background-color: var(--color-canvas-soft); padding: 10px 14px; border-radius: var(--radius-xs); border: 1px solid var(--color-hairline); display: flex; justify-content: space-between; align-items: center;">
          <strong style="font-family: var(--font-mono); font-size: 13px; color: var(--color-ink);">${t.name}</strong>
          <span style="font-size: 13px; color: var(--color-muted);">${t.description}</span>
        </div>
      `).join(""));const C=document.getElementById("related-section"),A=document.getElementById("related-grid"),ie=document.getElementById("related-heading"),z=document.getElementById("related-view-all");if(C&&A){let t=R.filter(a=>a.slug!==e.slug&&a.category===e.category);if(e.subcategory){const a=t.filter(o=>o.subcategory===e.subcategory),n=t.filter(o=>o.subcategory!==e.subcategory);t=[...a,...n]}t=t.slice(0,3),t.length>0?(C.style.display="block",ie.textContent=`Related in ${p}`,z&&(z.href=`/products.html?category=${e.category}`,z.textContent=`View All ${p} →`),A.innerHTML=t.map(a=>{const n=a.standards&&a.standards[0]?a.standards[0].name.split("/")[0].trim():"ISO 9001";return`
            <a href="/product.html?id=${a.slug}" class="product-card">
              <div class="product-card__img-wrap">
                <img src="${a.heroImage}" alt="${a.name}" class="product-card__img" loading="lazy" />
              </div>
              <div class="product-card__body">
                <div class="product-card__header">
                  <div class="product-card__title-group">
                    <span class="product-card__category">${a.categoryName||p}${a.subcategory?" • "+a.subcategory:""}</span>
                    <h3 class="product-card__name">${a.name}</h3>
                  </div>
                  <span class="product-card__badge">${n}</span>
                </div>
                <p class="product-card__desc">${a.shortDescription}</p>
                <span class="product-card__cta">View Specifications</span>
              </div>
            </a>
          `}).join("")):C.style.display="none"}J();
