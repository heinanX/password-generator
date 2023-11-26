import Generated_PW from "../components/Generated_PW";
import Icons from "../components/Icons";
import Logo from "../components/Logo";
import { iPasswordDisplay } from "../interfaces/interfaces";

const PasswordDisplay = ({
  setActivePassword,
  generatedPassword,
  setGeneratedPassword,
}: iPasswordDisplay) => {
  return (
    <>
      <Logo />
      <Generated_PW generatedPassword={generatedPassword} />
      <Icons setActivePassword={setActivePassword} setGeneratedPassword={setGeneratedPassword} />
    </>
  );
};

export default PasswordDisplay;
