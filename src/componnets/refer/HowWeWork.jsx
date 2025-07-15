import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../common/buttons/Button";

const HowWeWork = () => {

  const referCode = "C4C1000";
  const message = `
  Hey, I just invited you to use the Code4Coder Learning platofm! 
  Use my referral code: ${referCode}

  Step 1: Refer & Earn up to ₹2 lakh every month.
  Step 2: Share your refer and earn link with your friends and colleagues..
  Step 3: You earn your referral amount on each referral link as well as on enrollment and can redeem it to your bank account!
  Step 4: If the Enrollment done by your refer coder you will get Rs 1000 for each student done payment by your refer code.
   Join now and let's learn together! ! Use my referral code: ${referCode}

  
   2+ Millions User registered with Code4Coder. It's 100% safe & secure.
   Website . https://code4coder.com
  `;

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="my-4 text-2xl font-semibold text-center mx-auto tracking-tight leading-none md:text-3xl xl:text-4xl">
          Benefits of Code4Coder
        </h2>
        <div className="rounded-lg bg-gradient-to-r to-black from-[#0b0b3e] text-white max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex flex-wrap  md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-24 h-24 relative inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image src="/icons/refer.png" fill alt="refer" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white md:text-3xl text-xl title-font font-medium mb-3">
                  1. Refer your friend
                </h2>
                <p className="leading-relaxed md:text-xl text-lg text-gray-400 font-bold">
                  Share your refer and earn link with your friends and
                  colleagues.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-24 h-24 inline-flex items-center relative justify-center rounded-full mb-5 flex-shrink-0">
                <Image src="/icons/online_education.png" fill alt="refer" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white md:text-3xl text-xl title-font font-medium mb-3">
                  2. Your friend sign up and enrolls
                </h2>
                <p className="leading-relaxed md:text-xl text-lg text-gray-400 font-bold">
                  Your friend with your referral link and enrols by
                  paying the enrolment fee
                </p>
                {/*  Your friend  signs up with your referral link and enrols by
                  paying the enrolment fee*/}
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-24 h-24 relative inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image src="/icons/locker.png" fill alt="refer" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white md:text-3xl text-xl title-font font-medium mb-3">
                  3. Get cash rewards
                </h2>
                <p className="leading-relaxed md:text-xl text-lg text-gray-400 font-bold">
                  You earn your referral amount on each referral link as well as on
                  enrollment and can redeem it to your bank account
                  {/* You earn your referral amount on each sign up as well on
                  enrolment and can redeem it to your bank account or on Apple
                  Products */}
                </p>
              </div>
            </div>
          </div>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
            <Button
              text="Refer & earn Now"
              classes="capitalize mx-auto rounded-lg w-fit px-7 py-3 md:text-xl sm:text-md text-base md:w-auto w-full bg-darkyellow text-white font-semibold mt-5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
