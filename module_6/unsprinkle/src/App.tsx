import styled from "styled-components"

import GlobalStyles from "./assets/GlobalStyles"
import Header from "./components/Header"
import Hero from './components/Hero'
import MainContent from "./components/MainContent"


function App() {  
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <main>
        <Hero />
        <MainContent />
      </main>
      <GlobalStyles />
    </>
  )
}

const HeaderWrapper = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
`

export default App
