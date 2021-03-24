import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import { UserProvider } from '../src/hooks/user'


const App: React.FC = () => {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>

      <GlobalStyles />
    </>
  )

}

export default App;
