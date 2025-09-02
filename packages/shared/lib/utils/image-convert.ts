export const convertImageElementToBase64 = (imgElement: HTMLImageElement): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  canvas.width = imgElement.naturalWidth;
  canvas.height = imgElement.naturalHeight;

  ctx.drawImage(imgElement, 0, 0);
  return canvas.toDataURL('image/png');
};
