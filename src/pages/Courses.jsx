import "./Courses.css";

function Courses() {
  const springCourses = [
    { id: 1, name: "Computer Architecture (CA2026-Section 2/3)" },
  ];

  const pastCoursesList = [
    { id: 1, name: "High Performance Computing (M2026)" },
    {
      id: 2,
      name: "Framework Driven Front-End Development(M2026)(Course 2/3 under Full-Stack Development Track)",
    },
    { id: 3, name: "High Performance Computing (HPC-2025)" },
    { id: 4, name: "Computer Architecture (CA2025)" },
    { id: 5, name: "Cloud Computing (CC)(CC-M2024)" },
    { id: 6, name: "Overview of Computing Workshop" },
  ];

  const pastCoursesTable = [
    { date: "Aug-Dec, 2022", course: "Cloud Computing (CC-M2022)" },
    { date: "Aug-Dec, 2022", course: "Framework Driven Front-End Development" },
    {
      date: "Jan- May, 2022",
      course: "Computer and Communication Networks (CCN-S2022)",
    },
    {
      date: "Jan- May, 2022",
      course: "Fundamentals of Full Stack Development",
    },
    { date: "Aug-Dec, 2021", course: "Computer Architecture (CA-M2021)" },
    {
      date: "Aug-Dec, 2021",
      course: "Advance Design and Analysis of Algorithms (ADSA-M2021)",
    },
    {
      date: "Jan- May, 2021",
      course: "DATA STRUCTURES AND ALGORITHMS (DSA, 2021)",
    },
    { date: "Jan- May, 2021", course: "High Performance Computing(HPC,2021)" },
    {
      date: "Jan- May, 2021",
      course: "Computer and Communication Networks (CCN-S2021)",
    },
    {
      date: "Jan- May, 2020",
      course: "CS28 - FUNDAMENTALS OF COMPUTING AND PROGRAMMING LABORATORY",
    },
    { date: "Jan- May, 2020", course: "CS8 - FUNDAMENTALS OF COMPUTING" },
    { date: "Aug-Dec, 2020", course: "CS72 - High Performance Computing" },
    { date: "Aug-Dec, 2020", course: "CS172 - High Performance Computing Lab" },
    { date: "Aug-Dec, 2020", course: "CSE52 - EPN Design and Development" },
    { date: "Dec -Dec, 2019", course: "Distributed Computing" },
  ];

  return (
    <div className="courses-page">
      <div className="course-section">
        <h2 className="section-title">Spring-2026 Courses</h2>
        <div className="course-list-box">
          {springCourses.map((course, index) => (
            <div key={course.id} className="course-item">
              <span className="course-num">{index + 1}</span>
              <a href="#" className="course-link">
                {course.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="course-section">
        <h2 className="section-title">Past Courses</h2>
        <div className="course-list-box">
          {pastCoursesList.map((course, index) => (
            <div key={course.id} className="course-item">
              <span className="course-num">{index + 1}.</span>
              <a href="#" className="course-link">
                {course.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="course-section">
        <h2 className="section-title-table">Past Courses</h2>
        <table className="courses-table">
          <tbody>
            {pastCoursesTable.map((item, index) => (
              <tr key={index}>
                <td className="date-column">{item.date}</td>
                <td className="course-column">
                  <a href="#" className="course-link">
                    {item.course}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Courses;
