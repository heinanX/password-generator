//import { useState } from "react";

const Generate_btn = () => {
  // const {pw, set} = useState();
  const generatePW = (pass: string) => {
    console.log(pass);
    // complex password with special characters
  };

  return (
    <div className="flex flex-col pt-8 gap-2 w-full h-36">
      <span className="pb-5 setOrbitronFont text-xs text-center text-gray-400">
        <p>
          choose between a basic password: a-Z and 0-9, or,
        </p>
        <p>
          a complex password: a-Z and 0-9 with special characters
        </p>
      </span>
      <button
        onClick={() => generatePW("basic")}
        className="bg-cyan-500 text-white px-5 py-2 rounded-sm"
      >
        Generate basic password
      </button>
      <button
        onClick={() => generatePW("complex")}
        className="bg-fuchsia-600 text-white px-5 py-2 rounded-sm"
      >
        Generate complex password
      </button>
    </div>
  );
};

export default Generate_btn;
