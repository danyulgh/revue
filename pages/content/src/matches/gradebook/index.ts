import { shortCircuit } from '@extension/shared';

shortCircuit();

const classbookTargetId = 'ctl00_ctl00_MainContent_PXPMainContent_CourseContentHeaderLink';
const classbookMARKER = '__back_reload_marker__';

const isClassbook = function () {
  const targetElement = document.getElementById(classbookTargetId);
  if (targetElement) {
    return window.getComputedStyle(targetElement).display === 'none';
  }
  return false;
};

const observer = new MutationObserver(() => {
  if (isClassbook()) {
    history.pushState({ [classbookMARKER]: true }, '');
    observer.disconnect();
  }
});

observer.observe(document.body, { subtree: true, childList: true, attributes: true });

window.addEventListener('popstate', event => {
  console.log('popstate fired');
  if (!event.state?.[classbookMARKER]) {
    location.reload();
  }
});
