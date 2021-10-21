import React from 'react'

interface Props {
  className?: string
  children?: React.ReactNode
}

const Message = ({ className, children }: Props) => (
  <div className={className}>
    <p>{children}</p>
  </div>
)

export default Message
