import { Button } from '@/lib/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/lib/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/lib/components/ui/popover';
import { cn } from '@/lib/utils';
import { districts, useStorage } from '@extension/shared';
import { navStorage } from '@extension/storage';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { useState } from 'react';

export const DistrictSelect = () => {
  const { origin } = useStorage(navStorage);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(
    districts.find(district => district.url === origin)?.name || 'Montgomery County Public Schools',
  );

  const updateOrigin = async (newOrigin: string) => {
    await navStorage.set(currentTheme => ({
      ...currentTheme,
      origin: newOrigin,
    }));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[210px] justify-between">
          <span className="max-w-[calc(100%-1.5rem)] truncate">
            {value ? districts.find(district => district.name === value)?.name : 'Select district...'}
          </span>
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[210px] p-0">
        <Command>
          <CommandInput placeholder="Search district..." />
          <CommandList>
            <CommandEmpty>No district found.</CommandEmpty>
            <CommandGroup>
              {districts.map(district => (
                <CommandItem
                  key={district.name}
                  value={district.name}
                  onSelect={currentValue => {
                    setValue(currentValue === value ? '' : currentValue);
                    updateOrigin(currentValue === value ? 'https://md-mcps-psv.edupoint.com/' : district.url);
                    setOpen(false);
                  }}>
                  {district.name}
                  <CheckIcon className={cn('mr-2 h-4 w-4', value === district.name ? 'opacity-100' : 'opacity-0')} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
