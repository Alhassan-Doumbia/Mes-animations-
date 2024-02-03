const titleEl = document.getElementById("title");
const title = titleEl.textContent;
let wordlist = title.split(" ");
titleEl.innerHTML = "";

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

/**
 * Fonction pour faire apparaître progressivement chaque mot dans le titre.
 * @param {Array} value - Liste des mots à faire apparaître.
 */
async function textAppearing(value) {
  for (let i = 0; i < value.length; i++) {
    let word = value[i];
    let wordContainer = document.createElement("span");
    wordContainer.className = "appear"; // Ajoute une classe pour l'animation CSS
    titleEl.appendChild(wordContainer);

    for (let j = 0; j < word.length; j++) {
      let char = document.createElement("span");
      char.textContent = word[j];
      wordContainer.appendChild(char);
      await sleep(100); // Délai entre chaque caractère
    }

    titleEl.appendChild(document.createTextNode(" ")); // Ajoute un espace après chaque mot
    await sleep(500); // Délai entre chaque mot
  }
}

textAppearing(wordlist);
