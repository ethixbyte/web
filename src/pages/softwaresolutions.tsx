import { Box, Typography } from "@mui/material";
import Head from 'next/head';
import TabsDesign from "./tabsdesign";

const SofSolutions = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  return (
    <Box>
      <Head>
          <meta name="description" content="Our Solution Strategies" />
          <title>Software Solutions</title>
      </Head>
      <header className="text-red-500 mt-10 text-center">
        <Typography gutterBottom variant="h4">
          <span className="font-luckiest"> Software Solutions </span>
        </Typography>
        <picture>
          <source
            srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722597799/software_solutions_nb8sex_tndbpq.webp`}
          />
          <source
            srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722597799/software_solutions_nb8sex_tndbpq.webp`}
          />
          <img
            src={`${BASE_URL}v1722597799/software_solutions_nb8sex_tndbpq.webp`}
            alt="Software Solutions"
            width={4209}
            height={2796}
            title="Software Solutions"
          />
        </picture>
      </header>
      <main>
        <section className="tcontainer mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg lg:text-xl my-4">
            Whether it&apos;s web applications, mobile solutions, or enterprise-level
            software, our commitment to quality remains unwavering. Rigorous
            testing, continuous optimization, and a relentless pursuit of
            improvement define our approach, ensuring that the final product
            reflects both our expertise and our clients&apos; aspirations.
          </p>
        </section>
        <section className="text-second-color mt-10 text-center">
          <Typography variant="h4" gutterBottom>
            <span className="font-bold">Our Services</span>
          </Typography>
        </section>
        <TabsDesign />
      </main>
    </Box>
  );
};

export default SofSolutions;
