// import { useState } from "react";
// import axios from "axios";

// function Login() {
//   const [data, setData] = useState({ email: "", password: "" });

//   const handleLogin = async () => {
//     const res = await axios.post("http://localhost:5000/api/auth/login", data);
//     localStorage.setItem("token", res.data.token);
//     // alert("Login successful");
//     window.location.href = "/dashboard";
//   };

//   return (
//     <>
//       <h1>Login</h1>
//       <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} />
//       <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} />
//       <button onClick={handleLogin}>Login</button>
//     </>
//   );
// }

// export default Login;


import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!data.email || !data.password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", data);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">

      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4">
        <a href="/" className="flex items-center gap-2.5 w-fit text-white font-bold text-xl tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm font-black text-white">C</span>
          CourseIQ
        </a>
      </header>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          {/* Card */}
          <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8 shadow-2xl">

            <div className="mb-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-2xl mb-5">
                🔐
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
              <p className="text-sm text-slate-400">Sign in to continue to your dashboard</p>
            </div>

            {error && (
              <div className="mb-5 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-slate-400">Password</label>
                  <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200"
                />
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full py-3.5 bg-indigo-500 hover:bg-indigo-400 disabled:bg-indigo-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 disabled:translate-y-0 text-sm mt-2 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in →"
                )}
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-500">
                Don't have an account?{" "}
                <a href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                  Create one
                </a>
              </p>
            </div>
          </div>

          {/* Back to home */}
          <p className="text-center mt-6 text-sm text-slate-600">
            <a href="/" className="hover:text-slate-400 transition-colors">← Back to home</a>
          </p>
        </div>
      </div>
    </div>
  );
}