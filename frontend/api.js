// index.js

const apiUrl = 'https://portfolio-backend-vro3.onrender.com/api/';

const fetchProjects = async () => {
  try {
    const response = await fetch(apiUrl);
    const projects = await response.json();
    const projectContainer = document.querySelector('.project-container');

    projects.forEach((project, index) => {
      const projectElement = document.createElement('div');
      projectElement.className = 'project';

      // Title Section
      const titleSection = document.createElement('div');
      titleSection.className = 'detail';

      const title = document.createElement('h3');
      title.className = 'title';
      title.innerHTML = `${index + 1}. ${project.project.name}`;

      const role = document.createElement('p');
      role.className = 'role';
      role.id = 'role-text';


      if(project.project.contribute == 'Personal Project'){
        role.innerHTML = `"<u>${project.project.contribute}</u>"`;
      }
      else{
        role.innerHTML = `Contributed as "<u>${project.project.contribute}</u>"`;
      }



      titleSection.appendChild(title);
      titleSection.appendChild(role);

      // Tech Tags Section
      const techTagsSection = document.createElement('div');
      techTagsSection.className = 'tech-tags';

      project.skills.forEach((skill, skillIndex) => {
        const techTag = document.createElement('p');
        techTag.title = skill.name;
        techTag.innerHTML = skill.name;
        techTagsSection.appendChild(techTag);
      });

      // About Project Section
      const aboutProjectSection = document.createElement('div');
      aboutProjectSection.className = 'about-project';

      const aboutProjectHeading = document.createElement('h6');
      aboutProjectHeading.innerHTML = 'About Project';

      const aboutText = document.createElement('p');
      aboutText.className = 'about-text';
      aboutText.innerHTML = project.project.about;

      aboutProjectSection.appendChild(aboutProjectHeading);
      aboutProjectSection.appendChild(aboutText);

      titleSection.appendChild(techTagsSection);
      titleSection.appendChild(aboutProjectSection);

      // About Button Section
      const aboutBtnSection = document.createElement('div');
      aboutBtnSection.className = 'about-btn';

      const aboutBtn = document.createElement('button');
      aboutBtn.innerHTML = 'about project';

      aboutBtnSection.appendChild(aboutBtn);

      // Links Section
      const linksSection = document.createElement('div');
      linksSection.className = 'links';

      const githubLink = document.createElement('a');
      githubLink.href = project.project.github;
      githubLink.className = 'fa fa-github';
      githubLink.title = 'GitHub Repository';
      if(project.project.demo != 'n/a'){
        const demoLink = document.createElement('a');
        demoLink.href = project.project.demo;
        demoLink.className = 'fa fa-play link';
        demoLink.title = 'Application Demo';
        linksSection.appendChild(demoLink);

      }
      
      linksSection.appendChild(githubLink);
      
      // Append all sections to the main project element
      projectElement.appendChild(titleSection);
      projectElement.appendChild(aboutBtnSection);
      projectElement.appendChild(linksSection);

      // Finally, append the project element to the container
      projectContainer.appendChild(projectElement);
    });
  } catch (error) {
    console.error(error);
  }
};

const apiskillurl = 'https://portfolio-backend-vro3.onrender.com/api/skill';

const fetchSkills = async () => {
  try {
    const response = await fetch(apiskillurl);
    const skills = await response.json();
    const skillContainer = document.querySelector('.skills');

    skills.forEach((s) => {
      const skillDiv = document.createElement('div');
      skillDiv.className = 'skill';

      const skillTitle = document.createElement('p');
      skillTitle.className = 'skill-title';
      skillTitle.textContent = s.name;

      skillDiv.appendChild(skillTitle);
      skillContainer.appendChild(skillDiv);
    });

    console.log('Skills fetched:', skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  fetchProjects();
  fetchSkills();
});
