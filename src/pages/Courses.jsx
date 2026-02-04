import "./Courses.css";
import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

function Courses() {
  const [springCourses, setSpringCourses] = useState([]);
  const [pastCoursesList, setPastCoursesList] = useState([]);
  const [pastCoursesTable, setPastCoursesTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [spring, pastList, pastTable] = await Promise.all([
          client.fetch(
            '*[_type == "course" && semester == "spring-2026"]|order(order asc){_id,name,order}'
          ),
          client.fetch(
            '*[_type == "course" && semester == "past-list"]|order(order asc){_id,name,order}'
          ),
          client.fetch(
            '*[_type == "course" && semester == "past-table"]|order(order asc){_id,name,date,order}'
          ),
        ]);

        setSpringCourses(spring || []);
        setPastCoursesList(pastList || []);
        setPastCoursesTable(pastTable || []);
      } catch (err) {
        setError("Unable to load courses. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="courses-page">
      {loading && <p>Loading courses…</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="course-section">
        <h2 className="section-title">Spring-2026 Courses</h2>
        <div className="course-list-box">
          {springCourses.map((course, index) => (
            <div key={course.id} className="course-item">
              <span className="course-num">{index + 1}</span>
              <span className="course-link">{course.name}</span>
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
              <span className="course-link">{course.name}</span>
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
                  <span className="course-link">{item.course}</span>
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
