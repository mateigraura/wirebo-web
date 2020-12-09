import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Avatar, IconButton } from "@material-ui/core"
import { DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons"
import ChatIcon from "@material-ui/icons/Chat"
import ChatList from "./ChatList";

interface Props {
}

const useStyles = makeStyles({
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


const Sidebar = (props: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <Avatar src="broken.png"/>
        <div className={classes.sidebarHeader}>
          <IconButton>
            <DonutLarge style={{color: "#b1b3b5"}}/>
          </IconButton>
          <IconButton>
            <ChatIcon style={{color: "#b1b3b5"}}/>
          </IconButton>
          <IconButton>
            <MoreVert style={{color: "#b1b3b5"}}/>
          </IconButton>
        </div>
      </div>
      <div className={classes.sidebarSearch}>
        <div className={classes.searchContainer}>
          <SearchOutlined style={{color: "#b1b3b5", padding: 15}}/>
          <input
            className={classes.searchInput}
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className={classes.chatList}>
        <ChatList/>
      </div>
    </div>
  )
}

export default Sidebar
