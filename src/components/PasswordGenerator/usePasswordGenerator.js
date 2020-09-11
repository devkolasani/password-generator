const useGeneratePassword = (settings) => {
  // Charachter Library
  const symbols = "!@#$%^&*";
  const numbers = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let password = "";
  let usedLength = 0;
  let charCount = Math.floor(
    settings.passwordLength /
      (settings.useSymbols +
        settings.useNumbers +
        settings.useLowercase +
        settings.useUppercase)
  );

  // Generating Random chars
  if (settings.useSymbols === true) {
    password += [...Array(charCount)]
      .map((i) => symbols.charAt(Math.floor(Math.random() * symbols.length)))
      .join("");
    usedLength = usedLength + charCount;
  }
  if (settings.useNumbers === true) {
    password += [...Array(charCount)]
      .map((i) => numbers.charAt(Math.floor(Math.random() * numbers.length)))
      .join("");
    usedLength = usedLength + charCount;
  }
  if (settings.useLowercase === true) {
    password += [...Array(charCount)]
      .map((i) =>
        lowercase.charAt(Math.floor(Math.random() * lowercase.length))
      )
      .join("");
    usedLength = usedLength + charCount;
  }
  if (settings.useUppercase === true) {
    password += [...Array(charCount)]
      .map((i) =>
        uppercase.charAt(Math.floor(Math.random() * uppercase.length))
      )
      .join("");
    usedLength = usedLength + charCount;
  }

  if (settings.passwordLength - usedLength > 0) {
    password += [...Array(settings.passwordLength - usedLength)]
      .map((i) =>
        lowercase.charAt(Math.floor(Math.random() * lowercase.length))
      )
      .join("");
  }

  let passarray = Array.from(password);

  for (let i = passarray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const k = passarray[i];
    passarray[i] = passarray[j];
    passarray[j] = k;
  }

  return passarray.join("");
};

export default useGeneratePassword;
