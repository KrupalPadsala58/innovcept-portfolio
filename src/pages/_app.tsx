import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Innovcept | MERN Stack Developer</title>
        <meta name="description" content="Professional MERN Stack Developer specialized in building modern, scalable web applications for US clients." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
