import inlineCss from '../../../dist/edupoint/index.css?inline';
import { initAppWithShadow, initComponentWithShadow } from '@extension/shared';
import App from '@src/matches/edupoint/App';

initAppWithShadow({ id: 'CEB-extension-example', app: <App />, inlineCss });
initComponentWithShadow({ id: 'CEB-extension-example', app: <App />, inlineCss, placement: 'child', target: 'a' });
