import "./Home.css";

function Home() {
  const springCourses = [
    {
      id: 1,
      name: "Computer Architecture (CA2026)->->->idhar mujhe currently wala course dalna hai ",
    },
  ];

  const pastCourses = [
    { id: 1, name: "idhar mujhe apna phele wale course fill karne hai ->->->" },
    { id: 2, name: "High Performance Computing (M2026)" },
    {
      id: 3,
      name: "Framework Driven Front-End Development (Course 2/3 under Full-Stack Development Track)",
    },
    { id: 4, name: "High Performance Computing (HPC-2025)" },
    { id: 5, name: "Computer Architecture (CA2025)" },
    { id: 6, name: "Cloud Computing (CC)(CC-M2024)" },
  ];

  return (
    <div className="home-page">
      {/* <div className="workshop-notice">
        <p>1. 5-days workshop on</p>
      </div> */}
      

      <section className="welcome-section">
        <h1>
          A warm and hearty welcome to fellow researchers, students and
          enthusiasts
        </h1>
        <p className="intro-text">
          I am currently working as an Assistant Professor in the{" "}
          <a href="#">Computer Science and Engineering</a> at{" "}
          <a href="#">
            Indian Institute of Information Technology Sri City, Chittoor(IIITS)
          </a>
          , AP.
          {/* I completed my PhD <a href="#">from SPARK Lab Dept. of CSE</a>{" "}
          National Institute of Technology Karnataka (NITK), Surathkal under the
          supervision of <a href="#">Dr. Basavaraj Talawar</a>. */}
          i completed my PhD from the{" "}
          <a href="#">Computer Science and Engineering</a> at{" "}
          <a href="#">Indian Institute of Technology Hyderabad (IIT-H)</a> under
          the supervision of <a href="#">Dr. D. K. Lobiyal</a>. ye change karna
          hai mujhe abhi
        </p>
      </section>

      <section className="research-section">
        <h2>Research Area(s):</h2>
        <p>
          My research is focused on the areas of Quantum Computing and
          Cryptography
        </p>
        <p className="explore-text">
          Explore my courses, research, and presentations.
        </p>
      </section>

      <section className="courses-section">
        <div className="course-block">
          <h2 className="course-heading">Spring-2026 Course</h2>
          <table className="course-table">
            <tbody>
              {springCourses.map((course, index) => (
                <tr key={course.id}>
                  <td className="course-number">{index + 1}</td>
                  <td className="course-name">
                    <a href="#">{course.name}</a>
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
                <tr key={course.id}>
                  <td className="course-number">{index + 1}.</td>
                  <td className="course-name">
                    <a href="#">{course.name}</a>
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
