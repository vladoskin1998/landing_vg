import {type ReactElement} from 'react';

export type MediaDataType = {
	src: string[];
	label: string;
	folderId: number | string;
	bgfiles: string;
};

export type PhotoDataType = {src: string; photoId: number | string};

export type DeviceType = 'pc' | 'mobile' | 'tablet';

export type DecodedToken = {
	exp: number;
};

export enum MediaEnumFile {
	VIDEO = 'video',
	PHOTO = 'photo',
}
export enum FormatMedia {
	VIDEO = '.mp4',
	PHOTO = '.jpg,.jpeg,.png',
}

export type MediaTypeFile = MediaEnumFile.PHOTO | MediaEnumFile.VIDEO;

export type FolderProp = {
	title: string;
	filenames: string[];
	tag: MediaTypeFile;
	bgfiles: string;

};

export type BDFoledrsList = {
	_id: string | number;

} & FolderProp;

export type MediaTypeListFoo = {
	title: string; buttonTitle: ReactElement | string; tag: MediaTypeFile;
};

