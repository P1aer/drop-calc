import React from 'react'
import { DragItem, excludeFromZone } from '../../redux/slices/DragDropSlice'
import Stack from 'react-bootstrap/Stack'
import { useAppDispatch } from '../../redux/hooks'
interface BuildingBlockZoneProps {
  blocks: DragItem[]
}
const BuildingBlockZone:React.FC<BuildingBlockZoneProps> = ({blocks}) => {
  const dispatch = useAppDispatch()
  const onDoubleClick = (block: DragItem) => () => {
    dispatch(excludeFromZone(block))
  }
  return (
    <Stack gap={3} className='align-self-end'>
      {blocks.map((elem) => (
        <div
          onDoubleClick={onDoubleClick(elem)}
          className='component-base'
          key={elem.block.id}>{elem.block.block(undefined)}
        </div>
      ))}
    </Stack>
  )
}

export default BuildingBlockZone