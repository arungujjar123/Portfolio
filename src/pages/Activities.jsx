import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import "./Activities.css";

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        // Fetch work experience as research activities
        const work = await client.fetch(
          '*[_type == "workExperience"]|order(order asc){_id,position,institution,startDate,endDate,description,order}',
        );

        setActivities(work || []);
      } catch (err) {
        setError("Unable to load activities. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return (
      <div className="activities-page">
        <p>Loading activities...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="activities-page">
        <p className="error-text">{error}</p>
      </div>
    );
  }

  return (
    <div className="activities-page">
      <section className="activities-section">
        <h2 className="section-title">Research & Professional Activities</h2>
        <div className="activities-list">
          {activities.length > 0 ? (
            activities.map((activity) => (
              <div key={activity._id} className="activity-card">
                <div className="activity-header">
                  <h3>{activity.position}</h3>
                  <span className="activity-date">
                    {activity.startDate} - {activity.endDate || "Present"}
                  </span>
                </div>
                <p className="activity-institution">{activity.institution}</p>
                {activity.description && (
                  <p className="activity-description">{activity.description}</p>
                )}
              </div>
            ))
          ) : (
            <p className="no-content">
              No research activities available. Add them in Sanity Studio under
              Work Experience.
            </p>
          )}
        </div>
      </section>

      <section className="activities-section">
        <h2 className="section-title">Conference Presentations & Talks</h2>
        <div className="activities-list">
          <div className="activity-card">
            <div className="activity-header">
              <h3>Research Presentations</h3>
            </div>
            <p className="activity-description">
              Conference presentations, invited talks, seminars, and workshops
              will be listed here. You can manage these through Sanity Studio or
              add them directly.
            </p>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <h2 className="section-title">Research Collaborations</h2>
        <div className="activities-list">
          <div className="activity-card">
            <div className="activity-header">
              <h3>Collaborative Research Projects</h3>
            </div>
            <p className="activity-description">
              Information about ongoing and completed research collaborations
              with other institutions and research groups will appear here.
            </p>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <h2 className="section-title">Grants & Funding</h2>
        <div className="activities-list">
          <div className="activity-card">
            <div className="activity-header">
              <h3>Research Grants</h3>
            </div>
            <p className="activity-description">
              Details of research grants, funding, and sponsored projects will
              be displayed here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Activities;
