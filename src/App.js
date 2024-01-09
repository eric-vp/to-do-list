import styled from "styled-components";
import ContainerTarefas from "./componentes/ContainerTarefas";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

const Background = styled.section`
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(247,237,226,1) 0%, rgba(238,190,173,1) 100%);
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Background>
      <Header />
      <ContainerTarefas />
      <Footer />
    </Background>
  );
}

export default App;
