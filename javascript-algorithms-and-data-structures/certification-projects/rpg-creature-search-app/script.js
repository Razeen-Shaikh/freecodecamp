const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const types = document.getElementById("types");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");


searchButton.addEventListener("click", async () => {
    types.innerHTML = "";
    const query = searchInput.value.toLowerCase();

    try {
        const response = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`);
        if (!response.ok) {
          throw new Error("Creature not found");
        }
        const data = await response.json();

        creatureName.textContent = data.name.toUpperCase();
        creatureId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;

        const statMap = {};
        data.stats.forEach(stat => {
            statMap[stat.name] = stat.base_stat;
        });

        hp.textContent = statMap["hp"];
        attack.textContent = statMap["attack"];
        defense.textContent = statMap["defense"];
        specialAttack.textContent = statMap["special-attack"];
        specialDefense.textContent = statMap["special-defense"];
        speed.textContent = statMap["speed"];

        data.types.forEach(type => {
            const typeElement = document.createElement("span");
            typeElement.textContent = type.name.toUpperCase();
            types.appendChild(typeElement);
        });

        if (data.special) {
            console.log(`Special Ability: ${data.special.name} - ${data.special.description}`);
        }

    } catch (err) {
        alert("Creature not found");
    }
});
