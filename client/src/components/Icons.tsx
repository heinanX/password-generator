import { iIcons } from "../interfaces/interfaces";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import RefreshIcon from "@mui/icons-material/Refresh";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import React, { useState } from "react";

const Icons = ({ setActivePassword, setGeneratedPassword }: iIcons) => {
  const [activeMsg, setActiveMsg] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const revealMessage = (message: string, e: React.MouseEvent) => {
    setMessage(message);
    setTimeout(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      setActiveMsg(true);
    }, 1000);
  };

  return (
    <span
      className="flex justify-center gap-4"
      style={{ width: "150px", height: "100px" }}
    >
      <KeyboardReturnIcon
        onClick={() => {
          setActivePassword(false)
          setGeneratedPassword('')
        }}
        onMouseEnter={(e) => revealMessage("return", e)}
        onMouseLeave={() => {
          setActiveMsg(false);
        }}
        className=" text-gray-400 "
      />

      <SaveAltIcon
        onClick={() => console.log("saved")}
        onMouseEnter={(e) => revealMessage("save", e)}
        onMouseLeave={() => {
          setActiveMsg(false);
        }}
        className=""
      />
      <RefreshIcon
        onClick={() => setGeneratedPassword("refresh")}
        onMouseEnter={(e) => revealMessage("refresh", e)}
        onMouseLeave={() => {
          setActiveMsg(false);
        }}
        className="text-cyan-500 supersizeme"
      />
      {activeMsg ? (
        <p
          className="activeMsg bg-white border border-black rounded-sm px-1 text-sm"
          style={{ position: "fixed", top: position.y, left: position.x + 20 }}
        >
          {message}
        </p>
      ) : (
        <></>
      )}
    </span>
  );
};

export default Icons;
