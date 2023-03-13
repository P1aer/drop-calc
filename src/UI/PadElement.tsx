import React from 'react'
interface PadElementProps {
  size?: 'sm' | 'md' | 'lg'
  text: string | number
}
const PadElement: React.FC<PadElementProps> = ({ size = 'sm', text }) => {
  return <div className={`pad-element pad-element--${size}`}>{text}</div>
}

export default PadElement
