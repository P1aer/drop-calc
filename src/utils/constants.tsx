import DisplayElement, { DisplayElementProps } from '../UI/DisplayElement'
import OperatorsPad from '../components/OperatorsPad'
import NumbersPad from '../components/NumbersPad'
import BigButton, { BigButtonProps } from '../UI/BigButton'
import { BuildingBlocksIds, BuildingBlockType } from './interfaces'

export const BLOCK_DND_TYPE = 'BLOCK_DND_TYPE'
export const BLOCK_ARRAY: BuildingBlockType[] = [
  {
    position: null,
    id: BuildingBlocksIds.DISPLAY,
    key: Math.random(),
    block: (props: DisplayElementProps) => {
      return <DisplayElement {...props} />
    },
  },
  {
    position: null,
    id: BuildingBlocksIds.OPERATORS,
    key: Math.random(),
    block: (props) => {
      return <OperatorsPad {...props} />
    },
  },
  {
    position: null,
    id: BuildingBlocksIds.NUMBERS,
    key: Math.random(),
    block: (props) => {
      return <NumbersPad {...props} />
    },
  },
  {
    position: null,
    id: BuildingBlocksIds.EXECUTE,
    key: Math.random(),
    block: (props: BigButtonProps) => {
      return <BigButton {...props} />
    },
  },
]
export const BLOCKS: Record<BuildingBlocksIds, BuildingBlockType> = {
  [BuildingBlocksIds.DISPLAY]: {
    position: null,
    key: Math.random(),
    id: BuildingBlocksIds.DISPLAY,
    block: (props: DisplayElementProps) => {
      return <DisplayElement {...props} />
    },
  },
  [BuildingBlocksIds.OPERATORS]: {
    position: null,
    key: Math.random(),
    id: BuildingBlocksIds.OPERATORS,
    block: (props) => {
      return <OperatorsPad {...props} />
    },
  },
  [BuildingBlocksIds.NUMBERS]: {
    position: null,
    id: BuildingBlocksIds.NUMBERS,
    key: Math.random(),
    block: (props) => {
      return <NumbersPad {...props} />
    },
  },
  [BuildingBlocksIds.EXECUTE]: {
    position: null,
    id: BuildingBlocksIds.EXECUTE,
    key: Math.random(),
    block: (props: BigButtonProps) => {
      return <BigButton {...props} />
    },
  },
}

export const FILL_COLOR = '#5D5FEF'
export const EXCLUDED_BLOCKS = [BuildingBlocksIds.DISPLAY]
export const ARRAY_LENGTH = BLOCK_ARRAY.length
