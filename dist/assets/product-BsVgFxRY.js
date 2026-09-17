import{i as a,a as o,b as s,P as i,C as c,g as r}from"./footer-CKNZ30uu.js";a();o();const d=new URLSearchParams(window.location.search),l=d.get("id")||"hr-steel-coils",t=s(l)||i[0],p=c[t.category]||{label:"Industrial Products"};document.title=`${t.name} — Technical Specifications | TIANJIN DECENT`;document.getElementById("bc-category").textContent=p.label;document.getElementById("bc-product").textContent=t.name;document.getElementById("product-name").textContent=t.name;document.getElementById("product-desc").textContent=t.description;const n=document.getElementById("product-img");n.src=t.heroImage;n.alt=t.name;const m=`Hello TIANJIN DECENT, I would like to request technical specifications and pricing for: ${t.name}.`;document.getElementById("product-wa-btn").href=r(m);document.getElementById("rfq-product").value=t.name;const u=document.getElementById("specs-table-body");t.specifications&&t.specifications.length>0&&(u.innerHTML=t.specifications.map(e=>`
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
