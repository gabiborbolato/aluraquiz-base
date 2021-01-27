import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';



export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin:auto;
    padding:15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.header>
            <h1>Quiz de Quimica</h1>
          </Widget.header>
          <Widget.Content>
            <p>Bora testar seus conhecimentos em Quimica</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Aqui fica os Quizes da galera</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com.brhttps://github.com/gabiborbolato" />
    </QuizBackground>
  )
}
