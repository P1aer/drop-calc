import React from 'react';
import './DropZoneBlock.scss'

const DropZoneBlock = () => {
    return (
        <div className='dropzone-block'>
                <img src="/drop.svg" alt="drop icon"/>
                <span className='dropzone-title'>Перетащите сюда</span>
                <p>любой элемент из левой панели</p>
        </div>
    );
};

export default DropZoneBlock;