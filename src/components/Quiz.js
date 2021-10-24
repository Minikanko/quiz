import { useSelector } from "react-redux";
import { BlueButton } from "./BlueButton";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const quiz = useSelector((state) => state.score.quizs);
  const page = useSelector((state) => state.score.page);

  return (
    <>
      <MainImg src={quiz[page - 1].img} />
      <Header>{quiz[page - 1].q}</Header>
      {quiz[page - 1].a.map((item, index) => {
        return <BlueButton text={item.text} key={index} />;
      })}
      <ProgressBar now={page*10} label={`${page*10}%`} />
    </>
  );
};

export default Quiz;
