import { useParams } from "react-router-dom";
function UserGreet() {
  const { username } = useParams();
  return (
    <>
      <div className="bg-blue-600 text-center text-black text-3xl p-4">
        <h1>Hello! : {username}</h1>
        <div className="text-yellow">
          <h1 >welcome</h1> 
        </div>
      </div>
    </>
  );
}

export default UserGreet;
