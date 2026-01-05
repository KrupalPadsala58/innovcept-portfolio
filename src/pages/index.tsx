import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary dark:text-white mb-6">
              Hi, I'm <span className="text-highlight">Innovcept</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              MERN Stack Developer | Java & Python Developer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-lg mx-auto md:mx-0">
              I build scalable, high-performance web applications tailored for modern businesses. Let's turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/contact">Hire Me</Button>
              <Button href="/projects" variant="outline">View Projects</Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
             <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-highlight/20 rounded-full blur-3xl animate-pulse"></div>
                <Image 
                  src="https://placehold.co/400x400/png?text=Profile" 
                  alt="Developer Profile"
                  width={400} 
                  height={400}
                  className="rounded-full border-4 border-white dark:border-slate-700 shadow-2xl relative z-10"
                  priority
                />
             </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SectionWrapper className="bg-white dark:bg-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Technical Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolset to build robust and scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { name: 'JavaScript/TypeScript', icon: 'TS' },
             { name: 'React & Next.js', icon: '⚛️' },
             { name: 'Node.js & Express', icon: '🟢' },
             { name: 'MongoDB & SQL', icon: '🗄️' },
             { name: 'Java', icon: '☕' },
             { name: 'Python', icon: '🐍' },
             { name: 'Tailwind CSS', icon: '🎨' },
             { name: 'AWS & Docker', icon: '☁️' },
           ].map((skill) => (
             <div key={skill.name} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow">
                <span className="text-4xl mb-3">{skill.icon}</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
             </div>
           ))}
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper className="bg-gray-50 dark:bg-slate-800/50">
        <div className="flex justify-between items-end mb-12">
           <div>
             <h2 className="text-3xl font-bold text-primary dark:text-white mb-2">Featured Projects</h2>
             <p className="text-gray-600 dark:text-gray-300">Some of my best work.</p>
           </div>
           <Link href="/projects" className="hidden md:flex items-center text-highlight font-medium hover:underline">
             View All <span className="ml-1">→</span>
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button href="/projects" variant="outline">View All Projects</Button>
        </div>
      </SectionWrapper>

      {/* CTA / Testimonials (simplified) */}
      <SectionWrapper>
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your next project?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work. If you have a project that needs some creative touch, get in touch.
            </p>
            <Button href="/contact" className="bg-white text-primary hover:bg-gray-100">
              Let's Talk
            </Button>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 -ml-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </SectionWrapper>
    </>
  );
}
