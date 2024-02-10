import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="bg-gray-500 rounded-lg p-2">
      <h2 className="bg-blue-400 rounded-lg text-black p-0.5 text-3xl">Login </h2>{" "}
      <input
        className="bg-pink-400 placeholder-black rounded-lg p-1 text-blue-900 text-3xl"
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="Username"
      />{" "}
      <input
        className="bg-pink-400 placeholder-black rounded-lg p-1 m-2 text-blue-900 text-3xl"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="m-1 text-2xl" onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default Login;
