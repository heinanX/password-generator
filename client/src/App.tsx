import { useState } from "react";
import FrontPage from "./pages/Home";
import PasswordDisplay from "./pages/PasswordDisplay";
import InterfaceTheme from "./components/InterfaceTheme";


function App() {
  // ---- DIFFERENT STATES THAT ARE PASSED DOWN TO CHILDREN
  const [activePassword, setActivePassword] = useState<boolean>(false);
  const [generatedPassword, setGeneratedPassword] =
    useState<string>("password");
  const [passwordType, setPasswordType] = useState<string>("");
 
  return (
    <>
      <InterfaceTheme />
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
