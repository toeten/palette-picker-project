import { createSampleCard } from './main.js';
import { setLocalStorageKey, getLocalStorageKey } from "./local-storage.js";

export const handleFormSubmission = (event) => {
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

  const palettes = getLocalStorageKey('palettes') || [];
  palettes.push(newPalette);
  setLocalStorageKey('palettes', palettes);
  createSampleCard(newPalette);
  form.reset();
};
