const container = document.getElementById("blueprints-container");

// Generate each blueprint entry
blueprints.forEach(bp => {
  const entry = document.createElement("div");
  entry.classList.add("blueprint-entry");

  // Blueprint image
  const img = document.createElement("img");
  img.src = bp.image !== "N/A" ? bp.image : "https://via.placeholder.com/50"; // placeholder if no image
  img.classList.add("blueprint-img");
  entry.appendChild(img);

  // Blueprint name
  const name = document.createElement("span");
  name.textContent = bp.name;
  name.classList.add("blueprint-name");
  
  // Set rarity color
  switch(bp.rarity.toLowerCase()) {
    case "legendary": name.style.color = "gold"; break;
    case "epic": name.style.color = "pink"; break;
    case "rare": name.style.color = "blue"; break;
    case "uncommon": name.style.color = "green"; break;
    default: name.style.color = "grey";
  }
  
  entry.appendChild(name);

  // Description box
  const desc = document.createElement("div");
  desc.classList.add("blueprint-description");
  desc.innerHTML = `<strong>Description:</strong> ${bp.description || "No description available."}`;
  entry.appendChild(desc);

  // Toggle description inline
  entry.addEventListener("click", () => {
    desc.style.display = desc.style.display === "block" ? "none" : "block";
  });

  container.appendChild(entry);
});
