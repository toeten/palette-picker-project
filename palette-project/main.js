import palettes from './palettes.json';
import { setLocalStorageKey, getLocalStorageKey } from './local-storage.js';


if (!getLocalStorageKey('palettes')) {
  setLocalStorageKey('palettes', )
}

console.log("hello from main.js");

export const createSampleCard = (palette) => {
  const ul = document.querySelector('#saved-palettes');

  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${palette.title}</h3>
    <div class="color-boxes">
      ${palette.colors.map(color => `
        <div class="color-box" style="background-color: ${color};">
          <p class="text-color" data-text="Example Text">Example Text</p>
        </div>
        <div class="copy-container">
            <button class="copy-button" data-color="${color}">Copy ${color}</button>
          </div>
      `).join('')}
    </div>
    <button class="delete-button">Delete Palette</button>
    <footer class="temperature ${palette.temperature}">${palette.temperature}</footer>
  `;
  
  ul.appendChild(li);

  const copyButtons = li.querySelectorAll('.copy-button');
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const color = button.getAttribute('data-color');
      navigator.clipboard.writeText(color)
        .then(() => {
          button.textContent = "Copied hex!";
          setTimeout(() => {
            button.textContent = `Copy ${color}`;
          }, 1000);
        })
    });
  });

  const deleteButton = li.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    li.remove();
  });
};

const initSampleCards = () => {
  palettes.forEach(createSampleCard);
};

const handleFormSubmission = (event) => {
  event.preventDefault();
  const form = event.target;

  const newPalette = {
    title: form.paletteName.value,
    colors: [
      form.colorInput1.value,
      form.colorInput2.value,
      form.colorInput3.value
    ],
    temperature: form.querySelector('input[name="paletteTemp"]:checked').value
  };

  createSampleCard(newPalette);
  form.reset();
};

const main = () => {
  initSampleCards();
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
};

main();
