import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
    >
      {isDarkMode ? (
        <BsSun size={20} className="text-yellow-400" />
      ) : (
        <BsMoon size={20} className="text-blue-500" />
      )}
    </button>
  );
};

export default DarkModeToggle;
