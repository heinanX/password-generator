import CloseIcon from '@mui/icons-material/Close';
import { iSaveFeatureProps } from '../interfaces/interfaces';

const SaveFeature = ({ setHideSaveFeature, generatedPassword }: iSaveFeatureProps) => {
      const handleForm = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    console.log("handled");
    setHideSaveFeature(true);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center absolute top-0 h-full w-11/12 bg-white/90 dark:bg-teal-400/95 rounded-3xl p-2 mx-6">
        <button className="absolute top-4 right-8" onClick={() => setHideSaveFeature(true)}>
            <CloseIcon/>
        </button>
        <p className="font-orbitron text-2xl w-full px-10 text-center text-purple-800 dark:text-black">Save your credentials to database</p>
      <form
        className="w-2/3 flex flex-col gap-2"
        onSubmit={(e) => handleForm(e)}
      >
        <input
          className="border border-purple-800 outline-none p-1 text-sm"
          type="text"
          placeholder="enter url"
        />
        <input
          className="border border-purple-800 outline-none p-1 text-sm"
          type="text"
          placeholder="enter username*"
        />
        <input
          className="border border-cyan-500 outline-none p-1 text-purple-800"
          disabled={true}
          defaultValue={`${generatedPassword.slice(0, 6)}*******`}
          type="text"
        />
        <button className="bg-amber-300  p-1">save</button>
      </form>
    </div>
  );
};

export default SaveFeature;
