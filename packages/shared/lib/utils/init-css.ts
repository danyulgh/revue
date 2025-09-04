const tags: string[] = [
  '#ctl00_ctl00_MainContent_StudentSelector, .pxp-student-picker, .student-name', //student-card
  '#DistrictName, #Greeting, .alert', //greeting headers
  '.pxp-navbar, .pxp-launch-btn-goback', //system links
  '.lp-tiles', //launchpad
  '#side-bar-content, #Actions, #messageGrid .dx-datagrid-pager', //mail
  '#messageGrid, .messageContent', //mail content
  '#CalendarContent .uppercase, #CalendarContent .groups, #CalendarContent .cal-header', //calendar
  '#CalendarContent .cal-month-view, #CalendarContent .cal-week-view, #CalendarContent .cal-day-view, #CalendarContent .cal-filter-panel', //calendar content
  '[action*="Attendance" i] .uppercase', //attendance
  '#attendance-root, #ctl00_ctl00_MainContent_PXPMainContent_ctl00', //attendance content
  '[action*="ClassSchedule" i] .uppercase, #ctl00_ctl00_MainContent_PXPMainContent_heading_breadcrumb, [data-bind="text: bellSchedName" i], #calendar-button, [action*="ClassSchedule" i] .panel-heading', // schedule
  '#ctl00_ctl00_MainContent_PXPMainContent_ctl08, .school-info .list-group', //schedule content
  '#ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent h1:has(.pxp-switch), #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent .panel-heading, #ctl00_ctl00_MainContent_PXPMainContent_ServiceLearningGridDetails .dx-datagrid-pager, .chs-course-history-filter, #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent [data-action="CloseSummaryDetails" i], #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent .subtitle', //course history
  '#ctl00_ctl00_MainContent_PXPMainContent_ServiceLearningGridDetails, #ctl00_ctl00_MainContent_PXPMainContent_ServiceLearningGrid, #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent .pxp-summary-container:has([data-detail-method="GetCourseHistoryDetails" i]), #ctl00_ctl00_MainContent_PXPMainContent_CourseHistoryContent .pxp-summary-container .details:has(.alert)', //course history content
  '#GradebookHeader, #ctl00_ctl00_MainContent_PXPMainContent_CourseContentHeaderLink, [action*="GradeBook" i] .dx-texteditor-input, .dx-button-text, [action*="GradeBook" i] .dx-item-content, [action*="GradeBook" i] .dx-placeholder, .gb-class-header, ctl00_ctl00_MainContent_PXPMainContent_repSchoolClasses_ctl00_ctl00_TermSelector_TermSelector, #gb-classes .title', // gradebook
  '.gb-class-row[data-mark-gu], .gb-class-row.details, .outline-box, .items-wrapper, .pxp-course-cards, #assignment-details, #term-weighting-details, #ctl00_CurrentGrade, #AssignmentsGrid', //gradebook content
  '[action*="ReportCard" i] .uppercase', //report card
  '#GradesContent', //report card content
  '[action*="SchoolInformation" i] .panel-heading, [action*="SchoolInformation" i] .uppercase, #ctl00_ctl00_MainContent_PXPMainContent_StaffGrid .dx-datagrid-pager', //school info
  '#ctl00_ctl00_MainContent_PXPMainContent_StaffGrid, [action*="SchoolInformation" i] .panel-body', //school info content
  '[action*="Student" i] .panel-heading, [action*="Student" i] .uppercase', //student
  '[action*="Student" i] .panel-body', //student content
  '[action*="Documents" i] .uppercase, [action*="Documents" i] .panel-heading, #ctl00_ctl00_MainContent_PXPMainContent_DocumentsGrid .dx-datagrid-pager', //doc
  '#ctl00_ctl00_MainContent_PXPMainContent_DocumentsGrid', //doc content
  '#ctl00_ctl00_PXPFooter', //footer
];

export const initFont = () => {
  const fontUrl = chrome.runtime.getURL('fonts/MinecraftRegular.otf');

  const style = document.createElement('style');
  style.id = 'REVUEREVUEREVUE';
  style.textContent = `
    @font-face {
      font-family: "Pixelify Sans";
      src: url("${fontUrl}") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
  `;

  for (const tag of tags) {
    style.textContent += `
    ${tag}{
      font-family: 'Pixelify Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
    }
    `;
  }

  document.head.appendChild(style);
};
