import React, { useEffect, useRef } from "react"
import { Message } from "../../types"
import MessageBubble from "./MessageBubble"

interface Props {
  messages: Message[]
}

const MessageFeed = ({messages}: Props) => {
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
        messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg}/>
        ))
      }
      <div ref={ref} style={{float: "right", clear: "both"}}/>
    </div>
  )
}

export default MessageFeed
