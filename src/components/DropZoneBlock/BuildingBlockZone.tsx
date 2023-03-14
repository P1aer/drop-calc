import React from 'react'
import { excludeFromZone } from '../../redux/slices/DragDropSlice'
import Stack from 'react-bootstrap/Stack'
import { useAppDispatch } from '../../redux/hooks'
import DropZoneDraggable from '../DropZoneDraggable'
import { EXCLUDED_BLOCKS } from '../../utils/constants'
import { BuildingBlockType } from '../../utils/interfaces'
import { sortByPosition } from '../../utils/arrayUtils'

interface BuildingBlockZoneProps {
  blocks: BuildingBlockType[]
  isOver: boolean
}
const BuildingBlockZone: React.FC<BuildingBlockZoneProps> = ({ blocks, isOver }) => {
  const dispatch = useAppDispatch()
  const onDoubleClick = (block: BuildingBlockType) => () => {
    dispatch(excludeFromZone(block))
  }

  return (
    <Stack className='dropzone-stack'>
      {[...blocks].sort(sortByPosition).map((elem, index) => (
        <div key={elem.key} onDoubleClick={onDoubleClick(elem)}>
          <DropZoneDraggable
            block={elem}
            isDisabled={EXCLUDED_BLOCKS.includes(elem.id)}
            isDroppedInZone={isOver && index === blocks.length - 1}
          />
        </div>
      ))}
    </Stack>
  )
}

export default BuildingBlockZone
