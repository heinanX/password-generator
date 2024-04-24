import { useState } from "react";
import { GeneratedPWProps } from "../interfaces/interfaces";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Generated_PW: React.FC<GeneratedPWProps> = ({ generatedPassword }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPassword);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    } catch (error) {
      setCopyFailed(true);
      setTimeout(() => setCopyFailed(false), 3000);
    }
  };

  return (
    <div className="relative hover:cursor-pointer flex justify-center border my-8 dark:text-white">
      <p
        onClick={handleCopy}
        id="generatedPW--container"
        className="text-3xl text-center py-2 px-6 border-cyan-500 border dark:hover:bg-transparent hover:font-bold"
      >
        {generatedPassword}
      </p>
      <ContentCopyIcon
        className=" absolute top-1 right-2"
        style={{ fontSize: "small" }}
      />

      {/* CONDITIONS FOR CONFIRMATION MESSAGE OF COPY FAIL OR SUCCESS*/}
      {copySuccess ? (
        <p className="absolute bottom-14 right-25 text-cyan-500">copied!</p>
      ) : (
        <></>
      )}
      {copyFailed ? (
        <p className="absolute bottom-14 right-25 text-red">copy failed!</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Generated_PW;
