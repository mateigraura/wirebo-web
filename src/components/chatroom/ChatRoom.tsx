import React, { useEffect, useState } from "react"
import EmojiPicker from "../picker/EmojiPicker"
import MessageFeed from "../message/MessageFeed"
import { useStyles } from "./styles"
import {
  SearchOutlined,
  Send,
  MoreVert,
  AttachFile
} from "@material-ui/icons"
import { Avatar, IconButton } from "@material-ui/core"
import { Conversation } from "../../types";
import { getMessages } from "../../mock/mockData";

interface Props {
  conversation: Conversation
}

const ChatRoom = ({conversation}: Props) => {
  const [msgText, setMsgText] = useState("")
  const [messages, setMessages] = useState(
    getMessages.filter(msg => msg.conversationId === conversation.id)
  )

  useEffect(() => {
    setMessages(
      getMessages.filter(msg => msg.conversationId === conversation.id)
    )
    setMsgText("")
  }, [conversation])

  const classes = useStyles()

  const pushMsg = () => {
    setMessages([...messages, {
      id: 0,
      text: msgText,
      isMe: true,
      date: new Date().toISOString().slice(0, 10),
      conversationId: conversation.id
    }])
    setMsgText("")
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (msgText) pushMsg()
    }
  }

  const appendEmoji = (e: any) => {
    setMsgText(msgText + e.native)
  }

  return (
    <div className={classes.container}>
      <div className={classes.chatHeader}>
        <div className={classes.headerInfo}>
          <Avatar src={conversation.user.avatarUrl}/>
          <div className={classes.userInfo}>
            <h2 className={classes.h2Style}>
              {conversation.user.userName}
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
        <MessageFeed
          messages={messages}
        />
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
            onKeyDown={handleKeyDown}
          />
        </form>
        <IconButton>
          <Send
            style={{color: "#b1b3b5", marginLeft: 10}}
            onClick={pushMsg}
          />
        </IconButton>
      </div>
    </div>
  )
}

export default ChatRoom
