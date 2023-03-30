"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';

const User = () => {
  const[image, setImage] = useState("");

  const bid = window.location.href.split("/")[4];
  const fetchBlogs = async (q: string) => {
    fetch(`https://api.multiavatar.com/${q}.svg`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    })
    .then((response) =>((response.json())))
    .then((data) => { console.log(data);});
  };
  useEffect(() => {
    setImage("https://api.multiavatar.com/" + bid+".svg")
  }, []);
  

  return (
    <div className='min-h-screen'>{bid}
    <Image  src={image} width={100} height={100} alt={''} ></Image>
    {/* <button onClick={() => setImage("https://api.multiavatar.com/" + bid+".svg")}>Click</button> */}

    </div>
  )
}

export default User