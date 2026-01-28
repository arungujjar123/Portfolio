import "./Publications.css";

function Publications() {
  const journals = [
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
      title: "A Generalized Quantum Protocol for Secure Multiparty Summation.",
      venue: "IEEE Transactions on Circuits and Systems II: Express Briefs",
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

  const conferences = [
    {
      id: 1,
      authors: "Kartick Sutradhar and Hari Om.",
      title:
        "Efficient Cryptographic protocol for Sorting with Data-oblivious.",
      venue: "International Conference for Emerging Technology (INCET)",
    },
  ];

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
        <h2 className="section-title">Journal Publications</h2>
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="publication-section">
        <h2 className="section-title">Conference Publications</h2>
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Publications;
