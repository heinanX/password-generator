import Generate_btn from "../components/Generate_btn";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Instructions from "../components/instructions";
import { iFrontPage } from "../interfaces/interfaces";


const FrontPage = ({setActivePassword, setGeneratedPassword }: iFrontPage) => {
  return (
    <>
      <div className="max-w-xl p-5 flex flex-col items-center">
        <Title />
        <br />
        <Logo />
        <Instructions />
        <br />
        <Generate_btn setActivePassword={setActivePassword} setGeneratedPassword={setGeneratedPassword} />
      </div>
    </>
  );
};

export default FrontPage;
