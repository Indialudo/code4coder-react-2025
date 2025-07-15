"use client";
import React, { useState } from "react";
import Image from "next/image";
import style from "@/styles/top/header.module.css";
import Link from "next/link";
import {
  FaHome,
  FaBook,
  FaBullseye,
  FaMicrophoneAlt,
  FaUserTie,
  FaLaptopCode,
  FaBriefcase,
  FaPhone,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const links = [
    {
      text: "Home",
      href: "/",
      Icon: FaHome,
    },
    {
      text: "courses",
      href: "/courses",
      Icon: FaBook,
    },
    {
      text: "placement",
      href: "/placement",
      Icon: FaBullseye,
    },
    {
      text: "interview",
      href: "/interview",
      Icon: FaMicrophoneAlt,
    },
    {
      text: "internship",
      href: "/internship",
      Icon: FaLaptopCode,
    },
    {
      text: "careers",
      href: "/careers",
      Icon: FaBriefcase,
    },
    // {
    //   text: "blogs",
    //   href: "/blogs",
    //   Icon: FaBloggerB
    // },
  ];

  const route = useRouter();
  function handleRedirect(path) {
    route.push(path);
    setToggle(false);
  }

  const page = usePathname();
  function linkClasses(type = null) {
    let classes = "";
    if (type === page) {
      classes += " bg-gray-900";
    }
    return classes;
  }

  return (
    <>
      <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-2 lg:px-6 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleToggle}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
              <Link
                href="/"
                className="flex flex-shrink-0 items-center justify-between"
              >
                <>
                  <span>
                    <Image
                      className="h-8 w-auto cursor-pointer"
                      width={100}
                      height={100}
                      src="/assets/images/logo.png"
                      alt="logo"
                    />
                  </span>
                  <span className={style.logoname}>Code4Coder</span>
                </>
              </Link>
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4">
                  {links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className={` text-white rounded-md px-3 py-2 text-sm font-medium capitalize ${linkClasses(
                        link.href
                      )}`}
                      aria-current="page"
                    >
                      {link.text}
                    </Link>
                  ))}

                  <Link
                    onClick={() => window.location.reload()}
                    href="/refer"
                    className=" hover:bg-gray-700 
                               hover:text-white text-green-500 font-bold 
                               rounded-md px-3 py-2 "
                  >
                    Refer & Earn
                  </Link>

                  <Link
                    href="tel:9341045976"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center"
                  >
                    <FaPhone className="mr-2" />
                    9341045976
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden" id="mobile-menu">
          {toggle && (
            <>
              <div
                className={`${style.fullNobileSizeHeightHumberger} transition-all space-y-1 px-2 pb-3 pt-2`}
                style={{ height: "100vh" }}
              >
                {links.map((link, i) => (
                  <button
                    onClick={() => handleRedirect(link.href)}
                    key={i}
                    // href={link.href}
                    className={`flex items-center w-full text-white rounded-md px-3 py-2 text-base font-medium capitalize ${linkClasses(
                      link.href
                    )}`}
                    aria-current="page"
                  >
                    <link.Icon className="mr-2" />
                    {link.text}
                  </button>
                ))}

                <button
                 onClick={() => handleRedirect("/refer")}
                  className="w-full flex items-center 
                       hover:text-white text-green-500 font-bold 
                       rounded-md px-3 py-2 "
                >
                  <FaUserTie className="mr-2" />
                  Refer & Earn
                </button>
                <Link
                  // onClick={() => setToggle(false)}
                  href="tel:9341045976"
                  className="flex items-center text-gray-300 hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <FaPhone className={`mr-2 icon-orange`} />
                  9341045976
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
