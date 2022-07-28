import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OpenCloseButton = styled.button`
  height: 2rem;
  width: 5rem;
  padding: 0 1rem;
  border-radius: 1.5rem;
  margin-top: 1rem;
  background: 
          linear-gradient(-45deg, #9925ea, #338aff, #9925ea);
  background-size: 400%;
  background-position: 90% 0;
  color: #ffffff;
  transition: background 0.8s;
  cursor: pointer;

  &:hover {
    background-position: 185% 50%;
  }
`;

const ParagraphCard = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid violet;
  border-radius: 0.75rem;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  
`;

interface ParagraphProps {
    data: string;
    index: number;
}

export const Paragraph = ({ data, index }: ParagraphProps) => {
    const [isFull, setIsFull] = useState(false);

    return (
        <ParagraphCard>
            <Link style={{ textDecoration: "none", color: "black" }} to={`paragraph/${index}`} >
                {isFull ? data : data.split('.')[0]}
            </Link>
            <OpenCloseButton
                onClick={() => setIsFull(prev => !prev)}
            >
                {isFull ? "Close" : "Open"}
            </OpenCloseButton>
        </ParagraphCard>
    );
}
