import Footer from "./footer";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                <FacebookIcon/>
              </a>

              <a
                href="https://www.instagram.com/ethixbyte?igsh=MTAzdnFieW44cGNtaQ%3D%3D&utm_source=qr"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="Instagram"
              >
                <InstagramIcon/>
              </a>
              <a
                href="https://www.linkedin.com/company/ethixbyte/?"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="LinkedIn"
              >
                <LinkedInIcon/>
              </a>
              <a
                href="https://twitter.com/ethixbytellp"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="Twitter"
              >
                <XIcon/>
              </a>

              <a
                href="https://youtube.com/@ethixbytellp?si=fqnswxgrO-q5xyig"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="Youtube"
              >
                <YouTubeIcon/>
              </a>

              <a
                href="https://wa.me/message/4ZZ3SP4FLVM4J1"
                target="_blank"
                className="mr-6 hover:scale-125 transition"
                title="WhatsApp"
              >
                <WhatsAppIcon/>
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
