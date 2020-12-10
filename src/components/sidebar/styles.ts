import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    flex: 0.3
  },
  sidebarWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
    padding: 20,
    borderRight: "1px solid #464649"
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "10vw"
  },
  sidebarSearch: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#131c21",
    height: 35,
    padding: 10,
    borderBottom: "1px solid #464649",
    borderRight: "1px solid #464649"
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#33383b",
    width: "100%",
    height: 35,
    borderRadius: 20
  },
  searchInput: {
    backgroundColor: "#33383b",
    color: "#b1b3b5",
    border: "none",
    width: "80%",
    fontSize: 15,
    "&:focus": {
      border: "none",
      outline: "none"
    }
  },
  chatList: {
    flex: 1,
    backgroundColor: "#131c21",
    overflow: "scroll",
    position: "relative",
    overflowX: "hidden",
    borderRight: "1px solid #464649",
    scrollBarWidth: "thin"
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: 5,
      backgroundColor: "#131c21",
    },
    "*::-webkit-scrollbar-track": {
      backgroundColor: "#131c21"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#464649"
    }
  }
})
