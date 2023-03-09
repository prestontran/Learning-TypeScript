const pageTitle1 = "some amazing title";
const pageTitle2 = "Another Amazing Title";
const pageTitle3 = "a rEALLY weIrd TiTLE";
const pageTitle4 = "";

const capitalizeWord = (str: string) => {
  const firstChar = str.charAt(0).toLocaleUpperCase();
  const restOfStr = str.substring(1).toLocaleLowerCase();
  return `${firstChar}${restOfStr}`;
};

capitalizeWord("somYDDJng"); //?

const capitalizeEachWord = (str: string) => {
  str
    .split(" ")
    .map((word: string) => capitalizeWord(word))
    .join(" ");
};

capitalizeEachWord(pageTitle1); //? Some Amazing Title
capitalizeEachWord(pageTitle2); //? Another Amazing Title
capitalizeEachWord(pageTitle3); //? A Really Weird Title
capitalizeEachWord(pageTitle4); //? [empty string]
