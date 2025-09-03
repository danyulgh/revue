const fontSuffixes: {
  suffix: string;
  type: string;
}[] = [
  {
    suffix: '.ttf',
    type: 'truetype',
  },
  {
    suffix: '.otf',
    type: 'opentype',
  },
];

export const fontType = ({ file }: { file: string }) => fontSuffixes.find(suffix => file.endsWith(suffix.suffix))?.type;

export const fonts: {
  name: string;
  file: string;
}[] = [
  {
    name: 'Pixelify Sans',
    file: 'PixelifySans-VariableFont.ttf',
  },
];
