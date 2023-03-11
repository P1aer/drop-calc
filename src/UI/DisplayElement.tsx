import React from 'react';

export interface DisplayElementProps {
    displayValue?: number
    [key: string] : any
}
const DisplayElement:React.FC<DisplayElementProps> = ({ displayValue = 0, ...props} ) => {
    return (
        <div {...props} className='display-element'>
            {displayValue}
        </div>
    );
};

export default DisplayElement;