import DisplayElement, { DisplayElementProps } from '../UI/DisplayElement'
import OperatorsPad from '../components/OperatorsPad'
import NumbersPad from '../components/NumbersPad'
import BigButton, { BigButtonProps } from '../UI/BigButton'

export enum SwitchModes {
  'CONSTRUCTOR',
  'RUNTIME',
}
export type BuildingBlockType = {
  id: number
  position: number
  block: (props: any) => JSX.Element
}

export enum BuildingBlocksIds {
  DISPLAY,
  OPERATORS,
  NUMBERS,
  EXECUTE,
}
