import { paragraph, subtitle, title } from "@/app/_components/primitives";

export default function StudiesPage() {
  return (
    <div>
      <div className="text-center">
        <span
          className={
            "text-center w-full " + title({ size: "sm", color: "yellow" })
          }
        >
          Computer Science
        </span>
        <span className={subtitle()}>
          Complutese University of Madrid - Madrid - Average: 8.13
        </span>
      </div>
      <br />
      <span className={paragraph()}>
        Through my studies, I have honed my ability to apply theoretical
        knowledge to real-world projects, which has significantly enhanced my
        practical skills and problem-solving capabilities. My coursework and
        projects have deepened my understanding of Artificial Intelligence,
        Software Development, and related fields. Specifically, I have gained
        substantial knowledge of machine learning algorithms, data analysis
        techniques, and the intricacies of the software development lifecycle,
        including planning, design, coding, testing, and deployment.
        <br />
        <br />
        Additionally, I have developed a strong foundation in programming
        languages such as Python, Java, and C++, alongside proficiency in tools
        and frameworks for data manipulation and AI model implementation.
        Collaborative projects and internships have further refined my teamwork
        and communication skills, preparing me to work effectively in
        multidisciplinary environments.
        <br />
        <br />
        This combination of theoretical learning and hands-on experience has not
        only equipped me to tackle complex technical challenges but also
        fostered a mindset of continuous learning and innovation. My time at
        Complutense University of Madrid has prepared me to excel in the dynamic
        and evolving landscape of the tech industry.
      </span>
    </div>
  );
}
