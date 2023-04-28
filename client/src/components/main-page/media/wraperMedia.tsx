import {randList} from '../../../utils/randList';
import {useNavigate} from 'react-router-dom';
import {type MediaDataType, MediaEnumFile} from '../../../types/types-main';
import {useContext, useState} from 'react';
import {AppContext} from '../../../context/context';
import {AddNew} from '../../admin/add';
import {HREF} from '../../../utils/const';
import {WraperButton} from './wraperButton';
import {wraperMediaListParams} from '../../../utils/componentParams';
import {$api} from '../../../api/api';

export const WraperMedia = <T extends MediaDataType>({
	arr,
	link,
}: {
	arr: T[];
	link: string;
}) => {
	const navigate = useNavigate();
	const mediaType = wraperMediaListParams(link);
	const {device, isAuth, setIsAuth} = useContext(AppContext);
	const [opesAdd, setOpenAdd] = useState(false);
	const slideId = mediaType.title[0].toUpperCase() + mediaType.title.slice(1);

	const deleteFolder = (e: React.MouseEvent<HTMLButtonElement>, id: string | number) => {
		e.stopPropagation();
		$api.post('media/delete-folder', {id})
			.then(res => {
				alert('Delete success, update site');
				window.location.reload();
			}).catch(error => {
				console.log(error);
				if (error?.response?.status === 401) {
					setIsAuth('');
				}
				alert(error);
			});
	};

	const handlerOpenAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setOpenAdd(true);
	};

	return <div className={`media ${mediaType.title}`} id={slideId}>
		{
			isAuth
            && <>
            	<button className='media--add' onClick={handlerOpenAdd}>Add Collection</button>
            	{opesAdd && <AddNew close={() => {
            		setOpenAdd(false);
            	}}
            		link={`folder-${mediaType.title}`}
            	/>}
            </>

		}
		<h4 className='title__links'>{mediaType.title}</h4>
		<div className='media__list'>
			{!arr.length || randList(arr, device).map((arrItem: T[], index: number) => (
				<div className={`media__itemline-${arrItem.length}-${index % 2 === 0 ? 'p' : 'n'} media__itemline`} key={'wraper-media' + index}>
					{arrItem.map(item => (
						<div style={{backgroundImage: `url(${HREF}uploads/${item.bgfiles})`}} className='media__item main--image'
							onClick={() => {
								navigate(`/${link}/${item?.folderId}${mediaType.tag === MediaEnumFile.VIDEO ? '/video/0' : ''}`);
							}}>
							{
								isAuth && <button className='media__item--delete' onClick={e => {
									deleteFolder(e, item?.folderId);
								}}>Delete</button>
							}
							<WraperButton label={item?.label} text={<>view <br />all</>} />
						</div>
					))}
				</div>
			))}
		</div>
	</div>;
};
