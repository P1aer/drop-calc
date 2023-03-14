import React from 'react'
import './DropZoneBlock.scss'
import DefaultDropZone from '../../UI/DefaultDropZone'
import BuildingBlockZone from './BuildingBlockZone'
import { useDrop } from 'react-dnd'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { DragItem, onZoneDrop } from '../../redux/slices/DragDropSlice'
import { BLOCK_DND_TYPE } from '../../utils/constants'

const DropZoneBlock = () => {
  const dispatch = useAppDispatch()
  const droppedBlocks = useAppSelector((state) => state.dragDrop.dropZoneItems)

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: BLOCK_DND_TYPE,
    drop: (item: DragItem) => {
      dispatch(onZoneDrop(item as DragItem))
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))
  const isShowingCanvas = droppedBlocks.length > 0
  return (
    <div className='dropzone-wrapper'>
      <BuildingBlockZone isOver={isOver} blocks={droppedBlocks} />
      <div ref={dropRef} className='dropzone'>
        <DefaultDropZone isShowing={!isShowingCanvas} isDragOver={isOver} />
      </div>
    </div>
  )
}

export default DropZoneBlock
