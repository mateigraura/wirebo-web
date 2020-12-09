import React from "react"
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, TextField } from "@material-ui/core";

interface Props {
}

const InputField = withStyles({
  root: {
    width: 400,
    marginBottom: 10,
    "& .MuiInput-input": {
      color: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#b1b3b5",
    },
    "& .MuiInput-root:hover::before": {
      borderBottomColor: "#00af9c",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00af9c",
    },
    "& label.Mui-focused": {
      color: "#00af9c",
    },
  }
})(TextField)

const useStyles = makeStyles({
  container: {
    display: "grid",
    placeItems: "center",
  },
  loginContainer: {
    padding: 100,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#00af9c",
    color: "#e5eaeb",
    fontWeight: "bold",
    fontSize: 14,
    "&:hover": {
      backgroundColor: "#00af9c",
      opacity: 0.8
    }
  },
  form: {
    marginBottom: 45
  }
})

const Login = (props: Props) => {
  const classes = useStyles()

  const auth = () => {

  }

  return (
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <form className={classes.form}>
          <div>
            <InputField
              InputLabelProps={{
                style: {
                  color: "#b1b3b5"
                }
              }}
              style={{color: "red"}}
              id="email-standard-input"
              label="Email"
            />
          </div>
          <div>
            <InputField
              InputLabelProps={{
                style: {
                  color: "#b1b3b5"
                }
              }}
              id="username-standard-input"
              label="Username"
            />
          </div>
          <div>
            <InputField
              InputLabelProps={{
                style: {
                  color: "#b1b3b5"
                }
              }}
              id="psw-standard-input"
              type="password"
              label="Password"
            />
          </div>
        </form>
        <Button
          onClick={auth}
          variant="contained"
          className={classes.btn}
        >
          Sign in
        </Button>
      </div>
    </div>
  )
}

export default Login
