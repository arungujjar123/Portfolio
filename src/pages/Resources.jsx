import "./Resources.css";

function Resources() {
  return (
    <div className="resources-page">
      <section className="resource-section">
        <h2 className="section-number">1. Workshops/Talks/Tutorials/</h2>
        <div className="resource-box">
          <ul className="resource-list">
            <li>
              Webinar on{" "}
              <strong>
                "Recent advancements and Research opportunities in
                Network-on-Chip(NoC) Architectures"
              </strong>{" "}
              at NCET, Bengaluru <a href="#">Day-1</a>
            </li>
            <li>
              Hands-on session on{" "}
              <strong>"Introduction to CUDA programming"</strong> at SIT,
              Tumakuru, Karnataka <a href="#">link</a>
            </li>
            <li>
              <strong>"Python workshop"</strong> at Govt Engg. Colg, KRPete -
              PPT and Code : <a href="#">Day-1</a> and <a href="#">Day-2-a-p</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="resource-section">
        <h2 className="section-number">2. Computer architecture simulator</h2>
        <div className="resource-box">
          <ul className="resource-list">
            <li>
              <a href="#">Gem5 Full system simulator</a>
            </li>
            <li>
              <a href="#">
                McPAT (Multicore Power, Area, and Timing) is an integrated
                power, area, and timing modeling framework
              </a>
            </li>
            <li>
              <a href="#">
                ORION: A Fastand Accurate NoC CoverandAreaModel for
                Early-StageDesign Space Exploration
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="resource-section">
        <h2 className="section-number">3. Practice Quiz</h2>
        <div className="resource-box">
          <ul className="resource-list">
            <li>
              Linux Practice Quiz || <a href="#">Click_here</a>
            </li>
            <li>
              Pthreads ||| <a href="#">Click_here</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Resources;
