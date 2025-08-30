const targetId = 'ctl00_ctl00_MainContent_PXPMainContent_CourseContentHeaderLink';
const MARKER = '__back_reload_marker__';

// const safePushState = function (stateObj: { [MARKER]: boolean }) {
//   try {
//     history.pushState(stateObj, '', location.href);
//     console.log(`pushed state marker`);
//   } catch (err) {
//     console.warn(`pushState failed`, err);
//   }
// };

// const safeReplaceState = function (stateObj: { [MARKER]: boolean; snapshot?: { head: string; body: string } }) {
//   try {
//     history.replaceState(stateObj, '', location.href);
//     console.log(`replaced state marker`);
//   } catch (err) {
//     console.warn(`replace State failed`, err);
//   }
// };

// const restoreScripts = function (snapshot: string) {
//   document.head.innerHTML = '';

//   const temp = document.createElement('div');
//   temp.innerHTML = snapshot;

//   Array.from(temp.childNodes).forEach(node => {
//     if (node.nodeName.toLowerCase() === 'script') {
//       const oldScript = node as HTMLScriptElement;
//       const newScript = document.createElement('script');

//       for (const attr of oldScript.attributes) newScript.setAttribute(attr.name, attr.value);
//       if (oldScript.textContent) newScript.textContent = oldScript.textContent;

//       document.head.appendChild(newScript);
//     } else {
//       document.head.appendChild(node.cloneNode(true));
//     }
//   });
// };

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
  mutations.forEach(mutation => {
    if (isTargetMutation(mutation) && isClassbook()) {
      setTimeout(() => {
        history.pushState(
          {
            [MARKER]: true,
            snapshot: { head: document.head.innerHTML, body: document.body.innerHTML },
          },
          '',
          location.href,
        );
      }, 500);
      setTimeout(() => {
        history.replaceState(
          {
            [MARKER]: true,
            snapshot: { head: document.head.innerHTML, body: document.body.innerHTML },
          },
          '',
          location.href,
        );
      }, 2500);
    }
  });
});

observer.observe(document.body, { subtree: true, childList: true, attributes: true });

// window.addEventListener('popstate', () => {
//   location.reload();
// });

window.addEventListener('popstate', event => {
  console.log('[POPSTATE] fired, state:', event.state);
  if (event.state?.[MARKER] && event.state.snapshot) {
    console.log('[POPSTATE] restoring snapshot');
    document.body.innerHTML = event.state.snapshot.body;
    document.head.innerHTML += event.state.snapshot.head;
    // restoreScripts(event.state.snapshot.head);
  } else {
    console.log('[POPSTATE] reloading');
    location.reload();
  }
});
