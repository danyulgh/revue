export const initFont = () => {
  const fontUrl = chrome.runtime.getURL('PixelifySans-VariableFont_wght.ttf');

  const style = document.createElement('style');
  style.id = 'REVUEREVUEREVUE';
  style.textContent = `
    @font-face {
      font-family: "Pixelify Sans";
      src: url("${fontUrl}") format("truetype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    body {
      font-family: 'Pixelify Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
    }

    .student-name {
      font-family: 'Pixelify Sans' !important;
    }

    #DistrictName {
      font-family: 'Pixelify Sans' !important;
    }
  `;
  document.head.appendChild(style);
};
