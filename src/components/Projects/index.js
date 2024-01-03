import React, { useState } from 'react'
import './style.css';

import img0 from '../../assets/0.png';
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const images = {
  '0': img0,
  '1': img1,
  '2': img2,
  '3': img3,
};

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: 'Employee Tracker',
      deployedURL: '	https://github.com/wwartick/Employee-Tracker',
      githubURL: '	https://github.com/wwartick/Employee-Tracker',
      img: '0',
      technologies: 'HTML, JavaScript, CSS, Inquirer, Jest, MySQL',
      opacity: 0.5
    },
    {
      title: 'E-Commerce Back End',
      deployedURL: 'https://github.com/wwartick/e-commerce-backend',
      githubURL: 'https://github.com/wwartick/e-commerce-backend',
      img: '1',
      technologies: 'HTML, CSS, Javascript, Express.js, Node.js, MySQL',
      opacity: 0.5
    },
    {
      title: 'Weeb Army',
      deployedURL: 'https://desguerra.github.io/weeb-army/',
      githubURL: 'https://github.com/desguerra/weeb-army',
      img: '2',
      technologies: 'HTML, CSS, JavaScript, jQuery',
      opacity: 0.5
    },
    {
      title: 'Weather Dashboard',
      deployedURL: 'https://wwartick.github.io/Weather-Dashboard/',
      githubURL: 'https://github.com/wwartick/Weather-Dashboard',
      img: '3',
      technologies: 'HTML, CSS, JavaScript, jQuery',
      opacity: 0.5
    },
  ]);

  const handleMouseEnter = (index) => {
    projects[index].opacity = 1;
    setProjects([...projects]);
  };

  const handleMouseLeave = (index) => {
    projects[index].opacity = 0.5;
    setProjects([...projects]);
  };

  return (
    <section>
      <h4>Hover over a project to see the technologies used</h4>
      <div className="card-container">
        {projects.map((project, index) => (
          <div
            className="card"
            style={{opacity: project.opacity}}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
          <img src={images[project.img]} alt={project.title} title={project.technologies} style={{height: '350px', width: '70%'}} className ='tooltip'/>
            <div>
            <h2>{project.title}</h2>
            <a className="silver-link" href={project.deployedURL}>Deployed  Website</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="silver-link" href={project.githubURL}>Github Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;