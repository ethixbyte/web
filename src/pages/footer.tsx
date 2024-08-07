import GoToTopButton from "./gototop";

const Footer = () => {
  return (
    <section className="bg-second-color p-6 text-center ">
      <span className="text-white">
        Copyright &copy; {new Date().getFullYear()}
      </span>
      <a
        className="font-semibold text-white dark:text-white"
        href="https://www.ethixbyte.com/"
      >
        <span> EthixByte LLP, Inc.</span>
      </a>

      <GoToTopButton />
    </section>
  );
};

export default Footer;
