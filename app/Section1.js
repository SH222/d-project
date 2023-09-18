"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Section1({ datas }) {
  const [data, setData] = useState(datas);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  useEffect(() => {
    const shuffleData = shuffle([...datas]);
    setData(shuffleData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Section-1">
      {data.map((item, i) => {
        return (
          <div className="Section1-Group" key={item.key}>
            <Image src={item.img} alt="test" width={108} height={108} className="Ellipse" />
            <span className="Sed-ut-perspiciatis Text-Style-3">{item.title}</span>
            <br />
            <span className="Nemo-enim-ipsam-voluptatem-quia-voluptas-sit-aspernatur-aut-odit-aut-fugit-sed-quia-consequuntur-ma Text-Style-4">
              {item.content}
            </span>
            <br />
            <span className="Learn-more">LEARN MORE</span>
          </div>
        );
      })}
    </div>
  );
}
