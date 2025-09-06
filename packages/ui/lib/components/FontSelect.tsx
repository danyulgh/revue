import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/lib/components/ui/select';
import { fonts, initFontFaces } from '@extension/shared';

interface FontSelectProps {
  placeholder: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export const FontSelect = ({ selectedValue, setSelectedValue, placeholder }: FontSelectProps) => {
  initFontFaces();

  return (
    <Select onValueChange={setSelectedValue} defaultValue={selectedValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {fonts.map(font => (
            <SelectItem value={font.name} style={{ fontFamily: font.name }}>
              {font.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
