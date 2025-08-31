import { createStorage, StorageEnum } from '../base/index.js';
import type { NavStateType, NavStorageType } from '../base/index.js';

const storage = createStorage<NavStateType>(
  'nav-storage-key',
  {
    origin: 'https://md-mcps-psv.edupoint.com/',
    modules: [
      {
        title: 'Home',
        href: 'PXP2_LaunchPad.aspx',
      },
      {
        title: 'Synergy Mail',
        href: 'PXP2_Messages.aspx',
      },
      {
        title: 'Calendar',
        href: 'PXP2_Calendar.aspx',
      },
      {
        title: 'Attendance',
        href: 'PXP2_Attendance.aspx',
      },
      {
        title: 'Class Schedule',
        href: 'PXP2_ClassSchedule.aspx',
      },
      {
        title: 'Conference',
        href: 'PXP2_Conference.aspx',
      },
      {
        title: 'Course History',
        href: 'PXP2_CourseHistory.aspx',
      },
      {
        title: 'Gradebook',
        href: 'PXP2_Gradebook.aspx',
      },
      {
        title: 'Report Card',
        href: 'PXP2_ReportCard.aspx',
      },
      {
        title: 'School Information',
        href: 'PXP2_SchoolInformation.aspx',
      },
      {
        title: 'Student Info',
        href: 'PXP2_Student.aspx',
      },
      {
        title: 'Documents',
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
