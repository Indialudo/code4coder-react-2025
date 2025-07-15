

const TextIcon = ({text, Icon, classes, secondClasses}) => {
  return (
    <div className={`w-full ${classes}`}>
      <div className={`flex items-center gap-1 capitalize ${secondClasses}`}>
        {Icon}
        {text}
      </div>
    </div>
  );
};

export default TextIcon;
