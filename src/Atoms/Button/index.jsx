export default function Button({ onClickButton, text, styles, link }) {
  return (
    <>
      {!link ? (
        <button
          onClick={onClickButton}
          className={`flex bg-yellowButton rounded-full lg:font-semibold font-medium font-openSans lg:text-lg text-2xl px-4 py-2 hover:bg-blue transition ease-in-out delay-100 duration-300 ${styles}`}
        >
          {text}
        </button>
      ) : (
        <a
          href={link}
          className={`flex bg-yellowButton rounded-full lg:font-semibold font-medium font-openSans lg:text-lg text-2xl px-4 py-2 hover:bg-blue transition ease-in-out delay-100 duration-300 ${styles}`}
        >
          {text}
        </a>
      )}
    </>
  );
}
