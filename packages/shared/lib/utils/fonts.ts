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
    name: 'Figtree',
    file: 'Figtree-VariableFont.ttf',
  },
  {
    name: 'Minecraft',
    file: 'MinecraftRegular.otf',
  },
  {
    name: 'Papyrus',
    file: 'Papyrus.ttf',
  },
];
