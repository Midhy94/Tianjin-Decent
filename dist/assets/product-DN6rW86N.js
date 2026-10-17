import{i as F,a as G,d as U,P as z,C as V,g as X,e as T,b as Y}from"./scroll-reveal-Dtm8sG3p.js";F();G();const O=new URLSearchParams(window.location.search),W=O.get("id")||"hr-steel-coils",e=U(W)||z[0];var A;const u=e.categoryName||((A=V[e.category])==null?void 0:A.label)||"Industrial Products";document.title=`${e.name} — Technical Specifications | TIANJIN DECENT`;const w=document.getElementById("bc-category");w&&(w.innerHTML=`<a href="/products.html?category=${e.category}">${u}</a>`);const m=document.getElementById("bc-sub-sep"),g=document.getElementById("bc-subcategory"),J=e.subcategory&&e.subcategory.trim().toLowerCase()!==e.name.trim().toLowerCase();J?(m&&(m.style.display="inline"),g&&(g.style.display="inline",g.innerHTML=`<a href="/products.html?category=${e.category}&subcategory=${encodeURIComponent(e.subcategory)}">${e.subcategory}</a>`)):(m&&(m.style.display="none"),g&&(g.style.display="none"));document.getElementById("bc-product").textContent=e.name;const L=document.getElementById("badge-cat");L&&(L.textContent=u,L.href=`/products.html?category=${e.category}`);const y=document.getElementById("badge-sub");y&&e.subcategory&&(y.style.display="inline-block",y.textContent=e.subcategory,y.href=`/products.html?category=${e.category}&subcategory=${encodeURIComponent(e.subcategory)}`);document.getElementById("product-name").textContent=e.name;const f=document.getElementById("product-short-desc");var D;f&&(e.shortDescription&&e.shortDescription.trim()&&e.shortDescription.trim()!==((D=e.description)==null?void 0:D.trim())?(f.textContent=e.shortDescription.trim(),f.style.display="block"):f.style.display="none");document.getElementById("product-desc").textContent=e.description;const d=document.getElementById("product-img");d.src=e.heroImage;d.alt=e.name;const S=document.getElementById("slider-stage"),h=document.getElementById("slider-prev-btn"),v=document.getElementById("slider-next-btn"),C=document.getElementById("gallery-thumbs-wrapper"),b=document.getElementById("thumbs-prev-btn"),$=document.getElementById("thumbs-next-btn"),E=document.getElementById("gallery-thumbs"),I=document.getElementById("product-img-caption-box"),_=document.getElementById("product-img-title"),N=document.getElementById("product-img-note"),M=document.getElementById("product-img-counter");if(e.gallery&&e.gallery.length>1){let s=0;const n=e.gallery.map((t,a)=>typeof t=="string"?{src:t,title:`${e.name} Photo ${a+1}`,note:""}:{src:t.src||t.image||t,title:t.title||`${e.name} Photo ${a+1}`,note:t.note||t.description||""}),i=t=>{const a=n[t];a&&a.note?(I&&(I.style.display="block"),_&&(_.textContent=a.title),N&&(N.textContent=a.note),M&&(M.textContent=`${t+1} / ${n.length}`)):I&&(I.style.display="none")};h&&(h.style.display="flex"),v&&(v.style.display="flex"),C&&(C.style.display="flex"),n.length>4&&(b&&(b.style.display="flex"),$&&($.style.display="flex")),E.innerHTML=n.map((t,a)=>`
        <button class="gallery-thumb-btn ${a===0?"is-active":""}" 
                type="button" 
                aria-label="View photo ${a+1}: ${t.title}" 
                data-src="${t.src}" 
                data-index="${a}">
          <img src="${t.src}" alt="${t.title}" loading="lazy" />
        </button>
      `).join("");const c=E.querySelectorAll(".gallery-thumb-btn"),o=t=>{t<0&&(t=n.length-1),t>=n.length&&(t=0),s=t,c.forEach((a,l)=>{l===s?(a.classList.add("is-active"),a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})):a.classList.remove("is-active")}),i(s),d.classList.add("is-changing"),setTimeout(()=>{d.src=n[s].src,d.alt=n[s].title||e.name,d.classList.remove("is-changing")},130)};if(i(0),h&&h.addEventListener("click",t=>{t.preventDefault(),o(s-1)}),v&&v.addEventListener("click",t=>{t.preventDefault(),o(s+1)}),b&&b.addEventListener("click",t=>{t.preventDefault(),E.scrollBy({left:-160,behavior:"smooth"})}),$&&$.addEventListener("click",t=>{t.preventDefault(),E.scrollBy({left:160,behavior:"smooth"})}),c.forEach(t=>{t.addEventListener("click",()=>{const a=parseInt(t.dataset.index,10)||0;o(a)})}),document.addEventListener("keydown",t=>{var a;["INPUT","TEXTAREA","SELECT"].includes((a=document.activeElement)==null?void 0:a.tagName)||(t.key==="ArrowLeft"?o(s-1):t.key==="ArrowRight"&&o(s+1))}),S){let t=0,a=0;S.addEventListener("touchstart",l=>{l.changedTouches&&l.changedTouches[0]&&(t=l.changedTouches[0].screenX,a=l.changedTouches[0].screenY)},{passive:!0}),S.addEventListener("touchend",l=>{if(l.changedTouches&&l.changedTouches[0]){const j=l.changedTouches[0].screenX,R=l.changedTouches[0].screenY,B=j-t,q=R-a;Math.abs(B)>40&&Math.abs(B)>Math.abs(q)&&(B<0?o(s+1):o(s-1))}},{passive:!0})}const p=document.getElementById("visual-gallery-section"),r=document.getElementById("visual-gallery-grid"),P=n.filter(t=>t.note);p&&r&&P.length>0&&(p.style.display="block",r.innerHTML=n.map((t,a)=>`
          <div class="visual-gallery-card" data-index="${a}" title="Click to view in main viewer">
            <div class="visual-gallery-media">
              <img src="${t.src}" alt="${t.title}" class="visual-gallery-img" loading="lazy" />
            </div>
            <div class="visual-gallery-body">
              <h3 class="visual-gallery-title">${t.title}</h3>
              <p class="visual-gallery-note">${t.note}</p>
            </div>
          </div>
        `).join(""),r.querySelectorAll(".visual-gallery-card").forEach(t=>{t.addEventListener("click",()=>{const a=parseInt(t.dataset.index,10);if(!isNaN(a)){o(a);const l=document.querySelector(".detail-media");l&&l.scrollIntoView({behavior:"smooth",block:"start"})}})}))}const K=`Hello TIANJIN DECENT, I would like to request technical specifications and pricing for: ${e.name}.`;document.getElementById("product-wa-btn").href=X(K);document.getElementById("rfq-product").value=e.name;const Q=document.getElementById("specs-table-body");e.specifications&&e.specifications.length>0&&(Q.innerHTML=e.specifications.map(s=>`
        <tr>
          <th>${s.label}</th>
          <td>${s.value.replace(/\n/g,"<br/>")}</td>
        </tr>
      `).join(""));if(e.wallThicknessSpecs&&e.wallThicknessSpecs.length>0){const s=document.getElementById("wall-thickness-section"),n=document.getElementById("matrix-table-body"),i=document.getElementById("matrix-note-box");s.style.display="block",n.innerHTML=e.wallThicknessSpecs.map(c=>`
        <tr>
          <td><span class="matrix-badge">${c.standard}</span></td>
          <td><strong>${c.yieldStress}</strong></td>
          <td><span class="matrix-thickness">${c.nominalWallThickness}</span></td>
          <td>${c.description}</td>
        </tr>
      `).join(""),e.wallThicknessNote&&i&&(i.style.display="block",i.innerHTML="<strong>Note:</strong> BS 1139 tubing is equivalent and is acceptable.")}if(e.accessories&&e.accessories.length>0){const s=document.getElementById("accessories-section"),n=document.getElementById("accessory-grid");s.style.display="block";const i=s.querySelector("h2");i&&(i.innerHTML=`${e.name} Components &amp; Standard Hardware`);const c=s.querySelector("p");c&&(c.innerHTML="Precision-engineered modular uprights, ledgers, braces, locking nodes, base collars, and foundation hardware certified to international scaffolding standards."),n.innerHTML=e.accessories.map(o=>{const p=o.sizeList||o.sizes.split("/").map(r=>r.trim()).filter(Boolean);return`
          <div class="accessory-card">
            <div class="accessory-media">
              <img src="${o.image}" alt="${o.name}" class="accessory-img" loading="lazy" />
            </div>
            <div>
              <h3 class="accessory-title">${o.name}</h3>
              <div class="accessory-sizes-label">Available Standard Sizes:</div>
              <div class="accessory-sizes">
                ${p.map(r=>`<span class="size-chip">${r}</span>`).join("")}
              </div>
              <p class="accessory-desc">${o.description}</p>
            </div>
          </div>
        `}).join("")}const Z=["swivel-coupler","right-angle-coupler","tube-fittings-scaffolding","scaffolding-accessories"].includes(e.slug);if(Z&&T&&T.length>0){const s=document.getElementById("fittings-section"),n=document.getElementById("fittings-grid");s.style.display="block",n.innerHTML=T.map(i=>`
        <div class="fitting-item-card">
          <div class="fitting-media">
            <img src="${i.image}" alt="${i.name}" class="fitting-img" loading="lazy" />
          </div>
          <div>
            <div class="fitting-header">
              <h3 class="fitting-name">${i.name}</h3>
              <span class="fitting-badge">${i.standard}</span>
            </div>
            <div class="fitting-specs-mini">
              <div><span>Tube Diameter:</span> <strong>${i.tubeDiameter}</strong></div>
              <div><span>Tightening Torque:</span> <strong>${i.tighteningTorque}</strong></div>
              <div><span>Slip Resistance:</span> <strong>${i.slipLoad}</strong></div>
              <div><span>Failure Load:</span> <strong>${i.failureLoad}</strong></div>
              <div><span>Finish:</span> <strong>${i.finish}</strong></div>
              <div><span>Fasteners:</span> <strong>${i.fastener}</strong></div>
            </div>
            <p class="accessory-desc">${i.description}</p>
          </div>
        </div>
      `).join("")}const ee=document.getElementById("features-list");e.features&&e.features.length>0&&(ee.innerHTML=e.features.map(s=>`
        <div class="feature-item"><span>${s}</span></div>
      `).join(""));const te=document.getElementById("applications-list");e.applications&&e.applications.length>0&&(te.innerHTML=e.applications.map(s=>`
        <div class="feature-item"><span>${s}</span></div>
      `).join(""));const se=document.getElementById("standards-list");e.standards&&e.standards.length>0&&(se.innerHTML=e.standards.map(s=>`
        <div style="background-color: var(--color-canvas-soft); padding: 10px 14px; border-radius: var(--radius-xs); border: 1px solid var(--color-hairline); display: flex; justify-content: space-between; align-items: center;">
          <strong style="font-family: var(--font-mono); font-size: 13px; color: var(--color-ink);">${s.name}</strong>
          <span style="font-size: 13px; color: var(--color-muted);">${s.description}</span>
        </div>
      `).join(""));const x=document.getElementById("related-section"),H=document.getElementById("related-grid"),ne=document.getElementById("related-heading"),k=document.getElementById("related-view-all");if(x&&H){let s=z.filter(n=>n.slug!==e.slug&&n.category===e.category);if(e.subcategory){const n=s.filter(c=>c.subcategory===e.subcategory),i=s.filter(c=>c.subcategory!==e.subcategory);s=[...n,...i]}s=s.slice(0,3),s.length>0?(x.style.display="block",ne.textContent=`Related in ${u}`,k&&(k.href=`/products.html?category=${e.category}`,k.textContent=`View All ${u} →`),H.innerHTML=s.map(n=>{const i=n.standards&&n.standards[0]?n.standards[0].name.split("/")[0].trim():"ISO 9001";return`
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
                  <span class="product-card__badge">${i}</span>
                </div>
                <p class="product-card__desc">${n.shortDescription}</p>
                <span class="product-card__cta">View Specifications</span>
              </div>
            </a>
          `}).join("")):x.style.display="none"}Y();
