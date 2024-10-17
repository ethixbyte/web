import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Head from 'next/head';
const Aboutus = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  return (
    <Box>
      <Head>
          <meta name="description" content="Ethixbyte Key Strategies " />
          <title>Discover US</title>
      </Head>
      <header className="text-red-500 mt-10 text-center">
        <Typography variant="h4" gutterBottom>
          <span className="font-luckiest">Discover US</span>
        </Typography>
      </header>
      <main>
        <section className="max-w-screen-lg mx-auto">
          <article className="border-b mb-4">
            <button
              className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                activeTab === 1
                  ? "text-second-color border-b-2 border-second-color"
                  : "text-black"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Our Story
            </button>
            <button
              className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                activeTab === 2
                  ? "text-second-color border-b-2 border-second-color"
                  : "text-black"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Our Vision
            </button>
            <button
              className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                activeTab === 3
                  ? "text-second-color border-b-2 border-second-color"
                  : "text-black"
              }`}
              onClick={() => handleTabClick(3)}
            >
              Areas Of Operations
            </button>
            <button
              className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                activeTab === 4
                  ? "text-second-color border-b-2 border-second-color"
                  : "text-black"
              }`}
              onClick={() => handleTabClick(4)}
            >
              Technical Expertise
            </button>
            <button
              className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                activeTab === 5
                  ? "text-second-color border-b-2 border-second-color"
                  : "text-black"
              }`}
              onClick={() => handleTabClick(5)}
            >
              Domain Expertise
            </button>
          </article>
          <section>
            {activeTab === 1 && (
              <article className="flex flex-col md:flex-row items-center justify-center">
                <section className="md:w-1/2">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722441410/terms_djkdxr_1_opcb01.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722441410/terms_djkdxr_1_opcb01.webp`}
                    />
                    <img
                      src={`${BASE_URL}v1722441410/terms_djkdxr_1_opcb01.webp`}
                      alt="our story"
                      className="w-auto"
                      width={625}
                      height={559}
                      title="Our Story"
                    />
                  </picture>
                </section>
                <section className="md:w-1/2 p-4  h-auto flex flex-col items-center justify-center">
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg text-second-color font-bold">
                    {" "}
                    Born from a passion for innovation, our startup emerged with
                    a vision: to redefine possibilities in the tech world.
                    Fuelled by curiosity and expertise, we embarked on a journey
                    to simplify complexities, creating solutions that empower
                    businesses. Our story is one of relentless dedication,
                    collaborative spirit, and a drive to transform ideas into
                    impactful realities.
                  </p>
                </section>
              </article>
            )}
            {activeTab === 2 && (
              <article className="flex flex-col md:flex-row items-center justify-center">
                <section className="md:w-1/2">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722441390/company_vision_v4tpms_1_rkundk.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722441390/company_vision_v4tpms_1_rkundk.webp`}
                    />
                    <img
                      src={`${BASE_URL}v1722441390/company_vision_v4tpms_1_rkundk.webp`}
                      alt="our vision"
                      className="w-auto"
                      width={1891}
                      height={1806}
                      title="Our Vision"
                    />
                  </picture>
                </section>
                <section className="md:w-1/2 p-4  h-auto flex flex-col items-center justify-center">
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg text-second-color font-bold">
                    {" "}
                    We envision a world where to bring the technology accessible
                    to every part of the world. Our team is committed to pushing
                    boundaries, embracing challenges, and delivering solutions
                    that empower individuals and businesses alike.
                  </p>
                </section>
              </article>
            )}
            {activeTab === 3 && (
              <article className="flex flex-col md:flex-row items-center justify-center">
                <section className="md:w-1/2">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722441390/areas_of_operations_fubgpk_phucrz.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722441390/areas_of_operations_fubgpk_phucrz.webp`}
                    />
                    <img
                      src={`${BASE_URL}v1722441390/areas_of_operations_fubgpk_phucrz.webp`}
                      alt="Areas of operations"
                      className="w-auto"
                      width={1891}
                      height={1806}
                      title="Areas of Operation"
                    />
                  </picture>
                </section>
                <section className="md:w-1/2 p-4  h-auto flex flex-col items-center justify-center">
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg text-second-color font-bold">
                    {" "}
                    We deliver exceptional services tailored to meet diverse
                    needs. Our strategic reach allows us to effectively serve
                    clients and communities, offering unparalleled solutions and
                    fostering meaningful partnerships.
                  </p>
                </section>
              </article>
            )}
            {activeTab === 4 && (
              <article className="flex flex-col md:flex-row items-center justify-center">
                <section className="md:w-1/2">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722441409/tech_expertise_gxniki_1_o5rhjm.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722441409/tech_expertise_gxniki_1_o5rhjm.webp`}
                    />
                    <img
                      src={`${BASE_URL}v1722441409/tech_expertise_gxniki_1_o5rhjm.webp`}
                      alt="tech expertise"
                      className="w-auto"
                      width={1891}
                      height={1806}
                      title="Tech Expertise"
                    />
                  </picture>
                </section>
                <section className="md:w-1/2 p-4  h-auto flex flex-col items-center justify-center">
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg text-second-color font-bold">
                    {" "}
                    We are well-versed in a variety of operating systems,
                    networks, and databases. We work with just about any
                    technology that a small business would encounter. We use
                    this expertise to help customers with small to mid-sized
                    projects.
                  </p>
                </section>
              </article>
            )}
            {activeTab === 5 && (
              <article className="flex flex-col md:flex-row items-center justify-center">
                <section className="md:w-1/2">
                  <picture>
                    <source
                      srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722441391/domain_expertise_uhbpej_1_ncqami.webp`}
                    />
                    <source
                      srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722441391/domain_expertise_uhbpej_1_ncqami.webp`}
                    />
                    <img
                      src={`${BASE_URL}v1722441391/domain_expertise_uhbpej_1_ncqami.webp`}
                      alt="Domain expertise"
                      className="w-auto"
                      width={1891}
                      height={1806}
                      title="Domain Expertise"
                    />
                  </picture>
                </section>
                <section className="md:w-1/2 p-4  h-auto flex flex-col items-center justify-center">
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg text-second-color font-bold">
                    {" "}
                    Our domain expertise is a culmination of extensive industry
                    knowledge and hands-on experience. Our deep understanding
                    enables us to craft tailored strategies, delivering
                    exceptional results and fostering sustained growth for our
                    clients.
                  </p>
                </section>
              </article>
            )}
          </section>
        </section>
      </main>
    </Box>
  );
};

export default Aboutus;
