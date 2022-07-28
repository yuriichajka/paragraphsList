import {
    ParagraphsAction,
    ParagraphsActionTypes,
    ParagraphsState
} from "../../types/paragraphs";

const initialState: ParagraphsState = {
    paragraphs: [],
    loading: false,
    error: null,
}

export const paragraphsReducer = (state = initialState, action: ParagraphsAction): ParagraphsState => {
    switch (action.type) {
        case ParagraphsActionTypes.FETCH_PARAGRAPHS:
            return { loading: true, error: null, paragraphs: [...state.paragraphs] }
        case ParagraphsActionTypes.FETCH_PARAGRAPHS_SUCCESS:
            return { loading: false, error: null,  paragraphs: [...state.paragraphs, action.payload] }
        case ParagraphsActionTypes.FETCH_PARAGRAPHS_ERROR:
            return { loading: false, error: action.payload, paragraphs: [] }
        default:
            return state
    }
}
