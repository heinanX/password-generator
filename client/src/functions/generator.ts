export const generatePassword = (type: string) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const specialCharacters = "~!@#$%^&*_-+=?";
  let password = "";

  for (let i = 0; i < 4; i++) {
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    if (type === "complex" && password.length < 16) {
      const randomIndex2 = Math.floor(Math.random() * specialCharacters.length);
      const sCharacter = specialCharacters.charAt(randomIndex2);
      password += sCharacter;
    }
  }

  return password;
};
