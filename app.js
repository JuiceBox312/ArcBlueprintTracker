const grid=document.getElementById("trackerGrid");
const search=document.getElementById("search");
const mapFilter=document.getElementById("mapFilter");
const typeFilter=document.getElementById("typeFilter");
const rarityFilter=document.getElementById("rarityFilter");
const progress=document.getElementById("progress");

let owned=JSON.parse(localStorage.getItem("ownedBlueprints"))||{};

function populate() {
  [...new Set(blueprints.flatMap(b=>b.maps))].forEach(m=>mapFilter.innerHTML+=`<option>${m}</option>`);
  [...new Set(blueprints.map(b=>b.type))].forEach(t=>typeFilter.innerHTML+=`<option>${t}</option>`);
  [...new Set(blueprints.map(b=>b.rarity))].forEach(r=>rarityFilter.innerHTML+=`<option>${r}</option>`);
}

function render() {
  grid.innerHTML="";
  let list=blueprints.filter(b=>
    b.name.toLowerCase().includes(search.value.toLowerCase()) &&
    (!mapFilter.value||b.maps.includes(mapFilter.value)) &&
    (!typeFilter.value||b.type===typeFilter.value) &&
    (!rarityFilter.value||b.rarity===rarityFilter.value)
  );

  list.forEach(bp=>{
    const card=document.createElement("div");
    card.className=`card ${bp.rarity}`;
    if(owned[bp.name])card.classList.add("owned");
    card.innerHTML = `
  <img src="${bp.image}" class="card-img" alt="${bp.name}">
  <div class="card-name">${bp.name}</div>
  <input type="checkbox" ${owned[bp.name] ? "checked" : ""}>

    card.querySelector("input").onchange=e=>{
      owned[bp.name]=e.target.checked;
      localStorage.setItem("ownedBlueprints",JSON.stringify(owned));
      render();
    };

    grid.appendChild(card);
  });

  const found=Object.values(owned).filter(v=>v).length;
  progress.textContent=`Progress: ${found}/${blueprints.length}`;
}

[search,mapFilter,typeFilter,rarityFilter].forEach(e=>e.addEventListener("input",render));
populate();
render();

