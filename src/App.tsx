import React from 'react'
import MenuBar from './components/MenuBar'
import Main from './components/Main'
import GlobalStyles from './styles/GlobalStyles'

import './App.css'

function App() {
  return (
    <>
      <div id="game-page">
        <MenuBar />
        <Main />
        {/* <SideBar />  */}
        <GlobalStyles />
      </div>
    </>
  )

}

export default App;
