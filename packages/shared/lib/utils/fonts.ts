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

export const fontType = (file: string) => fontSuffixes.find(suffix => file.endsWith(suffix.suffix))?.type;

export const fonts: {
  name: string;
  file: string;
}[] = [
  {
    name: 'Figtree',
    file: 'Figtree-VariableFont.ttf',
  },
  {
    name: 'Minecraft',
    file: 'Minecraft.otf',
  },
  {
    name: 'Papyrus',
    file: 'Papyrus.ttf',
  },
  {
    name: 'Ubuntu',
    file: 'Ubuntu-Regular.ttf',
  },
  {
    name: 'Black Ops One',
    file: 'BlackOpsOne-Regular.ttf',
  },
];
