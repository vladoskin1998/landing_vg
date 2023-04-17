import {WraperList} from './wraperList';
import {useLocation, useParams} from 'react-router-dom';
import {useContext, useMemo} from 'react';
import {AppContext} from '../../context/context';
import {MediaEnumFile} from '../../types/types-main';
import {wraperMediaListParams} from '../../utils/componentParams';
import '../../style/media-list/media-list.scss';

export const MediaList = () => {
	const location = useLocation();
	const {video, image} = useContext(AppContext);
	const {setId} = useParams();

	const mediaTypesFoo = wraperMediaListParams(location.pathname.split('/')[1]);

	const arr = useMemo(() => (mediaTypesFoo.tag === MediaEnumFile.PHOTO ? image : video)
		.find(it => setId === it.folderId)
		?.src.map(it => ({src: it, photoId: it})) || [], [video, image, mediaTypesFoo]);

	const label = video.find(it => setId === it.folderId)?.label || '';

	return <WraperList arr={arr} label={label} mediaTypesFoo={mediaTypesFoo} />;
};

export default MediaList;
