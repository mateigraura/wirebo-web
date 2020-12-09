import React from 'react';
import Container from '../components/container/Container';
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Login from "./Login"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { makeStyles } from "@material-ui/styles";

interface Props {
}

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    height: "95vh",
    width: "91vw",
    marginTop: 12,
    backgroundColor: "#262d31",
    boxShadow: "-1px 4px 20px -6px rgba(0, 0, 0, 0.4)",
  }
})

const App = (props: Props) => {
  const classes = useStyles()
  const isLoggedIn = true

  return (
    <Container>
      {
        isLoggedIn ? (
          <div className={classes.mainContainer}>
            <Router>
              <Sidebar/>
              <Switch>
                <Route path="/">
                  <Chat/>
                </Route>
              </Switch>
            </Router>
          </div>
        ) : (
          <div>
            <Login/>
          </div>
        )
      }
    </Container>
  )
}

export default App
