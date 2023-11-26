import { GeneratedPWProps } from "../interfaces/interfaces";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Generated_PW: React.FC<GeneratedPWProps> = ({ generatedPassword }) => {
  return (
    <div className="iconhover flex justify-center bg-white mb-2 py-8 text-fuchsia-600">

      <p
        onClick={() => navigator.clipboard.writeText(generatedPassword)}
        className=" text-3xl text-center pr-2"
      >
        {generatedPassword}
      </p>
      <ContentCopyIcon className="" style={{fontSize:'small'}} />
    </div>
  );
};

export default Generated_PW;
