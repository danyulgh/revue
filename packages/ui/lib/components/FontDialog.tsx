import { FontSelect } from '@/lib/components/FontSelect';
import { Button } from '@/lib/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/components/ui/dialog';
import { Label } from '@/lib/components/ui/label';
import { useState } from 'react';

export const FontDialog = () => {
  const [primaryFont, setPrimaryFont] = useState('');
  const [secondaryFont, setSecondaryFont] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Font Settings</Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] rounded-md">
        <DialogHeader>
          <DialogTitle>Font Settings</DialogTitle>
          <DialogDescription>
            Decide where and how Synergy Fonts are updated. Changes are automatically saved.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">Name</Label>
            <FontSelect placeholder="Primary Font" selectedValue={primaryFont} setSelectedValue={setPrimaryFont} />
            <FontSelect
              placeholder="Secondary Font"
              selectedValue={secondaryFont}
              setSelectedValue={setSecondaryFont}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
