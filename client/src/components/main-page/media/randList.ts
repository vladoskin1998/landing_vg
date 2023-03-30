import { DeviceType } from "../../../types/types-main"

export const randList = <T>(arr: T[], device:DeviceType):Array<T[]> => {
    if (arr.length === 1) return [[...arr]]
    if (device !== 'pc') return arr.map(e => [e])

    let tempArr: Array<T[]> = []

    for (let i = 0; i < arr.length; i = i + 3) {
        tempArr.push([
            ...arr.slice(i, i + 3 >= arr.length ? arr.length : i + 3),
        ])
    }

    if (tempArr[tempArr.length - 1].length === 1) {
        tempArr[tempArr.length - 1].unshift(tempArr[tempArr.length - 2].pop() as T)
    }

    return tempArr
}
