import {type ReactNode} from 'react';
import Marquee from 'react-fast-marquee';

export const SlickHeader = ({children}: {children: ReactNode}) => (
	<Marquee gradient={false} speed={40}>
		{children}
	</Marquee>
);

// Стили компонента в отдельном CSS-модуле
// Marquee.module.css

