import { Box, Typography } from "@mui/material";
import Image from "next/image";

const PrivacyPolicy = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  return (
    <Box>
      <main className="mx-6 py-10 items-center justify-center">
        <header className="text-red-500 mt-2.5 font-bold text-2xl text-center">
          <Typography variant="h4" gutterBottom>
            <span className="font-luckiest">Privacy Policy</span>
          </Typography>

          <Image
            src={`${BASE_URL}v1722599748/privacy_policy_skpxoq_ifinaq.webp`}
            alt="Privacy Policy"
            className="w-full"
            width={2294}
            height={1625}
            title="Privacy Policy"
          />
        </header>
        <section className="font-bold text-2xl text-left">
          <Typography gutterBottom>
            At EthixByte, we are committed to protecting your privacy and
            safeguarding your personal information. This Privacy Policy outlines
            how we collect, use, disclose, and protect the information you
            provide to us through our website, mobile applications, and other
            services.
          </Typography>
        </section>
        <br />

        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>Information We Collect</strong>
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              Personal Information: We may collect personal information, such as
              your name, email address, postal address, and phone number when
              you voluntarily provide it to us.
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              Usage Information: We may collect non-personal information about
              your interaction with our services, including your device type,
              browser type, IP address, and browsing activity.
            </Typography>
          </section>
        </article>
        <br />

        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>How We Use Your Information</strong>
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              Providing Services: We use your personal information to provide
              you with the services and products you request and to communicate
              with you about your account or our offerings.
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              Improving Services: We may use your information to analyze and
              improve our services, develop new features, and enhance the user
              experience.
            </Typography>
          </section>
        </article>
        <br />

        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>Data Sharing and Disclosure</strong>
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent. However, we may
              share your information in the following circumstances:
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              Service Providers: We may engage third-party service providers to
              assist us in delivering our services, and we may share your
              information with them to perform these tasks on our behalf.
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              Legal Requirements: We may disclose your information to comply
              with legal obligations, enforce our policies, respond to legal
              requests, or protect our rights, privacy, safety, or property.
            </Typography>
          </section>
        </article>
        <br />

        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>Your Choices</strong>
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              You have the right to access, correct, or delete your personal
              information. You may also opt-out of marketing communications at
              any time by following the instructions in our emails or contacting
              us directly.
            </Typography>
          </section>
        </article>
        <br />

        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>Security</strong>
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction.
              However, please be aware that no method of data transmission over
              the internet or electronic storage is entirely secure.
            </Typography>
          </section>
        </article>
        <br />

        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>Changes to this Privacy Policy</strong>
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. The latest version will always be available on
              our website with the effective date.
            </Typography>
          </section>
        </article>
        <br />

        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>Contact Us</strong>
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              If you have any questions or concerns regarding this Privacy
              Policy or our data practices, please contact us at
              info@ethixbyte.com
            </Typography>
          </section>

          <section className="font-bold text-2xl text-left">
            <Typography gutterBottom>
              By using our services, you agree to the terms outlined in this
              Privacy Policy. Please review this policy regularly to stay
              informed about how we protect your privacy.
            </Typography>
          </section>
        </article>
      </main>
    </Box>
  );
};

export default PrivacyPolicy;
