import '@src/Popup.css';
import { PROJECT_URL_OBJECT, useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { studentStorage } from '@extension/storage';
import { cn, DistrictSelect, ErrorDisplay, LoadingSpinner } from '@extension/ui';

const Popup = () => {
  const { name, photo } = useStorage(studentStorage);

  const goGithubSite = () => chrome.tabs.create(PROJECT_URL_OBJECT);
  return (
    <div className={cn('App text-foreground')}>
      <header className={cn('App-header gap-4')}>
        <div className="flex w-full flex-row items-center justify-between">
          <button onClick={goGithubSite}>
            <img src={chrome.runtime.getURL('icon-34.png')} className="App-logo" alt="revue" />
          </button>
          <p>Welcome{name ? `, ${name}` : ''}!</p>
          {photo && (
            <img
              src={photo}
              alt="student"
              className="border-input h-[15vmin] w-[15vmin] rounded-full border object-cover"
            />
          )}
        </div>
        <div className="flex w-full justify-center gap-4">
          <DistrictSelect />
        </div>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <LoadingSpinner />), ErrorDisplay);
