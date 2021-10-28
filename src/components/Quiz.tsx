import { useSelector, useDispatch } from "react-redux";
import { BlueButton } from "./BlueButton";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { check, next } from "../store/module/score";

const MainImg = styled.img`
  width: inherit;
`;

const Header = styled.h1`
  margin: 30px 0;
`;

const Score = styled.div`
  font-size: 4em;
  color: #f92b46;
`;


const Quiz = () => {
  const quizs = useSelector(state => state.score.quizs);
  const page = useSelector(state => state.score.page);
  const score = useSelector(state => state.score.score);
  const dispatch = useDispatch();

  return (
    <>
      <MainImg src={quizs[page - 1].img} />
      <Header>{quizs[page - 1].q}</Header>
      {quizs[page - 1].a.map((item, index) => {
        return <BlueButton text={item.text} key={index} clickEvent={()=>{
          dispatch(check(item.isCorrect)) 
          dispatch(next())}}/>;
      })}
      <Score>{score}</Score>
      <ProgressBar now={Math.round((page/quizs.length)*100)} label={`${Math.round((page/quizs.length)*100)}%`} />
    </>
  );
};

export default Quiz;
