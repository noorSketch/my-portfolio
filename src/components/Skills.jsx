

function Skills() {
  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="skills-list">
        {["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"].map(skill => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
