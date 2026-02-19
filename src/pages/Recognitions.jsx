import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import "./Recognitions.css";

function Recognitions() {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const data = await client.fetch(
          '*[_type == "award"]|order(order asc){_id,title,year,description,order}',
        );
        setAwards(data || []);
      } catch (err) {
        setError("Unable to load recognitions. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  if (loading) {
    return (
      <div className="recognitions-page">
        <p>Loading recognitions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="recognitions-page">
        <p className="error-text">{error}</p>
      </div>
    );
  }

  return (
    <div className="recognitions-page">
      <header className="page-header">
        <h1>Recognitions & Awards</h1>
        <p className="page-subtitle">
          Academic achievements, honors, and professional recognition
        </p>
      </header>

      <div className="awards-grid">
        {awards.length > 0 ? (
          awards.map((award) => (
            <div key={award._id} className="award-card">
              <div className="award-year">{award.year}</div>
              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                {award.description && (
                  <p className="award-description">{award.description}</p>
                )}
              </div>
              <div className="award-decoration"></div>
            </div>
          ))
        ) : (
          <p className="no-content">
            No recognitions available yet. Add awards and honors in Sanity
            Studio.
          </p>
        )}
      </div>
    </div>
  );
}

export default Recognitions;
