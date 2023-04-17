import {type ReactNode} from 'react';
import {Logo} from '../../../svg/logo';
import {CloseSlick} from '../../../svg/closeSlick';

export const MenuBurger = ({children, close, open}: {children: ReactNode; close: () => void; open: boolean}) => {


	return <div className={`header__burger-menu_wrap ${open ? 'header__burger-menu_wrap-show' : ''}`} onClick={close}>
		<div className={`header__burger-menu ${open ? 'header__burger-menu-show' : ''}`}>
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



