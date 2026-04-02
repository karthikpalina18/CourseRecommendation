// // import { useState } from "react";
// // import axios from "axios";

// // function Signup() {
// //   const [data, setData] = useState({ name: "", email: "", password: "" });

// //   const handleSignup = async () => {
// //     await axios.post("http://localhost:5000/api/auth/signup", data);
// //     // alert("Signup successful");
// //     window.location.href = "/login";
// //   };

// //   return (
// //     <>
// //       <h1>Signup</h1>
// //       <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} />
// //       <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} />
// //       <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} />
// //       <button onClick={handleSignup}>Signup</button>
// //     </>
// //   );
// // }
// // export default Signup;

// import { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   const [data, setData] = useState({ name: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSignup = async () => {
//     if (!data.name || !data.email || !data.password) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (data.password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }
//     setError("");
//     setLoading(true);
//     try {
//       await axios.post("http://localhost:5000/api/auth/signup", data);
//       window.location.href = "/login";
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const perks = [
//     "Personalised course recommendations",
//     "Track your learning progress",
//     "AI-driven interest matching",
//   ];

//   return (
//     <div className="min-h-screen bg-slate-950 flex flex-col">

//       {/* Header */}
//       <header className="border-b border-slate-800 px-6 py-4">
//         <a href="/" className="flex items-center gap-2.5 w-fit text-white font-bold text-xl tracking-tight">
//           <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm font-black text-white">C</span>
//           CourseIQ
//         </a>
//       </header>

//       <div className="flex-1 flex items-center justify-center px-4 py-12">
//         <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10 items-center">

//           {/* Left — perks panel */}
//           <div className="hidden md:block">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
//               <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
//               Join 50,000+ learners
//             </div>
//             <h2 className="text-4xl font-bold text-white leading-tight mb-6">
//               Your personalised<br />
//               <span className="text-indigo-400">learning journey</span><br />
//               starts here.
//             </h2>
//             <ul className="space-y-4 mt-8">
//               {perks.map((perk) => (
//                 <li key={perk} className="flex items-center gap-3 text-slate-300 text-sm">
//                   <span className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs shrink-0">✓</span>
//                   {perk}
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700/50">
//               <p className="text-slate-400 text-sm italic leading-relaxed">
//                 "CourseIQ helped me find the exact courses I needed. My skills improved drastically within months."
//               </p>
//               <div className="flex items-center gap-3 mt-4">
//                 <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-300">
//                   AK
//                 </div>
//                 <div>
//                   <div className="text-xs font-semibold text-white">Anika Kumar</div>
//                   <div className="text-xs text-slate-500">Software Engineer</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right — form */}
//           <div className="w-full">
//             <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
//               <div className="mb-8">
//                 <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-2xl mb-5">
//                   ✨
//                 </div>
//                 <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
//                 <p className="text-sm text-slate-400">Free forever. No credit card needed.</p>
//               </div>

//               {error && (
//                 <div className="mb-5 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
//                   {error}
//                 </div>
//               )}

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-400 mb-2">Full name</label>
//                   <input
//                     type="text"
//                     placeholder="Palina Karthik"
//                     value={data.name}
//                     onChange={(e) => setData({ ...data, name: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-slate-400 mb-2">Email address</label>
//                   <input
//                     type="email"
//                     placeholder="you@example.com"
//                     value={data.email}
//                     onChange={(e) => setData({ ...data, email: e.target.value })}
//                     className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-slate-400 mb-2">Password</label>
//                   <input
//                     type="password"
//                     placeholder="Min. 6 characters"
//                     value={data.password}
//                     onChange={(e) => setData({ ...data, password: e.target.value })}
//                     onKeyDown={(e) => e.key === "Enter" && handleSignup()}
//                     className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200"
//                   />
//                   {data.password && (
//                     <div className="flex items-center gap-2 mt-2">
//                       <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${data.password.length >= 6 ? "bg-emerald-500" : "bg-slate-700"}`} />
//                       <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${data.password.length >= 10 ? "bg-emerald-500" : "bg-slate-700"}`} />
//                       <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${data.password.length >= 14 ? "bg-emerald-500" : "bg-slate-700"}`} />
//                       <span className="text-xs text-slate-500">
//                         {data.password.length < 6 ? "Weak" : data.password.length < 10 ? "Good" : "Strong"}
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   onClick={handleSignup}
//                   disabled={loading}
//                   className="w-full py-3.5 bg-indigo-500 hover:bg-indigo-400 disabled:bg-indigo-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 disabled:translate-y-0 text-sm mt-2 flex items-center justify-center gap-2"
//                 >
//                   {loading ? (
//                     <>
//                       <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                       Creating account...
//                     </>
//                   ) : (
//                     "Create account →"
//                   )}
//                 </button>
//               </div>

//               <div className="mt-6 pt-6 border-t border-slate-800 text-center">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <a href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
//                     Sign in
//                   </a>
//                 </p>
//               </div>
//             </div>

//             <p className="text-center mt-5 text-sm text-slate-600">
//               <a href="/" className="hover:text-slate-400 transition-colors">← Back to home</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";

const NaviQLogo = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="10" fill="#0A0A0F"/>
    <path d="M10 18 C10 13 13 10 18 10 C21 10 23.5 11.5 25 14" stroke="#C8FF00" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M26 18 C26 23 23 26 18 26 C15 26 12.5 24.5 11 22" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <circle cx="18" cy="18" r="3" fill="#C8FF00"/>
    <circle cx="25.5" cy="14.5" r="2" fill="#C8FF00"/>
    <circle cx="10.5" cy="21.5" r="2" fill="#00C2FF"/>
  </svg>
);

