
import {animateScroll as scroll, scroller} from 'react-scroll';
import {useRef} from 'react';
import {MENU_LIST as menuList} from '../../../utils/const';

export const Menu = () => {
	const scrollerRef = useRef(scroller);
	const options = {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
	};
	const scrollTo = (link: string) => {
		scrollerRef?.current.scrollTo(link, options);
	};

	return (
		<div className='menu'>
			<div className='menu__list'>
				{menuList.map((i, index) => (
					<div className='menu__list-item' key={'menu__list-item' + index} onClick={() => {
						scrollTo(i);
					}}>
						{i}
					</div>
				))}
			</div>
		</div>
	);
};
