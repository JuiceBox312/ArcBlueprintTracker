const list = document.getElementById("blueprintList");

list.innerHTML = "";

blueprints.forEach(bp => {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<strong>${bp.name}</strong> <span>(${bp.rarity})</span>`;

  item.onclick = () => {
    // close any other open details
document.querySelectorAll(".item").forEach(i => i.classList.remove("active"));
item.classList.add("active");


    // toggle behavior
    if (item.nextElementSibling?.classList.contains("details-inline")) {
      item.nextElementSibling.remove();
      return;
    }

    const details = document.createElement("div");
    details.className = "details-inline";
    details.innerHTML = `
      <p><b>Type:</b> ${bp.type}</p>
      <p><b>Maps:</b> ${bp.maps.join(", ")}</p>
      <p><b>Where to look:</b> ${bp.description}</p>
    `;

    item.after(details);
  };

  list.appendChild(item);
});

