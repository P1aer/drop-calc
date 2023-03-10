import React from 'react';
import Stack from 'react-bootstrap/Stack';
import './ComponentSideBar.scss'
import DisplayElement from '../../UI/DisplayElement';
import OperatorsPad from '../OperatorsPad';
import NumbersPad from '../NumbersPad';
import BigButton from '../../UI/BigButton';
import Draggable from '../Draggable';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ComponentSideBarProps {
}

const ComponentSideBar:React.FC<ComponentSideBarProps> = () => {
    return (
        <Stack gap={3} className='align-self-end'>
            <Draggable>
                <div className="component-base">
                    <DisplayElement/>
                </div>
            </Draggable>
            <Draggable>
                <div className="component-base" draggable>
                    <OperatorsPad/>
                </div>
            </Draggable>
            <Draggable>
                <div className="component-base" draggable>
                    <NumbersPad/>
                </div>
            </Draggable>
            <Draggable>
                <div className="component-base" draggable>
                    <BigButton text={'='}/>
                </div>
            </Draggable>

        </Stack>
    );
};

export default ComponentSideBar;