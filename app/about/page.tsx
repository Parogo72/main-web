import { title, paragraph } from "@/app/_components/primitives";

export default function AboutPage() {
  return (
    <div>
      <div className="text-center">
        <span className={title({ color: "blue", size: "lg" })}>
          Computer Engineering Student
        </span>
        <br />
        <br />
        <span className={title({ color: "violet", size: "sm" })}>
          Complutense University of Madrid
        </span>
      </div>

      <br />
      <br />
      <span className={paragraph({ size: "lg" })}>
        I am a student passionate about technology and innovation, currently in
        my third year of Computer Engineering at UCM. I am interested in
        software development, artificial intelligence and cybersecurity.
        <br />
        <br />
        Proficient in multiple programming languages including Python, Java, and
        C++, with a solid understanding of web development technologies such as
        HTML, CSS, JavaScript and some frameworks like React and Vue.
        <br />
        <br />
        Experienced in collaborative projects utilizing Agile methodologies,
        enhancing teamwork and project management skills.
      </span>
    </div>
  );
}
