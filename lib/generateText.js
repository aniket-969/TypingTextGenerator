import SetWords from "./setWords.js";

  const SetWordsInstance = new SetWords();

function generateWords(num, alphabets, characters, words, length) {

  
  SetWordsInstance.generateTypingText(
    num,
    alphabets,
    characters,
    words,
    length 
  );
  let typingtext = SetWordsInstance.typingtext;

  let wordsArray = typingtext.trim().split(/\s+/);
  if (wordsArray.length > length) {
    wordsArray = wordsArray.slice(0, length);
  }

  typingtext = wordsArray.join(" ");
  return typingtext.trim();
}

function generateMajorityElement(element, count) {
  if (typeof element !== "string" || element.length !== 1) {
    throw new Error("Element must be a single character string.");
  }

  SetWordsInstance.appendMajorityElement(element, count);

  return SetWordsInstance.typingtext;
}

function addarrayElementsandgenerate(
  num,
  alphabets,
  characters,
  words,
  length,
  array
) {
  
  const totalLength = length + array.length;

  if (totalLength > 400) {
    throw new Error("Total length including array's should be less than or equal to 400.");
  }

  SetWordsInstance.generateTypingText(
    num,
    alphabets,
    characters,
    words,
    length
  );

  SetWordsInstance.appendFromArray(array);
  
  return SetWordsInstance.typingtext;
}

export { generateWords, generateMajorityElement, addarrayElementsandgenerate };
