export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store built with Next.js, Redux, and Stripe integration. Includes user authentication, product search, and admin dashboard.",
    techStack: ["Next.js", "TypeScript", "Redux", "Stripe", "Tailwind CSS"],
    imageUrl: "https://placehold.co/600x400/png?text=E-Commerce",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates using Socket.io. Features drag-and-drop boards and team workspaces.",
    techStack: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    imageUrl: "https://placehold.co/600x400/png?text=Task+Manager",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/task-manager",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Weather forecast application fetching data from OpenWeatherMap API. Displays current conditions and 5-day forecast with charts.",
    techStack: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    imageUrl: "https://placehold.co/600x400/png?text=Weather+App",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/weather-app",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern personal portfolio website to showcase skills and projects. Built with Next.js and Tailwind CSS for optimal performance.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://placehold.co/600x400/png?text=Portfolio",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/portfolio",
  },
];
