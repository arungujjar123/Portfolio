import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import EditableField from "../components/EditableField";
import "./Publications.css";

function Publications() {
  const { isAdmin } = useAuth();
  const [showJournalForm, setShowJournalForm] = useState(false);
  const [showConferenceForm, setShowConferenceForm] = useState(false);
  const [editingJournal, setEditingJournal] = useState(null);
  const [editingConference, setEditingConference] = useState(null);

  const [journals, setJournals] = useState(() => {
    const saved = localStorage.getItem("journals");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            authors: "Kartick Sutradhar and Hari Om.",
            title: "Efficient quantum secret sharing without a trusted player.",
            venue: "Quantum Information Processing",
            details: "19.2 (2020): 73.",
            impact: "(SCI, IF: 2.349)",
            doi: "https://doi.org/10.1007/s11128-019-2571-4",
          },
          {
            id: 2,
            authors: "Kartick Sutradhar and Hari Om.",
            title:
              "A Generalized Quantum Protocol for Secure Multiparty Summation.",
            venue:
              "IEEE Transactions on Circuits and Systems II: Express Briefs",
            details: "67.12 (2020): 2978-2982.",
            impact: "(SCI, IF: 3.292)",
            doi: "https://doi.org/10.1109/TCSII.2020.2989447",
          },
          {
            id: 3,
            authors: "Kartick Sutradhar and Hari Om.",
            title:
              "Hybrid Quantum Protocols for Secure Multiparty Summation and Multiplication.",
            venue: "Scientific Reports",
            details: "10.1 (2020): 1-9.",
            impact: "(SCI, IF: 5.133)",
            doi: "https://doi.org/10.1038/s41598-020-65871-8",
          },
          {
            id: 4,
            authors: "Kartick Sutradhar and Hari Om.",
            title:
              "An Efficient Simulation for Quantum Secure Multiparty Computation.",
            venue: "Scientific Reports",
            details: "11 (2021): 1-9.",
            impact: "(SCI, IF: 5.133)",
            doi: "https://doi.org/10.1038/s41598-021-81799-z",
          },
          {
            id: 5,
            authors: "Kartick Sutradhar and Hari Om.",
            title:
              "Secret Sharing Based Multiparty Quantum Computation for Multiplication.",
            venue: "International Journal of Theoretical Physics",
            details: "60.9 (2021): 3417-3425.",
            impact: "(SCI, IF: 1.708)",
            doi: "https://doi.org/10.1007/s10773-021-04917-7",
          },
          {
            id: 6,
            authors: "Kartick Sutradhar and Hari Om.",
            title: "Enhanced (t, n) threshold d-level quantum secret sharing.",
            venue: "Scientific Reports",
            details: "11.1 (2021): 1-7.",
            impact: "(SCI, IF: 5.133)",
            doi: "https://doi.org/10.1038/s41598-021-96634-8",
          },
          {
            id: 7,
            authors: "Kartick Sutradhar and Hari Om.",
            title:
              "A Cost-effective Quantum Protocol for Secure Multi-party Multiplication.",
            venue: "Quantum Information Processing",
            details: "20.11 (2021): 1-10.",
            impact: "(SCI, IF: 2.349)",
            doi: "https://doi.org/10.1007/s11128-021-03334-3",
          },
          {
            id: 8,
            authors: "Kartick Sutradhar and Hari Om.",
            title: "A Privacy-Preserving Comparison Protocol.",
            venue: "IEEE Transactions on Computers",
            details: "72.6 (2022): 1815-1821.",
            impact: "(SCI, IF: 3.183)",
            doi: "https://ieeexplore.ieee.org/document/9927425/metrics",
          },
          {
            id: 9,
            authors: "Kartick Sutradhar.",
            title: "Secure Multiparty Quantum Aggregating Protocol.",
            venue: "Quantum Information and Computation",
            details: "23.3 (2023): 0245-0256.",
            impact: "(SCI, IF: 0.976)",
            doi: "https://doi.org/10.26421/QIC23.3-4-4",
          },
        ];
  });

  const [conferences, setConferences] = useState(() => {
    const saved = localStorage.getItem("conferences");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            authors: "Kartick Sutradhar and Hari Om.",
            title:
              "Efficient Cryptographic protocol for Sorting with Data-oblivious.",
            venue: "International Conference for Emerging Technology (INCET)",
          },
        ];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("journals", JSON.stringify(journals));
  }, [journals]);

  useEffect(() => {
    localStorage.setItem("conferences", JSON.stringify(conferences));
  }, [conferences]);

  // Form state for new/edit publication
  const [journalForm, setJournalForm] = useState({
    authors: "",
    title: "",
    venue: "",
    details: "",
    impact: "",
    doi: "",
  });

  const [conferenceForm, setConferenceForm] = useState({
    authors: "",
    title: "",
    venue: "",
  });

  // Add/Edit Journal
  const handleJournalSubmit = (e) => {
    e.preventDefault();
    if (editingJournal) {
      setJournals(
        journals.map((j) =>
          j.id === editingJournal.id
            ? { ...journalForm, id: editingJournal.id }
            : j,
        ),
      );
      setEditingJournal(null);
    } else {
      const newId =
        journals.length > 0 ? Math.max(...journals.map((j) => j.id)) + 1 : 1;
      setJournals([...journals, { ...journalForm, id: newId }]);
    }
    setJournalForm({
      authors: "",
      title: "",
      venue: "",
      details: "",
      impact: "",
      doi: "",
    });
    setShowJournalForm(false);
  };

  const startEditJournal = (journal) => {
    setEditingJournal(journal);
    setJournalForm(journal);
    setShowJournalForm(true);
  };

  const deleteJournal = (id) => {
    if (window.confirm("Are you sure you want to delete this publication?")) {
      setJournals(journals.filter((j) => j.id !== id));
    }
  };

  // Add/Edit Conference
  const handleConferenceSubmit = (e) => {
    e.preventDefault();
    if (editingConference) {
      setConferences(
        conferences.map((c) =>
          c.id === editingConference.id
            ? { ...conferenceForm, id: editingConference.id }
            : c,
        ),
      );
      setEditingConference(null);
    } else {
      const newId =
        conferences.length > 0
          ? Math.max(...conferences.map((c) => c.id)) + 1
          : 1;
      setConferences([...conferences, { ...conferenceForm, id: newId }]);
    }
    setConferenceForm({ authors: "", title: "", venue: "" });
    setShowConferenceForm(false);
  };

  const startEditConference = (conference) => {
    setEditingConference(conference);
    setConferenceForm(conference);
    setShowConferenceForm(true);
  };

  const deleteConference = (id) => {
    if (window.confirm("Are you sure you want to delete this publication?")) {
      setConferences(conferences.filter((c) => c.id !== id));
    }
  };

  const cancelForm = () => {
    setShowJournalForm(false);
    setShowConferenceForm(false);
    setEditingJournal(null);
    setEditingConference(null);
    setJournalForm({
      authors: "",
      title: "",
      venue: "",
      details: "",
      impact: "",
      doi: "",
    });
    setConferenceForm({ authors: "", title: "", venue: "" });
  };

  return (
    <div className="publications-page">
      <div className="publications-header">
        <h1>Publications</h1>
        <p className="publication-count">
          {journals.length} Journal Publications • {conferences.length}{" "}
          Conference Publication
        </p>
      </div>

      <section className="publication-section">
        <div className="section-header-pub">
          <h2 className="section-title">Journal Publications</h2>
          {isAdmin && !showJournalForm && (
            <button
              onClick={() => setShowJournalForm(true)}
              className="add-pub-btn"
            >
              + Add Journal Publication
            </button>
          )}
        </div>

        {isAdmin && showJournalForm && (
          <div className="pub-form-container">
            <form onSubmit={handleJournalSubmit} className="pub-form">
              <h3>{editingJournal ? "Edit" : "Add New"} Journal Publication</h3>
              <div className="form-row">
                <label>
                  Authors *
                  <input
                    type="text"
                    value={journalForm.authors}
                    onChange={(e) =>
                      setJournalForm({
                        ...journalForm,
                        authors: e.target.value,
                      })
                    }
                    placeholder="Author Name(s)"
                    required
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Title *
                  <textarea
                    value={journalForm.title}
                    onChange={(e) =>
                      setJournalForm({ ...journalForm, title: e.target.value })
                    }
                    placeholder="Publication Title"
                    rows="2"
                    required
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Venue *
                  <input
                    type="text"
                    value={journalForm.venue}
                    onChange={(e) =>
                      setJournalForm({ ...journalForm, venue: e.target.value })
                    }
                    placeholder="Journal Name"
                    required
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Details *
                  <input
                    type="text"
                    value={journalForm.details}
                    onChange={(e) =>
                      setJournalForm({
                        ...journalForm,
                        details: e.target.value,
                      })
                    }
                    placeholder="Volume, Issue, Pages (e.g., 19.2 (2020): 73)"
                    required
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Impact Factor
                  <input
                    type="text"
                    value={journalForm.impact}
                    onChange={(e) =>
                      setJournalForm({ ...journalForm, impact: e.target.value })
                    }
                    placeholder="(SCI, IF: X.XXX)"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  DOI Link *
                  <input
                    type="url"
                    value={journalForm.doi}
                    onChange={(e) =>
                      setJournalForm({ ...journalForm, doi: e.target.value })
                    }
                    placeholder="https://doi.org/..."
                    required
                  />
                </label>
              </div>
              <div className="form-actions">
                <button type="submit" className="save-pub-btn">
                  {editingJournal ? "Update" : "Add"} Publication
                </button>
                <button
                  type="button"
                  onClick={cancelForm}
                  className="cancel-pub-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="publications-list">
          {journals.map((pub) => (
            <article key={pub.id} className="publication-card">
              <div className="pub-number">{pub.id}</div>
              <div className="pub-content">
                <p className="pub-authors">{pub.authors}</p>
                <h3 className="pub-title">"{pub.title}"</h3>
                <p className="pub-venue">
                  <em>{pub.venue}</em>, {pub.details}
                </p>
                <div className="pub-metadata">
                  <span className="pub-impact">{pub.impact}</span>
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-doi"
                  >
                    DOI →
                  </a>
                </div>
                {isAdmin && (
                  <div className="pub-admin-controls">
                    <button
                      onClick={() => startEditJournal(pub)}
                      className="edit-pub-btn"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => deleteJournal(pub.id)}
                      className="delete-pub-btn"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="publication-section">
        <div className="section-header-pub">
          <h2 className="section-title">Conference Publications</h2>
          {isAdmin && !showConferenceForm && (
            <button
              onClick={() => setShowConferenceForm(true)}
              className="add-pub-btn"
            >
              + Add Conference Publication
            </button>
          )}
        </div>

        {isAdmin && showConferenceForm && (
          <div className="pub-form-container">
            <form onSubmit={handleConferenceSubmit} className="pub-form">
              <h3>
                {editingConference ? "Edit" : "Add New"} Conference Publication
              </h3>
              <div className="form-row">
                <label>
                  Authors *
                  <input
                    type="text"
                    value={conferenceForm.authors}
                    onChange={(e) =>
                      setConferenceForm({
                        ...conferenceForm,
                        authors: e.target.value,
                      })
                    }
                    placeholder="Author Name(s)"
                    required
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Title *
                  <textarea
                    value={conferenceForm.title}
                    onChange={(e) =>
                      setConferenceForm({
                        ...conferenceForm,
                        title: e.target.value,
                      })
                    }
                    placeholder="Publication Title"
                    rows="2"
                    required
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Venue *
                  <input
                    type="text"
                    value={conferenceForm.venue}
                    onChange={(e) =>
                      setConferenceForm({
                        ...conferenceForm,
                        venue: e.target.value,
                      })
                    }
                    placeholder="Conference Name"
                    required
                  />
                </label>
              </div>
              <div className="form-actions">
                <button type="submit" className="save-pub-btn">
                  {editingConference ? "Update" : "Add"} Publication
                </button>
                <button
                  type="button"
                  onClick={cancelForm}
                  className="cancel-pub-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="publications-list">
          {conferences.map((pub) => (
            <article key={pub.id} className="publication-card">
              <div className="pub-number">{pub.id}</div>
              <div className="pub-content">
                <p className="pub-authors">{pub.authors}</p>
                <h3 className="pub-title">"{pub.title}"</h3>
                <p className="pub-venue">
                  <em>{pub.venue}</em>
                </p>
                {isAdmin && (
                  <div className="pub-admin-controls">
                    <button
                      onClick={() => startEditConference(pub)}
                      className="edit-pub-btn"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => deleteConference(pub.id)}
                      className="delete-pub-btn"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Publications;
