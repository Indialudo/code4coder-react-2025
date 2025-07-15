import React from "react";
import TextIcon from "../common/TextComponents/TextIcon";
import Button from "../common/buttons/Button";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import GradientButton from "../common/buttons/GradientButton";

const Hero = ({ heading, desc, href, btnText, img }) => {
  return (
    <section className="bg-gradient-to-r to-black from-[#0b0b3e] text-white">
      <div className="grid max-w-screen-xl px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 items-center">
        <div className="lg:mr-auto mx-auto place-self-center lg:col-span-7 pb-8">
          {heading}
          <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
            {desc}
          </p>
          <div className="flex relative my-5">
            <a
              href="https://wa.me/9341045976"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center lg:w-fit w-full justify-center"
            >
              <GradientButton
                text="enquire now"
                classes="uppercase rounded-full w-[12.4rem]"
                Icon={<FaWhatsapp size={20} />}
              />
            </a>
            {/* Optional second button */}
            {/* <a
              href={href}
              className="inline-flex items-center lg:w-fit w-full justify-center"
            >
              <Button
                text={btnText}
                classes="bg-darkyellow lg:w-fit w-full text-white rounded-md px-5 flex-row-reverse mr-4"
              />
            </a> */}
          </div>
        </div>

        <div className="justify-center lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={process.env.PUBLIC_URL + `/assets/${img}`}
            className="mx-auto"
            width={500}
            height={500}
            alt="refer and earn"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
