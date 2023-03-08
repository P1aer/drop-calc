import React from 'react';
import Stack from 'react-bootstrap/Stack';
import './ComponentSideBar.scss'
import DisplayElement from '../../UI/DisplayElement';
import OperatorsPad from '../OperatorsPad';
import NumbersPad from '../NumbersPad';
import BigButton from '../../UI/BigButton';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ComponentSideBarProps {
}

const ComponentSideBar:React.FC<ComponentSideBarProps> = () => {
    return (
        <Stack gap={3} className='align-self-end'>
            <div className="component-base">
                <DisplayElement/>
            </div>
            <div className="component-base">
                <OperatorsPad/>
            </div>
            <div className="component-base">
                <NumbersPad/>
            </div>
            <div className="component-base">
                <BigButton text={'='}/>
            </div>
        </Stack>
    );
};

export default ComponentSideBar;