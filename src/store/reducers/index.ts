import { combineReducers } from "redux";
import { paragraphsReducer } from "./paragraphsReducer";

export const rootReducer = combineReducers({
    paragraphs: paragraphsReducer,
});

export type RootState = ReturnType<typeof rootReducer>
