import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ParagraphsList } from "./components/ParagraphsList";
import { ParagraphInfo } from "./components/ParagraphInfo";
import { fetchParagraphs } from "./store/action-creators/paragraphs";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
  }
`

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchParagraphs())
    }, []);

    return (
        <>
            <Global />
            <Routes>
                <Route path='/' element={<ParagraphsList />} />
                <Route path='/paragraph/:id' element={<ParagraphInfo />} />
            </Routes>
        </>
    );
}

export default App;
