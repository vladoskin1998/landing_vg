import React, { Suspense, useRef, useState } from "react";
import { Loader } from "../loader/loader";
import { Footer } from "./footer/footer";
import { animateScroll as scroll, } from 'react-scroll'
import { ScrollButton } from "../../svg/scrollButton";
const Header = React.lazy(() => import("./header/header"));
const About = React.lazy(() => import("./about/about"));
const Photo = React.lazy(() => import("./media/photo"));
const Video = React.lazy(() => import("./media/video"));
const Festival = React.lazy(() => import("./festival/festival"));
const Classes = React.lazy(() => import("./classes/classes"));
const Collaboration = React.lazy(() => import("./collaboration/collaboration"));

export const Main = () => {

    const scrollRef = useRef(scroll)
    const mainRef = useRef(null)
    console.log(mainRef);

    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => scrollRef?.current?.scrollToTop();
    const scrollToBottom = () => scrollRef?.current?.scrollToBottom();

    return (
        <div className="main content" ref={mainRef}>
            <Suspense fallback={<Loader />}>
                <Header scrollToBottom={scrollToBottom} />
                <About />
                <Photo />
                <Video />
                <Festival />
                <Classes />
                <Collaboration scrollToBottom={scrollToBottom} />
                <Footer />
                <button onClick={scrollToTop} className="main__scroll" style={{visibility: scrollPosition > 800 ? "visible": "hidden" }}>
                    <ScrollButton />
                </button>
            </Suspense>
        </div>
    )
}
