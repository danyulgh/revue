import { createStorage, StorageEnum } from '../base/index.js';
import type { NavStateType, NavStorageType } from '../base/index.js';

const storage = createStorage<NavStateType>(
  'nav-storage-key',
  {
    origin: 'https://md-mcps-psv.edupoint.com/',
    modules: [
      {
        name: 'Home',
        href: 'PXP2_LaunchPad.aspx',
      },
      {
        name: 'Synergy Mail',
        href: 'PXP2_Messages.aspx',
      },
      {
        name: 'Calendar',
        href: 'PXP2_Calendar.aspx',
      },
      {
        name: 'Attendance',
        href: 'PXP2_Attendance.aspx',
      },
      {
        name: 'Class Schedule',
        href: 'PXP2_ClassSchedule.aspx',
      },
      {
        name: 'Conference',
        href: 'PXP2_Conference.aspx',
      },
      {
        name: 'Course History',
        href: 'PXP2_CourseHistory.aspx',
      },
      {
        name: 'Gradebook',
        href: 'PXP2_Gradebook.aspx',
      },
      {
        name: 'Report Card',
        href: 'PXP2_ReportCard.aspx',
      },
      {
        name: 'School Information',
        href: 'PXP2_SchoolInformation.aspx',
      },
      {
        name: 'Student Info',
        href: 'PXP2_Student.aspx',
      },
      {
        name: 'Documents',
        href: 'PXP2_Documents.aspx',
      },
    ],
  },
  {
    storageEnum: StorageEnum.Local,
    liveUpdate: true,
  },
);

export const navStorage: NavStorageType = { ...storage };
