export interface iFrontPage {
  setActivePassword: (value: boolean) => void;
  setGeneratedPassword: (value: string) => void;
}

export interface iPasswordDisplay {
  setActivePassword: (value: boolean) => void;
  generatedPassword: string;
  setGeneratedPassword: (value: string) => void;
}

export interface iIcons {
  setActivePassword: (value: boolean) => void;
  setGeneratedPassword: (value: string) => void;
}

export interface GeneratedPWProps {
  generatedPassword: string;
}
