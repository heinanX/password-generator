import Generated_PW from "../components/Generated_PW";
import ActionIcons from "../components/ActionIcons";
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
      <ActionIcons
        setActivePassword={setActivePassword}
        generatedPassword={generatedPassword}
        setGeneratedPassword={setGeneratedPassword}
        passwordType={passwordType}
      />
    </div>
  );
};

export default PasswordDisplay;
