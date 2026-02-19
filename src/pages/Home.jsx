import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { urlFor } from "../lib/sanity";
import "./Home.css";

function Home() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileDoc = await client.fetch(
          '*[_type == "profile"][0]{heroImage,welcomeText,researchAreas}',
        );

        setProfile(profileDoc || null);
      } catch (err) {
        setError("Unable to load home content. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const heroImageUrl = profile?.heroImage
    ? urlFor(profile.heroImage).width(1400).height(500).url()
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
      </section>

      <section className="research-section">
        <h2>Research Area(s):</h2>
        <p>
          {profile?.researchAreas || "Add research areas in Sanity Studio."}
        </p>
        <p className="explore-text">
          Explore our research, publications, and activities.
        </p>
      </section>

      {/* Hero Image Section */}
      {heroImageUrl && (
        <section className="hero-section">
          <div className="hero-image-container">
            <img
              src={heroImageUrl}
              alt="Research highlights"
              className="hero-image"
            />
            <div className="hero-overlay">
              <p className="hero-caption">Research in Action</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
