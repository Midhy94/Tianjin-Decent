import{i as ge,a as ue,d as pe,P as ne,t,b as me,C as ye,g as fe,e as _}from"./scroll-reveal-Dg6-3Of-.js";ge();ue();const Z=new URLSearchParams(window.location.search),he=Z.get("id")||Z.get("slug")||"hr-steel-coils",e=pe(he)||ne[0],ae=e.gallery&&e.gallery.length>0?e.gallery:[e.heroImage||"/src/assets/images/hr-steel-coils.webp"],d=ae.map((s,o)=>typeof s=="string"?{src:s,title:null,note:e.shortDescription||e.name}:{src:s.src||s.image||s,title:s.title||null,note:s.note||s.description||e.shortDescription||e.name}),E=(s,o)=>s&&s.title?t(s.title):ae.length>1?`${t(e.name)} (${t("View")} ${o+1})`:t(e.name),ie=s=>{const o=(s==null?void 0:s.note)||(s==null?void 0:s.description)||e.shortDescription||e.name||"";return t(o)},A=document.getElementById("slider-stage"),h=document.getElementById("slider-prev-btn"),b=document.getElementById("slider-next-btn"),ee=document.getElementById("gallery-thumbs-wrapper"),v=document.getElementById("thumbs-prev-btn"),$=document.getElementById("thumbs-next-btn"),m=document.getElementById("gallery-thumbs"),L=document.getElementById("product-img-caption-box"),te=document.getElementById("product-img-title"),se=document.getElementById("product-img-note"),x=document.getElementById("product-img-counter"),u=document.getElementById("product-img");let l=0;const oe=s=>{const o=d[s]||d[0];o&&(o.note||o.title||e.shortDescription)?(L&&(L.style.display="block"),te&&(te.textContent=E(o,s)),se&&(se.textContent=ie(o)),x&&(d.length>1?(x.textContent=`${s+1} / ${d.length}`,x.style.display="inline"):x.style.display="none")):L&&(L.style.display="none")};let H=[];const ce=()=>{!m||d.length<=1||(m.innerHTML=d.map((s,o)=>{const c=E(s,o);return`
          <button class="gallery-thumb-btn ${o===l?"is-active":""}" 
                  type="button" 
                  aria-label="${t("View photo")} ${o+1}: ${c}" 
                  data-src="${s.src}" 
                  data-index="${o}">
            <img src="${s.src}" alt="${c}" loading="lazy" />
          </button>
        `}).join(""),H=m.querySelectorAll(".gallery-thumb-btn"),H.forEach(s=>{s.addEventListener("click",()=>{const o=parseInt(s.dataset.index,10)||0;g(o)})}))},g=s=>{s<0&&(s=d.length-1),s>=d.length&&(s=0),l=s,H.forEach((o,c)=>{c===l?(o.classList.add("is-active"),o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})):o.classList.remove("is-active")}),oe(l),u&&(u.classList.add("is-changing"),setTimeout(()=>{u.src=d[l].src,u.alt=E(d[l],l),u.classList.remove("is-changing")},130))};if(d.length>1&&(h&&(h.style.display="flex",h.setAttribute("aria-label",t("Previous image"))),b&&(b.style.display="flex",b.setAttribute("aria-label",t("Next image"))),ee&&(ee.style.display="flex"),d.length>4&&(v&&(v.style.display="flex",v.setAttribute("aria-label",t("Scroll thumbnails left"))),$&&($.style.display="flex",$.setAttribute("aria-label",t("Scroll thumbnails right")))),ce(),h&&h.addEventListener("click",s=>{s.preventDefault(),g(l-1)}),b&&b.addEventListener("click",s=>{s.preventDefault(),g(l+1)}),v&&m&&v.addEventListener("click",s=>{s.preventDefault(),m.scrollBy({left:-160,behavior:"smooth"})}),$&&m&&$.addEventListener("click",s=>{s.preventDefault(),m.scrollBy({left:160,behavior:"smooth"})}),document.addEventListener("keydown",s=>{var o;["INPUT","TEXTAREA","SELECT"].includes((o=document.activeElement)==null?void 0:o.tagName)||(s.key==="ArrowLeft"?g(l-1):s.key==="ArrowRight"&&g(l+1))}),A)){let s=0,o=0;A.addEventListener("touchstart",c=>{c.changedTouches&&c.changedTouches[0]&&(s=c.changedTouches[0].screenX,o=c.changedTouches[0].screenY)},{passive:!0}),A.addEventListener("touchend",c=>{if(c.changedTouches&&c.changedTouches[0]){const y=c.changedTouches[0].screenX,p=c.changedTouches[0].screenY,I=y-s,B=p-o;Math.abs(I)>40&&Math.abs(I)>Math.abs(B)&&(I<0?g(l+1):g(l-1))}},{passive:!0})}function re(){var W,J,K;const s=e.categoryName||((W=ye[e.category])==null?void 0:W.label)||"Industrial Products",o=t(s);document.title=`${t(e.name)} — ${t("Technical Specifications")} | TIANJIN DECENT`;const c=document.getElementById("bc-category");c&&(c.innerHTML=`<a href="/products.html?category=${e.category}">${o}</a>`);const y=document.getElementById("bc-sub-sep"),p=document.getElementById("bc-subcategory");e.subcategory&&e.subcategory.trim().toLowerCase()!==e.name.trim().toLowerCase()?(y&&(y.style.display="inline"),p&&(p.style.display="inline",p.innerHTML=`<a href="/products.html?category=${e.category}&subcategory=${encodeURIComponent(e.subcategory)}">${t(e.subcategory)}</a>`)):(y&&(y.style.display="none"),p&&(p.style.display="none"));const B=document.getElementById("bc-product");B&&(B.textContent=t(e.name));const k=document.getElementById("badge-cat");k&&(k.textContent=o,k.href=`/products.html?category=${e.category}`);const T=document.getElementById("badge-sub");T&&e.subcategory&&(T.style.display="inline-block",T.textContent=t(e.subcategory),T.href=`/products.html?category=${e.category}&subcategory=${encodeURIComponent(e.subcategory)}`);const j=document.getElementById("product-name");j&&(j.textContent=t(e.name));const S=document.getElementById("product-short-desc");S&&(e.shortDescription&&e.shortDescription.trim()&&e.shortDescription.trim()!==((J=e.description)==null?void 0:J.trim())?(S.textContent=t(e.shortDescription.trim()),S.style.display="block"):S.style.display="none");const P=document.getElementById("product-desc");P&&(P.textContent=t(e.description)),u&&(u.src=((K=d[l])==null?void 0:K.src)||e.heroImage,u.alt=t(e.name)),oe(l),ce();const R=document.getElementById("visual-gallery-section"),C=document.getElementById("visual-gallery-grid"),le=d.filter(n=>n.note&&n.note!==e.shortDescription&&n.note!==e.name);R&&C&&le.length>1&&(R.style.display="block",C.innerHTML=d.map((n,i)=>`
          <div class="visual-gallery-card" data-index="${i}" title="${t("Click to view in main viewer")}">
            <div class="visual-gallery-media">
              <img src="${n.src}" alt="${E(n,i)}" class="visual-gallery-img" loading="lazy" />
            </div>
            <div class="visual-gallery-body">
              <h3 class="visual-gallery-title">${E(n,i)}</h3>
              <p class="visual-gallery-note">${ie(n)}</p>
            </div>
          </div>
        `).join(""),C.querySelectorAll(".visual-gallery-card").forEach(n=>{n.addEventListener("click",()=>{const i=parseInt(n.dataset.index,10);if(!isNaN(i)){g(i);const a=document.querySelector(".detail-media");a&&a.scrollIntoView({behavior:"smooth",block:"start"})}})}));const de=`${t("Hello TIANJIN DECENT, I would like to request technical specifications and pricing for:")} ${t(e.name)}.`,q=document.getElementById("product-wa-btn");q&&(q.href=fe(de));const G=document.getElementById("rfq-product");G&&(G.value=t(e.name));const F=document.getElementById("specs-table-body");if(F&&e.specifications&&e.specifications.length>0&&(F.innerHTML=e.specifications.map(n=>`
          <tr>
            <th>${t(n.label)}</th>
            <td>${t(n.value).replace(/\n/g,"<br/>")}</td>
          </tr>
        `).join("")),e.wallThicknessSpecs&&e.wallThicknessSpecs.length>0){const n=document.getElementById("wall-thickness-section"),i=document.getElementById("matrix-table-body"),a=document.getElementById("matrix-note-box");n&&(n.style.display="block"),i&&(i.innerHTML=e.wallThicknessSpecs.map(r=>`
            <tr>
              <td><span class="matrix-badge">${r.standard}</span></td>
              <td><strong>${r.yieldStress}</strong></td>
              <td><span class="matrix-thickness">${r.nominalWallThickness}</span></td>
              <td>${t(r.description)}</td>
            </tr>
          `).join("")),e.wallThicknessNote&&a&&(a.style.display="block",a.innerHTML=`<strong>${t("Note:")}</strong> ${t("BS 1139 tubing is equivalent and is acceptable.")}`)}const D=e.standardSizesTables||(e.standardSizesTable?[e.standardSizesTable]:null);if(D&&D.length>0){const n=document.getElementById("standard-sizes-section"),i=document.getElementById("standard-sizes-container");n&&i&&(n.style.display="block",i.innerHTML=D.map(a=>`
            <div style="margin-bottom: var(--space-xl);">
              ${a.title?`<h3 style="font-size: 15px; font-weight: 700; color: var(--color-ink); margin-bottom: 4px;">${t(a.title)}</h3>`:""}
              ${a.subtitle?`<p style="font-size: 13px; color: var(--color-muted); margin-bottom: 10px;">${t(a.subtitle)}</p>`:""}
              <div class="matrix-card">
                <table class="matrix-table">
                  <thead>
                    <tr>${(a.columns||[]).map(r=>`<th>${t(r)}</th>`).join("")}</tr>
                  </thead>
                  <tbody>
                    ${(a.rows||[]).map(r=>`
                      <tr>
                        ${r.map((f,M)=>{var Q;const w=t(f);return M===0?`<td><strong>${w}</strong></td>`:M===1?`<td><span class="matrix-thickness">${w}</span></td>`:M===3&&((Q=a.columns)==null?void 0:Q.length)===4?`<td><span class="matrix-badge">${w}</span></td>`:`<td>${w}</td>`}).join("")}
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            </div>
          `).join(""))}if(e.accessories&&e.accessories.length>0){const n=document.getElementById("accessories-section"),i=document.getElementById("accessory-grid");if(n){n.style.display="block";const a=n.querySelector("h2");a&&(a.innerHTML=`${t(e.name)} ${t("Components & Standard Hardware")}`);const r=n.querySelector("p");r&&(r.innerHTML=t(e.accessoriesSubtitle||"Precision-engineered modular uprights, ledgers, braces, locking nodes, base collars, and foundation hardware certified to international scaffolding standards."))}i&&(i.innerHTML=e.accessories.map(a=>{const r=a.sizeList||a.sizes.split("/").map(f=>f.trim()).filter(Boolean);return`
              <div class="accessory-card">
                <div class="accessory-media">
                  <img src="${a.image}" alt="${t(a.name)}" class="accessory-img" loading="lazy" />
                </div>
                <div>
                  <h3 class="accessory-title">${t(a.name)}</h3>
                  <div class="accessory-sizes-label">${t("Available Standard Sizes:")}</div>
                  <div class="accessory-sizes">
                    ${r.map(f=>`<span class="size-chip">${f}</span>`).join("")}
                  </div>
                  <p class="accessory-desc">${t(a.description)}</p>
                </div>
              </div>
            `}).join(""))}if(["couplers","swivel-coupler","right-angle-coupler","tube-fittings-scaffolding","scaffolding-accessories"].includes(e.slug)&&_&&_.length>0){const n=document.getElementById("fittings-section"),i=document.getElementById("fittings-grid");n&&(n.style.display="block"),i&&(i.innerHTML=_.map(a=>`
            <div class="fitting-item-card">
              <div class="fitting-media">
                <img src="${a.image}" alt="${t(a.name)}" class="fitting-img" loading="lazy" />
              </div>
              <div>
                <div class="fitting-header">
                  <h3 class="fitting-name">${t(a.name)}</h3>
                  <span class="fitting-badge">${a.standard}</span>
                </div>
                <div class="fitting-specs-mini">
                  <div><span>${t("Tube Diameter:")}</span> <strong>${a.tubeDiameter}</strong></div>
                  <div><span>${t("Tightening Torque:")}</span> <strong>${a.tighteningTorque}</strong></div>
                  <div><span>${t("Slip Resistance:")}</span> <strong>${a.slipLoad}</strong></div>
                  <div><span>${t("Failure Load:")}</span> <strong>${a.failureLoad}</strong></div>
                  <div><span>${t("Finish:")}</span> <strong>${t(a.finish)}</strong></div>
                  <div><span>${t("Fasteners:")}</span> <strong>${t(a.fastener)}</strong></div>
                </div>
                <p class="accessory-desc">${t(a.description)}</p>
              </div>
            </div>
          `).join(""))}const V=document.getElementById("features-list");V&&e.features&&e.features.length>0&&(V.innerHTML=e.features.map(n=>`
          <div class="feature-item"><span>${t(n)}</span></div>
        `).join(""));const U=document.getElementById("applications-list");U&&e.applications&&e.applications.length>0&&(U.innerHTML=e.applications.map(n=>`
          <div class="feature-item"><span>${t(n)}</span></div>
        `).join(""));const X=document.getElementById("standards-list");X&&e.standards&&e.standards.length>0&&(X.innerHTML=e.standards.map(n=>`
          <div style="background-color: var(--color-canvas-soft); padding: 10px 14px; border-radius: var(--radius-xs); border: 1px solid var(--color-hairline); display: flex; justify-content: space-between; align-items: center;">
            <strong style="font-family: var(--font-mono); font-size: 13px; color: var(--color-ink);">${n.name}</strong>
            <span style="font-size: 13px; color: var(--color-muted);">${t(n.description)}</span>
          </div>
        `).join(""));const N=document.getElementById("related-section"),Y=document.getElementById("related-grid"),O=document.getElementById("related-heading"),z=document.getElementById("related-view-all");if(N&&Y){let n=ne.filter(i=>i.slug!==e.slug&&i.category===e.category);if(e.subcategory){const i=n.filter(r=>r.subcategory===e.subcategory),a=n.filter(r=>r.subcategory!==e.subcategory);n=[...i,...a]}n=n.slice(0,3),n.length>0?(N.style.display="block",O&&(O.textContent=`${t("Related in")} ${o}`),z&&(z.href=`/products.html?category=${e.category}`,z.textContent=`${t("View All")} ${o} →`),Y.innerHTML=n.map(i=>{const a=i.standards&&i.standards[0]?i.standards[0].name.split("/")[0].trim():"ISO 9001";return`
              <a href="/product.html?id=${i.slug}" class="product-card">
                <div class="product-card__img-wrap">
                  <img src="${i.heroImage}" alt="${t(i.name)}" class="product-card__img" loading="lazy" />
                </div>
                <div class="product-card__body">
                  <div class="product-card__header">
                    <div class="product-card__title-group">
                      <span class="product-card__category">${t(i.categoryName||s)}${i.subcategory?" • "+t(i.subcategory):""}</span>
                      <h3 class="product-card__name">${t(i.name)}</h3>
                    </div>
                    <span class="product-card__badge">${a}</span>
                  </div>
                  <p class="product-card__desc">${t(i.shortDescription)}</p>
                  <span class="product-card__cta">${t("View Specifications")}</span>
                </div>
              </a>
            `}).join("")):N.style.display="none"}}re();window.addEventListener("td:languageChanged",()=>{re()});me();
