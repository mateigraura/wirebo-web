import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 0.7
  },
  chatHeader: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    height: 30,
    justifyContent: "space-between",
  },
  headerInfo: {
    display: "flex",
    alignItems: "center",
  },
  userInfo: {
    marginLeft: 20,
  },
  h2Style: {
    fontSize: 16,
    color: "#b1b3b5",
    marginBottom: 0,
    marginTop: 0,
    fontFamily: "sans-serif"
  },
  lastSeen: {
    maxWidth: "30vw",
    fontFamily: "sans-serif",
    fontSize: 14,
    color: "#b1b3b5"
  },
  headerIcons: {
    display: "flex",
    alignItems: "center",
    float: "right"
  },
  chatBody: {
    flex: 1,
    backgroundColor: "#162127",
    backgroundPosition: "center",
    overflow: "scroll",
    overflowY: "auto",
    padding: 30,
    overflowX: "hidden"
  },
  chatFooter: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    marginLeft: 10,
    marginRight: 10
  },
  footerForm: {
    flex: 1,
    display: "flex"
  },
  formInput: {
    backgroundColor: "#33383b",
    color: "#b1b3b5",
    border: "none",
    width: "100%",
    height: 40,
    paddingLeft: 15,
    borderRadius: 30,
    fontSize: 16,
    "&:focus": {
      border: "none",
      outline: "none"
    }
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: 5,
      backgroundColor: "#162127",
    },
    "*::-webkit-scrollbar-track": {
      backgroundColor: "#162127"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#464649"
    }
  }
})
