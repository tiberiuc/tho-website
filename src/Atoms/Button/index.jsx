export default function Button({ onClickButton, text, styles }) {
  return (
    <button
      onClick={onClickButton}
      className={`flex bg-yellowButton rounded-3xl lg:font-semibold font-medium font-openSans lg:text-base text-2xl px-4 py-2 hover:bg-blue ${styles}`}
    >
      {text}
    </button>
  );
}
