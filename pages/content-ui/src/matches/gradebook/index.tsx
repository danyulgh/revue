import inlineCss from '../../../dist/gradebook/index.css?inline';
import { initAppWithShadow, initComponentWithShadow, shortCircuit } from '@extension/shared';
import App from '@src/matches/gradebook/App';

shortCircuit();

initAppWithShadow({ id: 'CEB-extensionaaaa-example', app: <App />, inlineCss });
const gradebookObserver = new MutationObserver(() => {
  if (document.querySelector('#ctl00_ctl00_DebugInfo')) {
    initComponentWithShadow({
      id: 'CEB-extension-example27',
      app: <App />,
      inlineCss,
      placement: 'child',
      target: '#ctl00_ctl00_DebugInfo',
    });
    gradebookObserver.disconnect();
  }
});

gradebookObserver.observe(document.body, { subtree: true, childList: true });
