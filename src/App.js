import {useSelector, useDispatch} from 'react-redux'
import { PinkButton } from './components/PinkButton';
import { next } from './store/module/score';
import styled from 'styled-components';
import Quiz from './components/Quiz';

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  padding: 30px 0;
  margin: auto;
  text-align: center;
`;
const MainImg = styled.img`
  width: inherit;
`;

const Header = styled.h1`
  margin: 30px 0;
`;

const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #8a8e90;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Score = styled.div`
  font-size: 4em;
  color: #f92b46;
`;

function App() {
  const page = useSelector(state =>state.score.page);
  const dispatch = useDispatch();

  return (
    <>
      {page === 0 && 
        <Main>
          <MainImg src="/city.jpg"/>
          <Header>퀴즈쇼</Header>
          <SubHeader>토이프로젝트 퀴즈쇼</SubHeader>
          <PinkButton text='테스트 시작' clickEvent={()=>dispatch(next())}/>
        </Main>}
      {page > 0 && (
        <Main>
          <Quiz/>
        </Main>
      )
      }
    </>
  );
}

export default App;
