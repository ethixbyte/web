import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Head from 'next/head';
const News = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  return (
    <Box>
      <Head>
          <meta name="description" content="Meet NILA - Virtual Assistant" />
          <title>Newsroom</title>
      </Head>
      <header className="text-red-500 mt-9  font-bold text-2xl text-center">
        <Typography variant="h4" gutterBottom>
          <span className="font-luckiest">Newsroom </span>
        </Typography>
      </header>
      <main>
        <section className=" mt-6 md:flex md:justify-evenly md:flex-col lg:flex lg:flex-row">
          <article className="block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:scale-105 transition">
            <section className="relative overflow-hidden bg-cover bg-no-repeat ">
              <Image
                className="rounded-t-lg"
                src={`${BASE_URL}v1722266680/file_inndpo_tehjn1.avif`}
                alt="nila"
                width={1080}
                height={1080}
                title="Nila"
              />
            </section>
            <section className="p-6">
              <Typography variant="body2" gutterBottom>
                Follow us on social media for the latest updates, news, and
                exclusive content. Scroll down to the footer to find our social
                media links and join our online community!
              </Typography>
            </section>
          </article>
        </section>
      </main>
    </Box>
  );
};

export default News;
