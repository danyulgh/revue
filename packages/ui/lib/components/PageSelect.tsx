import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/lib/components/ui/select';

interface FontSelectProps {
  placeholder: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export const PageSelect = ({ selectedValue, setSelectedValue, placeholder }: FontSelectProps) => {
  console.log('hi');
  return (
    <Select onValueChange={setSelectedValue} defaultValue={selectedValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="All Pages">All Pages</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
