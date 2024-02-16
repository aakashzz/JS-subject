import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
     const data = useLoaderData();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/aakashzz")
//       .then((response) => response.json())
//       .then((value) => {
//         setData(value);
//       }); 
//   },[data]);
  return (
    <div>
      <div className="bg-gray-600 text-white flex justify-around items-center">
      <img src={data.avatar_url} alt="Github Post"  className="rounded-full w-40"/>
        <h1 className=" text-5xl font-semibold m-4 text-center">
          User:{data.id}
        </h1>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () =>{
     const response = await fetch('https://api.github.com/users/aakashzz');
     return response.json();
}