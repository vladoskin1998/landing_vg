import {WraperMedia} from './wraperMedia';
import {useContext} from 'react';
import {AppContext} from '../../../context/context';

const Video = () => {
	const {video} = useContext(AppContext);
	return <WraperMedia arr={video} link={'video-list'} />;
};

export default Video;
