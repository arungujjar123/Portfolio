import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import "./Publications.css";

function Publications() {
  const [journals, setJournals] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [journalDocs, conferenceDocs] = await Promise.all([
          client.fetch(
            '*[_type == "publication" && type == "journal"]|order(order asc){_id,authors,title,venue,details,impact,doi,order}'
          ),
          client.fetch(
            '*[_type == "publication" && type == "conference"]|order(order asc){_id,authors,title,venue,doi,order}'
          ),
        ]);

        setJournals(journalDocs || []);
        setConferences(conferenceDocs || []);
      } catch (err) {
        setError("Unable to load publications. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="publications-page">
      {loading && <p>Loading publications…</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="publications-header">
        <h1>Publications</h1>
        <p className="publication-count">
          {journals.length} Journal Publications • {conferences.length} Conference Publication
        </p>
      </div>

      <section className="publication-section">
        <div className="section-header-pub">
          <h2 className="section-title">Journal Publications</h2>
        </div>

        <div className="publications-list">
          {journals.map((pub, index) => (
            <article key={pub._id || pub.id} className="publication-card">
              <div className="pub-number">{index + 1}</div>
              <div className="pub-content">
                <p className="pub-authors">{pub.authors}</p>
                <h3 className="pub-title">"{pub.title}"</h3>
                <p className="pub-venue">
                  <em>{pub.venue}</em>
                  {pub.details ? `, ${pub.details}` : ""}
                </p>
                <div className="pub-metadata">
                  {pub.impact && <span className="pub-impact">{pub.impact}</span>}
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-doi"
                    >
                      DOI →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="publication-section">
        <div className="section-header-pub">
          <h2 className="section-title">Conference Publications</h2>
        </div>

        <div className="publications-list">
          {conferences.map((pub, index) => (
            <article key={pub._id || pub.id} className="publication-card">
              <div className="pub-number">{index + 1}</div>
              <div className="pub-content">
                <p className="pub-authors">{pub.authors}</p>
                <h3 className="pub-title">"{pub.title}"</h3>
                <p className="pub-venue">
                  <em>{pub.venue}</em>
                </p>
                <div className="pub-metadata">
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-doi"
                    >
                      DOI →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Publications;
