import { fontTags } from './tags.js';

export const initFont = () => {
  const primaryFont = chrome.runtime.getURL('fonts/MinecraftRegular.otf');
  const secondaryFont = chrome.runtime.getURL('fonts/Figtree-VariableFont.ttf');

  const style = document.createElement('style');
  style.id = 'REVUEREVUEREVUE';
  style.textContent = `
    @font-face {
      font-family: "Primary";
      src: url("${primaryFont}") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "Secondary";
      src: url("${secondaryFont}") format("truetype");
      font-weight:500;
      font-style: normal;
      font-display: swap;
    }
  `;

  for (const tag of fontTags) {
    style.textContent += `
      ${tag.primary} {
        font-family: ${tag.secondary ? 'Arial' : 'Primary'}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
      }
    `;
    if (tag.secondary)
      style.textContent += `
        ${tag.secondary} {
          font-family: 'Primary', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
        }
      `;
  }

  document.head.appendChild(style);
};
