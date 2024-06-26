import { iActionIcons } from "../interfaces/interfaces";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import RefreshIcon from "@mui/icons-material/Refresh";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { generatePassword } from "../functions/generatePassword";
import { useState } from "react";
import SaveFeature from "./SaveFeature";

const ActionIcons = ({ setActivePassword, generatedPassword,setGeneratedPassword, passwordType }: iActionIcons) => {
  const [activeMsg, setActiveMsg] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [hideSaveFeature, setHideSaveFeature] = useState<boolean>(true);


  const revealMessage = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setActiveMsg(true);
    }, 300);
  };

  const handlePassword = (type: string) => {
    const passes = generatePassword(type);

    setGeneratedPassword(passes);
  };

  const iconStyling = 'dark:bg-purple-400 dark:text-black dark:hover:text-white hover:text-white dark:rounded-full dark:p-6';

  return (
    <div
      className="flex justify-center gap-4"
      style={{ width: "150px", height: "100px" }}
    >
      {hideSaveFeature ? <></> : <SaveFeature  setHideSaveFeature={setHideSaveFeature} generatedPassword={generatedPassword} />}
      <KeyboardReturnIcon
        onClick={() => {
          setActivePassword(false)
          setGeneratedPassword('')
        }}
        onMouseEnter={() => revealMessage("return")}
        onMouseLeave={() => setActiveMsg(false)}
        className={iconStyling + 'hover:cursor-pointer bg-cyan-500 rounded-full'}
        sx={{ fontSize: 40, padding:'5px' }}
      />

      <SaveAltIcon
        onClick={() => setHideSaveFeature(!hideSaveFeature)}
        onMouseEnter={() => revealMessage("save")}
        onMouseLeave={() => setActiveMsg(false)}
        className={iconStyling + "hover:cursor-pointer bg-cyan-500 rounded-full dark:hover:text-gray-300"}
        sx={{ fontSize: 40, padding:'5px' }}
      />
      <RefreshIcon
        onClick={() => handlePassword(passwordType)}
        onMouseEnter={() => revealMessage("refresh")}
        onMouseLeave={() => setActiveMsg(false)}
        className={iconStyling + "hover:cursor-pointer bg-cyan-500 rounded-full"}
        sx={{ fontSize: 40, padding:'5px'}}
      />
      {activeMsg ? (
        
        <div className="w-16" style={{ position: "fixed", bottom: 20, left:'48%' }}>
          <p
          className="activeMsg dark:text-cyan-500 border-black rounded-sm text-sm text-center"
          
        >
          {message}
        </p>
          </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ActionIcons;
