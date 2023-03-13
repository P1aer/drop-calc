import React from 'react'
import { DragItem, excludeFromZone } from '../../redux/slices/DragDropSlice'
import Stack from 'react-bootstrap/Stack'
import { useAppDispatch } from '../../redux/hooks'
import DropZoneDraggable from '../DropZoneDraggable'
import { EXCLUDED_BLOCKS } from '../../utils/constants'

interface BuildingBlockZoneProps {
  blocks: DragItem[]
}
const BuildingBlockZone: React.FC<BuildingBlockZoneProps> = ({ blocks }) => {
  const dispatch = useAppDispatch()
  const onDoubleClick = (block: DragItem) => () => {
    dispatch(excludeFromZone(block))
  }
  return (
    <Stack gap={3} className='align-self-end'>
      {blocks.map((elem) => (
        <div key={elem.block.id} onDoubleClick={onDoubleClick(elem)}>
          <DropZoneDraggable
            block={elem.block}
            isDisabled={EXCLUDED_BLOCKS.includes(elem.block.id)}
          />
        </div>
      ))}
    </Stack>
  )
}

export default BuildingBlockZone
