const target = document.getElementById("target");
let array = ["Développeur", "Photographe", "Créatif"];
let wordIndex = 0;
let letterIndex = 0;

const createletter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

// createletter(); 

const loup = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loup();
    } else if (letterIndex < array[wordIndex].length) {
      createletter();
      letterIndex++;
      loup();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loup();
      }, 2800);
    }
  }, 60);
};

loup();
