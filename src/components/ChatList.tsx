import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Avatar } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

interface Props {
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    padding: 20,
    cursor: "pointer",
    borderBottom: "1px solid #464649",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: "#262d31",
      color: "#b1b3b5",
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

const ChatList = (props: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Avatar src="broken.png"/>
        <div className={classes.info}>
          <h2 className={classes.h2Style}>
            User
          </h2>
          <span className={classes.lastMessage}>
              Some message
          </span>
        </div>
      </div>
      {/* TODO: Add last seen ?*/}
      <div className={classes.more}>
        <ExpandMore
          style={{color: "#b1b3b5"}}
          onClick={() => alert("Icon clicked")}
        />
      </div>
    </div>
  )
}

export default ChatList
