export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Parogo Website",
  description: "Parogo personal website.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "CV",
      href: "/cv",
    },
    {
      label: "Projects",
      href: "/projects",
      subItems: [
        {
          key: "all",
          label: "All Projects",
          description: "All of my projects",
          href: "",
        },
        {
          key: "solutions",
          label: "Solutions",
          description: "Description of project 1",
          href: "/solutions",
        },
        {
          key: "2",
          label: "Project 2",
          description: "Description of project 2",
          href: "/2",
        },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  projects: [
    {
      name: "Solutions",
      description: "Solutions Calculator",
      image: "https://parogo72-solutions.vercel.app/images/logo.png",
      link: "https://parogo72-solutions.vercel.app/",
      github: "https://github.com/Parogo72/Solutions",
      fullDescription: `Solutions is a foundational webpage built using HTML,
 CSS, and JavaScript that calculates various properties
 of a dissolution based on provided parameters. This
 project demonstrates my ability to create interactive
 web applications, applying fundamental web
 technologies to deliver a functional tool for users to
 understand and analyze dissolution processes`,
    },
    {
      name: "Project X",
      description: "Astral Objects Simulator",
      image: "",
      link: "https://parogo72-project-x.vercel.app/",
      github: "https://github.com/Parogo72/Project-X",
      fullDescription: `Project X is an interactive simulator of astral objects
 developed using React.js and Three.js. This project
 features a dynamic user interface that allows users to
 explore and manipulate a 3D representation of celestial
 bodies, showcasing my skills in web development and
 3D graphics. The integration of React.js ensures a
 responsive and engaging user experience, while
 Three.js enables realistic rendering of astronomical
 phenomena`,
    },
    {
      name: "Main Web",
      description: "Personal Website",
      image: "",
      link: "https://parogo72.vercel.app/",
      github: "",
      fullDescription: `This is a personal website built using Next.js, Tailwind CSS, and NextUI, designed to showcase projects, skills, and professional experience in a visually appealing and highly performant manner. This project demonstrates proficiency in modern web development frameworks and tools, combining the power of Next.js for server-side rendering and dynamic routing, Tailwind CSS for rapid and responsive styling, and NextUI for polished and interactive components. The portfolio's design emphasizes usability and responsiveness, ensuring an engaging experience across devices while highlighting my expertise in creating functional and aesthetic web applications.`,
    },
  ],
  links: {
    github: "https://github.com/Parogo72",
    linkedin: "https://www.linkedin.com/in/pablo-rodr-gonz/",
    githubWebLink: "",
  },
};
