import Head from 'next/head';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

export default function Services() {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development using the MERN stack (MongoDB, Express, React, Node.js). I build scalable, secure, and high-performance applications.',
      icon: '💻',
    },
    {
      title: 'Frontend Development',
      description: 'Creating beautiful, responsive, and interactive user interfaces using React, Next.js, and Tailwind CSS. Focus on user experience and accessibility.',
      icon: '🎨',
    },
    {
      title: 'Backend API Development',
      description: 'Designing and implementing robust RESTful and GraphQL APIs. Experience with Node.js, Python (Django/Flask), and Java (Spring Boot).',
      icon: '⚙️',
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Building custom e-commerce platforms with features like product management, cart, checkout, and payment gateway integration (Stripe, PayPal).',
      icon: '🛒',
    },
    {
      title: 'SaaS Application Development',
      description: 'Developing Software-as-a-Service products with multi-tenancy, subscription billing, and complex data workflows.',
      icon: '☁️',
    },
    {
      title: 'Performance Optimization',
      description: 'Auditing and optimizing existing web applications for speed, SEO, and user experience. Improving Web Vitals scores.',
      icon: '🚀',
    },
  ];

  return (
    <>
      <Head>
        <title>Services | Innovcept</title>
      </Head>

      <div className="bg-primary pt-20 pb-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Services Offered</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto px-4">
          Tailored web development solutions to help your business grow and succeed in the digital age.
        </p>
      </div>

      <SectionWrapper className="-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 dark:bg-slate-700 rounded-lg flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
         <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="md:w-2/3">
             <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Have a custom requirement?</h2>
             <p className="text-gray-600 dark:text-gray-300 text-lg">
               I can help you define your project scope and recommend the best technical approach.
             </p>
           </div>
           <div>
             <Button href="/contact">Schedule Consultation</Button>
           </div>
         </div>
      </SectionWrapper>
    </>
  );
}
