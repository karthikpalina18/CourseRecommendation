import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/recommend", {
        headers: { Authorization: token }
      });

      setCourses(res.data);
    };

    fetchRecommendations();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <h3>Recommended Courses</h3>
      <ul>
        {courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </>
  );
}

export default Dashboard;