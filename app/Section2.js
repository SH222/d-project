import EmailVlidation from "./EmailVlidation";
import Unsplash from "./Unsplash";

export default function Section2() {
  return (
    <div className="Section-2">
      <Unsplash />
      <div className="Section2-Group">
        <span className="Sed-ut-perspiciatis-unde-omnis">Sed ut perspiciatis unde omnis</span>
        <span className="There-are-many-variations-of-passages-of-Lorem-Ipsum-available-but-the-majority-have-suffered-alter">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don&apos;t
          look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </span>
        <div className="Rectangle-2"></div>
        <span className="Sed-ut-perspiciatis-unde-omnis-iste-natus-error-sit-voluptatem-accusantium-doloremque-laudantium-to">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
        </span>
        <EmailVlidation />
      </div>
    </div>
  );
}
