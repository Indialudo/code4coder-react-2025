const Ctrcard = ({ title, text }) => {
  return (
    <div className="flex md:p-4 p-5 justify-center flex-col text-center md:shadow-none shadow-md">
      <span className="md:text-3xl text-2xl font-semibold">{title}</span>
      <span className="text-lg font-medium">{text}</span>
    </div>
  );
};

export default Ctrcard;
