import React, { useMemo } from 'react'
import { useDrag } from 'react-dnd'
import { BuildingBlockType } from '../../utils/interfaces'
import { useAppSelector } from '../../redux/hooks'
import { includeBlockId } from '../../utils/arrayUtils'
import { BLOCK_DND_TYPE } from '../../utils/constants'
interface DraggableProps {
  block: BuildingBlockType
  isInDropZone?: boolean
}
const Draggable: React.FC<DraggableProps> = ({ block, isInDropZone = false }) => {
  const droppedBlocks = useAppSelector((state) => state.dragDrop.dropZoneItems)
  const [{ isDragging }, drag] = useDrag({
    type: BLOCK_DND_TYPE,
    item: {
      type: BLOCK_DND_TYPE,
      block,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !includeBlockId(droppedBlocks, block) || isInDropZone,
  })
  const isDisabled = useMemo(
    () => isDragging || includeBlockId(droppedBlocks, block),
    [droppedBlocks, isDragging],
  )
  return (
    <div
      className='component-base'
      ref={drag}
      style={{ opacity: isDisabled && !isInDropZone ? 0.5 : 1 }}
    >
      {block.block(undefined)}
    </div>
  )
}

export default Draggable
