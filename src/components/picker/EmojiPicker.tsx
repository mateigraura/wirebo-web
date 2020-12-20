import React, { useState, useRef } from "react"
import { Picker } from "emoji-mart"
import "emoji-mart/css/emoji-mart.css"
import { IconButton } from "@material-ui/core"
import { InsertEmoticon } from "@material-ui/icons"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"

interface Props {
  appendEmoji: any
}

const EmojiPicker = ({appendEmoji}: Props) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <IconButton
      onClick={() => {
        setIsOpen(true)
      }}
    >
      <InsertEmoticon
        style={{color: "#b1b3b5"}}
      />
      {
        isOpen ?
          <div ref={ref}>
            <Picker
              style={{
                position: "absolute",
                top: "-930%",
                zIndex: 999,
                left: 0
              }}
              theme="dark"
              native={true}
              onSelect={appendEmoji}
            />
          </div> : null
      }
    </IconButton>
  )
}

export default EmojiPicker
