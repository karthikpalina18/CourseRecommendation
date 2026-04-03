import { useEffect, useState } from "react";
import axios from "axios";

/* ── NaviQ Logo ── */
const NaviQLogo = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="10" fill="#0A0A0F"/>
    <path d="M10 18 C10 13 13 10 18 10 C21 10 23.5 11.5 25 14" stroke="#C8FF00" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M26 18 C26 23 23 26 18 26 C15 26 12.5 24.5 11 22" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <circle cx="18" cy="18" r="3" fill="#C8FF00"/>
    <circle cx="25.5" cy="14.5" r="2" fill="#C8FF00"/>
    <circle cx="10.5" cy="21.5" r="2" fill="#00C2FF"/>
  </svg>
);

/* ── Inline nav icons (replaces broken react-icons-kit import) ── */
const IcoForYou = ({ active }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={active ? "#C8FF00" : "currentColor"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);
const IcoCourses = ({ active }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={active ? "#C8FF00" : "currentColor"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);
const IcoBrowse = ({ active }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={active ? "#C8FF00" : "currentColor"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IcoSaved = ({ active }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill={active ? "#C8FF00" : "none"} stroke={active ? "#C8FF00" : "currentColor"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IcoLogout = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);
const IcoArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IcoWave = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8FF00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 11.5c0-1.7 1-3 2.5-3s2.5 1.3 2.5 3-1 3-2.5 3"/><path d="M14.5 8.5c0-1.7 1-3 2.5-3s2.5 1.3 2.5 3-1 3-2.5 3"/><path d="M2 14.5c0-1.7 1-3 2.5-3S7 12.8 7 14.5"/>
  </svg>
);
const IcoCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C8FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IcoClock = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IcoStar = ({ filled }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={filled ? "#FFC300" : "none"} stroke="#FFC300" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IcoPlay = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);
const IcoTrophy = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFC300" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="10"/>
    <path d="M6 3H18l-2 8H8L6 3z"/><path d="M6 3H4v3a2 2 0 0 0 2 2h.1"/><path d="M18 3h2v3a2 2 0 0 1-2 2h-.1"/>
  </svg>
);

/* ── Category colors ── */
const catColors = {
  "AI & ML":  { text: "#5A7A00", bg: "rgba(200,255,0,0.12)",  border: "rgba(200,255,0,0.28)",  icon: "#C8FF00" },
  "Web Dev":  { text: "#0A5F7A", bg: "rgba(0,194,255,0.1)",   border: "rgba(0,194,255,0.22)",  icon: "#00C2FF" },
  "Cloud":    { text: "#7A2010", bg: "rgba(255,92,58,0.1)",   border: "rgba(255,92,58,0.22)",  icon: "#FF5C3A" },
  "Data":     { text: "#7A5A00", bg: "rgba(255,195,0,0.12)",  border: "rgba(255,195,0,0.28)",  icon: "#FFC300" },
  "Design":   { text: "#4A1F7A", bg: "rgba(180,122,255,0.1)", border: "rgba(180,122,255,0.25)",icon: "#B47AFF" },
  "Security": { text: "#7A1020", bg: "rgba(220,50,50,0.1)",   border: "rgba(220,50,50,0.22)",  icon: "#E04040" },
  "DevOps":   { text: "#0A5040", bg: "rgba(0,180,140,0.1)",   border: "rgba(0,180,140,0.22)",  icon: "#00B48C" },
};
const getCat = (cat) => catColors[cat] || catColors["AI & ML"];

/* ── Mock data ── */
const MOCK_RECS = [
  { title: "Deep Learning with PyTorch",       category: "AI & ML",  match: "97%", duration: "8.5 hrs", lessons: 42, rating: 4.9, level: "Intermediate" },
  { title: "React & TypeScript Masterclass",   category: "Web Dev",  match: "94%", duration: "12 hrs",  lessons: 68, rating: 4.8, level: "Intermediate" },
  { title: "AWS Solutions Architect Pro",       category: "Cloud",    match: "91%", duration: "15 hrs",  lessons: 80, rating: 4.7, level: "Advanced" },
  { title: "Data Engineering with Spark",       category: "Data",     match: "89%", duration: "10 hrs",  lessons: 55, rating: 4.6, level: "Intermediate" },
  { title: "UI/UX Design Systems",              category: "Design",   match: "86%", duration: "6 hrs",   lessons: 34, rating: 4.8, level: "Beginner" },
  { title: "Kubernetes & Docker Mastery",       category: "DevOps",   match: "83%", duration: "11 hrs",  lessons: 61, rating: 4.7, level: "Advanced" },
];

const MOCK_MY_COURSES = [
  { title: "Machine Learning A-Z",         category: "AI & ML",  progress: 68, lessons: 52, completed: 35, lastStudied: "2h ago" },
  { title: "Node.js Backend Development",  category: "Web Dev",  progress: 34, lessons: 44, completed: 15, lastStudied: "1d ago" },
  { title: "Python for Data Science",      category: "Data",     progress: 91, lessons: 38, completed: 35, lastStudied: "3h ago" },
];

const BROWSE_CATS = [
  { name: "AI & ML",  count: "1,240 courses", icon: "🤖" },
  { name: "Web Dev",  count: "2,100 courses", icon: "💻" },
  { name: "Cloud",    count: "890 courses",   icon: "☁️" },
  { name: "Data",     count: "1,560 courses", icon: "📊" },
  { name: "Design",   count: "740 courses",   icon: "🎨" },
  { name: "DevOps",   count: "620 courses",   icon: "⚙️" },
  { name: "Security", count: "480 courses",   icon: "🔒" },
];

const SAVED_COURSES = [
  { title: "Zero to Mastery: Web3 & Blockchain", category: "Web Dev",  duration: "14 hrs", rating: 4.7, savedAt: "2 days ago" },
  { title: "OpenAI API Complete Guide",           category: "AI & ML",  duration: "5 hrs",  rating: 4.9, savedAt: "5 days ago" },
  { title: "Figma Advanced Prototyping",          category: "Design",   duration: "7 hrs",  rating: 4.6, savedAt: "1 week ago" },
  { title: "Ethical Hacking Bootcamp",            category: "Security", duration: "20 hrs", rating: 4.8, savedAt: "2 weeks ago" },
];

/* ── Nav config now uses inline icon components, not react-icons-kit ── */
const navItems = [
  { id: "recommendations", label: "For You",    IconComp: IcoForYou  },
  { id: "my-courses",      label: "My Courses", IconComp: IcoCourses },
  { id: "browse",          label: "Browse",     IconComp: IcoBrowse  },
  { id: "saved",           label: "Saved",      IconComp: IcoSaved   },
];

export default function Dashboard() {
  const [courses, setCourses]     = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState("");   // fix: was never settable
  const [activeTab, setActiveTab] = useState("recommendations");
  const [catFilter, setCatFilter] = useState("All");
  const [searchVal, setSearchVal] = useState("");

  const userName = localStorage.getItem("userName") || "Learner";
  const initials = userName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/recommend", {
          headers: { Authorization: token },
        });
        setCourses(res.data.length ? res.data : MOCK_RECS);
      } catch (err) {
        // Fall back to mock data silently; only show error for non-network failures
        if (err.response) {
          setError("Failed to load recommendations.");
        }
        setCourses(MOCK_RECS);
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

  const metrics = [
    { label: "Enrolled",        value: MOCK_MY_COURSES.length, accent: "#C8FF00", iconPath: <path d="M22 10v6M2 10l10-8 10 8-10 8-10-8z"/>, iconPath2: <path d="M6 12v5c3 3 9 3 12 0v-5"/> },
    { label: "Hours learned",   value: "24.5",                 accent: "#00C2FF", iconPath: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> },
    { label: "Day streak",      value: "7🔥",                  accent: "#FF5C3A", iconPath: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/> },
    { label: "Recommendations", value: loading ? "…" : courses.length, accent: "#C8FF00", badge: "new", iconPath: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></> },
  ];

  const filterTabs = ["All", "AI & ML", "Web Dev", "Cloud", "Data", "Design"];

  const filteredCourses = courses.filter(c => {
    const title = typeof c === "string" ? c : c.title || "";
    const cat   = typeof c === "object" && c.category ? c.category : "AI & ML";
    const matchCat    = catFilter === "All" || cat === catFilter;
    const matchSearch = title.toLowerCase().includes(searchVal.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", minHeight: "100vh", background: "#F0F1F4", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-item {
          width: 100%; display: flex; align-items: center; gap: 10px;
          padding: 9px 13px; border-radius: 11px; border: 1.5px solid transparent;
          font-family: 'Syne', sans-serif; font-size: 13.5px; font-weight: 600;
          cursor: pointer; text-align: left; transition: all 0.18s; background: transparent;
        }
        .nav-item.active   { background: rgba(200,255,0,0.1); color: #C8FF00; border-color: rgba(200,255,0,0.22); }
        .nav-item.inactive { color: #6B7280; }
        .nav-item.inactive:hover { background: rgba(255,255,255,0.05); color: #9CA3AF; }

        .metric-card {
          background: #fff; border: 1.5px solid #E8EAED; border-radius: 18px;
          padding: 20px; transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s; cursor: default;
        }
        .metric-card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.07); border-color: #D0D3D8; }

        .course-card {
          background: #fff; border: 1.5px solid #E8EAED; border-radius: 18px;
          overflow: hidden; cursor: pointer; display: flex; flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .course-card:hover { transform: translateY(-4px); box-shadow: 0 16px 42px rgba(0,0,0,0.09); border-color: rgba(200,255,0,0.5); }
        .course-card:hover .card-thumb { background: #0A0A0F; }
        .course-card:hover .view-link  { color: #C8FF00; }

        .card-thumb { height: 96px; background: #F4F5F7; display: flex; align-items: center; justify-content: center; transition: background 0.25s; border-bottom: 1.5px solid #E8EAED; }
        .view-link  { font-size: 12px; font-weight: 700; color: #9CA3AF; transition: color 0.18s; display: flex; align-items: center; gap: 5px; }

        .tab-pill {
          padding: 6px 15px; border-radius: 99px; border: 1.5px solid #E2E4E9;
          font-family: 'Syne', sans-serif; font-size: 12.5px; font-weight: 700;
          cursor: pointer; background: #fff; color: #9CA3AF; transition: all 0.18s; white-space: nowrap;
        }
        .tab-pill.active  { background: #0A0A0F; color: #C8FF00; border-color: #0A0A0F; }
        .tab-pill:not(.active):hover { border-color: #C8FF00; color: #374151; }

        .progress-bar-track { height: 6px; background: #F0F1F4; border-radius: 99px; overflow: hidden; }
        .progress-bar-fill  { height: 100%; border-radius: 99px; background: linear-gradient(90deg, #C8FF00, #00C2FF); }

        .my-course-card {
          background: #fff; border: 1.5px solid #E8EAED; border-radius: 18px; padding: 22px;
          transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s; cursor: pointer;
        }
        .my-course-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); border-color: rgba(0,194,255,0.4); }

        .browse-cat-card {
          background: #fff; border: 1.5px solid #E8EAED; border-radius: 18px; padding: 24px 20px;
          cursor: pointer; transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s; text-align: center;
        }
        .browse-cat-card:hover { transform: translateY(-4px); box-shadow: 0 14px 36px rgba(0,0,0,0.08); border-color: rgba(200,255,0,0.5); }

        .saved-card {
          background: #fff; border: 1.5px solid #E8EAED; border-radius: 18px; padding: 20px 22px;
          cursor: pointer; transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s; display: flex; align-items: center; gap: 16px;
        }
        .saved-card:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.07); border-color: rgba(180,122,255,0.4); }

        .resume-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 18px; background: #0A0A0F; color: #C8FF00;
          border: none; border-radius: 10px; font-family: 'Syne', sans-serif;
          font-size: 12.5px; font-weight: 700; cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .resume-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(0,0,0,0.2); }

        .continue-btn {
          padding: 12px 24px; background: #C8FF00; border: none; border-radius: 12px;
          font-size: 13.5px; font-weight: 700; font-family: 'Syne', sans-serif;
          color: #0A0A0F; cursor: pointer; display: flex; align-items: center; gap: 8px;
          transition: transform 0.15s, box-shadow 0.15s; white-space: nowrap;
        }
        .continue-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(200,255,0,0.35); }

        .logout-btn { width: 100%; display: flex; align-items: center; gap: 9px; padding: 9px 13px; border-radius: 11px; border: none; background: transparent; color: #4B5563; font-family: 'Syne', sans-serif; font-size: 13.5px; font-weight: 600; cursor: pointer; text-align: left; transition: all 0.18s; }
        .logout-btn:hover { background: rgba(255,92,58,0.1); color: #FF5C3A; }

        .search-wrap input { outline: none; }

        @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        .shimmer { background: linear-gradient(90deg,#F0F1F4 25%,#E4E5E8 50%,#F0F1F4 75%); background-size: 800px 100%; animation: shimmer 1.4s infinite; border-radius: 10px; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation: fadeUp 0.35s ease forwards; }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 99px; }
      `}</style>

      {/* ── TOPBAR ── */}
      <header style={{ background: "rgba(255,255,255,0.94)", backdropFilter: "blur(16px)", borderBottom: "1.5px solid #E8EAED", padding: "0 28px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
            <NaviQLogo size={30} />
            <span style={{ fontWeight: 800, fontSize: 18, color: "#0A0A0F", letterSpacing: "-0.02em" }}>Navi<span style={{ color: "#00C2FF" }}>Q</span></span>
          </a>
          <div className="search-wrap" style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <span style={{ position: "absolute", left: 11, color: "#9CA3AF", display: "flex", pointerEvents: "none" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            <input
              placeholder="Search courses…"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              style={{ paddingLeft: 33, paddingRight: 14, paddingTop: 8, paddingBottom: 8, background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 10, fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#0A0A0F", width: 210, transition: "border-color 0.2s, box-shadow 0.2s" }}
              onFocus={e => { e.target.style.borderColor = "#C8FF00"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.1)"; }}
              onBlur={e => { e.target.style.borderColor = "#E2E4E9"; e.target.style.boxShadow = "none"; }}
            />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button style={{ width: 34, height: 34, borderRadius: 9, background: "#F4F5F7", border: "1.5px solid #E2E4E9", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative", transition: "border-color 0.18s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#C8FF00"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#E2E4E9"}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.2" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span style={{ position: "absolute", top: 5, right: 5, width: 7, height: 7, borderRadius: "50%", background: "#FF5C3A", border: "1.5px solid #fff" }} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "5px 11px 5px 5px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 11, cursor: "pointer" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#C8FF00,#00C2FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#0A0A0F" }}>{initials}</div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>{userName.split(" ")[0]}</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>

          <button onClick={handleLogout} style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF", background: "none", border: "none", cursor: "pointer", transition: "color 0.18s", fontFamily: "'Syne', sans-serif" }}
            onMouseEnter={e => e.target.style.color = "#FF5C3A"}
            onMouseLeave={e => e.target.style.color = "#9CA3AF"}>
            Sign out
          </button>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* ── SIDEBAR ── */}
        <aside style={{ width: 210, background: "#0A0A0F", flexShrink: 0, display: "flex", flexDirection: "column", padding: "26px 14px", overflowY: "auto", height: "calc(100vh - 62px)", position: "sticky", top: 62 }}>
          <div style={{ marginBottom: 6 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#374151", marginBottom: 8, paddingLeft: 13 }}>Navigate</p>
            {navItems.map(({ id, label, IconComp }) => (
              <button key={id} className={`nav-item ${activeTab === id ? "active" : "inactive"}`} onClick={() => setActiveTab(id)} style={{ marginBottom: 3 }}>
                {/* Fix: render each nav item's icon component directly — removed broken <Icon> from react-icons-kit */}
                <IconComp active={activeTab === id} />
                {label}
                {id === "recommendations" && courses.length > 0 && (
                  <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 800, background: "rgba(200,255,0,0.18)", color: "#C8FF00", padding: "2px 8px", borderRadius: 99 }}>{courses.length}</span>
                )}
                {id === "saved" && (
                  <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 800, background: "rgba(180,122,255,0.18)", color: "#B47AFF", padding: "2px 8px", borderRadius: 99 }}>{SAVED_COURSES.length}</span>
                )}
              </button>
            ))}
          </div>

          {/* Weekly goal */}
          <div style={{ margin: "20px 0 0", padding: "16px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Weekly goal</p>
            <div className="progress-bar-track" style={{ background: "rgba(255,255,255,0.07)", marginBottom: 8 }}>
              <div className="progress-bar-fill" style={{ width: "40%" }} />
            </div>
            <p style={{ fontSize: 12, color: "#4B5563", fontFamily: "'DM Sans', sans-serif" }}>2 of 5 hrs done</p>
          </div>

          {/* Achievement teaser */}
          <div style={{ margin: "14px 0 0", padding: "14px", background: "rgba(255,195,0,0.06)", border: "1px solid rgba(255,195,0,0.15)", borderRadius: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <IcoTrophy />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#FFC300" }}>Next badge</span>
            </div>
            <p style={{ fontSize: 12, color: "#6B5A00", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>Complete 1 more course to earn <strong style={{ color: "#FFC300" }}>Trailblazer</strong></p>
          </div>

          <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <button className="logout-btn" onClick={handleLogout}>
              <IcoLogout /> Sign out
            </button>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main style={{ flex: 1, padding: "30px 32px", overflowY: "auto", minWidth: 0, height: "calc(100vh - 62px)" }}>

          {/* ── FOR YOU ── */}
          {activeTab === "recommendations" && (
            <div className="fade-up">
              <div style={{ background: "#0A0A0F", borderRadius: 22, padding: "28px 32px", marginBottom: 24, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-60px", right: "-40px", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,255,0,0.18) 0%,transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "-40px", right: "30%", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,194,255,0.14) 0%,transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
                      <IcoWave />
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>{greeting}</span>
                    </div>
                    <h1 style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                      Ready to learn, <span style={{ color: "#C8FF00" }}>{userName.split(" ")[0]}</span>?
                    </h1>
                    <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.42)", fontFamily: "'DM Sans', sans-serif", marginTop: 5 }}>
                      Your personalised picks are refreshed and waiting.
                    </p>
                  </div>
                  <button className="continue-btn" onClick={() => setActiveTab("my-courses")}>
                    Continue learning <IcoArrow />
                  </button>
                </div>
              </div>

              {/* Metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 28 }}>
                {metrics.map((m) => (
                  <div className="metric-card" key={m.label}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: `${m.accent}1A`, border: `1.5px solid ${m.accent}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={m.accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{m.iconPath}{m.iconPath2}</svg>
                      </div>
                      {m.badge && <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 99, background: "rgba(200,255,0,0.12)", color: "#5A7A00", border: "1.5px solid rgba(200,255,0,0.28)" }}>{m.badge}</span>}
                    </div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: "#0A0A0F", letterSpacing: "-0.03em", lineHeight: 1 }}>{m.value}</div>
                    <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Section header + filter */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h2 style={{ fontSize: 17, fontWeight: 800, color: "#0A0A0F", letterSpacing: "-0.02em" }}>Recommended for you</h2>
                  <p style={{ fontSize: 12.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>Updated based on your activity</p>
                </div>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {filterTabs.map(t => (
                    <button key={t} className={`tab-pill ${catFilter === t ? "active" : ""}`} onClick={() => setCatFilter(t)}>{t}</button>
                  ))}
                </div>
              </div>

              {/* Loading skeletons */}
              {loading && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} style={{ background: "#fff", borderRadius: 18, overflow: "hidden", border: "1.5px solid #E8EAED" }}>
                      <div className="shimmer" style={{ height: 96 }} />
                      <div style={{ padding: 18 }}>
                        <div className="shimmer" style={{ height: 11, width: "38%", marginBottom: 10 }} />
                        <div className="shimmer" style={{ height: 13, width: "80%", marginBottom: 6 }} />
                        <div className="shimmer" style={{ height: 13, width: "55%", marginBottom: 18 }} />
                        <div className="shimmer" style={{ height: 10, width: "28%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Error state */}
              {error && !loading && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "70px 0", textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,92,58,0.08)", border: "1.5px solid rgba(255,92,58,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5C3A" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0A0A0F", marginBottom: 7 }}>Something went wrong</h3>
                  <p style={{ fontSize: 13.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", marginBottom: 18 }}>{error}</p>
                  <button onClick={() => window.location.reload()} style={{ padding: "10px 22px", background: "#C8FF00", border: "none", borderRadius: 11, fontSize: 13.5, fontWeight: 700, fontFamily: "'Syne', sans-serif", color: "#0A0A0F", cursor: "pointer" }}>Try again</button>
                </div>
              )}

              {/* Empty state */}
              {!loading && !error && filteredCourses.length === 0 && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "70px 0", textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(200,255,0,0.09)", border: "1.5px solid rgba(200,255,0,0.22)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8FF00" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0A0A0F", marginBottom: 7 }}>No results</h3>
                  <p style={{ fontSize: 13.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", maxWidth: 280, lineHeight: 1.65 }}>Try a different filter or search term.</p>
                  <button onClick={() => { setCatFilter("All"); setSearchVal(""); }} style={{ marginTop: 20, padding: "10px 22px", background: "#0A0A0F", border: "none", borderRadius: 11, fontSize: 13.5, fontWeight: 700, fontFamily: "'Syne', sans-serif", color: "#C8FF00", cursor: "pointer" }}>Clear filters</button>
                </div>
              )}

              {/* Course grid */}
              {!loading && !error && filteredCourses.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
                  {filteredCourses.map((course, i) => {
                    const title    = typeof course === "string" ? course : course.title    || "Untitled Course";
                    const cat      = typeof course === "object"  ? course.category || "AI & ML" : "AI & ML";
                    const match    = typeof course === "object"  ? course.match    || null  : null;
                    const duration = typeof course === "object"  ? course.duration || null  : null;
                    const rating   = typeof course === "object"  ? course.rating   || null  : null;
                    const level    = typeof course === "object"  ? course.level    || null  : null;
                    const c = getCat(cat);
                    return (
                      <div key={i} className="course-card">
                        <div className="card-thumb">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                            <path d="M22 10v6M2 10l10-8 10 8-10 8-10-8z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                          </svg>
                        </div>
                        <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 9 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: c.text, background: c.bg, border: `1.5px solid ${c.border}`, padding: "3px 10px", borderRadius: 99 }}>{cat}</span>
                            {match && <span style={{ fontSize: 11, fontWeight: 800, color: "#C8FF00" }}>{match} match</span>}
                          </div>
                          <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "#0A0A0F", lineHeight: 1.45, marginBottom: 10, flex: 1 }}>{title}</h3>
                          {(duration || level) && (
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                              {duration && <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}><IcoClock />{duration}</span>}
                              {level && <span style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>· {level}</span>}
                            </div>
                          )}
                          {rating && (
                            <div style={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 14 }}>
                              {[1,2,3,4,5].map(s => <IcoStar key={s} filled={s <= Math.round(rating)} />)}
                              <span style={{ fontSize: 11, color: "#9CA3AF", marginLeft: 4, fontFamily: "'DM Sans', sans-serif" }}>{rating}</span>
                            </div>
                          )}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>
                              <IcoClock /> Self-paced
                            </span>
                            <span className="view-link">View course <IcoArrow /></span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ── MY COURSES ── */}
          {activeTab === "my-courses" && (
            <div className="fade-up">
              <div style={{ marginBottom: 26 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0A0A0F", letterSpacing: "-0.025em" }}>My Courses</h2>
                <p style={{ fontSize: 13.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", marginTop: 3 }}>Pick up where you left off</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {MOCK_MY_COURSES.map((c, i) => {
                  const col = getCat(c.category);
                  return (
                    <div key={i} className="my-course-card">
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                        <div style={{ flex: 1, minWidth: 200 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: col.text, background: col.bg, border: `1.5px solid ${col.border}`, padding: "3px 10px", borderRadius: 99 }}>{c.category}</span>
                            <span style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>Last studied {c.lastStudied}</span>
                          </div>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0A0A0F", marginBottom: 14 }}>{c.title}</h3>
                          <div style={{ marginBottom: 2 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                              <span style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>{c.completed} of {c.lessons} lessons</span>
                              <span style={{ fontSize: 12, fontWeight: 700, color: c.progress >= 80 ? "#C8FF00" : "#374151" }}>{c.progress}%</span>
                            </div>
                            <div className="progress-bar-track">
                              <div className="progress-bar-fill" style={{ width: `${c.progress}%`, background: c.progress >= 80 ? "linear-gradient(90deg,#C8FF00,#00C2FF)" : "linear-gradient(90deg,#00C2FF,#B47AFF)" }} />
                            </div>
                          </div>
                        </div>
                        <button className="resume-btn">
                          <IcoPlay /> Resume
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0A0A0F", marginBottom: 14 }}>Completed</h3>
              <div style={{ background: "#fff", border: "1.5px solid #E8EAED", borderRadius: 18, padding: "36px", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: 15, background: "rgba(200,255,0,0.08)", border: "1.5px solid rgba(200,255,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <IcoCheck />
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#374151", marginBottom: 5 }}>No completed courses yet</p>
                <p style={{ fontSize: 13, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>Finish a course and it will appear here.</p>
              </div>
            </div>
          )}

          {/* ── BROWSE ── */}
          {activeTab === "browse" && (
            <div className="fade-up">
              <div style={{ marginBottom: 26 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0A0A0F", letterSpacing: "-0.025em" }}>Browse Categories</h2>
                <p style={{ fontSize: 13.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", marginTop: 3 }}>Explore all topics available on NaviQ</p>
              </div>
              <div style={{ position: "relative", marginBottom: 28 }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", display: "flex", pointerEvents: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </span>
                <input
                  placeholder="Search all courses…"
                  style={{ paddingLeft: 40, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: "#fff", border: "1.5px solid #E2E4E9", borderRadius: 13, fontSize: 14, fontFamily: "'DM Sans', sans-serif", color: "#0A0A0F", width: "100%", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s" }}
                  onFocus={e => { e.target.style.borderColor = "#C8FF00"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E2E4E9"; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
                {BROWSE_CATS.map((bc) => {
                  const col = getCat(bc.name);
                  return (
                    <div key={bc.name} className="browse-cat-card">
                      <div style={{ fontSize: 28, marginBottom: 12 }}>{bc.icon}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0A0A0F", marginBottom: 5 }}>{bc.name}</div>
                      <div style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", marginBottom: 14 }}>{bc.count}</div>
                      <div style={{ display: "inline-block", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: col.text, background: col.bg, border: `1.5px solid ${col.border}`, padding: "3px 10px", borderRadius: 99 }}>Explore →</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: 32 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0A0A0F", marginBottom: 16 }}>Trending now</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                  {MOCK_RECS.slice(0, 3).map((course, i) => {
                    const col = getCat(course.category);
                    return (
                      <div key={i} className="course-card">
                        <div className="card-thumb">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={col.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                            <path d="M22 10v6M2 10l10-8 10 8-10 8-10-8z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                          </svg>
                        </div>
                        <div style={{ padding: "16px 18px 18px" }}>
                          <div style={{ marginBottom: 8 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: col.text, background: col.bg, border: `1.5px solid ${col.border}`, padding: "3px 10px", borderRadius: 99 }}>{course.category}</span>
                          </div>
                          <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "#0A0A0F", lineHeight: 1.45, marginBottom: 10 }}>{course.title}</h3>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>
                              <IcoClock />{course.duration}
                            </div>
                            <span className="view-link">Enroll <IcoArrow /></span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── SAVED ── */}
          {activeTab === "saved" && (
            <div className="fade-up">
              <div style={{ marginBottom: 26 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0A0A0F", letterSpacing: "-0.025em" }}>Saved Courses</h2>
                <p style={{ fontSize: 13.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", marginTop: 3 }}>{SAVED_COURSES.length} courses bookmarked</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {SAVED_COURSES.map((s, i) => {
                  const col = getCat(s.category);
                  return (
                    <div key={i} className="saved-card">
                      <div style={{ width: 56, height: 56, borderRadius: 14, background: col.bg, border: `1.5px solid ${col.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={col.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 10v6M2 10l10-8 10 8-10 8-10-8z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                          <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: col.text, background: col.bg, border: `1.5px solid ${col.border}`, padding: "2px 9px", borderRadius: 99 }}>{s.category}</span>
                          <span style={{ fontSize: 12, color: "#B0B5BE", fontFamily: "'DM Sans', sans-serif" }}>Saved {s.savedAt}</span>
                        </div>
                        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0A0A0F", marginBottom: 5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.title}</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>
                            <IcoClock />{s.duration}
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                            {[1,2,3,4,5].map(x => <IcoStar key={x} filled={x <= Math.round(s.rating)} />)}
                            <span style={{ fontSize: 11.5, color: "#9CA3AF", marginLeft: 3, fontFamily: "'DM Sans', sans-serif" }}>{s.rating}</span>
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <button className="resume-btn" style={{ background: col.bg, color: col.text, border: `1.5px solid ${col.border}` }}>
                          <IcoPlay /> Start
                        </button>
                        <button style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,92,58,0.08)", border: "1.5px solid rgba(255,92,58,0.18)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 0.18s" }}
                          title="Remove"
                          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,92,58,0.16)"}
                          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,92,58,0.08)"}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5C3A" strokeWidth="2.2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}