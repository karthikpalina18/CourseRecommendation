import { useState } from "react";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleSignup = async () => {
    await axios.post("http://localhost:5000/api/auth/signup", data);
    alert("Signup successful");
  };

  return (
    <>
      <h1>Signup</h1>
      <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} />
      <button onClick={handleSignup}>Signup</button>
    </>
  );
}
export default Signup;