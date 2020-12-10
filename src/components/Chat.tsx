import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import "emoji-mart/css/emoji-mart.css";
import EmojiPicker from "./EmojiPicker";
import MessageFeed from "./MessageFeed";
import {
  SearchOutlined,
  Send,
  MoreVert,
  AttachFile
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core"

interface Props {
}

const useStyles = makeStyles({
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


const messages: any[] = []

const Chat = (props: Props) => {
  const [data, setData] = useState(messages)
  const [msgText, setMsgText] = useState("")
  const [selectedContact, setSelectedContact] = useState({})

  const classes = useStyles()

  const appendEmoji = (e: any) => {
    setMsgText(msgText + e.native)
  }

  return (
    <div className={classes.container}>
      <div className={classes.chatHeader}>
        <div className={classes.headerInfo}>
          <Avatar src="broken.png"/>
          <div className={classes.userInfo}>
            <h2 className={classes.h2Style}>
              Some user
            </h2>
            <span className={classes.lastSeen}>
              Last seen today 14:35
          </span>
          </div>
        </div>
        <div className={classes.headerIcons}>
          <IconButton>
            <SearchOutlined style={{color: "#b1b3b5"}}/>
          </IconButton>
          <IconButton>
            <MoreVert style={{color: "#b1b3b5"}}/>
          </IconButton>
        </div>
      </div>
      <div className={classes.chatBody}>
        <MessageFeed/>
      </div>
      <div className={classes.chatFooter}>
        <EmojiPicker appendEmoji={appendEmoji}/>
        <IconButton>
          <AttachFile style={{color: "#b1b3b5", marginRight: 10}}/>
        </IconButton>
        <form className={classes.footerForm}>
          <input
            type="text"
            value={msgText}
            className={classes.formInput}
            placeholder="Type a message..."
            onChange={e => setMsgText(e.target.value)}
          />
        </form>
        <IconButton>
          <Send style={{color: "#b1b3b5", marginLeft: 10}}/>
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
