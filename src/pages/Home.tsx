import GenerateBtns from "../components/GenerateBtns";
import Instructions from "../components/Instructions";
import Logo from "../components/Logo";
import Title from "../components/Title";
import { iFrontPage } from "../interfaces/interfaces";

const FrontPage = ({ setActivePassword, setGeneratedPassword, setPasswordType }: iFrontPage) => {
  return (
    <>
      <div className="max-w-xl pt-5 flex flex-col items-center">
        <Title />
        <br />
        <Logo />
        <Instructions />
        <br />
        <GenerateBtns
          setActivePassword={setActivePassword}
          setGeneratedPassword={setGeneratedPassword}
          setPasswordType={setPasswordType}
        />
      </div>
    </>
  );
};

export default FrontPage;
