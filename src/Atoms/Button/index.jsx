export default function Button({ text, styles }) {
  return (
    <button
      className={`flex bg-yellowButton rounded-3xl lg:font-semibold font-medium font-openSans lg:text-base text-2xl px-4 py-2 ${styles}`}
    >
      {text}
    </button>
  );
}
