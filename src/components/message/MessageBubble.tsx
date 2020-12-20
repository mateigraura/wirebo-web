import React from "react"
import { useStyles } from "./styles"

interface Props {
  message: any
}

const MessageBubble = ({message}: Props) => {
  const classes = useStyles()

  return (
    <div className={`${message.isMe ? classes.messageSent : classes.messageReceived}`}>
      {message.text}
      <div className={classes.metadata}>
        <span className={classes.date}>{message.date}</span>
      </div>
    </div>
  )
}

export default MessageBubble
