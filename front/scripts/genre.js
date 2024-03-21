const genre = ["Action", "Aventure", "Fantasy", "Sci - fi", "Romance"];
const opcions = document.getElementById("opcions");
function renderGnere() {
  event.preventDefault();
  opcions.innerHTML = "";

  for (const item of genre) {
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "Checkbox";
    input.id = item;
    input.name = "Genre[]";
    input.value = item;

    label.htmlFor = item;
    label.textContent = item;

    opcions.appendChild(input);
    opcions.appendChild(label);
  }
}

function validateCheckbox() {
  const selectedGenres = [];
  const Checkbox = document.querySelectorAll('input[name="Genre[]"]');

  Checkbox.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedGenres.push(checkbox.value);
      checkbox.classList.add("selected");
    }
  });

  return selectedGenres;
}
document.addEventListener("DOMContentLoaded", function () {
  renderGnere();
});
module.exports = validateCheckbox;
