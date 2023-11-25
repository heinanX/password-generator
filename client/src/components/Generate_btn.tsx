//import { useState } from "react";

const Generate_btn = () => {

  // const {pw, set} = useState();
  const generatePW = (pass: string) => {
    console.log(pass);

  }

  return (
    <div className="flex flex-col gap-2">
      <button onClick={() =>  generatePW('basic')} className="bg-purple-400 px-5 py-2 rounded-sm w-full">
        Generate basic password
      </button>
      <button onClick={() =>  generatePW('complex')}  className="bg-amber-300 px-5 py-2 rounded-sm  w-full">
        Generate password with special characters
      </button>
    </div>
  )
}

export default Generate_btn