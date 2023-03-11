import React, { useMemo } from 'react'
import { useDrag } from 'react-dnd'
import { BLOCK_DND_TYPE, BuildingBlockType } from '../../utils/interfaces'
import { useAppSelector } from '../../redux/hooks'
import { includeBlockId } from '../../utils/arrayUtils'
interface DraggableProps {
    block: BuildingBlockType
}
const Draggable: React.FC<DraggableProps> = ( {block}) => {
    const droppedBlocks = useAppSelector(state => state.dragDrop.dropZoneItems)
    const [{isDragging}, drag] = useDrag({
        type: BLOCK_DND_TYPE,
        item: {
            type: BLOCK_DND_TYPE, // с помощью типа можно использовать несколько совместимых drag и drop элементов в одном контексте
            block, // передаем конфиг текущей бутылки в контекст
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(), // фиксируем события в момент рендера
        }),
        canDrag: !includeBlockId(droppedBlocks,block)
    })
    const isDisabled = useMemo(() => isDragging || includeBlockId(droppedBlocks,block),
      [droppedBlocks,isDragging])
    return (
        <div
             className="component-base"
             ref={drag}
             style={{ opacity: isDisabled ? 0.5 : 1 }}
        >
            {block.block(undefined)}
        </div>
    );
};

export default Draggable;