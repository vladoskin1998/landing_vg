import { Menu } from './menu';
import { Logo } from '../../../svg/logo';
import { HeaderList } from './headerList';
import { SlickHeader } from './slickHeader';
import React, { useContext, useState, useEffect, lazy, Suspense } from 'react';
import { AppContext } from '../../../context/context';
import { Burger } from '../../../svg/burger';
import { MenuBurger } from './menuBurger';
import { HeaderButton } from './headerButton';
import { HEADER_TEXT as textList } from '../../../utils/const';
import { Loader } from '../../loader/loader';
import '../../../style/main-page/header.scss';

const AboutVideo = lazy(async () => import('./../about/about-video'));
const HeaderPhoto = lazy(async () => import('./headerPhoto'));

const Header = ({ scrollToBottom }: { scrollToBottom: () => void }) => {
    const { device } = useContext(AppContext);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const html = document.querySelector('html');
        if (html) {
            if (open) {
                html.style.overflow = 'hidden';
            } else {
                html.style.overflowY = 'unset';
            }
        }
    }, [open]);

    return (
        <Suspense fallback={<Loader />}>
            <div className='header'>
                <div className='header-bg1 header-helper' />
                <div className='header-bg2 header-helper' />
                <div className='logo'>
                    <Logo />
                </div>
                <div className='animation' />
                {
                    device === 'pc'
                        ? <Menu />
                        : <MenuBurger close={() => {
                            setOpen(false);
                        }} open={open}>
                            <Menu />
                        </MenuBurger>
                }
                <h5 className='header__undertitle header__padding'>Aerial Pole Artist</h5>
                <h3 className='header__title header__padding'>Veronika</h3>
                <h3 className='header__subtitle header__padding'>Goroshkova</h3>
                {
                    device === 'pc'
                        ? <>
                            <HeaderList textList={textList} />
                            <HeaderPhoto />
                            <HeaderButton scrollToBottom={scrollToBottom} />
                        </>
                        : <>
                            <SlickHeader>
                                <HeaderList textList={textList} />
                            </SlickHeader >
                            <AboutVideo />
                            <div className='header__button-wrap'>
                                <HeaderButton scrollToBottom={scrollToBottom} />
                            </div>
                        </>
                }
                {
                    !open && <button className='header__burger' onClick={() => {
                        setOpen(true);
                    }}>
                        <Logo />
                        <Burger />
                    </button>
                }
            </div>
        </Suspense>
    );
};

export default Header;
