
export const HeaderList = ({textList}: {textList: string[]}) => (
	<ul className='header__list'>
		{textList.map((i, index) => (
			<li style={{listStyleType: 'disc'}} key={'header__list' + index}>
				{i}
			</li>
		))}
	</ul>
);
