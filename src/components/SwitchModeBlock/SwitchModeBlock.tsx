import React from 'react';
import './SwitchModeBlock.scss'
import ArrowIcon from '../../UI/ArrowIcon';
import EyeIcon from '../../UI/EyeIcon';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {FILL_COLOR, SwitchModes} from '../../utils/interfaces';
import {switchSliceMode} from '../../redux/slices/modeSlice';
import SwitchElement from '../../UI/SwitchElement';


const SwitchModeBlock = () => {
    const dispatch = useAppDispatch()
    const onClickSwitchMode = (mode: SwitchModes) => () => dispatch(switchSliceMode(mode))
    const stateMode = useAppSelector((state) => state.mode.value)
    return (
        <div className='switch-navbar'>
            <SwitchElement 
                onClick={onClickSwitchMode(SwitchModes.RUNTIME)} 
                active={stateMode === SwitchModes.RUNTIME}
            >
               <EyeIcon fill={stateMode === SwitchModes.RUNTIME ? FILL_COLOR : undefined}/>
               Runtime
            </SwitchElement>
            <SwitchElement 
                onClick={onClickSwitchMode(SwitchModes.CONSTRUCTOR)}  
                active={stateMode === SwitchModes.CONSTRUCTOR}>
                <ArrowIcon fill={stateMode === SwitchModes.CONSTRUCTOR ? FILL_COLOR : undefined}/>
               Constructor
            </SwitchElement>
        </div>
    );
};

export default SwitchModeBlock;