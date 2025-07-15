
const Button = ({ Icon, text, classes, handleSeeMoreClick }) => {
  return (
    <button onClick={handleSeeMoreClick} className={`px-4 py-3 flex items-center justify-center  hover:bg-opacity-80 gap-3 capitalize ${classes}` }> {Icon ? Icon : ''} {text}</button>
  )
}

export default Button