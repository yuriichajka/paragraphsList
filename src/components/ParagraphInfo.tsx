import { useLocation } from "react-router-dom";
import { useTypedSelector } from "../hooks/paragraphsTypedSelector";
import styled from "styled-components";

const FullParagraph = styled.div`
  margin: 0 auto;
  width: 1000px;
  padding: 1rem;
`;

export const ParagraphInfo = () => {
    const { pathname } = useLocation();
    const id = Number(pathname.replace(/[^0-9]/g,""));

    const { paragraphs } = useTypedSelector(state => state.paragraphs);
    const allData = paragraphs?.reduce((previousValue, currentValue) => {
        return previousValue.concat(currentValue);
    }, []);

    return (
        <FullParagraph>
            {allData[id]}
        </FullParagraph>
    )
}
