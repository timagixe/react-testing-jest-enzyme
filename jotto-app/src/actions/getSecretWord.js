import axios from "axios";

export const getSecretWord = async () => {
    const secretWordResponse = await axios.get("http://localhost:3000");
    const secretWord = secretWordResponse.data;
    return secretWord;
};
