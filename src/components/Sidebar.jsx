import { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import "./Sidebar.css";

function Sidebar() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await client.fetch(`*[_type == "profile"][0]{
          name,
          title,
          location,
          department,
          state,
          phone,
          email1,
          email2,
          websiteLink,
          cvText,
          "profileImage": profileImage.asset->url
        }`);
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <aside className="sidebar">
        <div className="profile-card">
          <p>Loading profile...</p>
        </div>
      </aside>
    );
  }

  if (!profileData) {
    return (
      <aside className="sidebar">
        <div className="profile-card">
          <p>No profile data available</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src={profileData.profileImage || "/karthiksir.jpg"}
            alt={profileData.name}
            className="profile-image"
          />
        </div>

        <h2 className="name">{profileData.name}</h2>
        <p className="title">{profileData.title}</p>
        <p className="location">{profileData.location}</p>
        <p className="department">{profileData.department}</p>
        <p className="state">{profileData.state}</p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📞 </span>
            {profileData.phone}
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <a href={`mailto:${profileData.email1}`}>{profileData.email1}</a>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <a href={`mailto:${profileData.email2}`}>{profileData.email2}</a>
          </div>
        </div>

        <a href="#" className="website-link">
          {profileData.websiteLink}
        </a>

        <button className="cv-button">{profileData.cvText}</button>
      </div>
    </aside>
  );
}

export default Sidebar;
