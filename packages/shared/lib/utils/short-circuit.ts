export const shortCircuit = () => {
  if (document.title.toLowerCase().includes('parent'))
    throw new Error('Revue shortcircuit: ParentVUE detected, not updating information.');
  else if (document.title.toLowerCase().includes('error'))
    throw new Error('Revue shortcircuit: Synergy error detected, not adding changes');
};
