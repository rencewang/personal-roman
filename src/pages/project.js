import React from 'react';

import Seo from '../components/seo';
import projects from '../content/projects/projects';
import '../styles/general.scss';

const ProjectPage = () => {
  return (
    <>
      <Seo title="Projects" />

      <section id="project">
        {projects.map((project, index) => (
          <details key={index} open>
            <summary>
              <span className="title highlight">{project.title}</span>
              &nbsp;&nbsp;
              <span className="highlight bold italic">{project.year}</span>
            </summary>

            <span className="highlight">{project.description}</span>
            <a href={project.link}>View</a>
          </details>
        ))}
      </section>
    </>
  );
};

export default ProjectPage;
