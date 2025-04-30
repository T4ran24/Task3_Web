/*  cvdeki melumati  yadda saxlayir */
const cvData = {
  profile: {
      name: "RICHARD SANCHEZ",
      title: "Biologist",
      summary: "Innovative Biohacker and Synthetic Biologist with 10+ years of experience merging biotechnology with wearable tech..."
  },
  contact: {
      phone: "+456-126-2875",
      email: "mister@gallaghergmail.com"
  },
  education: [
      { year: "2029 – 2030", school: "WARDIERE UNIVERSITY", field: "Biologist" },
      { year: "2025 – 2029", school: "WARDIERE UNIVERSITY", field: "Banker" }
  ],
  skills: ["Project Management", "Teamwork", "Public Speaking", "Leadership"],
  languages: ["English (Fluent)", "Russian (Fluent)", "Turkish (Advanced)"],
  work: [
      { description: "Developed bioluminescent skin patches..." },
      { description: "Secured €6.2M in EU FutureTech funding..." }
  ],
  references: [
      { name: "Estelle Darcy", title: "CTO, Wardiere Inc.", email: "elesendayigmail.com" },
      { name: "Harper Richard", title: "CEO, Wardiere Inc.", email: "musadayigmail.com" }
  ]
};


function renderCV() {

  document.getElementById('name').innerHTML = `<strong>${cvData.profile.name.split(' ')[0]}</strong> <span>${cvData.profile.name.split(' ')[1]}</span>`;
  document.getElementById('title').textContent = cvData.profile.title;
  document.getElementById('summary').textContent = cvData.profile.summary;


  document.getElementById('phone').textContent = cvData.contact.phone;
  document.getElementById('email').textContent = cvData.contact.email;

  const educationList = document.getElementById('educationList');
  educationList.innerHTML = '';
  cvData.education.forEach((edu, index) => {
      const div = document.createElement('p');
      div.innerHTML = `<strong>${edu.year}</strong><br>${edu.school}<br>${edu.field}`;
      div.onclick = () => editEducation(index);
      educationList.appendChild(div);
  });


  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = '';
  cvData.skills.forEach((skill, index) => {
      const li = document.createElement('li');
      li.textContent = skill;
      li.onclick = () => editSkill(index);
      skillsList.appendChild(li);
  });


  const languagesList = document.getElementById('languagesList');
  languagesList.innerHTML = '';
  cvData.languages.forEach(lang => {
      const li = document.createElement('li');
      li.textContent = lang;
      languagesList.appendChild(li);
  });

  const workList = document.getElementById('workList');
  workList.innerHTML = '';
  cvData.work.forEach((work, index) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<p>${work.description}</p>`;
      div.onclick = () => editWork(index);
      workList.appendChild(div);
  });


  const referenceList = document.getElementById('referenceList');
  referenceList.innerHTML = '';
  cvData.references.forEach((ref, index) => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${ref.name}</strong><br>${ref.title}<br>${ref.email}`;
      div.onclick = () => editReference(index);
      referenceList.appendChild(div);
  });
}


function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
}


function addEducation() {
  const year = prompt("Enter the years (e.g., 2030–2034):");
  const school = prompt("Enter the school name:");
  const field = prompt("Enter your field of study:");
  if (year && school && field) {
      cvData.education.push({ year, school, field });
      renderCV();
  }
}

function addSkill() {
  const skill = prompt("Enter a new skill:");
  if (skill) {
      cvData.skills.push(skill);
      renderCV();
  }
}

function addWork() {
  const work = prompt("Describe your work experience:");
  if (work) {
      cvData.work.push({ description: work });
      renderCV();
  }
}

function addLanguage() {
  const language = prompt("Enter a new language and proficiency (e.g., Spanish (Beginner)):");
  if (language) {
      cvData.languages.push(language);
      renderCV();
  }
}

function addReference() {
  const name = prompt("Enter reference name:");
  const title = prompt("Enter reference title:");
  const email = prompt("Enter reference email:");
  if (name && title && email) {
      cvData.references.push({ name, title, email });
      renderCV();
  }
}


function editEducation(index) {
  const year = prompt("Edit years:", cvData.education[index].year);
  const school = prompt("Edit school:", cvData.education[index].school);
  const field = prompt("Edit field:", cvData.education[index].field);
  if (year && school && field) {
      cvData.education[index] = { year, school, field };
      renderCV();
  }
}

function editSkill(index) {
  const skill = prompt("Edit skill:", cvData.skills[index]);
  if (skill) {
      cvData.skills[index] = skill;
      renderCV();
  }
}

function editWork(index) {
  const description = prompt("Edit work experience:", cvData.work[index].description);
  if (description) {
      cvData.work[index].description = description;
      renderCV();
  }
}

function editReference(index) {
  const name = prompt("Edit reference name:", cvData.references[index].name);
  const title = prompt("Edit reference title:", cvData.references[index].title);
  const email = prompt("Edit reference email:", cvData.references[index].email);
  if (name && title && email) {
      cvData.references[index] = { name, title, email };
      renderCV();
  }
}

document.addEventListener('DOMContentLoaded', renderCV);