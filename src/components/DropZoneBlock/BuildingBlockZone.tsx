import React from 'react'
import { DragItem } from '../../redux/slices/DragDropSlice'
import Stack from 'react-bootstrap/Stack'
interface BuildingBlockZoneProps {
  blocks: DragItem[]
}
const BuildingBlockZone:React.FC<BuildingBlockZoneProps> = ({blocks}) => {
  return (
    <Stack gap={3} className='align-self-end'>
      {blocks.map((elem) => (
        <div
          className='component-base'
          key={elem.block.id}>{elem.block.block(undefined)}
        </div>
      ))}
    </Stack>
  )
}

export default BuildingBlockZone