import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    axios.post("http://localhost:5000/api/behavior", {
      action: "visit_home",
      timestamp: new Date(),
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to axios.post("/api/contact", form)
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="bg-white text-gray-900 min-h-screen overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --lime: #C8FF00;
          --lime-dark: #a8d600;
          --sky: #00C2FF;
          --coral: #FF5C3A;
          --ink: #0A0A0F;
          --mist: #F4F5F7;
          --mid: #6B7280;
          
        }

        * { box-sizing: border-box; }

        .btn-lime {
          background: var(--lime);
          color: var(--ink);
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .btn-lime:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(200,255,0,0.45); }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--ink);
          color: var(--ink);
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .btn-outline:hover { background: var(--ink); color: #fff; }

        .card-hover {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.1); }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--mist);
          border: 1.5px solid #E2E4E9;
          border-radius: 99px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 600;
          color: var(--mid);
        }

        .nav-link {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: var(--lime);
          transition: width 0.25s;
          border-radius: 2px;
        }
        .nav-link:hover::after { width: 100%; }

        .tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--mid);
        }

        .input-field {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #E2E4E9;
          border-radius: 14px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          color: var(--ink);
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .input-field:focus {
          border-color: var(--sky);
          box-shadow: 0 0 0 4px rgba(0,194,255,0.12);
        }
        .input-field::placeholder { color: #B0B5BE; }

        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .float { animation: float 4s ease-in-out infinite; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

        .gradient-text {
          background: linear-gradient(135deg, #00C2FF 0%, #C8FF00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .course-chip {
          background: #fff;
          border: 2px solid #E2E4E9;
          border-radius: 16px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: border-color 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }
        .course-chip:hover {
          border-color: var(--lime);
          box-shadow: 0 4px 20px rgba(200,255,0,0.2);
        }

        section { position: relative; }
      `}</style>

      {/* ── HEADER ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1.5px solid #F0F1F3'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="10" fill="#0A0A0F"/>
              <path d="M10 18 C10 13 13 10 18 10 C21 10 23.5 11.5 25 14" stroke="#C8FF00" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M26 18 C26 23 23 26 18 26 C15 26 12.5 24.5 11 22" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="18" cy="18" r="3" fill="#C8FF00"/>
              <circle cx="25.5" cy="14.5" r="2" fill="#C8FF00"/>
              <circle cx="10.5" cy="21.5" r="2" fill="#00C2FF"/>
            </svg>
            <span style={{ fontWeight: 800, fontSize: 20, color: '#0A0A0F', letterSpacing: '-0.02em' }}>Navi<span style={{ color: '#00C2FF' }}>Q</span></span>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {[["Home", "#home"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="/login" style={{ fontSize: 14, fontWeight: 600, color: '#374151', textDecoration: 'none', padding: '9px 18px', borderRadius: 10, transition: 'background 0.15s' }}
              onMouseEnter={e => e.target.style.background = '#F4F5F7'}
              onMouseLeave={e => e.target.style.background = 'transparent'}>
              Log in
            </a>
            <a href="/signup" className="btn-lime" style={{ fontSize: 14, padding: '10px 22px', borderRadius: 12, textDecoration: 'none', display: 'inline-block' }}>
              Get started →
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="home" className="noise-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#fff', overflow: 'hidden' }}>
        {/* Background blobs */}
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,255,0,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '-8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,194,255,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px', position: 'relative', zIndex: 1, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="pill" style={{ marginBottom: 28 }}>
              <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#C8FF00', display: 'inline-block' }} />
              AI-Powered Course Intelligence
            </div>

            <h1 style={{ fontSize: 'clamp(42px, 5.5vw, 68px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#0A0A0F', margin: '0 0 24px' }}>
              Learn the<br />
              <span className="gradient-text">right courses,</span><br />
              right now.
            </h1>

            <p style={{ fontSize: 17, color: '#6B7280', lineHeight: 1.7, maxWidth: 440, marginBottom: 40, fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
              NaviQ reads your interests and learning patterns to surface courses that actually move your career forward — zero guesswork, infinite momentum.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
              <a href="/signup" className="btn-lime" style={{ fontSize: 15, padding: '14px 30px', borderRadius: 14, textDecoration: 'none', display: 'inline-block' }}>
                Start for free →
              </a>
              <a href="#about" className="btn-outline" style={{ fontSize: 15, padding: '14px 30px', borderRadius: 14, textDecoration: 'none', display: 'inline-block' }}>
                See how it works
              </a>
            </div>

            <div style={{ display: 'flex', gap: 40, paddingTop: 32, borderTop: '1.5px solid #F0F1F3' }}>
              {[["10K+", "Courses indexed"], ["98%", "Match accuracy"], ["50K+", "Active learners"]].map(([num, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: '#0A0A0F', letterSpacing: '-0.02em' }}>{num}</div>
                  <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Preview Card */}
          <div className="float" style={{ background: '#0A0A0F', borderRadius: 24, padding: 28, boxShadow: '0 32px 80px rgba(10,10,15,0.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5C3A' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFC300' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#00C851' }} />
              <span style={{ marginLeft: 'auto', fontSize: 11, color: '#6B7280', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Matched for you</span>
            </div>

            {[
              { cat: "AI & Machine Learning", title: "Deep Learning with PyTorch", match: "97%", color: "#C8FF00" },
              { cat: "Web Development", title: "Full-Stack TypeScript", match: "94%", color: "#00C2FF" },
              { cat: "Cloud & DevOps", title: "AWS Solutions Architect", match: "91%", color: "#FF5C3A" },
            ].map((c, i) => (
              <div key={c.title} className="course-chip" style={{ marginBottom: i < 2 ? 12 : 0, background: '#161620', border: '1.5px solid #2A2A38' }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: c.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>{c.cat}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#F9FAFB' }}>{c.title}</div>
                </div>
                <span style={{ fontSize: 12, fontWeight: 800, color: c.color, background: `${c.color}18`, border: `1.5px solid ${c.color}33`, padding: '5px 12px', borderRadius: 99, whiteSpace: 'nowrap', marginLeft: 16 }}>
                  {c.match}
                </span>
              </div>
            ))}

            <div style={{ marginTop: 20, padding: '14px 18px', background: 'linear-gradient(135deg, rgba(200,255,0,0.12), rgba(0,194,255,0.12))', borderRadius: 14, border: '1.5px solid rgba(200,255,0,0.2)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
              <span style={{ fontSize: 13, color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}>Updated <strong style={{ color: '#C8FF00' }}>just now</strong> based on your activity</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '112px 0', background: '#F4F5F7' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="tag">About</span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 800, color: '#0A0A0F', marginTop: 12, marginBottom: 8, letterSpacing: '-0.025em' }}>
              The mind & the machine
            </h2>
            <div style={{ width: 48, height: 4, background: 'var(--lime)', borderRadius: 4, margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
            {/* Creator */}
            <div className="card-hover" style={{ background: '#fff', borderRadius: 24, padding: 40, border: '1.5px solid #E2E4E9' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #C8FF00, #00C2FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span className="tag">Creator</span>
              <h3 style={{ fontSize: 26, fontWeight: 800, color: '#0A0A0F', marginTop: 8, marginBottom: 16, letterSpacing: '-0.02em' }}>Palina Karthik</h3>
              <p style={{ color: '#6B7280', lineHeight: 1.75, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                A passionate developer and lifelong learner dedicated to making quality education accessible to everyone. Palina built NaviQ to cut through the noise of online learning platforms by letting AI do the heavy lifting — so learners can focus on growing.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
                {["Developer", "Educator", "AI Enthusiast"].map((tag) => (
                  <span key={tag} style={{ fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 99, background: 'rgba(200,255,0,0.15)', color: '#5A7A00', border: '1.5px solid rgba(200,255,0,0.4)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* System */}
            <div className="card-hover" style={{ background: '#fff', borderRadius: 24, padding: 40, border: '1.5px solid #E2E4E9' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #00C2FF, #FF5C3A)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <span className="tag">The Platform</span>
              <h3 style={{ fontSize: 26, fontWeight: 800, color: '#0A0A0F', marginTop: 8, marginBottom: 16, letterSpacing: '-0.02em' }}>NaviQ Platform</h3>
              <p style={{ color: '#6B7280', lineHeight: 1.75, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                NaviQ is a behavior-driven recommendation engine that learns what you enjoy, tracks how you interact, and matches you with the most relevant courses in real time. No more scrolling through thousands of options — your personalised feed is ready when you are.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
                {["Personalised", "Behavior-driven", "Real-time"].map((tag) => (
                  <span key={tag} style={{ fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 99, background: 'rgba(0,194,255,0.1)', color: '#0077A8', border: '1.5px solid rgba(0,194,255,0.3)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                  </svg>
                ),
                color: "#C8FF00",
                title: "Smart Matching",
                desc: "Powered by your unique learning profile and real browsing behavior."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                ),
                color: "#00C2FF",
                title: "Real-time Updates",
                desc: "Your feed evolves as you learn — always fresh, always relevant."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-8 10 8-10 8-10-8z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                ),
                color: "#FF5C3A",
                title: "Curated Quality",
                desc: "Only top-rated, peer-reviewed courses make it through our filters."
              },
            ].map((f) => (
              <div key={f.title} className="card-hover" style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1.5px solid #E2E4E9' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  {f.icon}
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 800, color: '#0A0A0F', marginBottom: 10, letterSpacing: '-0.01em' }}>{f.title}</h4>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '112px 0', background: '#fff' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="tag">Contact</span>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, color: '#0A0A0F', marginTop: 12, marginBottom: 10, letterSpacing: '-0.025em' }}>Get in touch</h2>
            <p style={{ color: '#9CA3AF', fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>Have a question or want to collaborate? Drop a message.</p>
            <div style={{ width: 48, height: 4, background: '#C8FF00', borderRadius: 4, margin: '20px auto 0' }} />
          </div>

          <div style={{ background: '#fff', border: '1.5px solid #E2E4E9', borderRadius: 28, padding: 40, boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#C8FF00', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0A0A0F', marginBottom: 10 }}>Message sent!</h3>
                <p style={{ color: '#6B7280', fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>Thanks for reaching out. Palina will get back to you soon.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 24, fontSize: 14, fontWeight: 600, color: '#0077A8', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>Name</label>
                    <input type="text" required placeholder="Your name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>Email</label>
                    <input type="email" required placeholder="you@example.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>Message</label>
                  <textarea required rows={5} placeholder="Write your message here..." value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field" style={{ resize: 'none' }} />
                </div>
                <button onClick={handleSubmit} className="btn-lime" style={{ width: '100%', padding: '16px', borderRadius: 14, fontSize: 15 }}>
                  Send message →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0A0A0F', borderTop: '1.5px solid #1E1E2A', padding: '40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="10" fill="#1A1A24"/>
              <path d="M10 18 C10 13 13 10 18 10 C21 10 23.5 11.5 25 14" stroke="#C8FF00" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M26 18 C26 23 23 26 18 26 C15 26 12.5 24.5 11 22" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="18" cy="18" r="3" fill="#C8FF00"/>
              <circle cx="25.5" cy="14.5" r="2" fill="#C8FF00"/>
              <circle cx="10.5" cy="21.5" r="2" fill="#00C2FF"/>
            </svg>
            <span style={{ fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '-0.02em' }}>Navi<span style={{ color: '#00C2FF' }}>Q</span></span>
          </div>

          <div style={{ display: 'flex', gap: 32 }}>
            {[["Home", "#home"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} style={{ fontSize: 13, fontWeight: 600, color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = '#6B7280'}>
                {label}
              </a>
            ))}
          </div>

          <p style={{ fontSize: 12, color: '#4B5563', fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} NaviQ · Built by Palina Karthik
          </p>
        </div>
      </footer>
    </div>
  );
}