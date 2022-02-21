import axios from "axios";

export const getSecretWord = async (setSecretWordCallback) => {
    const response = await axios.get("http://localhost:3030");
    setSecretWordCallback(response.data);
};
