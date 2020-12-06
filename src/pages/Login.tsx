import React, { CSSProperties } from "react"
import Dictionary from "../types/dictionary";
import { Button } from "@material-ui/core";

interface Props {
}

const Login = (props: Props) => {
  const auth = () => {

  }

  return (
    <div style={styles.container}>
      <div style={styles.loginContainer}>
        <Button
          onClick={auth}
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
      </div>
    </div>
  )
}

const styles: Dictionary<CSSProperties> = {
  container: {
    backgroundColor: "#f8f8f8",
    display: "grid",
    placeItems: "center",
  },
  loginContainer: {
    padding: 100,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 10,
    boxShadow: "0 1px 20px rgba(0, 0, 0, 0.3)",
  }
}

export default Login
