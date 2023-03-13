import React from 'react'
import './DropZoneBlock.scss'
import DefaultDropZone from '../../UI/DefaultDropZone'
import BuildingBlockZone from './BuildingBlockZone'
import {useDrop, XYCoord} from 'react-dnd'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { DragItem, onZoneDrop } from '../../redux/slices/DragDropSlice'
import { BLOCK_DND_TYPE } from '../../utils/constants'

const DropZoneBlock = () => {
  const dispatch = useAppDispatch()
  const droppedBlocks = useAppSelector((state) => state.dragDrop.dropZoneItems)

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: BLOCK_DND_TYPE,
    drop: (_, monitor) => {
      const item = monitor.getItem() as any;
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + (delta as XYCoord).x);
      const top = Math.round(item.top + (delta as XYCoord).y);
      console.log(top,'top')
      console.log(left,'left')
      dispatch(onZoneDrop(item as DragItem))

    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))
  const isShowingCanvas = droppedBlocks.length > 0
  return (
    <div ref={dropRef} className='dropzone'>
      <DefaultDropZone isShowing={!isShowingCanvas} isDragOver={isOver} />
      <BuildingBlockZone blocks={droppedBlocks} />
    </div>
  )
}

export default DropZoneBlock
