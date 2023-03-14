import React, { useMemo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { BuildingBlockType } from '../../utils/interfaces'
import { ARRAY_LENGTH, BLOCK_DND_TYPE } from '../../utils/constants'
import { DragItem, includeToArray } from '../../redux/slices/DragDropSlice'
import { useAppDispatch } from '../../redux/hooks'

interface DropZoneDraggableProps {
  block: BuildingBlockType
  isDisabled?: boolean
  isDroppedInZone?: boolean
}
// todo раскидать в 2 компонента для дропа и драга
const DropZoneDraggable: React.FC<DropZoneDraggableProps> = ({
  block,
  isDisabled = false,
  isDroppedInZone = false,
}) => {
  const dispatch = useAppDispatch()

  const [, drag] = useDrag(
    {
      type: BLOCK_DND_TYPE,
      item: {
        type: BLOCK_DND_TYPE,
        block,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: !isDisabled,
    },
    [],
  )
  const [{ isOver }, drop] = useDrop(
    {
      accept: BLOCK_DND_TYPE,
      drop: (item: DragItem) => {
        dispatch(
          includeToArray({
            indexTo: block.position as number,
            item: item.block,
            indexFrom: item.block.position,
          }),
        )
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        item: monitor.getItem(),
      }),
    },
    [],
  )

  const [display, direction] = useMemo(() => {
    const isLastPosition = block.position === ARRAY_LENGTH - 1
    if (isOver) {
      return ['block', 'up']
    } else if (isDroppedInZone) {
      return [isLastPosition ? 'none' : 'block', 'down']
    }
    return ['none', 'down']
  }, [isOver, isDroppedInZone])

  return (
    <div className='position-relative' ref={drop}>
      <div className='component-base' ref={drag}>
        {block.block(undefined)}
      </div>
      <img
        className={`drop-hr-${direction}`}
        style={{ display: display }}
        src='hr.svg'
        alt='blue hr'
      />
    </div>
  )
}

export default DropZoneDraggable
