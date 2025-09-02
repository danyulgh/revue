import { convertImageElementToBase64, shortCircuit } from '@extension/shared';
import { navStorage, studentStorage } from '@extension/storage';

shortCircuit();

const updateNavStorage = () => {
  const modules: { title: string; href: string }[] = [];
  const moduleContainer = document.querySelector('div.pxp-left-nav');
  if (moduleContainer) {
    for (const [index, module] of Array.from(moduleContainer.children).entries()) {
      const title = module.getAttribute('data-desc');
      const href = module.getAttribute('href');
      modules.push({
        title: title ? title : `Module ${index}`,
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

  const photoElement = document.querySelector('img[alt="Student Photo"]');
  const photo = photoElement instanceof HTMLImageElement ? convertImageElementToBase64(photoElement) : '';

  const school = document.querySelector('div.school[data-bind="text: school"]')?.textContent;

  const district = document.getElementById('DistrictName')?.innerText?.trim();

  if (!(district && school && sid && studentName && photo)) return;
  studentStorage.set({
    name: studentName[1],
    sid: sid[1],
    photo: photo,
    school: school,
    district: district,
  });
};

updateNavStorage();
updateStudentStorage();
