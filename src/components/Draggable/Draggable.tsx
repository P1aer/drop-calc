import React, {ReactNode} from 'react';
interface DraggableProps {
    children: ReactNode
}
const Draggable: React.FC<DraggableProps> = ( {children}) => {
    return (
        <div
            draggable
/*             onDragStart={(event) => {
             }}
            onDragEnd={() => {
            }}*/
        >
            {children}
        </div>
    );
};

export default Draggable;