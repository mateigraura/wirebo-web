import { Conversation, Message } from "../types";

export const getConversations: Conversation[] = [
  {
    id: "1",
    user: {id: "1", avatarUrl: "https://i.pravatar.cc/150?img=5", userName: "User 1"},
    lastMessage: "Good morning !"
  },
  {
    id: "2",
    user: {id: "2", avatarUrl: "https://i.pravatar.cc/150?img=4", userName: "User 2"},
    lastMessage: "Hello !"
  }
]

export const getMessages: Message[] = [
  {
    id: 1,
    text: "Hello",
    isMe: false,
    date: new Date().toISOString().slice(0, 10),
    conversationId: "1"
  },
  {
    id: 2,
    text: "Hi",
    isMe: true,
    date: new Date().toISOString().slice(0, 10),
    conversationId: "1"
  },
  {
    id: 3,
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    isMe: false,
    date: new Date().toISOString().slice(0, 10),
    conversationId: "1"
  },
  {
    id: 4,
    text: "Nunc lacinia justo sit amet metus rhoncus gravida",
    isMe: true,
    date: new Date().toISOString().slice(0, 10),
    conversationId: "1"
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isMe: false,
    date: new Date().toISOString().slice(0, 10),
    conversationId: "2"
  },
  {
    id: 6,
    text: "Phasellus non arcu quis augue faucibus viverra eu sed tellus",
    isMe: true,
    date: new Date().toISOString().slice(0, 10),
    conversationId: "2"
  }
]
