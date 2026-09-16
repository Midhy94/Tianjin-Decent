import{i as o,a as s,b as i,P as c,C as r,g as d}from"./footer-COQYqE8C.js";o();s();const l=new URLSearchParams(window.location.search),p=l.get("id")||"hr-steel-coils",t=i(p)||c[0],n=r[t.category]||{label:"Industrial Products"};document.title=`${t.name} — Technical Specifications | TIANJIN DECENT`;document.getElementById("bc-category").textContent=n.label;document.getElementById("bc-product").textContent=t.name;document.getElementById("product-category-eyebrow").textContent=`${n.label.toUpperCase()} // TECHNICAL SPECIFICATION`;document.getElementById("product-name").textContent=t.name;document.getElementById("product-desc").textContent=t.description;const a=document.getElementById("product-img");a.src=t.heroImage;a.alt=t.name;const m=`Hello TIANJIN DECENT, I would like to request technical specifications and pricing for: ${t.name}.`;document.getElementById("product-wa-btn").href=d(m);document.getElementById("rfq-product").value=t.name;const u=document.getElementById("specs-table-body");t.specifications&&t.specifications.length>0&&(u.innerHTML=t.specifications.map(e=>`
        <tr>
          <th>${e.label}</th>
          <td>${e.value}</td>
        </tr>
      `).join(""));const g=document.getElementById("features-list");t.features&&t.features.length>0&&(g.innerHTML=t.features.map(e=>`
        <div class="feature-item"><span>${e}</span></div>
      `).join(""));const f=document.getElementById("applications-list");t.applications&&t.applications.length>0&&(f.innerHTML=t.applications.map(e=>`
        <div class="feature-item"><span>${e}</span></div>
      `).join(""));const y=document.getElementById("standards-list");t.standards&&t.standards.length>0&&(y.innerHTML=t.standards.map(e=>`
        <div style="background-color: var(--color-canvas-soft); padding: 10px 14px; border-radius: var(--radius-xs); border: 1px solid var(--color-hairline); display: flex; justify-content: space-between; align-items: center;">
          <strong style="font-family: var(--font-mono); font-size: 13px; color: var(--color-ink);">${e.name}</strong>
          <span style="font-size: 13px; color: var(--color-muted);">${e.description}</span>
        </div>
      `).join(""));
