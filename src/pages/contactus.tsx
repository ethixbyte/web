import { Box, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Head from 'next/head';
const ContactUs = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  return (
    <Box>
      <Head>
          <meta name="description" content="Contact information" />
          <title>Connect With US</title>
      </Head>
      <header className="text-red-500 mt-9  font-bold text-2xl text-center">
        <Typography variant="h4" gutterBottom>
          <span className="font-luckiest">Connect With US </span>
        </Typography>
      </header>
      <main>
        <article className="flex flex-col md:flex-row items-center justify-center">
          <section className="md:w-1/4">
            <picture>
              <source
                srcSet={`${BASE_URL}c_pad,h_480,w_650/v1722599734/Nila_your_virtual_assistant_-_1_wp4yll_jyvhy9.webp`}
              />
              <source
                srcSet={`${BASE_URL}c_pad,h_800,w_800/v1722599734/Nila_your_virtual_assistant_-_1_wp4yll_jyvhy9.webp`}
              />
              <img
                src={`${BASE_URL}v1722599734/Nila_your_virtual_assistant_-_1_wp4yll_jyvhy9.webp`}
                alt="chat with NILA"
                className="w-auto"
                width={500}
                height={500}
                title="Executive"
              />
            </picture>
          </section>
          <section className="md:w-1/2 p-4  h-auto flex flex-col items-center justify-center">
            <Typography gutterBottom>Better yet, see us in person!</Typography>
            <Typography gutterBottom>
              We love our customers, so feel free to visit during normal
              business hours.
            </Typography>
            <Typography gutterBottom>
              Hours Open Mon - Fri 09:00 – 18:00 IST
            </Typography>
            <Typography gutterBottom>
              Perumbakkam, Chennai, TamilNadu, India
            </Typography>
            <Typography gutterBottom>
              <MailIcon /> info@ethixbyte.com
            </Typography>
            <Typography gutterBottom>
              <LocalPhoneIcon /> +91 7338906266
            </Typography>
          </section>
        </article>
      </main>
    </Box>
  );
};

export default ContactUs;
