import React from 'react';
import './SwitchModeBlock.scss'
import SwitchElement from '../../UI/SwitchElement';
import ArrowIcon from '../../UI/ArrowIcon';
import EyeIcon from '../../UI/EyeIcon';


const SwitchModeBlock = () => {
    return (
        <div className='switch-navbar'>
            <SwitchElement>
                <EyeIcon/>
                Runtime
            </SwitchElement>
            <SwitchElement active>
                <ArrowIcon fill='#5D5FEF'/>
                Constructor
            </SwitchElement>
        </div>
    );
};

export default SwitchModeBlock;