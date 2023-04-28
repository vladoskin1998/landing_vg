import 'slick-carousel/slick/slick.css';
import {useRef, useMemo, useState, useEffect} from 'react';
import Slider from 'react-slick';
import {WraperSlick} from './wraperSlick';
import {useLocation, useParams} from 'react-router-dom';
import {useContext} from 'react';
import {AppContext} from '../../context/context';
import {wraperMediaListSlick} from '../../utils/componentParams';
import {MediaEnumFile} from '../../types/types-main';
import {HREF} from '../../utils/const';

export const SlickMedia = () => {

	const location = useLocation();
	const refSlick = useRef<Slider>(null);
	const {current, setId} = useParams();
	const mediaTypeUrl = wraperMediaListSlick(location.pathname.split('/')[3]);
	const [currentSlide, setCurrentSlide] = useState( Number(current) || 0);
	console.log(location.pathname.split('/')[3], setId);

	const {video, image} = useContext(AppContext);

	const arr = useMemo(() => (mediaTypeUrl.tag === MediaEnumFile.PHOTO ? image : video)
		.find(it => setId === it?.folderId)?.src || [], [video, image]);

	const settings = {
		arrows: false,
		initialSlide: Number(current) || 0,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: (current: number) => {
		  setCurrentSlide(current);
		},
	};

	console.log(currentSlide);

	return <WraperSlick refSlick={refSlick} stat={`${currentSlide + 1 + '/' + arr.length}`}>
		<Slider {...settings} ref={refSlick}>
			{
				arr.map((item, index) => <div className='slick_cust__slide' key={index + 'slick_cust__slid'}>
					{mediaTypeUrl.tag === MediaEnumFile.VIDEO
						? <video controls={true} className='slick_cust__slide-video'>
							<source src={`${HREF}uploads/${item}`} type='video/mp4' />
						</video>
						: <div style={{backgroundImage: `url(${HREF}uploads/${item})`}} className='slick_cust__slide-photo main--image'></div>
					}
				</div>)
			}
		</Slider>
	</WraperSlick>;
};

export default SlickMedia;
