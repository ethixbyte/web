import Footer from "./footer";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const ParentFooter = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  return (
    <footer className="mt-9 bg-second-color text-center text-white  lg:text-left">
      <section className="border-b-2  p-6">
        <section className="container mx-auto px-10">
          <section className="flex items-center justify-center lg:justify-between">
            <section className="mr-12 hidden lg:block">
              <span>Get connected with us on social networks:</span>
            </section>
            <section className="flex justify-center gap-4 sm:gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=61555244726994"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="Facebook"
              >
                <Image
                  className="rounded-t-lg"
                  src={`${BASE_URL}c_pad,h_32,w_32/v1717769595/1_Facebook_colored_svg_copy-128_rmovvr.webp`}
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </a>

              <a
                href="https://www.instagram.com/ethixbyte?igsh=MTAzdnFieW44cGNtaQ%3D%3D&utm_source=qr"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="Instagram"
              >
                <Image
                  className="rounded-t-lg"
                  src={`${BASE_URL}c_pad,h_32,w_32/v1717770476/2018_social_media_popular_app_logo_instagram-128_h18pey.webp`}
                  alt="instagram"
                  width={32}
                  height={32}
                  title=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ethixbyte/?"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="LinkedIn"
              >
                <Image
                  className="rounded-t-lg"
                  src={`${BASE_URL}c_pad,h_32,w_32/v1717769595/circle-linkedin-128_vcyytu.webp`}
                  alt="linkedin"
                  width={32}
                  height={32}
                  title=""
                />
              </a>
              <a
                href="https://twitter.com/ethixbytellp"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="Twitter"
              >
                <Image
                  className="rounded-t-lg"
                  src={`${BASE_URL}c_pad,h_32,w_32/v1717769595/X-128_wgthxs.webp`}
                  alt="twitter"
                  width={32}
                  height={32}
                  title=""
                />
              </a>

              <a
                href="https://youtube.com/@ethixbytellp?si=fqnswxgrO-q5xyig"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="Youtube"
              >
                <Image
                  className="rounded-t-lg"
                  src={`${BASE_URL}c_pad,h_32,w_32/v1717769596/youtube-128_rx7btk.webp`}
                  alt="youtube"
                  width={32}
                  height={32}
                  title=""
                />
              </a>

              <a
                href="https://wa.me/message/4ZZ3SP4FLVM4J1"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="WhatsApp"
              >
                <Image
                  className="rounded-t-lg"
                  src={`${BASE_URL}c_pad,h_32,w_32/v1722848568/5296520_bubble_chat_mobile_whatsapp_whatsapp_logo_icon_i597m8.webp`}
                  alt="whatsapp"
                  width={32}
                  height={32}
                  title=""
                />
              </a>
            </section>
          </section>
          <section className="text-center mt-6">
            <Typography>
              <Link href="/tnc" className="hover:underline">
                Terms of use
              </Link>{" "}
              |
              <Link href="/privacypolicy" className="hover:underline">
                {" "}
                Privacy Policy
              </Link>{" "}
              |
              <Link href="/contactus" className="hover:underline">
                {" "}
                Connect US
              </Link>
            </Typography>
          </section>
        </section>
      </section>

      <Footer />
    </footer>
  );
};

export default ParentFooter;
