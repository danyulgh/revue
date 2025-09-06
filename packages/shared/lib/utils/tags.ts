export const fontTags: {
  name: string;
  primary: string;
  secondary?: string;
}[] = [
  {
    name: 'Student Card',
    primary: '#ctl00_ctl00_MainContent_StudentSelector, .pxp-student-picker, .student-name',
  },
  {
    name: 'Header',
    primary: '#DistrictName, #Greeting, .alert',
  },
  {
    name: 'System Links',
    primary: '.pxp-navbar, .pxp-launch-btn-goback',
  },
  {
    name: 'Home',
    primary: '.lp-tiles',
  },
  {
    name: 'Mail',
    primary: '#messageGrid, .messageContent',
    secondary: '#side-bar-content, #Actions, #messageGrid .dx-datagrid-pager',
  },
  {
    name: 'Calendar',
    primary:
      '#CalendarContent .cal-month-view, #CalendarContent .cal-week-view, #CalendarContent .cal-day-view, #CalendarContent .cal-filter-panel',
    secondary: '#CalendarContent .uppercase, #CalendarContent .groups, #CalendarContent .cal-header',
  },
  {
    name: 'Attendance',
    primary: '#attendance-root, #ctl00_ctl00_MainContent_PXPMainContent_ctl00',
    secondary: '[action*="Attendance" i] .uppercase',
  },
  {
    name: 'Schedule',
    primary: '#ctl00_ctl00_MainContent_PXPMainContent_ctl08, .school-info .list-group',
    secondary:
      '[action*="ClassSchedule" i] .uppercase, #ctl00_ctl00_MainContent_PXPMainContent_heading_breadcrumb, [data-bind="text: bellSchedName" i], #calendar-button, [action*="ClassSchedule" i] .panel-heading',
  },
  {
    name: 'Course History',
    primary:
      '#ctl00_ctl00_MainContent_PXPMainContent_ServiceLearningGridDetails, #ctl00_ctl00_MainContent_PXPMainContent_ServiceLearningGrid, #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent .pxp-summary-container:has([data-detail-method="GetCourseHistoryDetails" i]), #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent .pxp-summary-container .details:has(.alert)',
    secondary:
      '#ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent h1:has(.pxp-switch), #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent .panel-heading, #ctl00_ctl00_MainContent_PXPMainContent_ServiceLearningGridDetails .dx-datagrid-pager, .chs-course-history-filter, #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent [data-action="CloseSummaryDetails" i], #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent .subtitle',
  },
  {
    name: 'Gradebook',
    primary:
      '.gb-class-row[data-mark-gu], .gb-class-row.details, .outline-box, .items-wrapper, .pxp-course-cards, #assignment-details, #term-weighting-details, #ctl00_CurrentGrade, #AssignmentsGrid',
    secondary:
      '#GradebookHeader, #ctl00_ctl00_MainContent_PXPMainContent_CourseContentHeaderLink, [action*="GradeBook" i] .dx-texteditor-input, .dx-button-text, [action*="GradeBook" i] .dx-item-content, [action*="GradeBook" i] .dx-placeholder, .gb-class-header, ctl00_ctl00_MainContent_PXPMainContent_repSchoolClasses_ctl00_ctl00_TermSelector_TermSelector, #gb-classes .title',
  },
  {
    name: 'Report Card',
    primary: '#GradesContent',
    secondary: '[action*="ReportCard" i] .uppercase',
  },
  {
    name: 'School Info',
    primary: '#ctl00_ctl00_MainContent_PXPMainContent_StaffGrid, [action*="SchoolInformation" i] .panel-body',
    secondary:
      '[action*="SchoolInformation" i] .panel-heading, [action*="SchoolInformation" i] .uppercase, #ctl00_ctl00_MainContent_PXPMainContent_StaffGrid .dx-datagrid-pager',
  },
  {
    name: 'Student Info',
    primary: '[action*="Student" i] .panel-body',
    secondary: '[action*="Student" i] .panel-heading, [action*="Student" i] .uppercase',
  },
  {
    name: 'Documents',
    primary: '#ctl00_ctl00_MainContent_PXPMainContent_DocumentsGrid',
    secondary:
      '[action*="Documents" i] .uppercase, [action*="Documents" i] .panel-heading, #ctl00_ctl00_MainContent_PXPMainContent_DocumentsGrid .dx-datagrid-pager',
  },
  {
    name: 'Footer',
    primary: '#ctl00_ctl00_PXPFooter',
  },
];
