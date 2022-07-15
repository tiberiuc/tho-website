export default function Button({ text, styles }) {
  return (
    <button
      className={`flex bg-yellowButton rounded-3xl font-semibold text-base px-4 py-2 ${styles}`}
    >
      {text}
    </button>
  );
}
