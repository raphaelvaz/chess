import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import { UserProvider } from '../src/hooks/user'
import { ToastProvider } from './hooks/toast'


const App: React.FC = () => {
  return (
    <>
      <ToastProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ToastProvider>
      <GlobalStyles />
    </>
  )
}

export default App;
