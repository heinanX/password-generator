import { useState } from "react";
import FrontPage from "./pages/Home";
import PasswordDisplay from "./pages/PasswordDisplay";

function App() {
  const [activePassword, setActivePassword] = useState<boolean>(false);
  const [generatedPassword, setGeneratedPassword] = useState<string>("password");

  return (
    <>
      {activePassword ? (
        <>
          <PasswordDisplay
            setActivePassword={setActivePassword}
            generatedPassword={generatedPassword}
            setGeneratedPassword={setGeneratedPassword}
          />
        </>
      ) : (
        <>
          <FrontPage
            setActivePassword={setActivePassword}
            setGeneratedPassword={setGeneratedPassword}
          />
        </>
      )}
    </>
  );
}

export default App;
