const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx') && f !== 'Navbar.tsx');

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('import Navbar from')) {
    content = content.replace(/import \{.*?\} from 'react'/, match => match + "\nimport Navbar from './Navbar'");
  }

  let activePageStr = "'home'";
  if (file === 'AboutUs.tsx') activePageStr = "'about'";
  else if (file === 'Product.tsx') activePageStr = "'product'";
  else if (file === 'Facilities.tsx') activePageStr = "'facility'";
  else if (file === 'Pharmacovigilance.tsx') activePageStr = "'pharmacovigilance'";
  else if (file === 'Careers.tsx') activePageStr = "'careers'";
  else if (file === 'ContactUs.tsx') activePageStr = "'contact'";
  else if (file === 'Anti-Biotics.tsx') activePageStr = "'antibiotics'";
  else if (file === 'AntiInflammatoryAnalgesics.tsx') activePageStr = "'antiinflammatory'";
  else if (file === 'Gastrointestinal.tsx') activePageStr = "'gastrointestinal'";
  else if (file === 'CnsPsychiatric.tsx') activePageStr = "'cns'";
  else if (file === 'CardiovascularLipidControl.tsx') activePageStr = "'cardiovascular'";
  else if (file === 'RespiratoryAntiallergic.tsx') activePageStr = "'respiratory'";
  else if (file === 'Dermatology.tsx') activePageStr = "'dermatology'";

  const navbarComponentStr = `<Navbar \n  activePage=${activePageStr}\n  onNavigateHome={onNavigateHome}\n  onNavigateAbout={onNavigateAbout}\n  onNavigateProducts={onNavigateProducts}\n  onNavigateFacility={onNavigateFacility}\n  onNavigatePharmacovigilance={onNavigatePharmacovigilance}\n  onNavigateCareers={onNavigateCareers}\n  onNavigateContact={onNavigateContact}\n/>`;

  let modified = false;

  // Home.tsx
  if (file === 'Home.tsx') {
    const homeRegex = /<div className="absolute contents left-\[calc\(50%-347px\)\] top-\[71px\].*?data-node-id="47:441">[\s\S]*?<div className="absolute left-\[calc\(50%\+233px\)\].*?data-node-id="I47:546;8:2046".*?<\/div>\s*<\/div>\s*<\/div>/;
    if (homeRegex.test(content)) {
      content = content.replace(homeRegex, navbarComponentStr);
      modified = true;
    }
  } else if (file === 'Facilities.tsx') {
    const facilityRegex = /<button type="button" onClick=\{onNavigateHome\} className="absolute left-\[612px\].*?Home<\/button>[\s\S]*?<div className="absolute left-\[1101px\].*?showFacilityMenu \? \([\s\S]*?\) : null\}\s*<\/div>/;
    if (facilityRegex.test(content)) {
      content = content.replace(facilityRegex, navbarComponentStr);
      modified = true;
    }
  } else if (file === 'AboutUs.tsx') {
    const aboutRegex = /<button type="button" onClick=\{onNavigateHome\} className="absolute left-\[614\.5px\].*?Home<\/button>[\s\S]*?<div className="absolute left-\[1193px\].*?imgArrowDark.*?\n\s*<\/div>\s*<\/div>/;
    if (aboutRegex.test(content)) {
      content = content.replace(aboutRegex, navbarComponentStr);
      modified = true;
    }
  } else if (file === 'ContactUs.tsx') {
      const contactRegex = /<button[^>]*?onClick=\{onNavigateHome\}[^>]*?>\s*Home\s*<\/button>[\s\S]*?(?:<p[^>]*?>Contact us<\/p>|<button[^>]*?>Contact us<\/button>)/;
      if (contactRegex.test(content)) {
          content = content.replace(contactRegex, navbarComponentStr);
          modified = true;
      }
  } else {
      // General case for the other pages
      const genericRegex = /<button[^>]*?onClick=\{onNavigateHome\}[^>]*?>\s*Home\s*<\/button>[\s\S]*?(?:<p[^>]*?>Contact us<\/p>|<button[^>]*?>Contact us<\/button>)(?:[\s\S]*?<div[^>]*?>\s*<div[^>]*?>\s*<img[^>]*?(?:imgVector9|imgArrowDark|imgArrowLight|navArrow)[^>]*?>\s*<\/div>\s*<\/div>){0,2}/;
      if (genericRegex.test(content)) {
          content = content.replace(genericRegex, navbarComponentStr);
          modified = true;
      }
  }

  // Also remove old useStates and unused imports if we really want to, but it's optional.
  // let's at least replace it and save.
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Replaced in ${file}`);
  } else {
    console.log(`Failed to replace in ${file}`);
  }
}
