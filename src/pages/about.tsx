import Head from 'next/head';
import Image from 'next/image';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Innovcept</title>
      </Head>

      <div className="bg-gray-50 dark:bg-slate-800/30 py-12 md:py-20">
        <SectionWrapper>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image 
                    src="https://placehold.co/500x500/png?text=Me" 
                    alt="Innovcept Portrait" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-highlight/20 rounded-2xl"></div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">
                About Me
              </h1>
              <h3 className="text-2xl text-highlight font-medium mb-4">
                Full-Stack Developer transforming ideas into digital reality.
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm a passionate MERN Stack Developer with a strong foundation in Java and Python. 
                  My journey in web development started with a curiosity for how things work on the internet, 
                  which quickly evolved into a career building robust and scalable web applications.
                </p>
                <p>
                  I specialize in creating user-centric digital experiences that are not only visually appealing 
                  but also highly functional and performant. Working with US clients has honed my ability to understand global 
                  business requirements and deliver top-tier solutions.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and staying updated with the latest industry trends.
                </p>
              </div>
              <div className="mt-8">
                 <Button href="/contact">Get in Touch</Button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-12 text-center">Professional Journey</h2>
        
        <div className="space-y-12">
          {/* Experience Item 1 */}
          <div className="flex flex-col md:flex-row gap-8 border-l-4 border-highlight pl-8 relative">
             <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white dark:bg-slate-900 border-4 border-highlight rounded-full"></div>
             <div className="md:w-1/4">
               <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Web Developer</h3>
               <p className="text-gray-500">2023 - Present</p>
               <p className="text-highlight font-medium">Tech Corp Inc.</p>
             </div>
             <div className="md:w-3/4 text-gray-600 dark:text-gray-300">
               <ul className="list-disc list-outside ml-4 space-y-2">
                 <li>Led a team of 5 developers to rebuild the company's core SaaS platform using Next.js and Microservices.</li>
                 <li>Improved application performance by 40% through code optimization and server-side rendering.</li>
                 <li>Implemented CI/CD pipelines to streamline deployment processes.</li>
               </ul>
             </div>
          </div>

           {/* Experience Item 2 */}
          <div className="flex flex-col md:flex-row gap-8 border-l-4 border-gray-200 dark:border-slate-700 pl-8 relative">
             <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white dark:bg-slate-900 border-4 border-gray-300 dark:border-slate-600 rounded-full"></div>
             <div className="md:w-1/4">
               <h3 className="text-xl font-bold text-gray-900 dark:text-white">Freelance Developer</h3>
               <p className="text-gray-500">2021 - 2023</p>
               <p className="text-highlight font-medium">Remote</p>
             </div>
             <div className="md:w-3/4 text-gray-600 dark:text-gray-300">
               <ul className="list-disc list-outside ml-4 space-y-2">
                 <li>Developed over 15 custom websites and web apps for international clients.</li>
                 <li>Specialized in e-commerce solutions using MERN stack.</li>
                 <li>Maintained a 100% client satisfaction rate with on-time delivery.</li>
               </ul>
             </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-primary text-white rounded-3xl my-16">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
               <div className="text-4xl md:text-5xl font-bold mb-2">3+</div>
               <div className="text-blue-200">Years Exp</div>
            </div>
            <div className="p-4">
               <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
               <div className="text-blue-200">Projects Done</div>
            </div>
             <div className="p-4">
               <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
               <div className="text-blue-200">Happy Clients</div>
            </div>
             <div className="p-4">
               <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
               <div className="text-blue-200">Support</div>
            </div>
         </div>
      </SectionWrapper>
    </>
  );
}
