import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import "./Experience.css";

function Experience() {
  const [workExperience, setWorkExperience] = useState([]);
  const [teachingExperience, setTeachingExperience] = useState([]);
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [work, teaching, awardDocs] = await Promise.all([
          client.fetch(
            '*[_type == "workExperience"]|order(order asc){_id,position,duration,institution,location,current,order}'
          ),
          client.fetch(
            '*[_type == "teachingExperience"]|order(order asc){_id,course,duration,order}'
          ),
          client.fetch(
            '*[_type == "award"]|order(order asc){_id,title,year,order}'
          ),
        ]);

        setWorkExperience(work || []);
        setTeachingExperience(teaching || []);
        setAwards(awardDocs || []);
      } catch (err) {
        setError("Unable to load experience. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="experience-page">
      {loading && <p>Loading experience…</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="experience-header">
        <h1>Experience</h1>
        <p className="experience-subtitle">
          Professional Journey, Teaching Experience & Awards
        </p>
      </div>

      <section className="experience-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">💼</span>
            Work Experience
          </h2>
        </div>
        <div className="timeline">
          {workExperience.map((exp) => (
            <article key={exp._id || exp.id} className="timeline-item">
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
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">📚</span>
            Teaching Experience
          </h2>
        </div>
        <div className="teaching-grid">
          {teachingExperience.map((course, index) => (
            <article key={course._id || course.id} className="teaching-card">
              <div className="card-number">{index + 1}</div>
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
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">🏆</span>
            Awards / Honours
          </h2>
        </div>
        <div className="awards-container">
          {awards.map((award) => (
            <article key={award._id || award.id} className="award-card">
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
