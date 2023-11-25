import { useState } from "react";

const Question = () => {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div className="setOrbitronFont">
      {showQuestion ? (
        <div
          onMouseOut={() => setShowQuestion(false)}
          className=" border border-cyan-500 p-2"
        >
          <p className="text-xs">
            Basic = password consists of a-z/A-Z and 0-9
          </p>
        </div>
      ) : (
        <div className="w-12 h-12 flex justify-center items-center">
        <a
          className=" text-xl text-gray-300"
          onMouseOver={() => setShowQuestion(true)}
        >
          ?
        </a>
        </div>
      )}
    </div>
  );
};

export default Question;
