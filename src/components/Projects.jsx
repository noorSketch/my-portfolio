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

        <div className="card">
          <h3>Meeting Minutes App</h3>
          <p>
            Converts meeting discussions into structured minutes using speech-to-text.
          </p>
        </div>

        <div className="card">
          <h3>Online Store (Practice)</h3>
          <p>
            Shopping cart system built to practice React components and state.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
