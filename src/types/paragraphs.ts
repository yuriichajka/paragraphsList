export enum ParagraphsActionTypes {
    FETCH_PARAGRAPHS = "FETCH_PARAGRAPHS",
    FETCH_PARAGRAPHS_SUCCESS = "FETCH_PARAGRAPHS_SUCCESS",
    FETCH_PARAGRAPHS_ERROR = "FETCH_PARAGRAPHS_ERROR",
}

interface FetchParagraphsAction {
    type: ParagraphsActionTypes.FETCH_PARAGRAPHS,
}

interface FetchParagraphsSuccessAction {
    type: ParagraphsActionTypes.FETCH_PARAGRAPHS_SUCCESS,
    payload: any[],
}

interface FetchParagraphsErrorAction {
    type: ParagraphsActionTypes.FETCH_PARAGRAPHS_ERROR,
    payload: string,
}

export type ParagraphsAction =
    FetchParagraphsAction |
    FetchParagraphsSuccessAction |
    FetchParagraphsErrorAction;


export interface ParagraphsState {
    paragraphs: any[],
    loading: boolean,
    error: null | string,
}
