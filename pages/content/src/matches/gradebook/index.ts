const targetId = 'ctl00_ctl00_MainContent_PXPMainContent_CourseContentHeaderLink';
const MARKER = '__back_reload_marker__';

const isClassbook = function () {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    return window.getComputedStyle(targetElement).display === 'none';
  } else return false;
};

const isTargetMutation = function (mutation: MutationRecord) {
  return mutation.target instanceof HTMLElement && mutation.target.id === targetId;
};

const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    if (isTargetMutation(mutation) && isClassbook()) {
      history.pushState({ [MARKER]: true }, '');
      return;
    }
  }
});

observer.observe(document.body, { subtree: true, childList: true, attributes: true });

window.addEventListener('popstate', event => {
  console.log('popstate fired');
  if (!event.state?.[MARKER]) {
    location.reload();
  }
});
