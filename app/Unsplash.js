"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Unsplash() {
  const ACCESS_KEY = "PQw2N_Py-FY5cRhaMX_BXS8Hj1XJi-0hfnfoXi0FaFk";
  const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`;
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPhoto(data))
      .catch((error) => console.error("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {
        <Image
          src={photo.urls && photo.urls.regular}
          alt="background image"
          width={1680}
          height={740}
          className="Background-image"
        />
      }
    </>
  );
}
