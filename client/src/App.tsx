import Generate_btn from "./components/Generate_btn";
import Generated_PW from "./components/Generated_PW";
import dinosayr from "./assets/dinosayr.png";
import { useState } from "react";
//import Question from "./components/Question";
function App() {
  // eslint-disable-next-line prefer-const
  let status = false;

  const [ hasGeneratedPassword, setHasGeneratedPassword ] = useState<boolean>(false);
  const [ generatedPassword, setGeneratedPassword ] = useState<string>('');
  const updatePassword = (pass: string) => {
    setGeneratedPassword(pass);
  }
  const hasPassword = () => {
    setHasGeneratedPassword(true);
  }

  return (
    <>

      {status ?
        <>
          <div className=" max-w-xl p-5 flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center">Password</h1>
            <h1 className="text-5xl font-bold text-center">GeneRRRawtor</h1>
            <br />
            <img src={dinosayr} alt="dinosaur" className="w-3/4 max-w-md min-w-100" />
            <br />
            <Generate_btn />
            {/* <div className="absolute bottom-0 right-0">
            <Question />
            </div> */}
          </div>
        </>
        :
        <>
          <img src={dinosayr} alt="dinosaur" className="w-3/4 max-w-md min-w-100" />
          <Generated_PW />
          <span>
          <button>return</button>
          <button>Generate new password</button>
          </span>


        </>

      }




    </>
  );
}

export default App;
