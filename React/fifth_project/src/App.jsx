import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
  
    <UserContextProvider >
        <h1 className="bg-purple-700 m-1 p-1 rounded-xl text-black">HELLO USER</h1>
        <Login />
        <Profile />
      </UserContextProvider>

  );
}

export default App;
