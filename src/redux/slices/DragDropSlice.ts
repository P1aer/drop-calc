import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BuildingBlockType } from '../../utils/interfaces'
export interface DragItem {
  type: string
  block: BuildingBlockType
}
interface DragDropState {
  dropZoneItems: DragItem[]
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
      const isInArray = state.dropZoneItems.find((elem) => elem.block.id === id && position)
      if (!isInArray) {
        state.dropZoneItems.push(action.payload)
      }
    },
    excludeFromZone: (state, action: PayloadAction<DragItem>) => {
      state.dropZoneItems = state.dropZoneItems.filter(
        ({ block }) => block.id !== action.payload.block.id,
      )
    },
  },
})

export const { onZoneDrop, excludeFromZone } = DragDropSlice.actions
export default DragDropSlice.reducer
