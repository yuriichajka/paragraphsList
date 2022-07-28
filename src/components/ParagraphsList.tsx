import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/paragraphsTypedSelector";
import { fetchParagraphs } from "../store/action-creators/paragraphs";
import { Paragraph } from "./Paragraph";
import styled from "styled-components";

const LoadMoreButton = styled.button`
  color: white;
  height: 2rem;
  width: 7rem;
  padding: 0 1rem;
  border-radius: 1.5rem;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;
  
  &:hover {
    background-position: right center;
  }
`;

const ParagraphListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  left: 48%;
  
  &:before{
    content: "by Chaika";
  }
  
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    background: #9925ea;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }

  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

const Error = styled.div`
  color: #D8000C;
  background-color: #FFBABA;
  background-image: url('https://i.imgur.com/GnyDvKN.png');
  border: 1px solid;
  margin: 1rem auto;
  width: 500px;
  padding: 15px 10px 15px 50px;
  background-repeat: no-repeat;
  background-position: 10px center;
`;

export const ParagraphsList: React.FC = () => {
    const { paragraphs, loading, error } = useTypedSelector(state => state.paragraphs);
    const dispatch = useDispatch();

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error>{error}</Error>
    }

    const allData = paragraphs?.reduce((previousValue, currentValue) => {
        return previousValue.concat(currentValue);
    }, []);

    return (
        <ParagraphListContainer>
            {allData.map((paragraph: string, index: number) =>
                <Paragraph key={index} data={paragraph} index={index} />
            )}
            <LoadMoreButton
                onClick={() => {
                    // @ts-ignore
                    dispatch(fetchParagraphs())}
            }>
                Load more
            </LoadMoreButton>
        </ParagraphListContainer>
    );
}
