import Button from "@/components/common/buttons/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MaxEarningCardMain = () => {

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
    <div className="lg:px-5 py-10 mx-auto flex flex-wrap items-center text-start">
      <div className="lg:w-3/5 md:w-1/2 w-full md:p-4 md:py-0 py-4">
        <div className="h-full w-full rounded-lg bg-violet-600 text-white p-8">
          <h4 className="text-white lg:text-4xl md:text-3xl sm:text-2xl font-semibold text-xl mb-5">
          For Every Successful Master Course Enrolment Earn Upto Rs. 1,000

          </h4>

          <p className="text-lg text-white mt-3">
          For every friend who successfully enrols from your referral link, you get upto Rs 1,000 in cash rewards and your friend gets upto Rs. 500 OFF on enrolment Fees.
          </p>
          <div className="flex relative my-5">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-flex items-center lg:w-fit w-full justify-center "
            >
              <Button
                text="Refer & earn now"
                classes="bg-darkyellow lg:w-fit w-full text-white rounded-md px-5 flex-row-reverse mr-4"
              />
            </Link>
          </div>
          <p>1500+ have already earned</p>
          <Image src="/icons/user-list.png" width={208} height={48} className="max-w-full my-4" alt="user list" />
        </div>
      </div>
      <div className="lg:w-2/5 md:w-1/2 w-full h-full md:p-4 md:py-0 py-4">
        <div className="h-full w-full rounded-lg bg-green-500 text-white p-8">
          <h4 className="text-white lg:text-4xl md:text-3xl sm:text-2xl font-semibold text-xl mb-5">
            For every Successful Enrolment in a Certification Course earn Rs.
            3,000
          </h4>

          <p className="text-lg text-white mt-3">
            For every friend who successfully enrols from your referral link,
            you get Rs 1500 Discount in cash rewards and your friend gets Rs.
            1500 OFF on enrolment Fees.
          </p>
          <div className="flex relative my-5">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-flex items-center lg:w-fit w-full justify-center "
            >
              <Button
                text="Refer & earn now"
                classes="bg-darkyellow lg:w-fit w-full text-white rounded-md px-5 flex-row-reverse mr-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxEarningCardMain;
