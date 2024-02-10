import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data =useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Nakshatra-Gupta6651")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center  m-4 bg-gray-500 text-white p-5 text-3xl rounded-lg">
      Github Followers : {data.followers}
      <img
        className="text-center rounded-lg"
        src={data.avatar_url}
        alt="Git picture"
        width={400}
      />
    </div>
  );
}

export default Github;


export const githubInfoLoder = async () =>{
    const response = await fetch ('https://api.github.com/users/Nakshatra-Gupta6651')
    return response.json()
}

