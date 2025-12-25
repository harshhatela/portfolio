import "./Skills.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "Figma", "UI/UX", "Python", "Git"
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-frame">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
