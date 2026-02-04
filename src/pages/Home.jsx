import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { urlFor } from "../lib/sanity";
import "./Home.css";

function Home() {
  const [profile, setProfile] = useState(null);
  const [springCourses, setSpringCourses] = useState([]);
  const [pastCourses, setPastCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileDoc, spring, pastList] = await Promise.all([
          client.fetch(
            '*[_type == "profile"][0]{name,title,profileImage,location,department,state,email1,email2,websiteLink,cvText,welcomeText,bio,researchAreas}'
          ),
          client.fetch(
            '*[_type == "course" && semester == "spring-2026"]|order(order asc){_id,name,order}'
          ),
          client.fetch(
            '*[_type == "course" && semester == "past-list"]|order(order asc){_id,name,order}'
          ),
        ]);

        setProfile(profileDoc || null);
        setSpringCourses(spring || []);
        setPastCourses(pastList || []);
      } catch (err) {
        setError("Unable to load home content. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const profileImageUrl = profile?.profileImage
    ? urlFor(profile.profileImage).width(400).height(400).url()
    : null;

  return (
    <div className="home-page">
      {loading && <p>Loading content…</p>}
      {error && <p className="error-text">{error}</p>}

      <section className="welcome-section">
        <h1>
          {profile?.welcomeText ||
            "A warm and hearty welcome to fellow researchers, students and enthusiasts"}
        </h1>
        <p className="intro-text">
          {profile?.bio ||
            "Profile information will appear here once added in Sanity Studio."}
        </p>
        {profileImageUrl && (
          <div className="profile-image-wrapper">
            <img src={profileImageUrl} alt={profile?.name || "Profile"} />
          </div>
        )}
      </section>

      <section className="research-section">
        <h2>Research Area(s):</h2>
        <p>{profile?.researchAreas || "Add research areas in Sanity Studio."}</p>
        <p className="explore-text">Explore my courses, research, and presentations.</p>
      </section>

      <section className="courses-section">
        <div className="course-block">
          <h2 className="course-heading">Spring-2026 Course</h2>
          <table className="course-table">
            <tbody>
              {springCourses.map((course, index) => (
                <tr key={course._id || course.id}>
                  <td className="course-number">{index + 1}</td>
                  <td className="course-name">
                    <span>{course.name}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="course-block">
          <h2 className="course-heading">Past Courses</h2>
          <table className="course-table">
            <tbody>
              {pastCourses.map((course, index) => (
                <tr key={course._id || course.id}>
                  <td className="course-number">{index + 1}.</td>
                  <td className="course-name">
                    <span>{course.name}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Home;
