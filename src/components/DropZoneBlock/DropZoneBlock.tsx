import React, {DragEventHandler, useState} from 'react';
import './DropZoneBlock.scss'

const DropZoneBlock = () => {
    const [isDragOver,setIsDragOver] = useState(false)
    const classes = isDragOver ? 'active-drag' : ''
    const toggleDragOver = (val: boolean) => () => setIsDragOver(val)

    const onDrop:DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault()
        setIsDragOver(false)
    }
    return (
        <div
            onDrop={onDrop}
            onDragOver={(event) => {
                event.preventDefault()
            }}
            className={'dropzone-block ' + classes}
            onDragEnter={(event) => {
                event.stopPropagation()
                toggleDragOver(true)
            }}
            onDragLeave={(event) => {
                event.stopPropagation()
                toggleDragOver(false)
            }}
        >
                <img src="/drop.svg" alt="drop icon"/>
                <span className='dropzone-title'>Перетащите сюда</span>
                <p>любой элемент из левой панели</p>
        </div>
    );
};

export default DropZoneBlock;