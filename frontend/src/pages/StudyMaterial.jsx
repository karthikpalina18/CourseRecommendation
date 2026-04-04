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

/* ── Icons ── */
const IcoPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);
const IcoVideo = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const IcoPDF = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IcoArticle = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16v16H4z" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/>
  </svg>
);
const IcoLink = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);
const IcoClock = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IcoPlay = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
);
const IcoArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IcoBack = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
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
const IcoExternalLink = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ── Type config ── */
const typeConfig = {
  video:   { label: "Video",   icon: IcoVideo,   color: "#FF5C3A", bg: "rgba(255,92,58,0.1)",   border: "rgba(255,92,58,0.22)",   text: "#7A2010" },
  pdf:     { label: "PDF",     icon: IcoPDF,     color: "#E04040", bg: "rgba(220,50,50,0.1)",   border: "rgba(220,50,50,0.22)",   text: "#7A1020" },
  article: { label: "Article", icon: IcoArticle, color: "#00C2FF", bg: "rgba(0,194,255,0.1)",   border: "rgba(0,194,255,0.22)",  text: "#0A5F7A" },
  link:    { label: "Link",    icon: IcoLink,    color: "#B47AFF", bg: "rgba(180,122,255,0.1)", border: "rgba(180,122,255,0.25)", text: "#4A1F7A" },
};
const getType = (t) => typeConfig[t?.toLowerCase()] || typeConfig.link;

const TYPES = ["video", "pdf", "article", "link"];

/* ── Helpers ── */
const fmtDuration = (secs) => {
  if (!secs) return null;
  const s = parseInt(secs, 10);
  if (isNaN(s)) return secs;
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60), rem = s % 60;
  if (m < 60) return rem > 0 ? `${m}m ${rem}s` : `${m}m`;
  const h = Math.floor(m / 60), rm = m % 60;
  return rm > 0 ? `${h}h ${rm}m` : `${h}h`;
};

/* ── Toast ── */
const Toast = ({ msg, type, onClose }) => (
  <div style={{
    position: "fixed", bottom: 28, right: 28, zIndex: 999,
    background: "#0A0A0F", border: `1.5px solid ${type === "success" ? "rgba(200,255,0,0.4)" : "rgba(255,92,58,0.4)"}`,
    borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", gap: 10,
    boxShadow: "0 16px 40px rgba(0,0,0,0.3)", minWidth: 260, animation: "slideUp 0.25s ease forwards"
  }}>
    {type === "success" ? <IcoCheck /> : <IcoAlert />}
    <span style={{ fontSize: 13.5, fontWeight: 600, color: "#fff", fontFamily: "'Syne', sans-serif", flex: 1 }}>{msg}</span>
    <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#4B5563", display: "flex" }}><IcoX /></button>
  </div>
);

