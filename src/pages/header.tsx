import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  return (
    <header className="flex">
      <section className="flex-none">
        <section className="justify-left mt-4">
          <Link href="/">
            <Image
              src={`${BASE_URL}c_pad,h_150,w_250/v1722268706/ethixbyte-logo_yp2kxa_tfau7t.avif`}
              alt="Logo"
              width={250}
              height={150}
              title="Logo"
              className="w-32 h-auto md:w-48 lg:w-64 xl:w-80 2xl:w-96 cursor-default hover:cursor-default"
            />
          </Link>
        </section>
      </section>

      <section className="flex-grow flex justify-end">
        <button className="p-2" onClick={toggleSidebar}>
          {isOpen ? (
            <CloseIcon />
          ) : (
            <Image
              src={`${BASE_URL}v1722270800/menu_g6wa01_egtbb0.webp`}
              alt="Menu Icon"
              width={64}
              height={64}
              title="Menu Icon"
              className="w-8/12 sm:w-1/2 md:w-5/6 lg:w-full"
            />
          )}
        </button>
      </section>

      {isOpen && (
        <section className="bg-second-color text-white w-48 fixed top-0 right-0 h-screen z-10">
          <button className="p-2" onClick={toggleSidebar}>
            <CloseIcon />
          </button>

          <Link href="/" onClick={toggleSidebar}>
            <span className="p-4 block hover:animate-pulse hover:shadow-xl">
              Homepage
            </span>
          </Link>

          <Link href="/discoverus" onClick={toggleSidebar}>
            <span className="p-4 block hover:animate-pulse hover:shadow-xl">
              Discover
            </span>
          </Link>

          <Link href="/innovation" onClick={toggleSidebar}>
            <span className="p-4 block hover:animate-pulse hover:shadow-xl">
              Pioneering Solutions
            </span>
          </Link>

          <Link href="/businessapproach" onClick={toggleSidebar}>
            <span className="p-4 block hover:animate-pulse hover:shadow-xl">
              Elevating Success
            </span>
          </Link>

          <Link href="/softwaresolutions" onClick={toggleSidebar}>
            <span className="p-4 block hover:animate-pulse hover:shadow-xl">
              Software Solutions
            </span>
          </Link>

          <Link href="/news" onClick={toggleSidebar}>
            <span className="p-4 block hover:animate-pulse hover:shadow-xl">
              Newsroom
            </span>
          </Link>
        </section>
      )}
    </header>
  );
};

export default Header;
