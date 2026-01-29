import "./Courses.css";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import EditableField from "../components/EditableField";

function Courses() {
  const { isAdmin } = useAuth();

  // Load data from localStorage or use defaults
  const [springCourses, setSpringCourses] = useState(() => {
    const saved = localStorage.getItem("springCourses");
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, name: "Computer Architecture (CA2026-Section 2/3)" }];
  });

  const [pastCoursesList, setPastCoursesList] = useState(() => {
    const saved = localStorage.getItem("pastCoursesList");
    return saved
      ? JSON.parse(saved)
      : [
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
  });

  const [pastCoursesTable, setPastCoursesTable] = useState(() => {
    const saved = localStorage.getItem("pastCoursesTable");
    return saved
      ? JSON.parse(saved)
      : [
          { date: "Aug-Dec, 2022", course: "Cloud Computing (CC-M2022)" },
          {
            date: "Aug-Dec, 2022",
            course: "Framework Driven Front-End Development",
          },
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
          {
            date: "Jan- May, 2021",
            course: "High Performance Computing(HPC,2021)",
          },
          {
            date: "Jan- May, 2021",
            course: "Computer and Communication Networks (CCN-S2021)",
          },
          {
            date: "Jan- May, 2020",
            course:
              "CS28 - FUNDAMENTALS OF COMPUTING AND PROGRAMMING LABORATORY",
          },
          { date: "Jan- May, 2020", course: "CS8 - FUNDAMENTALS OF COMPUTING" },
          {
            date: "Aug-Dec, 2020",
            course: "CS72 - High Performance Computing",
          },
          {
            date: "Aug-Dec, 2020",
            course: "CS172 - High Performance Computing Lab",
          },
          {
            date: "Aug-Dec, 2020",
            course: "CSE52 - EPN Design and Development",
          },
          { date: "Dec -Dec, 2019", course: "Distributed Computing" },
        ];
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("springCourses", JSON.stringify(springCourses));
  }, [springCourses]);

  useEffect(() => {
    localStorage.setItem("pastCoursesList", JSON.stringify(pastCoursesList));
  }, [pastCoursesList]);

  useEffect(() => {
    localStorage.setItem("pastCoursesTable", JSON.stringify(pastCoursesTable));
  }, [pastCoursesTable]);

  // Handler functions for Spring Courses
  const handleSpringCourseChange = (id, field, value) => {
    setSpringCourses(
      springCourses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course,
      ),
    );
  };

  const addSpringCourse = () => {
    const newId =
      springCourses.length > 0
        ? Math.max(...springCourses.map((c) => c.id)) + 1
        : 1;
    setSpringCourses([...springCourses, { id: newId, name: "New Course" }]);
  };

  const deleteSpringCourse = (id) => {
    setSpringCourses(springCourses.filter((course) => course.id !== id));
  };

  // Handler functions for Past Courses List
  const handlePastCourseChange = (id, field, value) => {
    setPastCoursesList(
      pastCoursesList.map((course) =>
        course.id === id ? { ...course, [field]: value } : course,
      ),
    );
  };

  const addPastCourse = () => {
    const newId =
      pastCoursesList.length > 0
        ? Math.max(...pastCoursesList.map((c) => c.id)) + 1
        : 1;
    setPastCoursesList([...pastCoursesList, { id: newId, name: "New Course" }]);
  };

  const deletePastCourse = (id) => {
    setPastCoursesList(pastCoursesList.filter((course) => course.id !== id));
  };

  // Handler functions for Past Courses Table
  const handlePastCourseTableChange = (index, field, value) => {
    const newTable = [...pastCoursesTable];
    newTable[index] = { ...newTable[index], [field]: value };
    setPastCoursesTable(newTable);
  };

  const addPastCourseTable = () => {
    setPastCoursesTable([
      ...pastCoursesTable,
      { date: "MMM-MMM, YYYY", course: "New Course" },
    ]);
  };

  const deletePastCourseTable = (index) => {
    setPastCoursesTable(pastCoursesTable.filter((_, i) => i !== index));
  };

  return (
    <div className="courses-page">
      <div className="course-section">
        <h2 className="section-title">Spring-2026 Courses</h2>
        <div className="course-list-box">
          {springCourses.map((course, index) => (
            <div key={course.id} className="course-item">
              <span className="course-num">{index + 1}</span>
              {isAdmin ? (
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <EditableField
                    value={course.name}
                    onSave={(value) =>
                      handleSpringCourseChange(course.id, "name", value)
                    }
                    multiline={true}
                  />
                  <button
                    className="admin-delete-btn"
                    onClick={() => deleteSpringCourse(course.id)}
                    title="Delete course"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <a href="#" className="course-link">
                  {course.name}
                </a>
              )}
            </div>
          ))}
          {isAdmin && (
            <button className="admin-add-btn" onClick={addSpringCourse}>
              + Add Spring Course
            </button>
          )}
        </div>
      </div>

      <div className="course-section">
        <h2 className="section-title">Past Courses</h2>
        <div className="course-list-box">
          {pastCoursesList.map((course, index) => (
            <div key={course.id} className="course-item">
              <span className="course-num">{index + 1}.</span>
              {isAdmin ? (
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <EditableField
                    value={course.name}
                    onSave={(value) =>
                      handlePastCourseChange(course.id, "name", value)
                    }
                    multiline={true}
                  />
                  <button
                    className="admin-delete-btn"
                    onClick={() => deletePastCourse(course.id)}
                    title="Delete course"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <a href="#" className="course-link">
                  {course.name}
                </a>
              )}
            </div>
          ))}
          {isAdmin && (
            <button className="admin-add-btn" onClick={addPastCourse}>
              + Add Past Course
            </button>
          )}
        </div>
      </div>

      <div className="course-section">
        <h2 className="section-title-table">Past Courses</h2>
        <table className="courses-table">
          <tbody>
            {pastCoursesTable.map((item, index) => (
              <tr key={index}>
                <td className="date-column">
                  {isAdmin ? (
                    <EditableField
                      value={item.date}
                      onSave={(value) =>
                        handlePastCourseTableChange(index, "date", value)
                      }
                    />
                  ) : (
                    item.date
                  )}
                </td>
                <td className="course-column">
                  {isAdmin ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <EditableField
                        value={item.course}
                        onSave={(value) =>
                          handlePastCourseTableChange(index, "course", value)
                        }
                        multiline={true}
                      />
                      <button
                        className="admin-delete-btn"
                        onClick={() => deletePastCourseTable(index)}
                        title="Delete course"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <a href="#" className="course-link">
                      {item.course}
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isAdmin && (
          <button
            className="admin-add-btn"
            onClick={addPastCourseTable}
            style={{ marginTop: "10px" }}
          >
            + Add Table Course
          </button>
        )}
      </div>
    </div>
  );
}

export default Courses;