/* ── Add Material Modal ── */
const AddModal = ({ onClose, onSubmit, form, setForm, loading }) => {
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const tc = getType(form.type);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(10,10,15,0.7)", backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: "#fff", borderRadius: 22, padding: "32px", width: "100%", maxWidth: 500,
        boxShadow: "0 32px 80px rgba(0,0,0,0.2)", animation: "scaleIn 0.22s ease forwards"
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0A0A0F", letterSpacing: "-0.02em" }}>Add Study Material</h2>
            <p style={{ fontSize: 13, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>Attach a resource to this course</p>
          </div>
          <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 9, background: "#F4F5F7", border: "1.5px solid #E2E4E9", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6B7280" }}><IcoX /></button>
        </div>

        {/* Type selector */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 8, fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>Material Type</label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
            {TYPES.map(t => {
              const cfg = getType(t);
              const active = form.type === t;
              const Icon = cfg.icon;
              return (
                <button key={t} onClick={() => setForm(f => ({ ...f, type: t }))} style={{
                  padding: "10px 8px", borderRadius: 11, border: `1.5px solid ${active ? cfg.border : "#E2E4E9"}`,
                  background: active ? cfg.bg : "#F4F5F7", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
                  transition: "all 0.18s"
                }}>
                  <Icon color={active ? cfg.color : "#9CA3AF"} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: active ? cfg.text : "#9CA3AF", fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{cfg.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { name: "title", label: "Title", placeholder: "e.g. Introduction to Neural Networks" },
            { name: "content_url", label: "Content URL", placeholder: "https://example.com/resource" },
          ].map(f => (
            <div key={f.name}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>{f.label}</label>
              <input
                name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder}
                style={{ width: "100%", padding: "10px 13px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 11, fontSize: 13.5, fontFamily: "'DM Sans', sans-serif", color: "#0A0A0F", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box" }}
                onFocus={e => { e.target.style.borderColor = "#C8FF00"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "#E2E4E9"; e.target.style.boxShadow = "none"; }}
              />
            </div>
          ))}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>Duration (seconds)</label>
              <input
                name="duration" value={form.duration} onChange={handleChange} placeholder="e.g. 3600"
                type="number" min="0"
                style={{ width: "100%", padding: "10px 13px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 11, fontSize: 13.5, fontFamily: "'DM Sans', sans-serif", color: "#0A0A0F", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box" }}
                onFocus={e => { e.target.style.borderColor = "#C8FF00"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "#E2E4E9"; e.target.style.boxShadow = "none"; }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>Order</label>
              <input
                name="order" value={form.order} onChange={handleChange} placeholder="e.g. 1"
                type="number" min="1"
                style={{ width: "100%", padding: "10px 13px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 11, fontSize: 13.5, fontFamily: "'DM Sans', sans-serif", color: "#0A0A0F", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box" }}
                onFocus={e => { e.target.style.borderColor = "#C8FF00"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "#E2E4E9"; e.target.style.boxShadow = "none"; }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          <button onClick={onClose} style={{ flex: 1, padding: "12px", background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 12, fontSize: 13.5, fontWeight: 700, fontFamily: "'Syne', sans-serif", color: "#6B7280", cursor: "pointer" }}>Cancel</button>
          <button onClick={onSubmit} disabled={loading} style={{
            flex: 2, padding: "12px", background: loading ? "#E2E4E9" : "#0A0A0F", border: "none", borderRadius: 12,
            fontSize: 13.5, fontWeight: 700, fontFamily: "'Syne', sans-serif", color: loading ? "#9CA3AF" : "#C8FF00",
            cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            transition: "transform 0.15s"
          }}>
            {loading ? "Adding…" : <><IcoPlus /> Add Material</>}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Type stats bar ── */
const TypeBar = ({ materials }) => {
  const counts = TYPES.reduce((acc, t) => {
    acc[t] = materials.filter(m => m.type?.toLowerCase() === t).length;
    return acc;
  }, {});
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {TYPES.map(t => {
        const cfg = getType(t);
        if (!counts[t]) return null;
        return (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", background: cfg.bg, border: `1.5px solid ${cfg.border}`, borderRadius: 99 }}>
            <cfg.icon color={cfg.color} />
            <span style={{ fontSize: 12, fontWeight: 700, color: cfg.text, fontFamily: "'Syne', sans-serif" }}>{counts[t]} {cfg.label}</span>
          </div>
        );
      })}
    </div>
  );
};

/* ── Main Component ── */
export default function StudyMaterialPage({ courseId, courseName, onBack }) {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);
  const [typeFilter, setTypeFilter] = useState("All");
  const [form, setForm] = useState({ title: "", type: "video", content_url: "", duration: "", order: "" });

  const userName = localStorage.getItem("userName") || "Learner";
  const initials = userName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchMaterials = async () => {
    if (!courseId) return;
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/study-materials/${courseId}`);
      setMaterials(res.data);
    } catch {
      showToast("Failed to load materials.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMaterials(); }, [courseId]);

  const handleSubmit = async () => {
    if (!form.title.trim())       { showToast("Title is required.", "error"); return; }
    if (!form.content_url.trim()) { showToast("Content URL is required.", "error"); return; }
    setSubmitting(true);
    try {
      await axios.post("http://localhost:5000/api/study-materials", {
        ...form,
        course_id: courseId,
        duration: form.duration ? parseInt(form.duration, 10) : undefined,
        order: form.order ? parseInt(form.order, 10) : undefined,
      });
      setForm({ title: "", type: "video", content_url: "", duration: "", order: "" });
      setShowModal(false);
      showToast("Material added successfully!");
      fetchMaterials();
    } catch {
      showToast("Failed to add material.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/study-materials/${id}`);
      showToast("Material removed.");
      fetchMaterials();
    } catch {
      showToast("Failed to delete material.", "error");
    }
  };

  const totalDuration = materials.reduce((sum, m) => sum + (parseInt(m.duration, 10) || 0), 0);

  const filtered = typeFilter === "All" ? materials : materials.filter(m => m.type?.toLowerCase() === typeFilter);

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", minHeight: "100vh", background: "#F0F1F4", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .material-card { background: #fff; border: 1.5px solid #E8EAED; border-radius: 18px; padding: 20px 22px; display: flex; align-items: center; gap: 16px; cursor: default; transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s; }
        .material-card:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.07); border-color: rgba(200,255,0,0.35); }

        .tab-pill { padding: 6px 15px; border-radius: 99px; border: 1.5px solid #E2E4E9; font-family: 'Syne', sans-serif; font-size: 12.5px; font-weight: 700; cursor: pointer; background: #fff; color: #9CA3AF; transition: all 0.18s; white-space: nowrap; }
        .tab-pill.active { background: #0A0A0F; color: #C8FF00; border-color: #0A0A0F; }
        .tab-pill:not(.active):hover { border-color: #C8FF00; color: #374151; }

        .open-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: #F4F5F7; border: 1.5px solid #E2E4E9; border-radius: 10px; font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 700; cursor: pointer; color: #374151; transition: all 0.18s; text-decoration: none; }
        .open-btn:hover { background: #0A0A0F; color: #C8FF00; border-color: #0A0A0F; }

        .create-btn { display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; background: #0A0A0F; color: #C8FF00; border: none; border-radius: 12px; font-family: 'Syne', sans-serif; font-size: 13.5px; font-weight: 700; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; }
        .create-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }

        .back-btn { display: inline-flex; align-items: center; gap: 7px; padding: 8px 14px; background: #F4F5F7; border: 1.5px solid #E2E4E9; border-radius: 10px; font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; color: #374151; transition: all 0.18s; }
        .back-btn:hover { background: #0A0A0F; color: #fff; border-color: #0A0A0F; }

        .del-btn { width: 32px; height: 32px; border-radius: 9px; background: rgba(255,92,58,0.08); border: 1.5px solid rgba(255,92,58,0.18); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.18s; flex-shrink: 0; }
        .del-btn:hover { background: rgba(255,92,58,0.18); }

        .stat-card { background: #fff; border: 1.5px solid #E8EAED; border-radius: 16px; padding: 18px 20px; }

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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
            <NaviQLogo size={30} />
            <span style={{ fontWeight: 800, fontSize: 18, color: "#0A0A0F", letterSpacing: "-0.02em" }}>Navi<span style={{ color: "#00C2FF" }}>Q</span></span>
          </a>
          {onBack && (
            <>
              <span style={{ color: "#D1D5DB", fontSize: 18 }}>/</span>
              <button className="back-btn" onClick={onBack}><IcoBack /> Courses</button>
            </>
          )}
          {courseName && (
            <>
              <span style={{ color: "#D1D5DB", fontSize: 18 }}>/</span>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: "#374151" }}>{courseName}</span>
            </>
          )}
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
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#374151", marginBottom: 12, paddingLeft: 13 }}>Filter by type</p>
          {["All", ...TYPES].map(t => {
            const cfg = t === "All" ? null : getType(t);
            const count = t === "All" ? materials.length : materials.filter(m => m.type?.toLowerCase() === t).length;
            const active = typeFilter === t;
            return (
              <button key={t} onClick={() => setTypeFilter(t)} style={{
                width: "100%", display: "flex", alignItems: "center", gap: 10,
                padding: "9px 13px", borderRadius: 11, border: `1.5px solid ${active ? "rgba(200,255,0,0.22)" : "transparent"}`,
                background: active ? "rgba(200,255,0,0.1)" : "transparent",
                fontFamily: "'Syne', sans-serif", fontSize: 13.5, fontWeight: 600,
                cursor: "pointer", textAlign: "left", marginBottom: 3,
                color: active ? "#C8FF00" : "#6B7280", transition: "all 0.18s"
              }}>
                {cfg ? <cfg.icon color={active ? "#C8FF00" : "#6B7280"} /> : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={active ? "#C8FF00" : "#6B7280"} strokeWidth="2.2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>}
                {t === "All" ? "All Materials" : getType(t).label}
                <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 800, padding: "2px 8px", borderRadius: 99, background: active ? "rgba(200,255,0,0.18)" : "rgba(255,255,255,0.06)", color: active ? "#C8FF00" : "#4B5563" }}>{count}</span>
              </button>
            );
          })}

          {/* Stats */}
          <div style={{ margin: "24px 0 0", padding: "16px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Course stats</p>
            {[
              { label: "Total materials", value: materials.length },
              { label: "Total duration", value: fmtDuration(totalDuration) || "—" },
            ].map(s => (
              <div key={s.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: "#4B5563", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF" }}>{s.value}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "auto" }}>
            <button className="create-btn" style={{ width: "100%", justifyContent: "center" }} onClick={() => setShowModal(true)}>
              <IcoPlus /> Add Material
            </button>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main style={{ flex: 1, padding: "30px 32px", overflowY: "auto", minWidth: 0 }}>
          <div className="fade-up">
            {/* Header */}
            <div style={{ background: "#0A0A0F", borderRadius: 22, padding: "28px 32px", marginBottom: 24, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-60px", right: "-40px", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,194,255,0.18) 0%,transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
                <div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginBottom: 6 }}>Study Materials</p>
                  <h1 style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                    {courseName || "Course Materials"}
                  </h1>
                  <div style={{ marginTop: 10 }}>
                    {!loading && <TypeBar materials={materials} />}
                  </div>
                </div>
                <button className="create-btn" onClick={() => setShowModal(true)}>
                  <IcoPlus /> Add Material
                </button>
              </div>
            </div>

            {/* Filter */}
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 22 }}>
              {["All", ...TYPES].map(t => (
                <button key={t} className={`tab-pill ${typeFilter === t ? "active" : ""}`} onClick={() => setTypeFilter(t)}>
                  {t === "All" ? "All" : getType(t).label}
                </button>
              ))}
            </div>

            {/* Loading */}
            {loading && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} style={{ background: "#fff", borderRadius: 18, padding: "20px 22px", border: "1.5px solid #E8EAED", display: "flex", alignItems: "center", gap: 16 }}>
                    <div className="shimmer" style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div className="shimmer" style={{ height: 11, width: "22%", marginBottom: 8 }} />
                      <div className="shimmer" style={{ height: 14, width: "60%", marginBottom: 6 }} />
                      <div className="shimmer" style={{ height: 11, width: "30%" }} />
                    </div>
                    <div className="shimmer" style={{ width: 80, height: 34, borderRadius: 10, flexShrink: 0 }} />
                  </div>
                ))}
              </div>
            )}

            {/* Empty */}
            {!loading && filtered.length === 0 && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 0", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(0,194,255,0.08)", border: "1.5px solid rgba(0,194,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <IcoVideo color="#00C2FF" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0A0A0F", marginBottom: 7 }}>No materials yet</h3>
                <p style={{ fontSize: 13.5, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", maxWidth: 280, lineHeight: 1.65 }}>
                  {typeFilter !== "All" ? `No ${getType(typeFilter).label} materials found.` : "Add your first study material to get started."}
                </p>
                {typeFilter !== "All" ? (
                  <button onClick={() => setTypeFilter("All")} style={{ marginTop: 20, padding: "10px 22px", background: "#0A0A0F", border: "none", borderRadius: 11, fontSize: 13.5, fontWeight: 700, fontFamily: "'Syne', sans-serif", color: "#C8FF00", cursor: "pointer" }}>Show all types</button>
                ) : (
                  <button className="create-btn" style={{ marginTop: 20 }} onClick={() => setShowModal(true)}><IcoPlus /> Add first material</button>
                )}
              </div>
            )}

            {/* Material list */}
            {!loading && filtered.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((m, idx) => {
                  const tc = getType(m.type);
                  const Icon = tc.icon;
                  return (
                    <div key={m._id || idx} className="material-card">
                      {/* Order badge */}
                      {m.order && (
                        <div style={{ width: 28, height: 28, borderRadius: 8, background: "#F4F5F7", border: "1.5px solid #E2E4E9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#9CA3AF", flexShrink: 0 }}>
                          {m.order}
                        </div>
                      )}

                      {/* Type icon */}
                      <div style={{ width: 52, height: 52, borderRadius: 14, background: tc.bg, border: `1.5px solid ${tc.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon color={tc.color} />
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                          <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: tc.text, background: tc.bg, border: `1.5px solid ${tc.border}`, padding: "2px 9px", borderRadius: 99 }}>{tc.label}</span>
                          {m.duration && (
                            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>
                              <IcoClock />{fmtDuration(m.duration)}
                            </span>
                          )}
                        </div>
                        <h3 style={{ fontSize: 14.5, fontWeight: 700, color: "#0A0A0F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: 3 }}>{m.title}</h3>
                        {m.content_url && (
                          <p style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.content_url}</p>
                        )}
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", gap: 8, flexShrink: 0, alignItems: "center" }}>
                        {m.content_url && (
                          <a href={m.content_url} target="_blank" rel="noreferrer" className="open-btn">
                            {m.type === "video" ? <IcoPlay /> : <IcoExternalLink />}
                            {m.type === "video" ? "Play" : "Open"}
                          </a>
                        )}
                        <button className="del-btn" onClick={() => handleDelete(m._id)}>
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
        <AddModal
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