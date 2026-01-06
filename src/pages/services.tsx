import Head from "next/head";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import { motion } from "framer-motion";
import {
  Code2,
  LayoutDashboard,
  Server,
  ShoppingCart,
  Cloud,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end web application development using the MERN stack (MongoDB, Express, React, Node.js). I build scalable, secure, and high-performance applications.",
      icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Frontend Development",
      description:
        "Creating beautiful, responsive, and interactive user interfaces using React, Next.js, and Tailwind CSS. Focus on user experience and accessibility.",
      icon: (
        <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      ),
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Backend API Development",
      description:
        "Designing and implementing robust RESTful and GraphQL APIs. Experience with Node.js, Python (Django/Flask), and Java (Spring Boot).",
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Building custom e-commerce platforms with features like product management, cart, checkout, and payment gateway integration (Stripe, PayPal).",
      icon: (
        <ShoppingCart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      ),
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "SaaS Application Development",
      description:
        "Developing Software-as-a-Service products with multi-tenancy, subscription billing, and complex data workflows.",
      icon: <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Performance Optimization",
      description:
        "Auditing and optimizing existing web applications for speed, SEO, and user experience. Improving Web Vitals scores.",
      icon: <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
    },
  ];

  return (
    <>
      <Head>
        <title>Services | Innovcept</title>
      </Head>

      <div className="relative bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Services <span className="text-blue-200">Offered</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Tailored web development solutions to help your business grow and
              succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </div>

      <SectionWrapper className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:opacity-90 transition-all duration-300`}
                >
                  <div className="p-2">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-700">
                  <span className="inline-flex items-center text-sm font-medium text-primary dark:text-blue-400 group-hover:underline">
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-800/95 to-slate-700/90 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-900/10 pointer-events-none"></div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white/95 mb-4 relative z-10">
                Have a custom requirement?
              </h2>
              <p className="text-blue-50/80 text-lg leading-relaxed relative z-10">
                I can help you define your project scope and recommend the best
                technical approach.
              </p>
            </div>
            <div className="w-full md:w-auto mt-6 md:mt-0">
              <Button
                href="/contact"
                variant="outline"
                className="w-full md:w-auto bg-white/90 text-slate-800 hover:bg-white hover:scale-[1.02] transform transition-all duration-200 border-white/20 hover:border-white/30 shadow-sm hover:shadow-md"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
