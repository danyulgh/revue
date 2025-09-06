import { fonts, fontType } from './fonts.js';
import { fontTags } from './tags.js';

export const initFontFaces = () => {
  document.getElementById('revue_extension_fontsfaces')?.remove();
  const style = document.createElement('style');
  style.id = 'revue_extension_fontsfaces';
  for (const font of fonts) {
    if (!font.file) continue;
    const url = chrome.runtime.getURL(`fonts/${font.file}`);
    style.textContent += `
      @font-face {
        font-family: '${font.name}';
        src: url(${url}) format('${fontType(font.file)}');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `;
  }
  document.head.appendChild(style);
};

export const initFont = (fontName: string) => {
  document.getElementById('revue_extension_fonts')?.remove();
  const style = document.createElement('style');
  style.id = 'revue_extension_fonts';

  for (const tag of fontTags) {
    style.textContent += `
      ${tag.primary} {
        font-family: ${tag.secondary ? 'Ubuntu' : fontName} !important;
      }
    `;
    if (tag.secondary)
      style.textContent += `
        ${tag.secondary} {
          font-family: ${fontName} !important;
        }
      `;
  }
};
