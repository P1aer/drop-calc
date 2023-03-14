import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BuildingBlockType } from '../../utils/interfaces'
import { handleInsertInArray, sortByPosition } from '../../utils/arrayUtils'
export interface DragItem {
  type: string
  block: BuildingBlockType
}
interface InsertAction {
  indexTo: number
  indexFrom: number | null
  item: BuildingBlockType
}
interface DragDropState {
  dropZoneItems: BuildingBlockType[]
}
const initialState: DragDropState = {
  dropZoneItems: [],
}
export const DragDropSlice = createSlice({
  name: 'dragDrop',
  initialState,
  reducers: {
    onZoneDrop: (state, action: PayloadAction<DragItem>) => {
      const { id, position } = action.payload.block
      const currentIndex = state.dropZoneItems.length
      const isInArray = state.dropZoneItems.find((elem) => elem.id === id)

      if (!isInArray) {
        const copyObject = { ...action.payload.block, position: currentIndex }
        state.dropZoneItems.push(copyObject)
        return
      }
      const isDifferentPosition = position !== currentIndex

      if (isDifferentPosition) {
        const sortedState = [...state.dropZoneItems].sort(sortByPosition)
        sortedState[position as number].position = currentIndex
        state.dropZoneItems = handleInsertInArray(sortedState, position as number, currentIndex)
      }
    },
    includeToArray: (state, action: PayloadAction<InsertAction>) => {
      const { indexTo, indexFrom } = action.payload
      if (indexTo === indexFrom) return

      const sortedState: BuildingBlockType[] = [...state.dropZoneItems].sort(sortByPosition)
      const copyObject = { ...action.payload.item, position: indexTo }
      if (indexFrom === null) {
        handleInsertInArray(sortedState, sortedState.length, indexTo)
        sortedState.push(copyObject)
      } else {
        sortedState[indexFrom].position = indexTo
        handleInsertInArray(sortedState, indexFrom, indexTo)
      }

      state.dropZoneItems = sortedState
    },
    excludeFromZone: (state, action: PayloadAction<BuildingBlockType>) => {
      const { id, position } = action.payload
      const filteredState = state.dropZoneItems
        .filter((block) => block.id !== id)
        .sort(sortByPosition)
      handleInsertInArray(filteredState, position as number, filteredState.length)
      state.dropZoneItems = filteredState
    },
  },
})

export const { onZoneDrop, excludeFromZone, includeToArray } = DragDropSlice.actions
export default DragDropSlice.reducer
