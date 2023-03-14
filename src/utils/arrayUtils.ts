import { BuildingBlockType } from './interfaces'

export const includeBlockId = (array: BuildingBlockType[], item: BuildingBlockType) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === item.id) {
      return true
    }
  }
  return false
}
export const sortByPosition = (a: BuildingBlockType, b: BuildingBlockType) => {
  if (a.position === null || b.position === null) {
    return 0
  }
  if (a.position > b.position) {
    return 1
  } else if (a.position < b.position) {
    return -1
  } else {
    return 0
  }
}
export const handleInsertInArray = (
  sortedState: BuildingBlockType[],
  indexFrom: number,
  indexTo: number,
) => {
  if (indexFrom < indexTo) {
    for (let i = indexFrom; i < indexTo; i++) {
      --(sortedState[i].position as number)
    }
  } else {
    for (let i = indexTo; i < indexFrom; i++) {
      ++(sortedState[i].position as number)
    }
  }
  return sortedState
}
