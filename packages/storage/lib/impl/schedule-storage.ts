import { createStorage, StorageEnum } from '../base/index.js';
import type { ScheduleStateType, ScheduleStorageType } from '../base/index.js';

const storage = createStorage<ScheduleStateType>(
  'schedule-storage-key',
  {
    classes: [],
  },
  {
    storageEnum: StorageEnum.Local,
    liveUpdate: true,
  },
);

export const scheduleStorage: ScheduleStorageType = { ...storage };
