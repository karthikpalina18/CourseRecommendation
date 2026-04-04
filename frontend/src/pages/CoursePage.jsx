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

/* ── Inline Icons ── */
const IcoPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);
const IcoBook = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);
const IcoClock = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IcoArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IcoTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5C3A" strokeWidth="2.2" strokeLinecap="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
  </svg>
);
const IcoX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const IcoCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8FF00" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const IcoAlert = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5C3A" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);
const IcoSearch = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const IcoGrid = ({ active }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={active ? "#C8FF00" : "currentColor"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>
);
const IcoList = ({ active }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={active ? "#C8FF00" : "currentColor"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
    <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
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

const CATEGORIES = ["AI & ML", "Web Dev", "Cloud", "Data", "Design", "Security", "DevOps"];
const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"];

/* ── Toast ── */
const Toast = ({ msg, type, onClose }) => (
  <div style={{
    position: "fixed", bottom: 28, right: 28, zIndex: 999,
    background: "#0A0A0F", border: `1.5px solid ${type === "success" ? "rgba(200,255,0,0.4)" : "rgba(255,92,58,0.4)"}`,
    borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", gap: 10,
    boxShadow: "0 16px 40px rgba(0,0,0,0.3)", minWidth: 260,
    animation: "slideUp 0.25s ease forwards"
  }}>
    {type === "success" ? <IcoCheck /> : <IcoAlert />}
    <span style={{ fontSize: 13.5, fontWeight: 600, color: "#fff", fontFamily: "'Syne', sans-serif", flex: 1 }}>{msg}</span>
    <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#4B5563", display: "flex" }}><IcoX /></button>
  </div>
);

/* ── Modal ── */
const Modal = ({ onClose, onSubmit, form, setForm, loading }) => {
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(10,10,15,0.7)", backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: "#fff", borderRadius: 22, padding: "32px", width: "100%", maxWidth: 480,
        boxShadow: "0 32px 80px rgba(0,0,0,0.2)", animation: "scaleIn 0.22s ease forwards"
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0A0A0F", letterSpacing: "-0.02em" }}>Create New Course</h2>
            <p style={{ fontSize: 13, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>Add a course to the NaviQ catalogue</p>
          </div>
          <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 9, background: "#F4F5F7", border: "1.5px solid #E2E4E9", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6B7280" }}><IcoX /></button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { name: "title", label: "Course Title", placeholder: "e.g. Deep Learning with PyTorch" },
            { name: "description", label: "Description", placeholder: "Brief overview of what students will learn…", multiline: true },
          ].map(f => (
            <div key={f.name}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>{f.label}</label>
              {f.multiline ? (
                <textarea
                  name={f.name} value={form[f.name]} onChange={handleChange}
                  placeholder={f.placeholder} rows={3}
                  style={{ width: "100%", padding: "10px 13px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 11, fontSize: 13.5, fontFamily: "'DM Sans', sans-serif", color: "#0A0A0F", outline: "none", resize: "vertical", transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box" }}
                  onFocus={e => { e.target.style.borderColor = "#C8FF00"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E2E4E9"; e.target.style.boxShadow = "none"; }}
                />
              ) : (
                <input
                  name={f.name} value={form[f.name]} onChange={handleChange}
                  placeholder={f.placeholder}
                  style={{ width: "100%", padding: "10px 13px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 11, fontSize: 13.5, fontFamily: "'DM Sans', sans-serif", color: "#0A0A0F", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box" }}
                  onFocus={e => { e.target.style.borderColor = "#C8FF00"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E2E4E9"; e.target.style.boxShadow = "none"; }}
                />
              )}
            </div>
          ))}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { name: "category", label: "Category", options: CATEGORIES },
              { name: "difficulty", label: "Difficulty", options: DIFFICULTIES },
            ].map(f => (
              <div key={f.name}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>{f.label}</label>
                <select
                  name={f.name} value={form[f.name]} onChange={handleChange}
                  style={{ width: "100%", padding: "10px 13px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 11, fontSize: 13.5, fontFamily: "'DM Sans', sans-serif", color: form[f.name] ? "#0A0A0F" : "#9CA3AF", outline: "none", cursor: "pointer", transition: "border-color 0.2s", appearance: "none", boxSizing: "border-box" }}
                  onFocus={e => e.target.style.borderColor = "#C8FF00"}
                  onBlur={e => e.target.style.borderColor = "#E2E4E9"}
                >
                  <option value="">Select {f.label}</option>
                  {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          <button onClick={onClose} style={{ flex: 1, padding: "12px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 12, fontSize: 13.5, fontWeight: 700, fontFamily: "'Syne', sans-serif", color: "#6B7280", cursor: "pointer" }}>
            Cancel
          </button>
          <button onClick={onSubmit} disabled={loading} style={{
            flex: 2, padding: "12px", background: loading ? "#E2E4E9" : "#0A0A0F", border: "none", borderRadius: 12,
            fontSize: 13.5, fontWeight: 700, fontFamily: "'Syne', sans-serif", color: loading ? "#9CA3AF" : "#C8FF00",
            cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            transition: "transform 0.15s, box-shadow 0.15s"
          }}>
            {loading ? "Creating…" : <><IcoPlus /> Create Course</>}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Main Component ── */
export default function CoursePage({ onSelectCourse }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // grid | list
  const [form, setForm] = useState({ title: "", category: "", difficulty: "", description: "" });

  const userName = localStorage.getItem("userName") || "Learner";
  const initials = userName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data);
    } catch {
      showToast("Failed to load courses. Check your server.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleSubmit = async () => {
    if (!form.title.trim()) { showToast("Course title is required.", "error"); return; }
    if (!form.category)      { showToast("Please select a category.", "error"); return; }
    if (!form.difficulty)    { showToast("Please select a difficulty.", "error"); return; }
    setSubmitting(true);
    try {
      await axios.post("http://localhost:5000/api/courses", form);
      setForm({ title: "", category: "", difficulty: "", description: "" });
      setShowModal(false);
      showToast("Course created successfully!");
      fetchCourses();
    } catch {
      showToast("Failed to create course.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      showToast("Course removed.");
      fetchCourses();
    } catch {
      showToast("Failed to delete course.", "error");
    }
  };

  const filtered = courses.filter(c => {
    const matchSearch = c.title?.toLowerCase().includes(search.toLowerCase()) || c.description?.toLowerCase().includes(search.toLowerCase());
    const matchCat = catFilter === "All" || c.category === catFilter;
    return matchSearch && matchCat;
  });

  const filterTabs = ["All", ...CATEGORIES];

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", minHeight: "100vh", background: "#F0F1F4", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .course-card { background: #fff; border: 1.5px solid #E8EAED; border-radius: 18px; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s; }
        .course-card:hover { transform: translateY(-4px); box-shadow: 0 16px 42px rgba(0,0,0,0.09); border-color: rgba(200,255,0,0.5); }
        .course-card:hover .card-thumb { background: #0A0A0F; }
        .course-card:hover .view-link { color: #C8FF00; }
        .card-thumb { height: 96px; background: #F4F5F7; display: flex; align-items: center; justify-content: center; transition: background 0.25s; border-bottom: 1.5px solid #E8EAED; }

        .list-card { background: #fff; border: 1.5px solid #E8EAED; border-radius: 16px; padding: 18px 22px; display: flex; align-items: center; gap: 16px; cursor: pointer; transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s; }
        .list-card:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.07); border-color: rgba(200,255,0,0.4); }

        .tab-pill { padding: 6px 15px; border-radius: 99px; border: 1.5px solid #E2E4E9; font-family: 'Syne', sans-serif; font-size: 12.5px; font-weight: 700; cursor: pointer; background: #fff; color: #9CA3AF; transition: all 0.18s; white-space: nowrap; }
        .tab-pill.active { background: #0A0A0F; color: #C8FF00; border-color: #0A0A0F; }
        .tab-pill:not(.active):hover { border-color: #C8FF00; color: #374151; }

        .view-link { font-size: 12px; font-weight: 700; color: #9CA3AF; transition: color 0.18s; display: flex; align-items: center; gap: 5px; }

        .create-btn { display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; background: #0A0A0F; color: #C8FF00; border: none; border-radius: 12px; font-family: 'Syne', sans-serif; font-size: 13.5px; font-weight: 700; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; }
        .create-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }

        .icon-btn { width: 34px; height: 34px; border-radius: 9px; background: #F4F5F7; border: 1.5px solid #E2E4E9; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.18s; color: #6B7280; }
        .icon-btn.active { background: #0A0A0F; border-color: #0A0A0F; color: #C8FF00; }
        .icon-btn:not(.active):hover { border-color: #C8FF00; }

        .del-btn { width: 32px; height: 32px; border-radius: 9px; background: rgba(255,92,58,0.08); border: 1.5px solid rgba(255,92,58,0.18); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.18s; flex-shrink: 0; }
        .del-btn:hover { background: rgba(255,92,58,0.18); }

        .shimmer { background: linear-gradient(90deg,#F0F1F4 25%,#E4E5E8 50%,#F0F1F4 75%); background-size: 800px 100%; animation: shimmer 1.4s infinite; border-radius: 10px; }
        @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scaleIn { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }
        .fade-up { animation: fadeUp 0.35s ease forwards; }
        ::-webkit-scrollbar { width: 5px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 99px; }
      `}</style>

      {/* ── TOPBAR ── */}
      <header style={{ background: "rgba(255,255,255,0.94)", backdropFilter: "blur(16px)", borderBottom: "1.5px solid #E8EAED", padding: "0 28px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
            <NaviQLogo size={30} />
            <span style={{ fontWeight: 800, fontSize: 18, color: "#0A0A0F", letterSpacing: "-0.02em" }}>Navi<span style={{ color: "#00C2FF" }}>Q</span></span>
          </a>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <span style={{ position: "absolute", left: 11, color: "#9CA3AF", display: "flex", pointerEvents: "none" }}><IcoSearch /></span>
            <input
              placeholder="Search courses…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: 33, paddingRight: 14, paddingTop: 8, paddingBottom: 8, background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 10, fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#0A0A0F", width: 210, outline: "none", transition: "border-color 0.2s, box-shadow 0.2s" }}
              onFocus={e => { e.target.style.borderColor = "#C8FF00"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.1)"; }}
              onBlur={e => { e.target.style.borderColor = "#E2E4E9"; e.target.style.boxShadow = "none"; }}
            />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "5px 11px 5px 5px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 11 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#C8FF00,#00C2FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#0A0A0F" }}>{initials}</div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>{userName.split(" ")[0]}</span>
          </div>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* ── SIDEBAR ── */}
        <aside style={{ width: 210, background: "#0A0A0F", flexShrink: 0, display: "flex", flexDirection: "column", padding: "26px 14px", height: "calc(100vh - 62px)", position: "sticky", top: 62 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#374151", marginBottom: 12, paddingLeft: 13 }}>Course Admin</p>
          {[
            { label: "All Courses", count: courses.length, active: true },
            { label: "Published", count: courses.filter(c => c.status === "published").length, active: false },
            { label: "Draft", count: courses.filter(c => c.status === "draft").length, active: false },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 13px", borderRadius: 11, marginBottom: 3, background: item.active ? "rgba(200,255,0,0.1)" : "transparent", border: `1.5px solid ${item.active ? "rgba(200,255,0,0.22)" : "transparent"}`, cursor: "pointer" }}>
              <span style={{ fontSize: 13.5, fontWeight: 600, color: item.active ? "#C8FF00" : "#6B7280" }}>{item.label}</span>
              <span style={{ fontSize: 11, fontWeight: 800, padding: "2px 8px", borderRadius: 99, background: item.active ? "rgba(200,255,0,0.18)" : "rgba(255,255,255,0.06)", color: item.active ? "#C8FF00" : "#4B5563" }}>{item.count}</span>
            </div>
          ))}

          <div style={{ margin: "24px 0 0", padding: "16px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Catalogue stats</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Total courses", value: courses.length },
                { label: "Categories", value: [...new Set(courses.map(c => c.category))].length },
              ].map(s => (
                <div key={s.label} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "#4B5563", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "auto" }}>
            <button className="create-btn" style={{ width: "100%", justifyContent: "center" }} onClick={() => setShowModal(true)}>
              <IcoPlus /> New Course
            </button>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main style={{ flex: 1, padding: "30px 32px", overflowY: "auto", minWidth: 0 }}>
          <div className="fade-up">
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 14 }}>
              <div>
                <h1 style={{ fontSize: 22, fontWeight: 800, color: "#0A0A0F", letterSpacing: "-0.025em" }}>Course Catalogue</h1>
                <p style={{ fontSize: 13.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", marginTop: 3 }}>
                  {loading ? "Loading…" : `${filtered.length} course${filtered.length !== 1 ? "s" : ""} ${catFilter !== "All" ? `in ${catFilter}` : "available"}`}
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button className={`icon-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}><IcoGrid active={viewMode === "grid"} /></button>
                <button className={`icon-btn ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")}><IcoList active={viewMode === "list"} /></button>
                <button className="create-btn" onClick={() => setShowModal(true)}><IcoPlus /> New Course</button>
              </div>
            </div>

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 24 }}>
              {filterTabs.map(t => (
                <button key={t} className={`tab-pill ${catFilter === t ? "active" : ""}`} onClick={() => setCatFilter(t)}>{t}</button>
              ))}
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

            {/* Empty state */}
            {!loading && filtered.length === 0 && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 0", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(200,255,0,0.09)", border: "1.5px solid rgba(200,255,0,0.22)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <IcoBook color="#C8FF00" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0A0A0F", marginBottom: 7 }}>No courses yet</h3>
                <p style={{ fontSize: 13.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", maxWidth: 280, lineHeight: 1.65 }}>
                  {search || catFilter !== "All" ? "Try a different filter or search term." : "Create your first course to get started."}
                </p>
                {(search || catFilter !== "All") ? (
                  <button onClick={() => { setSearch(""); setCatFilter("All"); }} style={{ marginTop: 20, padding: "10px 22px", background: "#0A0A0F", border: "none", borderRadius: 11, fontSize: 13.5, fontWeight: 700, fontFamily: "'Syne', sans-serif", color: "#C8FF00", cursor: "pointer" }}>Clear filters</button>
                ) : (
                  <button className="create-btn" style={{ marginTop: 20 }} onClick={() => setShowModal(true)}><IcoPlus /> Create first course</button>
                )}
              </div>
            )}

            {/* Grid view */}
            {!loading && filtered.length > 0 && viewMode === "grid" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
                {filtered.map((course) => {
                  const c = getCat(course.category);
                  return (
                    <div key={course._id} className="course-card" onClick={() => onSelectCourse?.(course._id)}>
                      <div className="card-thumb">
                        <IcoBook color={c.icon} />
                      </div>
                      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 9 }}>
                          <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: c.text, background: c.bg, border: `1.5px solid ${c.border}`, padding: "3px 10px", borderRadius: 99 }}>{course.category || "General"}</span>
                          {course.difficulty && (
                            <span style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>{course.difficulty}</span>
                          )}
                        </div>
                        <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "#0A0A0F", lineHeight: 1.45, marginBottom: 8, flex: 1 }}>{course.title}</h3>
                        {course.description && (
                          <p style={{ fontSize: 12.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.55, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                            {course.description}
                          </p>
                        )}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                          <span className="view-link">View materials <IcoArrow /></span>
                          <button className="del-btn" onClick={e => { e.stopPropagation(); handleDelete(course._id); }}>
                            <IcoTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* List view */}
            {!loading && filtered.length > 0 && viewMode === "list" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((course) => {
                  const c = getCat(course.category);
                  return (
                    <div key={course._id} className="list-card" onClick={() => onSelectCourse?.(course._id)}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: c.bg, border: `1.5px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <IcoBook color={c.icon} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: c.text, background: c.bg, border: `1.5px solid ${c.border}`, padding: "2px 9px", borderRadius: 99 }}>{course.category || "General"}</span>
                          {course.difficulty && <span style={{ fontSize: 11.5, color: "#B0B5BE", fontFamily: "'DM Sans', sans-serif" }}>{course.difficulty}</span>}
                        </div>
                        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0A0A0F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{course.title}</h3>
                        {course.description && <p style={{ fontSize: 12.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{course.description}</p>}
                      </div>
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <span className="view-link" style={{ padding: "0 4px" }}>Open <IcoArrow /></span>
                        <button className="del-btn" onClick={e => { e.stopPropagation(); handleDelete(course._id); }}>
                          <IcoTrash />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* ── MODAL ── */}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
          form={form}
          setForm={setForm}
          loading={submitting}
        />
      )}

      {/* ── TOAST ── */}
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}