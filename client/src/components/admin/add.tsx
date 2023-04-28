import React, { useState, useContext, useRef, useEffect } from 'react';
import { AppContext } from '../../context/context';
import { $api } from '../../api/api';
import { dataUpload } from '../../utils/componentParams';
import { FormatMedia } from '../../types/types-main';
import { FilesList } from './filesList';
import { Loader } from '../loader/loader';

export const AddNew = ({ close, link }: { close: () => void; link: string }) => {

	const [files, setFiles] = useState<File[]>([]);
	const [bgFiles, setBgFiles] = useState<File[]>([]);
	const [folder, setFolder] = useState('');
	const { setIsAuth } = useContext(AppContext);
	const { format, tag } = dataUpload(link);
	const modalRef = useRef<HTMLDivElement>(null);
	const [totalSize, setTotalSize] = useState(0);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
				close();
			}
		}

		let total = 0;
		for (let i = 0; i < files.length; i++) {
			total += files[i]?.size;
		}

		setTotalSize(total + bgFiles[0]?.size || 0);

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [modalRef, files, bgFiles]);

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFiles(e.target.files as unknown as File[]);
	};

	const handleFileDelete = (i: number) => {
		setFiles(
			Array.from(files).filter((el, index) => index !== i),
		);
	};

	const handleBgFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBgFiles(e.target.files as unknown as File[]);
	};

	const handleBgFileDelete = (i: number) => {
		setBgFiles(
			Array.from(bgFiles).filter((el, index) => index !== i),
		);
	};

	const handleUpload = async () => {
		const formData = new FormData();
		if (!folder) {
			alert('Required field input folder'); return;
		}

		if (!bgFiles.length) {
			alert('Required field Background file'); return;
		}
		if (!files.length) {
			alert('Required field Download file'); return;
		}

		if (totalSize > 20000000) {
			alert('Max size Collection 20Mb'); return;
		}
		if (files.length > 20) {
			alert('Max count files 20'); return;
		}

		formData.append('title', folder);
		formData.append('tag', tag);
		formData.append('bgfiles', bgFiles[0]);
		for (let i = 0; i < files.length; i++) {
			formData.append('files', files[i]);
		}

		try {
			setLoader(true)
			await $api.post('media/add-folder', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});
			setLoader(false)
			alert('Success upload, update site');
			close();
		} catch (error: any) {
			if (error?.response?.status === 401) {
				setIsAuth('');
			}
			setLoader(false)
			alert(error);
		}
	};

	const handlerSetFolder = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFolder(e.target.value);
	};

	return (
		<>
			<div className='login add' ref={modalRef}>
				<h4 className='login__text'>Add Collection</h4>
				<h3 className='login__text'>Max Size 20Mb,
					<span className='login__text login__text-req'> {totalSize / 1000000}Mb </span>
					Max files 20,
					<span className='login__text login__text-req'> {files.length}</span>
				</h3>
				<div className='login_item'>
					<h4 className='login__text'>NAME FOLDER {Boolean(folder) || <span className='login__text login__text-req'>Required field</span>} </h4>
					<input type='text' className='login__input' value={folder} onChange={handlerSetFolder} />
				</div>

				<div className='login_item'>
					<h4 className='login__text'>Background foulder image</h4>
					<label htmlFor='file-bgupload' className='media--add add__label'>
						Upload file
					</label>
					<input type='file' accept={FormatMedia.PHOTO} id='file-bgupload' onChange={e => {
						handleBgFileUpload(e);
					}} />
					<h4 className='login__text'>{FormatMedia.PHOTO}
						{Boolean(bgFiles.length) || <span className='login__text login__text-req'> Required field</span>}
					</h4>
					{
						Boolean(bgFiles.length) && (
							<FilesList files={bgFiles} handleFileDelete={handleBgFileDelete} />
						)
					}
				</div>
				<div className='login_item'>
					<h4 className='login__text'>Media files</h4>
					<label htmlFor='file-upload' className='media--add add__label'>
						Upload file
					</label>
					<input type='file' multiple accept={format} id='file-upload' onChange={e => {
						handleFileUpload(e);
					}} />
					<h4 className='login__text'>{format}
						{Boolean(files.length) || <span className='login__text login__text-req'> Required field</span>}
					</h4>
					{
						Boolean(files.length) && (
							<FilesList files={files} handleFileDelete={handleFileDelete} />
						)
					}
				</div>
				<div className='login__nav'>
					<button className='media__item--delete' onClick={close}>
						Cancel
					</button>
					<button className='media--add' onClick={handleUpload}>Upload To Server</button>
				</div>
			</div>
			{loader ? <Loader /> : <></>}
		</>
	);
};
