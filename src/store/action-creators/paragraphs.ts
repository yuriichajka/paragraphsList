import { ParagraphsAction, ParagraphsActionTypes } from "../../types/paragraphs";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchParagraphs = () => {
    return async (dispatch: Dispatch<ParagraphsAction>) => {
        try {
            dispatch({ type: ParagraphsActionTypes.FETCH_PARAGRAPHS })
            const response = await axios.get('https://baconipsum.com/api/?type=meat-and-filler')
            setTimeout(() => {
                dispatch({
                    type: ParagraphsActionTypes.FETCH_PARAGRAPHS_SUCCESS,
                    payload: response.data
                });
            }, 2000)
        } catch (e) {
            dispatch({
                type: ParagraphsActionTypes.FETCH_PARAGRAPHS_ERROR,
                payload: "Something wrong"
            });
        }
    };
};
