export const countCharacterMatches = (secretWord, guessedWord) => {
    const secretWordArray = secretWord.split("");
    const guessedWordSet = new Set(guessedWord);
    return secretWordArray.filter((char) => guessedWordSet.has(char)).length;
};
