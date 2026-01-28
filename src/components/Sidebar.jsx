import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src="/karthiksir.jpg"
            alt="Dr. Kartick Sutradhar"
            className="profile-image"
          />
        </div>
        <h2 className="name">Dr. Kartick Sutradhar</h2>
        <p className="title">Assistant Professor</p>
        <p className="location">2nd Floor, Academic Building</p>
        <p className="department">
          Department of Computer Science and Engineering (Computer Vision Group)
        </p>
        <p className="state">Andhra Pradesh - 517 646, India</p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📞 9520765526</span>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <a href="mailto:Kartick.s@iiits.in">Kartick.s@iiits.in</a>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <a href="mailto:Kartick@gmail.com">Kartick@gmail.com</a>
          </div>
        </div>

        <a href="#" className="website-link">
          Website ka link idhar dal dunga jo bhi banani hai
        </a>

        <button className="cv-button">idhar apna cv laga sakte hai </button>
      </div>
    </aside>
  );
}

export default Sidebar;
