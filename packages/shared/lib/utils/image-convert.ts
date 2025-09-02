export const convertImageSrcToBlob = async (src: string): Promise<Blob> => await fetch(src).then(res => res.blob());

export const convertImageElementToBase64 = (img: HTMLImageElement): string => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d')!;

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  context.drawImage(img, 0, 0);
  return canvas.toDataURL('image/png');
};
