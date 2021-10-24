import { GreenButton } from "./GreenButton";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { replay } from "../store/module/score";

const Score = styled.div`
  font-size: 4em;
  color: #f92b46;
`;

export const Result = () => {
  const scoreText = useSelector((state) => state.score.score);
  const dispatch = useDispatch();

  return (
    <>
    <Score>{scoreText}</Score>
      <GreenButton text="재도전" clickEvent={()=>{
          dispatch(replay());
      }}/>
    </>
  );
};
//점수
//재시도 버튼
