import React from 'react'
import Stack from 'react-bootstrap/Stack'
import './ComponentSideBar.scss'
import Draggable from '../Draggable'
import { BLOCK_ARRAY } from '../../utils/constants'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ComponentSideBarProps {}

const ComponentSideBar: React.FC<ComponentSideBarProps> = () => {
  return (
    <Stack gap={3} className='align-self-end'>
      {BLOCK_ARRAY.map((block) => (
        <Draggable key={block.key} block={block} />
      ))}
    </Stack>
  )
}

export default ComponentSideBar
