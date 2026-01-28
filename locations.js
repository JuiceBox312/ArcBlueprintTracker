const list = document.getElementById("blueprintList");
list.innerHTML = "";

blueprints.forEach(bp => {
  // wrapper is the KEY
  const wrapper = document.createElement("div");
  wrapper.className = "bp-wrapper";

  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<strong>${bp.name}</strong> <span>(${bp.rarity})</span>`;

  item.onclick = () => {
    // close all other open details
    document.querySelectorAll(".details-inline").forEach(d => d.remove());
    document.querySelectorAll(".item").forEach(i => i.classList.remove("active"));

    // toggle off if already open
    if (wrapper.querySelector(".details-inline")) return;

    item.classList.add("active");

    const details = document.createElement("div");
    details.className = "details-inline";
    details.innerHTML = `
      <p><b>Type:</b> ${bp.type}</p>
      <p><b>Maps:</b> ${bp.maps.join(", ")}</p>
      <p><b>Where to look:</b> ${bp.description}</p>
    `;

    wrapper.appendChild(details);
  };

  wrapper.appendChild(item);
  list.appendChild(wrapper);
});
