import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    padding: 20,
    cursor: "pointer",
    borderBottom: "1px solid #464649",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: "#262d31",
      color: "#b1b3b5",
    },
    "&:active": {
      backgroundColor: "#262d31",
      color: "red",
    }
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  info: {
    marginLeft: 20,
  },
  h2Style: {
    fontSize: 16,
    color: "#b1b3b5",
    marginBottom: 0,
    marginTop: 0,
    fontFamily: "sans-serif"
  },
  lastMessage: {
    maxWidth: "30vw",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "sans-serif",
    fontSize: 14,
    color: "#b1b3b5"
  },
  more: {
    display: "flex",
    alignItems: "center",
    float: "right"
  }
})
