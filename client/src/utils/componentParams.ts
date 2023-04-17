import {MediaEnumFile, type MediaTypeFile, FormatMedia} from '../types/types-main';

export const wraperMediaParams = (link: string) => {
	switch (link) {
		case 'photo-list':
			return {title: 'photo', tag: MediaEnumFile.PHOTO};
		case 'video-list':
			return {title: 'video', tag: MediaEnumFile.VIDEO};
		default:
			return {title: 'photo', tag: MediaEnumFile.PHOTO};
	}
};

export const wraperMediaListParams = (
	key: string,
): {title: string; buttonTitle: string; tag: MediaTypeFile} => {
	switch (key) {
		case 'photo-list':
			return {
				title: 'photo',
				buttonTitle: 'open full',
				tag: MediaEnumFile.PHOTO,
			};
		case 'video-list':
			return {
				title: 'video',
				buttonTitle: 'play',
				tag: MediaEnumFile.VIDEO,
			};
		default:
			return {
				title: 'not found',
				buttonTitle: 'not found',
				tag: MediaEnumFile.PHOTO,
			};
	}
};

export const wraperMediaListSlick = (key: string): {tag: MediaTypeFile} => {
	switch (key) {
		case 'photo':
			return {tag: MediaEnumFile.PHOTO};
		case 'video':
			return {tag: MediaEnumFile.VIDEO};
		default:
			return {tag: MediaEnumFile.PHOTO};
	}
};

export const dataUpload = (key: string): {format: FormatMedia; tag: MediaEnumFile.PHOTO | MediaEnumFile.VIDEO} => {
	switch (key) {
		case 'folder-photo':
			return {format: FormatMedia.PHOTO, tag: MediaEnumFile.PHOTO};
		case 'folder-video':
			return {format: FormatMedia.VIDEO, tag: MediaEnumFile.VIDEO};
		default:
			return {format: FormatMedia.PHOTO, tag: MediaEnumFile.PHOTO};
	}
};
