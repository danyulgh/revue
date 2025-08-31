import { navStorage, studentStorage } from '@extension/storage';

const updateNavStorage = () => {
  const modules: { name: string; href: string }[] = [];
  const moduleContainer = document.querySelector('div.pxp-left-nav');
  if (moduleContainer) {
    for (const [index, module] of Array.from(moduleContainer.children).entries()) {
      const name = module.getAttribute('data-desc');
      const href = module.getAttribute('href');
      modules.push({
        name: name ? name : `Module ${index}`,
        href: href ? href : '',
      });
    }
  }
  navStorage.set({
    origin: location.origin,
    modules: modules,
  });
};

const updateStudentStorage = () => {
  const studentName = document.getElementById('Greeting')?.innerText?.match(/, ([^,]+),/);

  const sid = document
    .querySelector('span.student-id[data-bind="text: \'ID: \' + sisNumber"]')
    ?.textContent?.match(/ID:\s*(\d+)/);

  const photoUrl = `${location.origin}/${document.querySelector('img[alt="Student Photo"]')?.getAttribute('src')}`;

  const school = document.querySelector('div.school[data-bind="text: school"]')?.textContent;

  const district = document.getElementById('DistrictName')?.innerText?.trim();

  if (!(district && school && sid && studentName && photoUrl)) return;
  studentStorage.set({
    name: studentName[1],
    sid: sid[1],
    photo: photoUrl,
    school: school,
    district: district,
  });
};

updateNavStorage();
updateStudentStorage();

console.log(navStorage.get());
console.log(studentStorage.get());
