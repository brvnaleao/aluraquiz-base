import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/index'
import BackGround from '../src/components/QuizBackGround/index'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  color: ${({ theme }) => theme.colors.contrastText};
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (<BackGround backgroundImage={db.bg}>
          <QuizContainer>
           <Widget>
              <Widget.Header>
                <h1>Chess Quiz</h1>
              </Widget.Header>
              <Widget.Content>
                <p>Teste seus conhecimentos</p>
              </Widget.Content>
            </Widget>
           <Widget>
          
              {/* <Widget.Header>
              <h1>Quizes da galera</h1>
              </Widget.Header> */}
            <Widget.Content>
              
              <p>Conheça...</p>
             </Widget.Content>
             </Widget>
             <Footer></Footer>
          </QuizContainer>
          <GitHubCorner projectUrl="https://github.com/brvnaleao"></GitHubCorner>
          </BackGround>)
}
