import React from "react"
import { makeStyles } from "@material-ui/styles";
import { DoneAll } from "@material-ui/icons";

interface Props {
  message: any
}

const useStyles = makeStyles({
  messageSent: {
    color: "#e7e9ee",
    fontFamily: "sans-serif",
    clear: "both",
    lineHeight: "18px",
    fontSize: 16,
    padding: 10,
    position: "relative",
    margin: "8px 0",
    maxWidth: "60%",
    wordWrap: "break-word",
    float: "right",
    background: "#056162",
    borderRadius: "5px 0px 5px 5px",
    wordSpacing: "2px"
  },
  messageReceived: {
    color: "#e7e9ee",
    fontFamily: "sans-serif",
    clear: "both",
    lineHeight: "18px",
    fontSize: 16,
    padding: 10,
    position: "relative",
    margin: "8px 0",
    maxWidth: "60%",
    wordWrap: "break-word",
    float: "left",
    background: "#262d31",
    borderRadius: "0px 5px 5px 5px",
    wordSpacing: "2px"
  },
  metadata: {
    float: "right",
    padding: "0 0 0 35px",
    position: "relative",
    bottom: "-10px"
  },
  date: {
    color: "#b1b3b5",
    fontSize: 12,
    display: "inline-block"
  }
})

const Message = ({message}: Props) => {
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

export default Message
