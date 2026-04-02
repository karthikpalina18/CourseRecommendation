// import { useEffect, useState } from "react";
// import axios from "axios";

// function Dashboard() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       const token = localStorage.getItem("token");

//       const res = await axios.get("http://localhost:5000/api/recommend", {
//         headers: { Authorization: token }
//       });

//       setCourses(res.data);
//     };

//     fetchRecommendations();
//   }, []);

//   return (
//     <>
//       <h1>Dashboard</h1>
//       <h3>Recommended Courses</h3>
//       <ul>
//         {courses.map((c, i) => (
//           <li key={i}>{c}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Dashboard;

import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("recommendations");

  const userName = localStorage.getItem("userName") || "Learner";

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/recommend", {
          headers: { Authorization: token },
        });
        setCourses(res.data);
      } catch {
        setError("Failed to load recommendations. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendations();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    window.location.href = "/login";
  };

  const navItems = [
    { id: "recommendations", icon: "⚡", label: "For You" },
    { id: "my-courses", icon: "📚", label: "My Courses" },
    { id: "browse", icon: "🔍", label: "Browse" },
    { id: "saved", icon: "⭐", label: "Saved" },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight">
            <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm font-black text-white">C</span>
            CourseIQ
          </a>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-300 uppercase">
              {userName.charAt(0)}
            </div>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-slate-400 hover:text-rose-400 transition-colors duration-200"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full px-6 py-8 gap-8">

        {/* ── SIDEBAR ── */}
        <aside className="hidden md:flex flex-col w-52 shrink-0">
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest text-slate-600 uppercase mb-3">Menu</p>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left
                    ${activeTab === item.id
                      ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20"
                      : "text-slate-500 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-800">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-rose-400 hover:bg-rose-400/5 transition-all duration-200 text-left"
            >
              <span className="text-base">→</span>
              Sign out
            </button>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="flex-1 min-w-0">

          {/* Greeting */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Good morning, <span className="text-indigo-400">{userName}</span> 👋
            </h1>
            <p className="text-slate-500 text-sm mt-1">Here are your personalised course picks for today.</p>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Courses enrolled", value: "—", badge: null },
              { label: "Hours learned", value: "—", badge: null },
              { label: "Streak", value: "—", badge: null },
              { label: "Recommendations", value: loading ? "..." : courses.length, badge: "new" },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-500 font-medium">{m.label}</p>
                  {m.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 uppercase tracking-wide">
                      {m.badge}
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-white">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Recommended courses */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-white">Recommended for you</h2>
              <span className="text-xs text-slate-500">{courses.length} courses</span>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-8 h-8 border-2 border-slate-700 border-t-indigo-500 rounded-full animate-spin mb-4" />
                <p className="text-slate-500 text-sm">Fetching your recommendations...</p>
              </div>
            )}

            {error && !loading && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="text-4xl mb-4">⚠️</div>
                <p className="text-slate-400 text-sm mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="text-sm text-indigo-400 hover:text-indigo-300 underline transition-colors"
                >
                  Try again
                </button>
              </div>
            )}

            {!loading && !error && courses.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-white font-semibold mb-2">No recommendations yet</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Explore a few courses and CourseIQ will start learning your preferences.
                </p>
              </div>
            )}

            {!loading && !error && courses.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {courses.map((course, i) => (
                  <div
                    key={i}
                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group cursor-pointer"
                  >
                    {/* Thumbnail */}
                    <div className="h-24 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-800 group-hover:from-indigo-950 group-hover:to-slate-900 transition-all duration-300">
                      <span className="text-3xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        🎓
                      </span>
                    </div>
                    {/* Body */}
                    <div className="p-5">
                      <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wide mb-2">Course</p>
                      <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug">
                        {typeof course === "string" ? course : course.title || "Untitled Course"}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-slate-500">Recommended</span>
                        <span className="text-xs text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                          View →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}