export default function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleSignup = async () => {
    if (!data.name || !data.email || !data.password) { setError("Please fill in all fields."); return; }
    if (data.password.length < 6) { setError("Password must be at least 6 characters."); return; }
    setError(""); setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/signup", data);
      window.location.href = "/login";
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally { setLoading(false); }
  };

  const pwStrength = !data.password ? 0 : data.password.length < 6 ? 1 : data.password.length < 10 ? 2 : 3;
  const strengthLabel = ["", "Weak", "Good", "Strong"][pwStrength];
  const strengthColor = ["", "#FF5C3A", "#FFC300", "#C8FF00"][pwStrength];

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", minHeight: "100vh", background: "#F4F5F7", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .auth-input {
          width: 100%; padding: 13px 42px 13px 44px;
          border: 2px solid #E2E4E9; border-radius: 13px;
          font-size: 14px; font-family: 'DM Sans', sans-serif;
          color: #0A0A0F; background: #fff; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .auth-input:focus { border-color: #C8FF00; box-shadow: 0 0 0 4px rgba(200,255,0,0.12); }
        .auth-input::placeholder { color: #B0B5BE; }

        .btn-lime {
          width: 100%; padding: 15px;
          background: #C8FF00; color: #0A0A0F;
          font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
          border: none; border-radius: 13px; cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .btn-lime:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(200,255,0,0.4); }
        .btn-lime:disabled { opacity: 0.5; cursor: not-allowed; }

        .social-btn {
          flex: 1; padding: 11px 16px;
          background: #fff; border: 2px solid #E2E4E9; border-radius: 12px;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600; color: #374151;
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .social-btn:hover { border-color: #C8FF00; box-shadow: 0 4px 14px rgba(200,255,0,0.18); transform: translateY(-1px); }

        .eye-btn { position:absolute; right:14px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#9CA3AF; display:flex; padding:0; }
        .eye-btn:hover { color: #374151; }

        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.8s linear infinite; }

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        .float { animation: float 5s ease-in-out infinite; }

        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(18px,-12px) scale(1.06)} 70%{transform:translate(-10px,8px) scale(0.96)} }
        .blob { animation: blob 8s ease-in-out infinite; }
        .blob2 { animation: blob 11s ease-in-out infinite reverse; }

        .perk { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
        .perk-dot { width:28px; height:28px; border-radius:8px; background:rgba(0,194,255,0.18); border:1.5px solid rgba(0,194,255,0.35); display:flex; align-items:center; justify-content:center; flex-shrink:0; }

        .divider { display:flex; align-items:center; gap:12px; margin: 20px 0; }
        .divider-line { flex:1; height:1.5px; background:#E8EAED; }
        .divider span { font-size:12px; font-weight:600; color:#B0B5BE; font-family:'DM Sans',sans-serif; }

        .pw-bar { height:4px; flex:1; border-radius:4px; transition: background 0.3s; }

        .review-card {
          background: rgba(255,255,255,0.07);
          border: 1.5px solid rgba(255,255,255,0.13);
          border-radius: 18px; padding: 20px 22px;
          backdrop-filter: blur(10px);
        }
      `}</style>

      {/* HEADER */}
      <header style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(16px)", borderBottom: "1.5px solid #E8EAED", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <NaviQLogo size={32} />
          <span style={{ fontWeight: 800, fontSize: 19, color: "#0A0A0F", letterSpacing: "-0.02em" }}>Navi<span style={{ color: "#00C2FF" }}>Q</span></span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 14, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>Already have an account?</span>
          <a href="/login" style={{ fontSize: 14, fontWeight: 700, color: "#0A0A0F", textDecoration: "none", padding: "9px 20px", borderRadius: 11, border: "2px solid #0A0A0F", transition: "background 0.15s, color 0.15s" }}
            onMouseEnter={e => { e.target.style.background = "#0A0A0F"; e.target.style.color = "#fff"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#0A0A0F"; }}>
            Log in →
          </a>
        </div>
      </header>

      {/* MAIN — panel LEFT, form RIGHT (flipped vs Login) */}
      <div style={{ flex: 1, display: "flex", alignItems: "stretch", minHeight: "calc(100vh - 64px)" }}>

        {/* LEFT — Decorative Panel */}
        <div style={{ width: 440, background: "#0A0A0F", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 48px" }}>
          {/* Blobs — sky blue accent for signup */}
          <div className="blob" style={{ position: "absolute", top: "-80px", left: "-80px", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,194,255,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div className="blob2" style={{ position: "absolute", bottom: "-60px", right: "-60px", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,255,0,0.16) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Floating preview card */}
            <div className="float" style={{ background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: "20px 24px", marginBottom: 40, backdropFilter: "blur(10px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#00C2FF", textTransform: "uppercase", letterSpacing: "0.08em" }}>New member perk</span>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#C8FF00", background: "rgba(200,255,0,0.15)", border: "1.5px solid rgba(200,255,0,0.3)", padding: "3px 10px", borderRadius: 99 }}>Free forever</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Instant personalised feed</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>Set up in under 60 seconds · No card needed</div>
            </div>

            <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 12 }}>
              Join <span style={{ color: "#00C2FF" }}>50,000+</span><br />learners who<br />learn smarter.
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 36 }}>
              NaviQ matches you with the right courses in seconds. The more you use it, the smarter it gets.
            </p>

            {/* Perks */}
            {[
              "Personalised AI recommendations",
              "Track learning progress",
              "Real-time feed updates",
              "Curated, top-rated courses only",
            ].map(perk => (
              <div className="perk" key={perk}>
                <div className="perk-dot">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif" }}>{perk}</span>
              </div>
            ))}

            {/* Testimonial */}
            <div className="review-card" style={{ marginTop: 32 }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif", fontStyle: "italic", lineHeight: 1.65, marginBottom: 16 }}>
                "NaviQ surfaced courses I never would have found. My skills jumped in just two months."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #C8FF00, #00C2FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#0A0A0F" }}>AK</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Anika Kumar</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>Software Engineer</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C8FF00" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Switch nudge */}
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1.5px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>Already a member?</p>
              <a href="/login" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 26px", borderRadius: 12, border: "2px solid rgba(255,255,255,0.25)", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,194,255,0.12)"; e.currentTarget.style.borderColor = "rgba(0,194,255,0.5)"; e.currentTarget.style.color = "#00C2FF"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#fff"; }}>
                Sign in instead →
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 48px", background: "#fff" }}>
          <div style={{ width: "100%", maxWidth: 420 }}>

            {/* Heading */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F4F5F7", border: "1.5px solid #E2E4E9", borderRadius: 99, padding: "5px 14px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C8FF00", display: "inline-block" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#6B7280", letterSpacing: "0.05em", textTransform: "uppercase" }}>Free · No card needed</span>
              </div>
              <h1 style={{ fontSize: 34, fontWeight: 800, color: "#0A0A0F", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 10 }}>
                Create your<br /><span style={{ color: "#C8FF00", WebkitTextStroke: "1px #5A7A00" }}>NaviQ</span> account
              </h1>
              <p style={{ fontSize: 15, color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>Start learning smarter in under a minute.</p>
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: 10, marginBottom: 4 }}>
              <button className="social-btn">
                <svg width="17" height="17" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue with Google
              </button>
              <button className="social-btn" style={{ flex: "0 0 auto", padding: "11px 16px" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#0A0A0F"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </button>
            </div>

            <div className="divider"><div className="divider-line"/><span>or sign up with email</span><div className="divider-line"/></div>

            {/* Error */}
            {error && (
              <div style={{ marginBottom: 18, padding: "12px 16px", borderRadius: 12, background: "rgba(255,92,58,0.08)", border: "1.5px solid rgba(255,92,58,0.25)", color: "#C0392B", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
                {error}
              </div>
            )}

            {/* Name */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 8 }}>Full name</label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", display: "flex" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input type="text" placeholder="Palina Karthik" value={data.name} className="auth-input"
                  onChange={e => setData({ ...data, name: e.target.value })} />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 8 }}>Email address</label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", display: "flex" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <input type="email" placeholder="you@example.com" value={data.email} className="auth-input"
                  onChange={e => setData({ ...data, email: e.target.value })} />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 8 }}>Password</label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", display: "flex" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                <input type={showPw ? "text" : "password"} placeholder="Min. 6 characters" value={data.password} className="auth-input"
                  onChange={e => setData({ ...data, password: e.target.value })}
                  onKeyDown={e => e.key === "Enter" && handleSignup()} />
                <button className="eye-btn" onClick={() => setShowPw(!showPw)}>
                  {showPw
                    ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
              {/* Strength meter */}
              {data.password && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
                  {[1, 2, 3].map(i => (
                    <div key={i} className="pw-bar" style={{ background: pwStrength >= i ? strengthColor : "#E2E4E9" }} />
                  ))}
                  <span style={{ fontSize: 12, fontWeight: 700, color: strengthColor, marginLeft: 4, minWidth: 44 }}>{strengthLabel}</span>
                </div>
              )}
            </div>

            {/* Submit */}
            <button className="btn-lime" onClick={handleSignup} disabled={loading}>
              {loading
                ? <><svg className="spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Creating account...</>
                : <>Create account <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></>
              }
            </button>

            <p style={{ textAlign: "center", fontSize: 13, color: "#B0B5BE", marginTop: 18, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
              By signing up you agree to our{" "}
              <a href="#" style={{ color: "#9CA3AF", textDecoration: "underline" }}>Terms</a>{" & "}
              <a href="#" style={{ color: "#9CA3AF", textDecoration: "underline" }}>Privacy Policy</a>.
            </p>

            <p style={{ textAlign: "center", fontSize: 14, color: "#9CA3AF", marginTop: 20, fontFamily: "'DM Sans', sans-serif" }}>
              Already have an account?{" "}
              <a href="/login" style={{ fontWeight: 700, color: "#0A0A0F", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = "#00C2FF"}
                onMouseLeave={e => e.target.style.color = "#0A0A0F"}>
                Sign in →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}