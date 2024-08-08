import { Box } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
const Homepage = () => {
    const buttonStyles = {
      backgroundColor: '#2563EB',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      '&:hover': {
        backgroundColor: '#1E40AF',
      },
    };
  
    const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
    return (
      <Box>
        <Head>
          <meta name="description" content="Our Future Ready Solutions" />
          <title>Homepage</title>
          <link rel='preload' href={`${BASE_URL}v1722844561/hero-idea_l96tfr_znkohb.webp`} as="image" />
          <link rel='preload' href={`${BASE_URL}v1722268583/integration_vmkpzr_llgchb.webp`} as="image" />
          <link rel='preload' href={`${BASE_URL}v1722268915/software-solutions_sg4ykl_enuznp.webp`} as="image" />
      </Head>
        <header className=" h-auto flex flex-col items-center justify-center">
          <h2 className="text-xl  md:text-3xl lg:text-4xl font-bold text-second-color">
            Ready to Level Up?
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-second-color my-4">
            Dive into Our Fresh, Future-ready Solutions
          </p>
        </header>
        <main>
          <section className="flex flex-col md:flex-row-reverse items-center justify-center bg-hero-idea-wave bg-no-repeat bg-cover">
            <article className="md:w-1/2 p-4">
              
              <Image
                src={`${BASE_URL}c_fill,q_auto,f_auto,w_1200/v1722844561/hero-idea_l96tfr_znkohb.webp`}
                alt="Innovation"
                width={2597}
                height={1869}
                layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority // Important for LCP images
              />
            </article>
            <article className="md:w-1/2 p-4  h-auto flex flex-col items-center justify-center">
              <h2 className="text-xl  md:text-3xl lg:text-4xl font-bold text-second-color">
                Innovation at Every Turn
              </h2>
              <p className="text-sm sm:text-sm md:text-base lg:text-lg text-second-color my-4">
                Pioneering Solutions for Tomorrow&apos;s Challenges
              </p>
              <Link href="/innovation">
                <button
                  className="bg-button-color hover:bg-second-color text-white font-bold py-2 px-4 rounded"
                  id="pioneering-solutions"
                  aria-label="Pioneering"
                >
                  KNOW MORE
                </button>
              </Link>
            </article>
          </section>
          <section className="flex flex-col md:flex-row items-center justify-center  bg-gradient-to-b from-[#ffffff] via-[#cce7f8] to-[#ffffff]">
            <article className="md:w-1/2 p-4 ">
              
              <Image
                  src={`${BASE_URL}c_fill,q_auto,f_auto,w_1200/v1722268583/integration_vmkpzr_llgchb.webp`}
                  alt="Integrating Elements"
                  width={605}
                  height={578}
                  layout="responsive"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </article>
            <article className="md:w-1/2 p-4 h-auto flex flex-col items-center justify-center">
              <h2 className="text-xl  md:text-3xl lg:text-4xl font-bold text-second-color">
                Precision Perfected
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-second-color my-4">
                Elevating Success with the Right Mix of Solutions
              </p>
  
              <Link href="/businessapproach">
                <button
                  className="bg-button-color hover:bg-second-color text-white font-bold py-2 px-4 rounded"
                  id="elevating-success"
                  aria-label="Success"
                >
                  KNOW MORE
                </button>
              </Link>
            </article>
          </section>
  
          <section className="flex flex-col md:flex-row-reverse items-center justify-center">
            <article className="md:w-1/2 p-4">
              
              <Image
                src={`${BASE_URL}c_fill,q_auto,f_auto,w_1200/v1722268915/software-solutions_sg4ykl_enuznp.webp`}
                alt="Software Solutions"
                width={605}
                height={578}
                layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </article>
            <article className="md:w-1/2 p-4 h-auto flex flex-col items-center justify-center">
              <h2 className="text-xl  md:text-3xl lg:text-4xl font-bold text-second-color">
                Empower Your Business
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-second-color my-4">
                Unleashing Powerful Software Solutions
              </p>
              <Link href="/softwaresolutions">
                <button
                  className="bg-button-color hover:bg-second-color text-white font-bold py-2 px-4 rounded"
                  id="soft-solutions"
                  aria-label="Solutions"
                >
                  KNOW MORE
                </button>
              </Link>
            </article>
          </section>
        </main>
      </Box>
    );
  };
  
  export default Homepage;