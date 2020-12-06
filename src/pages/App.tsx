import React from 'react';
import Sidebar from "../components/Sidebar";
import Login from "./Login"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { makeStyles } from "@material-ui/styles";
import Chat from "../components/Chat";

interface Props {
}

const useStyles = makeStyles({
  container: {
    display: "grid",
    placeItems: "center",
    overflow: "hidden"
    // backgroundColor: "#090e11",
  },
  loginContainer: {
    marginTop: "15%"
  },
  mainContainer: {
    display: "flex",
    height: "94vh",
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
    <div className={classes.container}>
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
          <div className={classes.loginContainer}>
            <Login/>
          </div>
        )
      }
    </div>
  )
}

export default App
