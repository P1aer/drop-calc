import React from 'react'
import './DropZoneBlock.scss'
import DefaultDropZone from '../../UI/DefaultDropZone'
import BuildingBlockZone from './BuildingBlockZone'
import { useDrop } from 'react-dnd'
import { BLOCK_DND_TYPE } from '../../utils/interfaces'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { DragItem, onZoneDrop } from '../../redux/slices/DragDropSlice'

const DropZoneBlock = () => {
  const dispatch = useAppDispatch()
  const droppedBlocks = useAppSelector(state => state.dragDrop.dropZoneItems)
    const [{ isOver }, drop] = useDrop(
      () => ({
          accept: BLOCK_DND_TYPE,
        drop: (item) => {
            dispatch(onZoneDrop(item as DragItem))
            console.log(item)

        },
        collect: (monitor) => ({
          isOver: monitor.isOver()
        })
      })
    )
   const isShowingCanvas = droppedBlocks.length > 0
    return (
        <div ref={drop}>
          <DefaultDropZone isShowing={!isShowingCanvas} isDragOver={isOver}/>
          <BuildingBlockZone blocks={droppedBlocks}/>
        </div>
    );
};

export default DropZoneBlock;