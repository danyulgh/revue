const district = document.getElementById('DistrictName')?.innerText?.trim();
console.log(district);
const school = document.querySelector('div.school[data-bind="text: school"]')?.textContent;
console.log(school);
const sid = document
  .querySelector('span.student-id[data-bind="text: \'ID: \' + sisNumber"]')
  ?.textContent?.match(/ID:\s*(\d+)/);
if (sid) console.log(sid[1]);
const studentName = document.getElementById('Greeting')?.innerText?.match(/, ([^,]+),/);
if (studentName) console.log(studentName[1]);
const photoUrl = `${location.origin}/${document.querySelector('img[alt="Student Photo"]')?.getAttribute('src')}`;
console.log(photoUrl);

const modules = document.querySelector('div.pxp-left-nav')?.children;
if (modules) {
  for (const module of modules) {
    console.log(module.getAttribute('href'), module.getAttribute('data-desc'));
  }
}
