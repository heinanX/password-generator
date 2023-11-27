import Generated_PW from "../components/Generated_PW";
import Icons from "../components/Icons";
import Logo from "../components/Logo";
import { iPasswordDisplay } from "../interfaces/interfaces";

const PasswordDisplay = ({
  setActivePassword,
  generatedPassword,
  setGeneratedPassword,
  passwordType,
}: iPasswordDisplay) => {
  return (
    <div className="PasswordDisplay--div">
      <Logo />
      <Generated_PW generatedPassword={generatedPassword} />
      <Icons
        setActivePassword={setActivePassword}
        setGeneratedPassword={setGeneratedPassword}
        passwordType={passwordType}
      />
    </div>
  );
};

export default PasswordDisplay;
