export interface Conversation {
  id: string
  user: User
  lastMessage: string
}

export interface User {
  id: string
  avatarUrl: string
  userName: string
}

export interface Message {
  id: number
  text: string
  isMe: boolean
  date: any
  conversationId: string
}
