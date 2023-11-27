import { iFrontPage } from "../interfaces/interfaces";
import { generatePassword } from "../functions/generatePassword";

const Generate_btn = ({
  setActivePassword,
  setGeneratedPassword,
  setPasswordType,
}: iFrontPage) => {
  
  const handlePassword = (type: string) => {
    const passes = generatePassword(type);

    setGeneratedPassword(passes);
  };

  return (
    <div className="flex flex-col gap-2 w-full h-28 px-4">
      <button
        onClick={() => {
          setActivePassword(true);
          setPasswordType("basic");
          handlePassword("basic");
        }}
        className={"btn-styling uppercase bg-cyan-500 dark:hover:border-white dark:hover:text-white"}
      >
        Generate basic password
      </button>
      <button
        onClick={() => {
          setActivePassword(true);
          setPasswordType("complex");
          handlePassword("complex");
        }}
        className={"btn-styling uppercase bg-fuchsia-600 dark:hover:border-white dark:hover:text-white"}
      >
        Generate complex password
      </button>
    </div>
  );
};

export default Generate_btn;
