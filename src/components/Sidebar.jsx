import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import EditableField from "./EditableField";
import "./Sidebar.css";

function Sidebar() {
  const { isAdmin } = useAuth();

  const [profileData, setProfileData] = useState(() => {
    const saved = localStorage.getItem("sidebarProfile");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Dr. Kartick Sutradhar",
          title: "Assistant Professor",
          location: "2nd Floor, Academic Building",
          department:
            "Department of Computer Science and Engineering (Computer Vision Group)",
          state: "Andhra Pradesh - 517 646, India",
          phone: "9520765526",
          email1: "Kartick.s@iiits.in",
          email2: "Kartick@gmail.com",
          websiteLink: "Website ka link idhar dal dunga jo bhi banani hai",
          cvText: "idhar apna cv laga sakte hai",
          profileImage: "/karthiksir.jpg",
        };
  });

  useEffect(() => {
    localStorage.setItem("sidebarProfile", JSON.stringify(profileData));
  }, [profileData]);

  const updateField = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="sidebar">
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src={profileData.profileImage}
            alt={profileData.name}
            className="profile-image"
          />
          {isAdmin && (
            <div className="image-edit-controls">
              <label className="image-upload-btn">
                📷 Change Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </label>
              <div className="image-url-option">
                <input
                  type="text"
                  placeholder="Or paste image URL"
                  value={
                    profileData.profileImage.startsWith("data:")
                      ? ""
                      : profileData.profileImage
                  }
                  onChange={(e) => updateField("profileImage", e.target.value)}
                  className="image-url-input"
                />
              </div>
            </div>
          )}
        </div>

        <h2 className="name">
          {isAdmin ? (
            <EditableField
              value={profileData.name}
              onSave={(value) => updateField("name", value)}
            />
          ) : (
            profileData.name
          )}
        </h2>

        <p className="title">
          {isAdmin ? (
            <EditableField
              value={profileData.title}
              onSave={(value) => updateField("title", value)}
            />
          ) : (
            profileData.title
          )}
        </p>

        <p className="location">
          {isAdmin ? (
            <EditableField
              value={profileData.location}
              onSave={(value) => updateField("location", value)}
            />
          ) : (
            profileData.location
          )}
        </p>

        <p className="department">
          {isAdmin ? (
            <EditableField
              value={profileData.department}
              onSave={(value) => updateField("department", value)}
              multiline={true}
            />
          ) : (
            profileData.department
          )}
        </p>

        <p className="state">
          {isAdmin ? (
            <EditableField
              value={profileData.state}
              onSave={(value) => updateField("state", value)}
            />
          ) : (
            profileData.state
          )}
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📞 </span>
            {isAdmin ? (
              <EditableField
                value={profileData.phone}
                onSave={(value) => updateField("phone", value)}
              />
            ) : (
              profileData.phone
            )}
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            {isAdmin ? (
              <EditableField
                value={profileData.email1}
                onSave={(value) => updateField("email1", value)}
                type="email"
              />
            ) : (
              <a href={`mailto:${profileData.email1}`}>{profileData.email1}</a>
            )}
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            {isAdmin ? (
              <EditableField
                value={profileData.email2}
                onSave={(value) => updateField("email2", value)}
                type="email"
              />
            ) : (
              <a href={`mailto:${profileData.email2}`}>{profileData.email2}</a>
            )}
          </div>
        </div>

        {isAdmin ? (
          <div className="website-link-edit">
            <EditableField
              value={profileData.websiteLink}
              onSave={(value) => updateField("websiteLink", value)}
              multiline={true}
            />
          </div>
        ) : (
          <a href="#" className="website-link">
            {profileData.websiteLink}
          </a>
        )}

        {isAdmin ? (
          <div className="cv-button-edit">
            <EditableField
              value={profileData.cvText}
              onSave={(value) => updateField("cvText", value)}
            />
          </div>
        ) : (
          <button className="cv-button">{profileData.cvText}</button>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
