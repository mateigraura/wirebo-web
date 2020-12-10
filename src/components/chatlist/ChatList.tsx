import React from "react"
import { Avatar } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import { Conversation } from "../../types"
import { useStyles } from "./styles"

interface Props {
  conversations: Conversation[]
  setSelectedConversation: any
}

const ChatList = (props: Props) => {
  const classes = useStyles()

  return (
    props.conversations.length > 0 ? (
      <>
        {
          props.conversations.map((conv, i) => (
            <div
              key={i}
              className={classes.container}
              onClick={() => props.setSelectedConversation(conv)}
            >
              <div className={classes.wrapper}>
                <Avatar src={conv.user.avatarUrl}/>
                <div className={classes.info}>
                  <h2 className={classes.h2Style}>
                    {conv.user.userName}
                  </h2>
                  <span className={classes.lastMessage}>
                    {conv.lastMessage}
                  </span>
                </div>
              </div>
              <div className={classes.more}>
                <ExpandMore
                  style={{color: "#b1b3b5"}}
                  onClick={(e) => {
                    alert("Icon clicked")
                    e.stopPropagation()
                  }}
                />
              </div>
            </div>
          ))
        }
      </>
    ) : <></>
  )
}

export default ChatList
