import{i as d,a as r,b as p,P as g,C as m,g as u,S as c}from"./footer-H4YDPbGW.js";d();r();const y=new URLSearchParams(window.location.search),v=y.get("id")||"hr-steel-coils",t=p(v)||g[0],f=m[t.category]||{label:"Industrial Products"};document.title=`${t.name} — Technical Specifications | TIANJIN DECENT`;document.getElementById("bc-category").textContent=f.label;document.getElementById("bc-product").textContent=t.name;document.getElementById("product-name").textContent=t.name;document.getElementById("product-desc").textContent=t.description;const i=document.getElementById("product-img");i.src=t.heroImage;i.alt=t.name;const l=document.getElementById("gallery-thumbs");if(t.gallery&&t.gallery.length>1){l.style.display="flex",l.innerHTML=t.gallery.map((n,e)=>`
        <button class="gallery-thumb-btn ${e===0?"is-active":""}" type="button" aria-label="View photo ${e+1}" data-src="${n}">
          <img src="${n}" alt="${t.name} preview ${e+1}" loading="lazy" />
        </button>
      `).join("");const s=l.querySelectorAll(".gallery-thumb-btn");s.forEach(n=>{n.addEventListener("click",()=>{s.forEach(e=>e.classList.remove("is-active")),n.classList.add("is-active"),i.style.opacity="0.4",setTimeout(()=>{i.src=n.dataset.src,i.style.opacity="1"},150)})})}const h=`Hello TIANJIN DECENT, I would like to request technical specifications and pricing for: ${t.name}.`;document.getElementById("product-wa-btn").href=u(h);document.getElementById("rfq-product").value=t.name;const b=document.getElementById("specs-table-body");t.specifications&&t.specifications.length>0&&(b.innerHTML=t.specifications.map(s=>`
        <tr>
          <th>${s.label}</th>
          <td>${s.value.replace(/\n/g,"<br/>")}</td>
        </tr>
      `).join(""));if(t.wallThicknessSpecs&&t.wallThicknessSpecs.length>0){const s=document.getElementById("wall-thickness-section"),n=document.getElementById("matrix-table-body"),e=document.getElementById("matrix-note-box");s.style.display="block",n.innerHTML=t.wallThicknessSpecs.map(a=>`
        <tr>
          <td><span class="matrix-badge">${a.standard}</span></td>
          <td><strong>${a.yieldStress}</strong></td>
          <td><span class="matrix-thickness">${a.nominalWallThickness}</span></td>
          <td>${a.description}</td>
        </tr>
      `).join(""),t.wallThicknessNote&&e&&(e.style.display="block",e.innerHTML="<strong>Note:</strong> BS 1139 tubing is equivalent and is acceptable.")}if(t.accessories&&t.accessories.length>0){const s=document.getElementById("accessories-section"),n=document.getElementById("accessory-grid");s.style.display="block",n.innerHTML=t.accessories.map(e=>{const a=e.sizeList||e.sizes.split("/").map(o=>o.trim()).filter(Boolean);return`
          <div class="accessory-card">
            <div class="accessory-media">
              <img src="${e.image}" alt="${e.name}" class="accessory-img" loading="lazy" />
            </div>
            <div>
              <h3 class="accessory-title">${e.name}</h3>
              <div class="accessory-sizes-label">Available Standard Sizes:</div>
              <div class="accessory-sizes">
                ${a.map(o=>`<span class="size-chip">${o}</span>`).join("")}
              </div>
              <p class="accessory-desc">${e.description}</p>
            </div>
          </div>
        `}).join("")}const $=["swivel-coupler","right-angle-coupler","tube-fittings-scaffolding","scaffolding-accessories"].includes(t.slug);if($&&c&&c.length>0){const s=document.getElementById("fittings-section"),n=document.getElementById("fittings-grid");s.style.display="block",n.innerHTML=c.map(e=>`
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
      `).join("")}const T=document.getElementById("features-list");t.features&&t.features.length>0&&(T.innerHTML=t.features.map(s=>`
        <div class="feature-item"><span>${s}</span></div>
      `).join(""));const I=document.getElementById("applications-list");t.applications&&t.applications.length>0&&(I.innerHTML=t.applications.map(s=>`
        <div class="feature-item"><span>${s}</span></div>
      `).join(""));const E=document.getElementById("standards-list");t.standards&&t.standards.length>0&&(E.innerHTML=t.standards.map(s=>`
        <div style="background-color: var(--color-canvas-soft); padding: 10px 14px; border-radius: var(--radius-xs); border: 1px solid var(--color-hairline); display: flex; justify-content: space-between; align-items: center;">
          <strong style="font-family: var(--font-mono); font-size: 13px; color: var(--color-ink);">${s.name}</strong>
          <span style="font-size: 13px; color: var(--color-muted);">${s.description}</span>
        </div>
      `).join(""));
