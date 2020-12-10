import React, { useEffect, useRef } from "react"
import Message from "./Message";

interface Msg {
  id: number,
  text: string,
  isMe: boolean,
  date: any
}

const MessageFeed = () => {
  const msgs: Msg[] = [
    {
      id: 1,
      text: "Hello!",
      isMe: false,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 2,
      text: "Hello back!",
      isMe: true,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 1,
      text: "Hello!",
      isMe: false,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 2,
      text: "Hello back!",
      isMe: true,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 1,
      text: "Hello!",
      isMe: false,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 2,
      text: "Hello back!",
      isMe: true,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 1,
      text: "Hello!",
      isMe: false,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 2,
      text: "Hello back!",
      isMe: true,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 1,
      text: "Hello!",
      isMe: false,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 2,
      text: "Hello back!",
      isMe: true,
      date: new Date().toISOString().slice(0, 10)
    },
    {
      id: 2,
      text: "Hello back!",
      isMe: true,
      date: new Date().toISOString().slice(0, 10)
    }
  ]
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      // @ts-ignore
      ref.current.scrollIntoView()
    }
  })

  return (
    <div>
      {
        msgs.map((m) => (
          <Message key={m.id} message={m}/>
        ))
      }
      <div ref={ref} style={{float: "right", clear: "both"}}/>
    </div>
  )
}

export default MessageFeed
