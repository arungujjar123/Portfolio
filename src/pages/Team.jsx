import "./Team.css";

function Team() {
  return (
    <div className="team-page">
      <header className="page-header">
        <h1>Research Group</h1>
        <p className="page-subtitle">
          Meet our research team members, collaborators, and students
        </p>
      </header>

      <section className="team-section">
        <h2 className="section-title">Current Members</h2>
        <div className="team-grid">
          <div className="team-placeholder">
            <p>
              Research group members will be displayed here. You can add team
              member information through Sanity Studio or directly in this
              component.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">PhD Students</h2>
        <div className="team-grid">
          <div className="team-placeholder">
            <p>PhD students information will be displayed here.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Research Collaborators</h2>
        <div className="team-grid">
          <div className="team-placeholder">
            <p>
              Research collaborators and visiting scholars will be listed here.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Alumni</h2>
        <div className="team-grid">
          <div className="team-placeholder">
            <p>Former group members and where they are now.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
