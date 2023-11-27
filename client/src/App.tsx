import { useEffect, useState } from "react";
import FrontPage from "./pages/Home";
import PasswordDisplay from "./pages/PasswordDisplay";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function App() {
  // ---- DIFFERENT STATES THAT ARE PASSED DOWN TO CHILDREN
  const [activePassword, setActivePassword] = useState<boolean>(false);
  const [generatedPassword, setGeneratedPassword] =
    useState<string>("password");
  const [passwordType, setPasswordType] = useState<string>("");
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
    <>
      {/* ---- Sets Light Mode in app */}
      <button
        className={'hover:cursor-pointer hover:text-cyan-500 dark:text-white dark:hover:text-cyan-500 fixed top-4 left-4 hover:bg-black dark:hover:bg-white rounded-full py-6px px-7px'}
        onClick={() => setActiveTheme((prevMode) => {
          const newMode = !prevMode
          localStorage.setItem('theme', newMode ? 'dark' : 'light')
          return newMode;
        })}
      >
        {activeTheme ? <WbSunnyIcon /> : <ModeNightIcon /> }
      </button>
      {/* ---- Condition that sets interface for User dependent on whether a password has been generated or not */}
      {activePassword ? (
        <>
          <PasswordDisplay
            setActivePassword={setActivePassword}
            generatedPassword={generatedPassword}
            setGeneratedPassword={setGeneratedPassword}
            passwordType={passwordType}
          />
        </>
      ) : (
        <>
          <FrontPage
            setActivePassword={setActivePassword}
            setGeneratedPassword={setGeneratedPassword}
            setPasswordType={setPasswordType}
          />
        </>
      )}
    </>
  );
}

export default App;
