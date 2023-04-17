import {type ReactElement} from 'react';

export const WraperButton = ({label, text}: {label: string; text: string | ReactElement}) => <>
	<h5 className='media__item-text'>{label}</h5>
	<div className='media__item-bg'>
		<button className='media__item-bg_but'>{text}</button>
	</div>
</>;
