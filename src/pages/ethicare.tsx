import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import Divider from "@mui/material/Divider";

const EthiCare = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  return (
    <Box>
      <Head>
        <meta name="description" content="Ethixbyte Social Responsibility" />
        <title>Social Responsibility</title>
      </Head>
      <header className="text-red-500 mt-10 text-center">
        <Typography variant="h4" gutterBottom>
          <span className="font-luckiest">Ethicare</span>
        </Typography>
      </header>
      <main>
        <article>
          <section className="tcontainer mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-base sm:text-lg lg:text-xl my-4">
              At EthixByte, we believe in the power of community and compassion.
              Our commitment to social responsibility goes beyond business—we
              extend our hands to support those who need it most. Through our
              charitable initiatives, we actively contribute to causes that
              provide food and education to underprivileged individuals. By
              partnering with non-profit organizations and making direct
              donations, we strive to ensure that everyone has access to
              essential resources. Whether it&apos;s disaster relief efforts,
              community outreach, or long-term projects, we are dedicated to
              making a meaningful difference. Together, we can create a
              brighter, more inclusive future for everyone.
            </p>
          </section>
          <Divider className="mt-10" />
          <section className="text-second-color mt-10 text-center">
            <Typography variant="h4" gutterBottom>
              <span className="font-bold">Our NGO Partners</span>
            </Typography>
          </section>
          <section className="flex items-center justify-center mt-10">
            <a
              href="https://www.akshayapatra.org/"
              target="_blank"
              className="mr-6 hover:scale-125 transition"
              title=""
            >
              <Image
                src={`${BASE_URL}t_Banner 16:9/v1727623255/akshaya_patra_zqruwt.webp`}
                alt="Logo"
                width={250}
                height={150}
                title="Akshaya Patra"
                className="w-32 h-auto md:w-48 lg:w-64 xl:w-80 2xl:w-96 cursor-default hover:cursor-default"
              />
            </a>
            <a
              href="https://www.viplafoundation.org/"
              target="_blank"
              className="mr-6 hover:scale-125 transition"
              title=""
            >
              <Image
                src={`${BASE_URL}v1727624639/Vipla-Foundation-Logo_hmgpnz.webp`}
                alt="Logo"
                width={250}
                height={150}
                title="Vipla Foundation"
                className="w-32 h-auto md:w-48 lg:w-64 xl:w-80 2xl:w-96 cursor-default hover:cursor-default"
              />
            </a>
          </section>
        </article>
      </main>
    </Box>
  );
};
export default EthiCare;
