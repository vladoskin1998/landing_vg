import {type ReactNode} from 'react';
import {Logo} from '../../../svg/logo';
import {CloseSlick} from '../../../svg/closeSlick';

export const MenuBurger = ({children, close, open}: {children: ReactNode; close: () => void; open: boolean}) => {
	if (!open) {
		return <></>;
	}

	return <div className='header__burger-menu_wrap' onClick={close}>
		<div className='header__burger-menu'>
			{children}
			<div className='header__burger-menu_logo'>
				<Logo />
				<button onClick={close}>
					<CloseSlick />
				</button>
			</div>
		</div>
	</div>;
};
