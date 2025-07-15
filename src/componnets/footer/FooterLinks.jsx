

const FooterLinks = ({ text, icon: Icon, classes }) => {
  return (
    <span className={`flex items-center gap-2 text-sm my-3 transition-all ${classes}`}>
     {Icon && <Icon size={18} />}
      <span className="">
        {text}
      </span>
    </span>
  );
};

export default FooterLinks;
