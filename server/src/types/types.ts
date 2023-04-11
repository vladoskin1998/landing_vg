export enum MediaEnumFile{
    VIDEO = 'video',
    PHOTO = 'photo'
}  

export type MediaTypeFile = MediaEnumFile.VIDEO | MediaEnumFile.PHOTO

export type FolderProp = {
    title: string;
    filenames: string[];
    tag: MediaTypeFile;
    bgfiles: string;
}   