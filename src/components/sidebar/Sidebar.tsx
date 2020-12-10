import React from "react"
import ChatList from "../chatlist/ChatList"
import { useStyles } from "./styles"
import { Conversation } from "../../types"
import { Avatar, IconButton } from "@material-ui/core"
import {
  DonutLarge,
  MoreVert,
  SearchOutlined,
  Chat
} from "@material-ui/icons"

interface Props {
  conversations: Conversation[]
  setSelectedConversation: any
}

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
            <Chat style={{color: "#b1b3b5"}}/>
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
        <ChatList
          conversations={props.conversations}
          setSelectedConversation={props.setSelectedConversation}
        />
      </div>
    </div>
  )
}

export default Sidebar
