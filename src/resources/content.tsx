import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Avnish",
  lastName: "Singh",
  name: "Avnish Singh",
  role: "Software Engineer",
  avatar: "/images/avatar.jpg", // Make sure you named your photo avatar.jpg in the public/images folder
  email: "avnishsingh300604@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: false, // Turned off to keep the site clean
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Avnish-7", // UPDATE THIS LINK
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/avnish-singh-msd770", // UPDATE THIS LINK
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building robust backend systems and logical solutions.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          C++ Systems
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm {person.name}, an Electronics Engineering student and Full-Stack
      Developer. I specialize in C++ problem-solving, data structures, and
      building scalable backend architectures using Node.js and SQL.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a dedicated software engineering student with a strong foundation
        in system logic and backend web development. My core focus lies in
        transforming complex algorithmic challenges into efficient, clean code,
        bridging the gap between low-level C++ operations and modern web APIs.
      </>
    ),
  },
  work: {
    display: true,
    title: "Projects & Experience",
    experiences: [
      {
        company: "Student Management System",
        timeframe: "2024",
        role: "C++ Application Developer",
        achievements: [
          <>
            Engineered a comprehensive console-based management system using C++
            focusing on robust file I/O operations for data persistence.
          </>,
          <>
            Implemented core Data Structures and Algorithms (DSA) to efficiently
            add, display, and delete student records, ensuring optimal memory
            management.
          </>,
        ],
        images: [],
      },
      {
        company: "RESTful Web API (In Progress)",
        timeframe: "Present",
        role: "Backend Developer",
        achievements: [
          <>
            Currently developing a scalable backend infrastructure using Node.js
            and Express to handle HTTP requests and business logic.
          </>,
          <>
            Integrating a relational SQL database to manage complex user data,
            focusing on secure CRUD operations and efficient query design.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Electronics Engineering (23ec8084)",
        description: (
          <>
            Focusing on VLSI design, semiconductor manufacturing, and core
            software engineering principles.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "C++ & Data Structures",
        description: (
          <>
            Strong command over problem-solving, OOPS concepts, and efficient
            algorithmic implementations.
          </>
        ),
        tags: [
          { name: "C++", icon: "code" },
          { name: "DSA", icon: "cpu" },
        ],
        images: [],
      },
      {
        title: "Backend Web Development",
        description: (
          <>
            Building responsive architectures and database management systems.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "javascript" },
          { name: "SQL", icon: "database" },
          { name: "HTML/CSS/JS", icon: "layout" },
        ],
        images: [],
      },
    ],
  },
};

// Kept empty to prevent compiler errors, but safe to ignore
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "",
  description: "",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "",
  description: "",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
