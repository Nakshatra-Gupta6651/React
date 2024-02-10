import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user || !user.username || !user.password) {
    if (!user || (!user.username && !user.password)) {
      return <div className="bg-red-800 p-2 m-2 rounded-xl ">Please Login with both username and password</div>;
    } else if (!user.username) {
      return <div className="bg-red-800 p-2 m-2 rounded-xl ">Please Login with a username</div>;
    } else {
      return <div className="bg-red-800 p-2 m-2 rounded-xl ">Please Login with a password</div>;
    }
  }

  return (
    <div>
      <div className="bg-orange-600 p-2 m-2 rounded-xl text-yellow-300 text-2xl"> Welcome {user.username}</div>
      <div className="bg-orange-600 p-2 m-2 rounded-xl text-yellow-300 text-2xl"> Your Password is : {user.password}</div>
    </div>
  );
}

export default Profile;
