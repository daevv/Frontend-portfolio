import Project from "../components/project/Project";

import { projects } from "../helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
            {projects.map((project, ind) => {
                return <Project key={ind} title={project.title} img={project.img} index={ind} />
            })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
