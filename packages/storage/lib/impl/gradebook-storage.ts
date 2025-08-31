import { createStorage, StorageEnum } from '../base/index.js';
import type { GradebookStateType, GradebookStorageType } from '../base/index.js';

const storage = createStorage<GradebookStateType>(
  'gradebook-storage-key',
  {
    classes: [],
  },
  {
    storageEnum: StorageEnum.Session,
    liveUpdate: true,
  },
);

export const gradebookStorage: GradebookStorageType = { ...storage };
