import React, {createContext, useState, useRef, useEffect, type ReactNode, type RefObject} from 'react';
import {type BDFoledrsList, type DecodedToken, type DeviceType, type MediaDataType, MediaEnumFile} from '../types/types-main';
import jwt_decode from 'jwt-decode';
import {$api} from '../api/api';

const AppContext = createContext<{
	device: DeviceType;
	isAuth: string;
	setIsAuth: (a: string) => void;
	image: MediaDataType[];
	video: MediaDataType[];

}>({
			device: 'pc',
			isAuth: localStorage.getItem('token') || '',
			setIsAuth() { },
			image: [],
			video: [],
		});

const ContextProvider = ({children, refApp}: {children: ReactNode; refApp: RefObject<HTMLDivElement>}) => {
	const [device, setDevice] = useState<DeviceType>('pc');
	const [isAuth, setIsAuth] = useState(localStorage.getItem('token') || '');

	const [image, setImage] = useState<MediaDataType[]>([]);
	const [video, setVideo] = useState<MediaDataType[]>([]);


	useEffect(() => {
		$api.post('media/get-folders', {tag: MediaEnumFile.VIDEO})
			.then(res => {
				setVideo(
					res.data.map((it: BDFoledrsList) => ({src: it?.filenames, label: it?.title, folderId: it?._id, bgfiles: it?.bgfiles})),
				);
				console.log(res.data);
			});
		$api.post('media/get-folders', {tag: MediaEnumFile.PHOTO})
			.then(res => {
				setImage(
					res.data.map((it: BDFoledrsList) => ({src: it?.filenames, label: it?.title, folderId: it?._id, bgfiles: it?.bgfiles})),
				);
				console.log(res.data);
			});
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (refApp?.current?.offsetWidth !== undefined) {
				if (refApp?.current?.offsetWidth < 450) {
					setDevice('mobile');
					document.body.classList.add('no-hover');
				} else if (refApp?.current?.offsetWidth < 950) {
					setDevice('tablet');
					document.body.classList.add('no-hover');
				} else {
					setDevice('pc');
					document.body.classList.remove('no-hover');
				}
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [refApp?.current?.offsetWidth]);

	useEffect(() => {
		const token: string | null = localStorage.getItem('token');
		if (token) {
			const decodedToken: DecodedToken = jwt_decode(token);
			console.log('decodedToken', decodedToken);

			const currentTime = Date.now() / 1000;
			if (decodedToken.exp < currentTime) {
				setIsAuth('');
			}
		}

		localStorage.setItem('token', isAuth);
	}, [isAuth]);

	return <AppContext.Provider value={
		{
			device,
			isAuth,
			setIsAuth,
			image,
			video,

		}
	}>
		{children}
	</AppContext.Provider>;
};

export {ContextProvider, AppContext};
