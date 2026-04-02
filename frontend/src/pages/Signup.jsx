// import { useState } from "react";
// import axios from "axios";

// function Signup() {
//   const [data, setData] = useState({ name: "", email: "", password: "" });

//   const handleSignup = async () => {
//     await axios.post("http://localhost:5000/api/auth/signup", data);
//     // alert("Signup successful");
//     window.location.href = "/login";
//   };

//   return (
//     <>
//       <h1>Signup</h1>
//       <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} />
//       <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} />
//       <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} />
//       <button onClick={handleSignup}>Signup</button>
//     </>
//   );
// }
// export default Signup;

import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!data.name || !data.email || !data.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (data.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/signup", data);
      window.location.href = "/login";
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const perks = [
    "Personalised course recommendations",
    "Track your learning progress",
    "AI-driven interest matching",
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">

      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4">
        <a href="/" className="flex items-center gap-2.5 w-fit text-white font-bold text-xl tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm font-black text-white">C</span>
          CourseIQ
        </a>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10 items-center">

          {/* Left — perks panel */}
          <div className="hidden md:block">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Join 50,000+ learners
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight mb-6">
              Your personalised<br />
              <span className="text-indigo-400">learning journey</span><br />
              starts here.
            </h2>
            <ul className="space-y-4 mt-8">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs shrink-0">✓</span>
                  {perk}
                </li>
              ))}
            </ul>
            <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700/50">
              <p className="text-slate-400 text-sm italic leading-relaxed">
                "CourseIQ helped me find the exact courses I needed. My skills improved drastically within months."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-300">
                  AK
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Anika Kumar</div>
                  <div className="text-xs text-slate-500">Software Engineer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="w-full">
            <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-2xl mb-5">
                  ✨
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
                <p className="text-sm text-slate-400">Free forever. No credit card needed.</p>
              </div>

              {error && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Full name</label>
                  <input
                    type="text"
                    placeholder="Palina Karthik"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="Min. 6 characters"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    onKeyDown={(e) => e.key === "Enter" && handleSignup()}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200"
                  />
                  {data.password && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${data.password.length >= 6 ? "bg-emerald-500" : "bg-slate-700"}`} />
                      <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${data.password.length >= 10 ? "bg-emerald-500" : "bg-slate-700"}`} />
                      <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${data.password.length >= 14 ? "bg-emerald-500" : "bg-slate-700"}`} />
                      <span className="text-xs text-slate-500">
                        {data.password.length < 6 ? "Weak" : data.password.length < 10 ? "Good" : "Strong"}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSignup}
                  disabled={loading}
                  className="w-full py-3.5 bg-indigo-500 hover:bg-indigo-400 disabled:bg-indigo-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 disabled:translate-y-0 text-sm mt-2 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    "Create account →"
                  )}
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 text-center">
                <p className="text-sm text-slate-500">
                  Already have an account?{" "}
                  <a href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                    Sign in
                  </a>
                </p>
              </div>
            </div>

            <p className="text-center mt-5 text-sm text-slate-600">
              <a href="/" className="hover:text-slate-400 transition-colors">← Back to home</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}