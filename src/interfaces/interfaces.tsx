export interface iFrontPage {
  setActivePassword: (value: boolean) => void;
  setGeneratedPassword: (value: string) => void;
  setPasswordType: (value: string) => void;
}

export interface iPasswordDisplay {
  setActivePassword: (value: boolean) => void;
  generatedPassword: string;
  setGeneratedPassword: (value: string) => void;
  passwordType: string;
}

export interface iActionIcons {
  setActivePassword: (value: boolean) => void;
  generatedPassword: string;
  setGeneratedPassword: (value: string) => void;
  passwordType: string;
}

export interface GeneratedPWProps {
  generatedPassword: string;
}

export interface iSaveFeatureProps {
  setHideSaveFeature: React.Dispatch<React.SetStateAction<boolean>>;
  generatedPassword: string;
}