import "./Experience.css";

function Experience() {
  const workExperience = [
    {
      id: 1,
      position: "Assistant Professor",
      duration: "May 2023 – till date",
      institution: "IIIT Sri City",
      location: "Andhra Pradesh, India",
      current: true,
    },
    {
      id: 2,
      position: "Assistant Professor",
      duration: "February 2022 – April 2023",
      institution: "GITAM University",
      location: "Bengaluru, India",
      current: false,
    },
  ];

  const teachingExperience = [
    {
      id: 1,
      course: "Internet of Things",
      duration: "February 2022 – June 2022",
    },
    {
      id: 2,
      course: "Compiler Design",
      duration: "August 2022 – December 2022",
    },
  ];

  const awards = [
    {
      id: 1,
      title: "Inder Mohan Thapar Research Award",
      year: "2022",
    },
  ];

  return (
    <div className="experience-page">
      <div className="experience-header">
        <h1>Experience</h1>
        <p className="experience-subtitle">
          Professional Journey, Teaching Experience & Awards
        </p>
      </div>

      <section className="experience-section">
        <h2 className="section-title">
          <span className="title-icon">💼</span>
          Work Experience
        </h2>
        <div className="timeline">
          {workExperience.map((exp) => (
            <article key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                {exp.current && <span className="current-badge">Current</span>}
              </div>
              <div className="timeline-content">
                <h3 className="position-title">{exp.position}</h3>
                <div className="institution-info">
                  <span className="institution">{exp.institution}</span>
                  <span className="location">📍 {exp.location}</span>
                </div>
                <p className="duration">
                  <span className="duration-icon">📅</span>
                  {exp.duration}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h2 className="section-title">
          <span className="title-icon">📚</span>
          Teaching Experience
        </h2>
        <div className="teaching-grid">
          {teachingExperience.map((course) => (
            <article key={course.id} className="teaching-card">
              <div className="card-number">{course.id}</div>
              <div className="card-content">
                <h3 className="course-title">{course.course}</h3>
                <p className="course-duration">
                  <span className="duration-icon">📅</span>
                  {course.duration}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h2 className="section-title">
          <span className="title-icon">🏆</span>
          Awards / Honours
        </h2>
        <div className="awards-container">
          {awards.map((award) => (
            <article key={award.id} className="award-card">
              <div className="award-trophy">🏆</div>
              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <p className="award-year">{award.year}</p>
              </div>
              <div className="award-shine"></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;
