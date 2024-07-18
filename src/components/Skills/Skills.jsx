import "./Skills.css";
import { useData } from "../../contexts/ContextData";

export function SkillLogo({ src, alt, ...rest }) {
  return <img src={src} alt={alt} {...rest} />;
}

export function SkillName({ children, className, ...rest }) {
  return (
    <span className={className} {...rest}>
      {children}
    </span>
  );
}

export function Skill({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

export default function Skills() {
  const { data } = useData();
  const { skillsData } = data;

  return (
    <section className="sec-skills">
      <img className="skills_pill" src={skillsData.pill} alt="circle" />
      <div className="custom-container">
        <h2 className="sec-skills__header">{skillsData.title}</h2>
        <div className="skills">
          {skillsData.list.map((skill) => (
            <Skill className="skill" key={skill.name}>
              <SkillLogo
                className="skill__logo"
                src={skill.logo}
                alt="skill-logo"
              />
              <SkillName
                className="skill__name"
                style={skillsData.styleSkillName}
              >
                {skill.name}
              </SkillName>
            </Skill>
          ))}
        </div>
      </div>
    </section>
  );
}
