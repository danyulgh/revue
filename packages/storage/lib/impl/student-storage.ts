import { createStorage, StorageEnum } from '../base/index.js';
import type { StudentStateType, StudentStorageType } from '../base/index.js';

const storage = createStorage<StudentStateType>(
  'student-storage-key',
  {
    name: 'Student Name',
    sid: '1234567890',
    photo: '',
    school: '',
    district: 'Montgomery County Public School',
  },
  {
    storageEnum: StorageEnum.Local,
    liveUpdate: true,
  },
);

export const studentStorage: StudentStorageType = { ...storage };
