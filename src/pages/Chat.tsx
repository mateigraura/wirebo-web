import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import Sidebar from "../components/sidebar/Sidebar"
import ChatRoom from "../components/chatroom/ChatRoom"
import { getConversations } from "../mock/mockData"
import { Conversation } from "../types";

interface Props {

}

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    height: "95vh",
    width: "91vw",
    marginTop: 12,
    backgroundColor: "#262d31",
  }
})

const Chat = (props: Props) => {
  const classes = useStyles()
  const [conversations,] = useState(getConversations)
  const [selectedConversation, setSelectedConversation] = useState({} as Conversation)

  return (
    <div className={classes.mainContainer}>
      <Sidebar
        conversations={conversations}
        setSelectedConversation={setSelectedConversation}
      />
      {
        Object.keys(selectedConversation).length ?
          <ChatRoom conversation={selectedConversation}/> :
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 0.7
            }}
          />
      }
    </div>
  )
}

export default Chat
