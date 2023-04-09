import { ReactElement } from "react"

export type MediaDataType = {
    src: string[]
    label: string
    folderId: number | string
}

export type PhotoDataType = { src: string; photoId: number | string }

export type DeviceType = "pc" | "mobile" | "tablet"

export type DecodedToken = {
    exp: number
}


export enum MediaEnumFile{
    VIDEO = 'video',
    PHOTO = 'photo'
}  

export type MediaTypeFile = MediaEnumFile.PHOTO | MediaEnumFile.VIDEO

export type FolderProp = {
    title: string;
    filenames: string[];
    tag: MediaTypeFile;
}   

export interface BDFoledrsList extends FolderProp {
    _id: string | number
}

export type MediaTypeListFoo = {
    title: string, buttonTitle: ReactElement | string, tag: MediaTypeFile 
}

