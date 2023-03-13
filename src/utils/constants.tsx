import DisplayElement, { DisplayElementProps } from '../UI/DisplayElement'
import OperatorsPad from '../components/OperatorsPad'
import NumbersPad from '../components/NumbersPad'
import BigButton, { BigButtonProps } from '../UI/BigButton'
import { BuildingBlocksIds, BuildingBlockType } from './interfaces'

export const BLOCK_DND_TYPE = 'BLOCK_DND_TYPE'
export const BLOCK_ARRAY: BuildingBlockType[] = [
  {
    position: 0,
    id: BuildingBlocksIds.DISPLAY,
    block: (props: DisplayElementProps) => {
      return <DisplayElement {...props} />
    },
  },
  {
    position: 1,
    id: BuildingBlocksIds.OPERATORS,
    block: (props) => {
      return <OperatorsPad {...props} />
    },
  },
  {
    position: 2,
    id: BuildingBlocksIds.NUMBERS,
    block: (props) => {
      return <NumbersPad {...props} />
    },
  },
  {
    position: 3,
    id: BuildingBlocksIds.EXECUTE,
    block: (props: BigButtonProps) => {
      return <BigButton {...props} />
    },
  },
]
export const BLOCKS: Record<BuildingBlocksIds, BuildingBlockType> = {
  [BuildingBlocksIds.DISPLAY]: {
    position: 0,
    id: BuildingBlocksIds.DISPLAY,
    block: (props: DisplayElementProps) => {
      return <DisplayElement {...props} />
    },
  },
  [BuildingBlocksIds.OPERATORS]: {
    position: 1,
    id: BuildingBlocksIds.OPERATORS,
    block: (props) => {
      return <OperatorsPad {...props} />
    },
  },
  [BuildingBlocksIds.NUMBERS]: {
    position: 2,
    id: BuildingBlocksIds.NUMBERS,
    block: (props) => {
      return <NumbersPad {...props} />
    },
  },
  [BuildingBlocksIds.EXECUTE]: {
    position: 3,
    id: BuildingBlocksIds.EXECUTE,
    block: (props: BigButtonProps) => {
      return <BigButton {...props} />
    },
  },
}

export const FILL_COLOR = '#5D5FEF'
export const EXCLUDED_BLOCKS = [BuildingBlocksIds.DISPLAY]
export const ARRAY_LENGTH = BLOCK_ARRAY.length
