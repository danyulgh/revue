import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/lib/components/ui/select';
import { fontTags } from '@extension/shared';

interface PageSelectProps {
  page: string;
  setPage: (value: string) => void;
}

export const PageSelect = ({ page, setPage }: PageSelectProps) => (
  <Select value={page} onValueChange={setPage}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select Page to Update" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="All">All Pages</SelectItem>
        {fontTags.map(page => (
          <SelectItem value={`${page.name}`}>{page.name}</SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);
