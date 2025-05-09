import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
      onClick={() => setDark(!dark)}
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
