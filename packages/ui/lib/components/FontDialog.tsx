import { PageSelect } from './PageSelect';
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
import { Tabs, TabsContent } from '@/lib/components/ui/tabs';
import { fontTags } from '@extension/shared';
import { useState } from 'react';

export const FontDialog = () => {
  const [page, setPage] = useState('All');
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
          <PageSelect page={page} setPage={setPage} />
          <Tabs value={page} onValueChange={setPage}>
            {fontTags.map(page => (
              <TabsContent value={page.name}>
                <div className="border-border grid gap-3 rounded-md border p-3">
                  <Label>{page.name} Font Settings</Label>
                  <FontSelect
                    placeholder="Primary Font"
                    selectedValue={primaryFont}
                    setSelectedValue={setPrimaryFont}
                  />
                  <FontSelect
                    placeholder="Secondary Font"
                    selectedValue={secondaryFont}
                    setSelectedValue={setSecondaryFont}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
