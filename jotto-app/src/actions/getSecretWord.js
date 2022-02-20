import axios from "axios";
import { secretWordActions } from "../reducers/secretWordSlice";

export const getSecretWord = () => async (dispatch) => {
    const secretWordResponse = await axios.get("http://localhost:3030");
    const secretWord = secretWordResponse.data;
    return dispatch(secretWordActions.setSecretWord(secretWord));
};
