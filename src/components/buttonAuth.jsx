function Button({ bgColor, textColor, text }) {
  return (
    <>
      <button
        className={`bg-${textColor} text-${textColor} border-b-4 border-b-primary-color hover:border-b-4 hover:border-b-${textColor} uppercase w-full hover:text-${textColor}`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
