import {useEffect, useState, lazy, Suspense} from 'react';
import {BottomLine} from '../../../svg/bottomLine';
import {Loader} from '../../loader/loader';
import '../../../style/main-page/collaboration.scss';

const ColaborationPhoto = lazy(async () => import('./colaborationPhoto'));
const ColaborationVideo = lazy(async () => import('./colaborationVideo'));

const Collaboration = ({scrollToBottom}: {scrollToBottom: () => void}) => (
	<Suspense fallback={<Loader />}>
		<div className='collaboration' id='Collaboration'>
			<div className='collaboration__area1 main--image'>
				<h4 className='title__links'>Collaboration</h4>
				<h3 className='collaboration__area1-subtitle'>Open for</h3>
				<div className='collaboration__area1-interesting'>
					{
						'interes'.split('').map((e, index) => <div key={'collaboration__area1-interesting' + index}>{e}</div>)
					}
					<div>t
						<h3 className='collaboration__area1-subtitle collaboration__area1-bottitle'>offers, photo sessions, </h3>
					</div>
				</div>

				<ColaborationPhoto />
				<ColaborationVideo />
				<h5 className='collaboration__area1-foottitle'>For all questions of cooperation, please follow the
					<button className='collaboration__area1-foottitle_contacts' onClick={scrollToBottom}>Contacts <BottomLine /></button>
				</h5>
			</div>
			<div className='collaboration__area2'>
				<div className='collaboration__area2-interesting' >
					<div>i
						<h3 className='collaboration__area1-subtitle collaboration__area2-bottitle'>and video! </h3>
					</div>
					<div>n</div>
					<div>g</div>
				</div>
				<h5 className='collaboration__area2-videotitle'>
                        Also open for cooperation with brands of clothing, shoes, jewelry, etc.
				</h5>
				<ColaborationVideo />
			</div>
		</div>
	</Suspense>);

export default Collaboration;
