import '@src/Popup.css';
import { PROJECT_URL_OBJECT, useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { studentStorage } from '@extension/storage';
import { cn, DistrictSelect, ErrorDisplay, FontDialog, LoadingSpinner } from '@extension/ui';

const Popup = () => {
  const { photo } = useStorage(studentStorage);
  return (
    <div className={cn('App text-foreground')}>
      <header className={cn('App-header gap-4')}>
        <div className="flex w-full flex-row items-center justify-between">
          <button
            className="focus-visible:ring-ring rounded-full focus-visible:outline-none focus-visible:ring-2"
            onClick={() => {
              chrome.tabs.create(PROJECT_URL_OBJECT);
            }}>
            <img src={chrome.runtime.getURL('icon-128.png')} className="App-logo" alt="revue" />
          </button>
          <strong className="text-lg">revue.</strong>
          {photo && (
            <button
              className="focus-visible:ring-ring border-input focus-visible:border-ring rounded-full border focus-visible:outline-none focus-visible:ring-1"
              onClick={() => {
                chrome.tabs.create({ url: photo });
              }}>
              <img src={photo} alt="student" className="h-[15vmin] w-[15vmin] rounded-full object-cover" />
            </button>
          )}
        </div>
        <DistrictSelect />
        <FontDialog />
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <LoadingSpinner />), ErrorDisplay);
