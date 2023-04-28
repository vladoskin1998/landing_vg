import { CloseSlick } from '../../svg/closeSlick';
import { PrevSlick } from '../../svg/prevSlick';
import { NextSlick } from '../../svg/nextSlick';
import { useNavigate } from 'react-router-dom';
import type Slider from 'react-slick';
import { type ReactNode } from 'react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/context';

export const WraperSlick = ({ refSlick, children, stat }: { stat: string; refSlick: React.RefObject<Slider>; children: ReactNode }) => {
	const navigate = useNavigate();
	const { device } = useContext(AppContext);
	return <div className='slick_cust'>
		<button className='slick_cust__close' onClick={() => {
			navigate(-1);
		}}>
			<CloseSlick />
		</button>
		<div className='slick_cust__num'>{stat}</div>
		{
			children
		}
		{
			device === 'pc' ? <>
				<button className='slick_cust__prev' onClick={() => refSlick?.current?.slickPrev()}>
					<PrevSlick />
				</button>
				<button className='slick_cust__next' onClick={() => refSlick?.current?.slickNext()}>
					<NextSlick />
				</button>
			</> : <></>
		}

	</div>;
};
