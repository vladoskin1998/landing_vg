import {useNavigate, useParams, useLocation} from 'react-router-dom';
import {randList} from '../../utils/randList';
import {Outlet} from 'react-router-dom';
import {useContext} from 'react';
import {AppContext} from '../../context/context';
import {HREF} from '../../utils/const';
import {type MediaTypeListFoo} from '../../types/types-main';
import {MediaNavTitle} from './mediaNavTitle';

export const WraperList = <T extends {src: string}>({
	arr,
	label,
	mediaTypesFoo,
}: {
	arr: T[];
	label: string;
	mediaTypesFoo: MediaTypeListFoo;
}) => {
	const {setId} = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const {device} = useContext(AppContext);
	const toSlick = (id: string | number) => {
		navigate(`/${location.pathname.split('/')[1]}/${setId}/${mediaTypesFoo.title}/${id}`);
	};

	return <div className='media__list content'>
		<Outlet />
		<div className='media'>
			<MediaNavTitle label={label} title={mediaTypesFoo.title} />
			<div className='media__list'>
				{randList(arr, device).map((arrItem: T[], index: number) => (
					<div
						className={`media__itemline-${arrItem.length}-${index % 2 === 0 ? 'p' : 'n'
						} media__itemline`}
						key={'media-list-wraper' + index}
					>
						{arrItem.map((item, id) => (
							<div
								key={'media-list-wraper' + index}
								style={{backgroundImage: `url(${HREF}uploads/${item.src})`}}
								className='media__item main--image'
							>
								<div className='media__item-bg' onClick={() => {
									toSlick(id+(index*3));
								}}>
									<button className='media__item-bg_but'> {mediaTypesFoo.buttonTitle}</button>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>

	</div >;
};

export default WraperList;
