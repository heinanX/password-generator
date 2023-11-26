import { iFrontPage} from "../interfaces/interfaces";

const Generate_btn = ({ setActivePassword, setGeneratedPassword }: iFrontPage) => {
/*   const generatePW = (pass: string) => {
    console.log(pass);
  }; */

  return (
    <div className="flex flex-col gap-2 w-full h-36">
      <button
        onClick={() => {
          setActivePassword(true);
          setGeneratedPassword("basic");
        }}
        className="bg-cyan-500 text-white px-5 py-2 rounded-sm"
      >
        Generate basic password
      </button>
      <button
        onClick={() => {
          setActivePassword(true);
          setGeneratedPassword("complex");
        }}
        className="bg-fuchsia-600 text-white px-5 py-2 rounded-sm"
      >
        Generate complex password
      </button>
    </div>
  );
};

export default Generate_btn;
