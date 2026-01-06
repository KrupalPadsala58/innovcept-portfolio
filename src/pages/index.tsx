import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CodeXml, 
  Layers, 
  Server, 
  Database, 
  Coffee, 
  Terminal, 
  Palette, 
  Cloud 
} from "lucide-react";
import Button from "../components/Button";
import MotionButton from "../components/ui/MotionButton";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import WhyChooseUs from "../components/WhyChooseUs";
import { projects } from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Head>
        <title>Home | Innovcept - MERN Stack Developer</title>
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary dark:text-white mb-6">
                We Build <span className="text-highlight">Scalable Web Applications</span> That Power Business Growth
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
                Full-stack development agency specializing in high-performance MERN, Java, and Python solutions for startups and growing businesses.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-lg mx-auto md:mx-0">
                Let's turn your vision into reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <MotionButton href="/contact">Book a Free Strategy Call</MotionButton>
              <MotionButton href="/projects" variant="outline">
                View Case Studies
              </MotionButton>
            </motion.div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <motion.div 
              className="relative w-72 h-72 md:w-96 md:h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-highlight/20 rounded-full blur-3xl animate-pulse"></div>
              <Image
                src="/profile-headshot.png"
                alt="Innovcept Founder & Lead Developer"
                width={400}
                height={400}
                className="rounded-full border-4 border-white dark:border-slate-700 shadow-2xl relative z-10 object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Skills Section */}
      <SectionWrapper className="bg-white dark:bg-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolset to build robust and scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "JavaScript/TypeScript", icon: CodeXml },
            { name: "React & Next.js", icon: Layers },
            { name: "Node.js & Express", icon: Server },
            { name: "MongoDB & SQL", icon: Database },
            { name: "Java", icon: Coffee },
            { name: "Python", icon: Terminal },
            { name: "Tailwind CSS", icon: Palette },
            { name: "AWS & Docker", icon: Cloud },
          ].map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 rounded-full bg-blue-50/50 dark:bg-slate-700/50 group-hover:scale-105 transition-transform duration-300">
                <skill.icon 
                  size={36} 
                  strokeWidth={1.5}
                  className="text-primary dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300" 
                />
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper className="bg-gray-50 dark:bg-slate-800/50">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Some of my best work.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center text-highlight font-medium hover:underline"
          >
            View All <span className="ml-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA / Testimonials (simplified) */}
      <SectionWrapper>
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your next project?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work. If you have a project
              that needs some creative touch, get in touch.
            </p>
            <MotionButton
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Let's Talk
            </MotionButton>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 left-0 -ml-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </SectionWrapper>
    </>
  );
}
