import React from 'react';

interface DisplayElementProps {
    displayValue?: number
}
const DisplayElement:React.FC<DisplayElementProps> = ({ displayValue = 0} ) => {
    return (
        <div className='display-element'>
            {displayValue}
        </div>
    );
};

export default DisplayElement;