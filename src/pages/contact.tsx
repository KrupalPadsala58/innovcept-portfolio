import Head from 'next/head';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Innovcept</title>
      </Head>

      <div className="bg-gray-50 dark:bg-slate-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">Get In Touch</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary dark:text-white mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-highlight flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Me</h3>
                  <p className="text-gray-600 dark:text-gray-400">hello@innovcept.com</p>
                  <p className="text-sm text-gray-500 mt-1">I usually reply within 24 hours.</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-highlight flex-shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Available for Remote Work</p>
                  <p className="text-sm text-gray-500 mt-1">Serving clients worldwide (US Timezone overlap).</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Connect on Social</h3>
               <div className="flex gap-4">
                  {/* Social buttons similar to footer but larger */}
                  <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-highlight hover:text-white transition-all">
                    Linkedin
                  </a>
                   <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-highlight hover:text-white transition-all">
                    GitHub
                  </a>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-highlight focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
               <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-highlight focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

               <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-highlight focus:border-transparent outline-none transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
