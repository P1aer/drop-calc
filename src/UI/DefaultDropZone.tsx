import React from 'react'

interface DefaultDropZoneProps {
  isDragOver?: boolean
  isShowing: boolean
}
const DefaultDropZone:React.FC<DefaultDropZoneProps> = ({isDragOver = false, isShowing}) => {
  return (
    <div
      style={{display: isShowing ? 'flex': 'none'}}
      className={'dropzone-block ' + (isDragOver ? 'active-drag' : '')}
    >
      <img src="/drop.svg" alt="drop icon"/>
      <span className='dropzone-title'>Перетащите сюда</span>
      <p>любой элемент из левой панели</p>
    </div>
  )
}

export default DefaultDropZone