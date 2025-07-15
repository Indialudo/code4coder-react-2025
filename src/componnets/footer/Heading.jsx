// import { Pacifico } from "next/font/google";

// const pacifico = Pacifico({ weight: "400", subsets: ["vietnamese"] });

const Heading = ({ text }) => {
  return (
    <h4
      className={`lg:text-4xl text-lightyellow md:text-3xl text-2xl text-start font-medium title-font mb-4 capitalize`}
    >
      {text}
    </h4>
  );
};

export default Heading;
