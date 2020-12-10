import React from 'react';
import Container from '../components/container/Container';
import Login from "./Login"
import Chat from "./Chat"

interface Props {
}

const App = (props: Props) => {
  const isLoggedIn = true

  return (
    <Container>
      {
        isLoggedIn ? (
          <Chat/>
        ) : (
          <Login/>
        )
      }
    </Container>
  )
}

export default App
