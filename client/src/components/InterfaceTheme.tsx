import { useEffect, useState } from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const InterfaceTheme = () => {

    const [activeTheme, setActiveTheme] = useState<boolean>(
        localStorage.theme === "dark"
      );
    
      useEffect(() => {
        if (activeTheme) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [activeTheme]);
    
  return (
    <button
    className={'hover:cursor-pointer hover:text-cyan-500 dark:text-white dark:hover:text-cyan-500 fixed top-4 right-4 hover:bg-black dark:hover:bg-white rounded-full py-6px px-7px'}
    onClick={() => setActiveTheme((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      return newMode;
    })}
  >
    {activeTheme ? <WbSunnyIcon /> : <ModeNightIcon /> }
  </button>
  )
}

export default InterfaceTheme