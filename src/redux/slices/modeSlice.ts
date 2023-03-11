import {SwitchModes} from '../../utils/interfaces';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface ModeSliceState {
    value: SwitchModes
}
const initialState: ModeSliceState = {
    value: SwitchModes.CONSTRUCTOR,
}
export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        switchSliceMode: (state, action: PayloadAction<SwitchModes>) => {
            state.value = action.payload
        }
    }
})

export const { switchSliceMode } = modeSlice.actions
export default modeSlice.reducer