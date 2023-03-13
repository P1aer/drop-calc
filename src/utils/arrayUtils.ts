import { BuildingBlockType } from './interfaces'
import { DragItem } from '../redux/slices/DragDropSlice'

export const includeBlockId = (array: DragItem[], item: BuildingBlockType) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].block.id === item.id) {
      return true
    }
  }
  return false
}
