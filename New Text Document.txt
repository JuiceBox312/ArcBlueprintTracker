const list=document.getElementById("blueprintList");
const details=document.getElementById("details");

blueprints.forEach(bp=>{
  const row=document.createElement("div");
  row.textContent=`${bp.name} (${bp.rarity})`;
  row.onclick=()=>{
    details.classList.remove("hidden");
    details.innerHTML=`
      <h3>${bp.name}</h3>
      <p><b>Rarity:</b> ${bp.rarity}</p>
      <p><b>Type:</b> ${bp.type}</p>
      <p><b>Maps:</b> ${bp.maps.join(", ")}</p>
      <p><b>Where to look:</b> ${bp.description}</p>
    `;
  };
  list.appendChild(row);
});
