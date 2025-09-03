const tags: string[] = [
  'body',
  '#DistrictName',
  '.student-name',
  '#messageGrid',
  '#ctl00_ctl00_MainContent_PXPMainContent_ctl00',
  '#ctl00_ctl00_MainContent_PXPMainContent_ctl08',
  '#ctl00_ctl00_MainContent_PXPMainContent_ServiceLearningGrid',
  '#ctl00_ctl00_MainContent_PXPMainContent_ServiceLearningGridDetails',
  '#ctl00_ctl00_MainContent_PXPMainContent_StaffGrid',
  '#ctl00_ctl00_MainContent_PXPMainContent_DocumentsGrid',
  '#AssignmentsGrid',
  '.dx-texteditor-input',
  '.dx-button-text',
  '.dx-item-content',
  '[data-dx_placeholder]',
];

export const initFont = () => {
  const fontUrl = chrome.runtime.getURL('fonts/MinecraftRegular.otf');
  const imageUrl = chrome.runtime.getURL('icon-128.png');

  const style = document.createElement('style');
  style.id = 'REVUEREVUEREVUE';
  style.textContent = `
    @font-face {
      font-family: "Pixelify Sans";
      src: url("${fontUrl}") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    body {
      background-image: url("${imageUrl}") !important;
    }
  `;

  for (const tag of tags) {
    style.textContent += `
    ${tag}{
      font-family: 'Pixelify Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
    }
    `;
  }

  document.head.appendChild(style);
};
