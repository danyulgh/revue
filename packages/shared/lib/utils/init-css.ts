import { fonts, fontType } from './fonts.js';
import { fontTags } from './tags.js';

export const initFont = (fontName: string) => {
  document.getElementById('revue_extension_fonts')?.remove();
  const style = document.createElement('style');
  style.id = 'revue_extension_fonts';

  for (const font of fonts) {
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

  for (const tag of fontTags) {
    style.textContent += `
      ${tag.primary} {
        font-family: ${tag.secondary ? 'Ubuntu' : `${fontName}`}, 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
      }
    `;
    if (tag.secondary)
      style.textContent += `
        ${tag.secondary} {
          font-family: '${fontName}', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
        }
      `;
  }

  document.head.appendChild(style);
};
