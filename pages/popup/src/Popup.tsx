import '@src/Popup.css';
import { t } from '@extension/i18n';
import { PROJECT_URL_OBJECT, useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage, navStorage, studentStorage } from '@extension/storage';
import { Button, cn, DistrictSelect, ErrorDisplay, LoadingSpinner, ToggleButton } from '@extension/ui';

const Popup = () => {
  const { origin } = useStorage(navStorage);
  const { name, photo } = useStorage(studentStorage);

  const { isLight } = useStorage(exampleThemeStorage);

  const goGithubSite = () => chrome.tabs.create(PROJECT_URL_OBJECT);
  return (
    <div className={cn('App', isLight ? 'bg-slate-50' : 'bg-gray-800')}>
      <header className={cn('App-header gap-4', isLight ? 'text-gray-900' : 'text-gray-100')}>
        <div className="flex w-full flex-row items-center justify-between">
          <button onClick={goGithubSite}>
            <img src={chrome.runtime.getURL('icon-34.png')} className="App-logo" alt="revue" />
          </button>
          <p>Welcome{name ? `, ${name}` : ''}!</p>
          {photo && (
            <img
              src={photo}
              alt="student"
              className="h-[15vmin] w-[15vmin] rounded-full border-2 border-white object-cover"
            />
          )}
        </div>
        <div className="flex w-full justify-center gap-4">
          <DistrictSelect />
          <Button
            className="bg-black"
            onClick={() => {
              chrome.tabs.create({ url: `${origin.replace(/\/*$/, '/')}PXP2_LaunchPad.aspx` });
            }}
          />
        </div>
        <ToggleButton>{t('toggleTheme')}</ToggleButton>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <LoadingSpinner />), ErrorDisplay);
