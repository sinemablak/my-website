import "./Projects.css";
import { useTheme } from "../../contexts/ContextTheme";
import { useData } from "../../contexts/ContextData";

export function ProjectTitle({ children, ...rest }) {
  return <h2 {...rest}>{children}</h2>;
}

export function ProjectSummary({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
}

export function ProjectTechnology({ children, ...rest }) {
  return <span {...rest}>{children}</span>;
}

export function ProjectLink({ children, ...rest }) {
  return <a {...rest}>{children}</a>;
}

export default function Projects() {
  const { eTheme, theme } = useTheme();
  const { data } = useData();
  const { projectsData } = data;

  function getClassBgClr(obj) {
    return eTheme.dark === theme ? obj.bgClrThemeDark : obj.bgClrThemeLight;
  }

  return (
    <div className="projects-wrapper">
      <section className="sec-projects custom-container">
        <h2 className="sec--title">{projectsData.title}</h2>
        <div className="sec-projects__projects">
          {projectsData.list.map((project) => (
            <div
              key={project.title}
              className={`project ${getClassBgClr(project)}`}
            >
              <div className="project--width-limiter">
                <ProjectTitle className="project__title">
                  {project.title}
                </ProjectTitle>
                <ProjectSummary className="project__summary">
                  {project.summary}
                </ProjectSummary>
                <div className="project__technologies">
                  {project.technologies.map((tech) => (
                    <ProjectTechnology
                      key={tech}
                      className="project__technology pill"
                    >
                      {tech}
                    </ProjectTechnology>
                  ))}
                </div>
              </div>
              <div className="project__links">
                {project.links.map((link) => (
                  <div key={link.text}>
                    <a className="link" href={link.to}>
                      {link.text}
                    </a>
                    {link.hasLogo}
                  </div>
                ))}
              </div>
              <img
                className="project__image"
                src={project.image}
                alt="img-project"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
