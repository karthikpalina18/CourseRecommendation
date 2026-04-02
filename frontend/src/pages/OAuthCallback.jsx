import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

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

export default function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status] = useState("processing"); // "processing" | "error"

  useEffect(() => {
    const token = searchParams.get("token");
    const name = searchParams.get("name");
    const error = searchParams.get("error");

    if (error || !token) {
    //   setStatus("error");
      setTimeout(() => navigate("/login"), 3000);
      return;
    }

    localStorage.setItem("token", token);
    localStorage.setItem("userName", decodeURIComponent(name || "Learner"));
    navigate("/dashboard", { replace: true });
  }, []);

  return (
    <div style={{
      fontFamily: "'Syne', sans-serif",
      minHeight: "100vh",
      background: "#0A0A0F",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .spin { animation: spin 0.9s linear infinite; }
        .pulse { animation: pulse 1.8s ease-in-out infinite; }
      `}</style>

      <NaviQLogo size={48} />

      {status === "processing" ? (
        <>
          <svg
            className="spin"
            width="36" height="36" viewBox="0 0 24 24"
            fill="none" stroke="#C8FF00" strokeWidth="2.5" strokeLinecap="round"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
          </svg>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              Signing you in…
            </p>
            <p className="pulse" style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>
              Setting up your dashboard
            </p>
          </div>
        </>
      ) : (
        <>
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: "rgba(255,92,58,0.1)",
            border: "1.5px solid rgba(255,92,58,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF5C3A" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              Authentication failed
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>
              Redirecting you back to login…
            </p>
          </div>
        </>
      )}
    </div>
  );
}