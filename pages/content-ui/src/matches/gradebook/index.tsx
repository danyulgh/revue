import inlineCss from '../../../dist/gradebook/index.css?inline';
import { initAppWithShadow, initComponentWithShadow } from '@extension/shared';
import App from '@src/matches/gradebook/App';

initAppWithShadow({ id: 'CEB-extension-example', app: <App />, inlineCss });
const observer = new MutationObserver(() => {
  if (document.querySelector('#ctl00_ctl00_DebugInfo')) {
    initComponentWithShadow({
      id: 'CEB-extension-example2',
      app: <App />,
      inlineCss,
      placement: 'beforebegin',
      target: 'div.container',
    });
    observer.disconnect();
  }
});

observer.observe(document.body, { subtree: true, childList: true });
