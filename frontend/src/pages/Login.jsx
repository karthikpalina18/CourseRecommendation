import { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", data);
    localStorage.setItem("token", res.data.token);
    // alert("Login successful");
    window.location.href = "/dashboard";
  };

  return (
    <>
      <h1>Login</h1>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
export default Login;