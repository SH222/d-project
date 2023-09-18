import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Home() {
  const datas = require("/public/data/data.json");

  return (
    <body>
      <div className="Screen">
        <div className="Rectangle-3">
          <span className={`Snap-photos-and-share-like-never-before Text-Style`}>
            Snap photos and share like <br />
            never before
          </span>
        </div>
        {/* 프로필카드 */}
        <Section1 datas={datas} />
        {/* unsplash, 유효성검사 */}
        <Section2 />
      </div>
    </body>
  );
}
