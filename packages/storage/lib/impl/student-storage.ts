import { createStorage, StorageEnum } from '../base/index.js';
import type { StudentStateType, StudentStorageType } from '../base/index.js';

const storage = createStorage<StudentStateType>(
  'student-storage-key',
  {
    name: '',
    sid: '',
    photo: '',
    school: '',
    district: 'Montgomery County Public Schools',
  },
  {
    storageEnum: StorageEnum.Local,
    liveUpdate: true,
  },
);

export const studentStorage: StudentStorageType = { ...storage };
