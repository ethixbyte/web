import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Head from 'next/head';
const TermsAndConditions = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  return (
    <Box>
       <Head>
          <meta name="description" content="Our Terms of use" />
          <title>Terms of Use</title>
      </Head>
      <main className="mx-6 py-10 items-center justify-center">
        <header className="text-red-500 mt-2.5 text-2xl text-center">
          <Typography variant='h4' gutterBottom>
            <span className="font-luckiest">Terms of use</span>
          </Typography>

          <Image
            src={`${BASE_URL}v1722599761/terms_amqndw_tmvmsm.webp`}
            alt="Terms of Use"
            className="w-full h-[30rem]"
            width={2294}
            height={1625}
            title="Terms of Use"
          />
        </header>
        <section className="font-bold text-2xl text-left">
          <Typography gutterBottom>
            Welcome to EthixByte! These Terms and Conditions (&quot;T&C&quot;) govern your
            use of our website, mobile applications, and services. By accessing
            or using our platform, you agree to comply with and be bound by
            these T&C. If you do not agree with these terms, please do not use
            our services.
          </Typography>
        </section>
        <br />
        <br />
        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>1 Acceptance of Terms</strong>
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              1.1 By using our services, you affirm that you are of legal age
              and have the capacity to enter into a legally binding agreement.
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              1.2 These T&C may be updated from time to time. It is your
              responsibility to review these terms periodically for changes.
            </Typography>
          </section>
        </article>
        <br />
        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>2 Use of Our Services</strong>
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              2.1 You agree to use our services only for lawful purposes and in
              accordance with these T&C.
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              2.2 You are responsible for maintaining the confidentiality of
              your account credentials and for all activities associated with
              your account.
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              2.3 We reserve the right to terminate or suspend your account
              without notice if we believe that you have violated these T&C or
              engaged in illegal or fraudulent activities.
            </Typography>
          </section>
        </article>
        <br />
        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong> 3 Intellectual Property </strong>
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              3.1 All content, trademarks, logos, and intellectual property
              displayed on our platform are the property of EthixByte and may
              not be used without our prior written consent.
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              3.2 You retain ownership of any content you submit to our
              platform. By submitting content, you grant us a worldwide,
              non-exclusive, royalty-free license to use, reproduce, modify,
              distribute, and display the content for the purpose of providing
              our services.
            </Typography>
          </section>
        </article>
        <br />
        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong> 4 Privacy </strong>
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              4.1 Your use of our services is also governed by our Privacy
              Policy, which outlines how we collect, use, and protect your
              personal information.
            </Typography>
          </section>
        </article>
        <br />
        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>5 Third-Party Links </strong>
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              5.1. Our platform may contain links to third-party websites or
              services. We are not responsible for the content or practices of
              these third parties and encourage you to review their terms and
              policies.
            </Typography>
          </section>
        </article>
        <br />
        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>6 Disclaimers and Limitations </strong>
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              6.1. Our services are provided on an &quot;as-is&quot; and &quot;as available&quot;
              basis. We make no warranties, express or implied, regarding the
              accuracy, completeness, or reliability of our services.
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              6.2. We are not liable for any direct, indirect, incidental,
              special, or consequential damages resulting from your use of our
              services.
            </Typography>
          </section>
        </article>
        <br />
        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong> 7 Governing Law </strong>
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              7.1. These T&C are governed by and construed in accordance with
              the laws of Chennai Jurisdiction, without regard to its conflict
              of law principles.
            </Typography>
          </section>
        </article>
        <br />
        <article>
          <section className="font-bold text-3xl text-left">
            <Typography gutterBottom>
              <strong>8 Contact Information </strong>
            </Typography>
          </section>
          <section className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
              8.1. If you have any questions or concerns about these T&C, please
              contact us at info@ethixbyte.com
            </Typography>
          </section>
        </article>
      </main>
    </Box>
  );
};

export default TermsAndConditions;
