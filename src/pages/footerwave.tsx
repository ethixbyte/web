import { Box } from "@mui/material";
import ParentFooter from "./parentfooter";
import Image from "next/image";

const FooterWave = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  return (
    <Box className="relative ">
      <Image
        src={`${BASE_URL}v1722342705/wave_tgl4tu.webp`}
        alt="My SVG"
        className="w-max md:w-fit lg:w-fit h-full"
        width={4500}
        height={1000}
        title="Footer Wave"
      />
      <section className="w-full absolute top-[9rem] lg:top-[15rem] sm:top-[10rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ParentFooter />
      </section>
    </Box>
  );
};

export default FooterWave;
