
function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>

        {/* Meeting Minutes */}
        <a
          href="https://github.com/yourusername/meeting-minutes-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card" style={{ cursor: "pointer" }}>
            <h3>Meeting Minutes App</h3>
            <p>
              Converts meeting discussions into structured minutes using speech-to-text.
            </p>
          </div>
        </a>

        {/* Online Store */}
        <a
          href="https://noorsketch.github.io/MyTrivia-Game/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card" style={{ cursor: "pointer" }}>
            <h3>FaktArena</h3>
            <p>
              Trivia game related to Malaysia factual information.
            </p>
          </div>
        </a>

      </div>
    </section>
  );
}

export default Projects;
