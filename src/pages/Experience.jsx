import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import EditableField from "../components/EditableField";
import "./Experience.css";

function Experience() {
  const { isAdmin } = useAuth();

  // Initialize state from localStorage or default data
  const [workExperience, setWorkExperience] = useState(() => {
    const saved = localStorage.getItem("workExperience");
    return saved
      ? JSON.parse(saved)
      : [
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
  });

  const [teachingExperience, setTeachingExperience] = useState(() => {
    const saved = localStorage.getItem("teachingExperience");
    return saved
      ? JSON.parse(saved)
      : [
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
  });

  const [awards, setAwards] = useState(() => {
    const saved = localStorage.getItem("awards");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "Inder Mohan Thapar Research Award",
            year: "2022",
          },
        ];
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("workExperience", JSON.stringify(workExperience));
  }, [workExperience]);

  useEffect(() => {
    localStorage.setItem(
      "teachingExperience",
      JSON.stringify(teachingExperience),
    );
  }, [teachingExperience]);

  useEffect(() => {
    localStorage.setItem("awards", JSON.stringify(awards));
  }, [awards]);

  // Update functions
  const updateWorkExp = (id, field, value) => {
    setWorkExperience((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    );
  };

  const updateTeaching = (id, field, value) => {
    setTeachingExperience((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, [field]: value } : course,
      ),
    );
  };

  const updateAward = (id, field, value) => {
    setAwards((prev) =>
      prev.map((award) =>
        award.id === id ? { ...award, [field]: value } : award,
      ),
    );
  };

  // Add/Delete functions
  const addWorkExp = () => {
    const newExp = {
      id: Date.now(),
      position: "New Position",
      duration: "Start Date – End Date",
      institution: "Institution Name",
      location: "Location",
      current: false,
    };
    setWorkExperience([...workExperience, newExp]);
  };

  const deleteWorkExp = (id) => {
    setWorkExperience(workExperience.filter((exp) => exp.id !== id));
  };

  const addTeaching = () => {
    const newCourse = {
      id: Date.now(),
      course: "New Course",
      duration: "Start Date – End Date",
    };
    setTeachingExperience([...teachingExperience, newCourse]);
  };

  const deleteTeaching = (id) => {
    setTeachingExperience(
      teachingExperience.filter((course) => course.id !== id),
    );
  };

  const addAward = () => {
    const newAward = {
      id: Date.now(),
      title: "New Award",
      year: new Date().getFullYear().toString(),
    };
    setAwards([...awards, newAward]);
  };

  const deleteAward = (id) => {
    setAwards(awards.filter((award) => award.id !== id));
  };

  return (
    <div className="experience-page">
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
          {isAdmin && (
            <button onClick={addWorkExp} className="add-btn">
              + Add Experience
            </button>
          )}
        </div>
        <div className="timeline">
          {workExperience.map((exp) => (
            <article key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                {exp.current && <span className="current-badge">Current</span>}
              </div>
              <div className="timeline-content">
                <h3 className="position-title">
                  {isAdmin ? (
                    <EditableField
                      value={exp.position}
                      onSave={(value) =>
                        updateWorkExp(exp.id, "position", value)
                      }
                    />
                  ) : (
                    exp.position
                  )}
                </h3>
                <div className="institution-info">
                  <span className="institution">
                    {isAdmin ? (
                      <EditableField
                        value={exp.institution}
                        onSave={(value) =>
                          updateWorkExp(exp.id, "institution", value)
                        }
                      />
                    ) : (
                      exp.institution
                    )}
                  </span>
                  <span className="location">
                    📍{" "}
                    {isAdmin ? (
                      <EditableField
                        value={exp.location}
                        onSave={(value) =>
                          updateWorkExp(exp.id, "location", value)
                        }
                      />
                    ) : (
                      exp.location
                    )}
                  </span>
                </div>
                <p className="duration">
                  <span className="duration-icon">📅</span>
                  {isAdmin ? (
                    <EditableField
                      value={exp.duration}
                      onSave={(value) =>
                        updateWorkExp(exp.id, "duration", value)
                      }
                    />
                  ) : (
                    exp.duration
                  )}
                </p>
                {isAdmin && (
                  <button
                    onClick={() => deleteWorkExp(exp.id)}
                    className="delete-btn"
                  >
                    🗑️ Delete
                  </button>
                )}
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
          {isAdmin && (
            <button onClick={addTeaching} className="add-btn">
              + Add Course
            </button>
          )}
        </div>
        <div className="teaching-grid">
          {teachingExperience.map((course) => (
            <article key={course.id} className="teaching-card">
              <div className="card-number">{course.id}</div>
              <div className="card-content">
                <h3 className="course-title">
                  {isAdmin ? (
                    <EditableField
                      value={course.course}
                      onSave={(value) =>
                        updateTeaching(course.id, "course", value)
                      }
                    />
                  ) : (
                    course.course
                  )}
                </h3>
                <p className="course-duration">
                  <span className="duration-icon">📅</span>
                  {isAdmin ? (
                    <EditableField
                      value={course.duration}
                      onSave={(value) =>
                        updateTeaching(course.id, "duration", value)
                      }
                    />
                  ) : (
                    course.duration
                  )}
                </p>
                {isAdmin && (
                  <button
                    onClick={() => deleteTeaching(course.id)}
                    className="delete-btn-small"
                  >
                    🗑️
                  </button>
                )}
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
          {isAdmin && (
            <button onClick={addAward} className="add-btn">
              + Add Award
            </button>
          )}
        </div>
        <div className="awards-container">
          {awards.map((award) => (
            <article key={award.id} className="award-card">
              <div className="award-trophy">🏆</div>
              <div className="award-content">
                <h3 className="award-title">
                  {isAdmin ? (
                    <EditableField
                      value={award.title}
                      onSave={(value) => updateAward(award.id, "title", value)}
                    />
                  ) : (
                    award.title
                  )}
                </h3>
                <p className="award-year">
                  {isAdmin ? (
                    <EditableField
                      value={award.year}
                      onSave={(value) => updateAward(award.id, "year", value)}
                    />
                  ) : (
                    award.year
                  )}
                </p>
                {isAdmin && (
                  <button
                    onClick={() => deleteAward(award.id)}
                    className="delete-btn-small"
                  >
                    🗑️
                  </button>
                )}
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
