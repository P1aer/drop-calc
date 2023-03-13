import React from 'react';
import {useDrag} from 'react-dnd';
import  { BuildingBlockType } from '../../utils/interfaces';
import {ARRAY_LENGTH, BLOCK_DND_TYPE} from '../../utils/constants';


interface DropZoneDraggableProps {
    block: BuildingBlockType
    isDisabled?: boolean
}

const DropZoneDraggable:React.FC<DropZoneDraggableProps> = ({block, isDisabled= false}) => {
    const isLastPosition = block.position === ARRAY_LENGTH - 1
    const [{isDragging}, drag] = useDrag({
        type: BLOCK_DND_TYPE,
        item: {
            type: BLOCK_DND_TYPE,
            block,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        canDrag: !isDisabled
    })
    return (
        <div className='position-relative'>
          <div
            className="component-base"
            ref={drag}
          >
          {block.block(undefined)}
        </div>
          <img className='drop-hr' style={{display: isLastPosition ? 'none': 'block'}} src='hr.svg' alt='blue hr'/>
        </div>

    );
};

export default DropZoneDraggable;