import React, { Suspense, useRef, useState,lazy,useEffect } from "react";
import { Loader } from "../loader/loader";
import { Footer } from "./footer/footer";
import { animateScroll as scroll, } from 'react-scroll'
import { ScrollButton } from "../../svg/scrollButton";
const Header = lazy(() => import("./header/header"));
const About = lazy(() => import("./about/about"));
const Photo = lazy(() => import("./media/photo"));
const Video = lazy(() => import("./media/video"));
const Festival = lazy(() => import("./festival/festival"));
const Classes = lazy(() => import("./classes/classes"));
const Collaboration = lazy(() => import("./collaboration/collaboration"));

export const Main = () => {

    const scrollRef = useRef(scroll)
    const mainRef = useRef<HTMLDivElement>(null)

    const [scrollPosition, setScrollPosition] = useState<number>(0);
  
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
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
                <button onClick={scrollToTop} className="main__scroll" style={{visibility: scrollPosition > 800 ? "visible": "hidden" }} >
                    <ScrollButton />
                </button>
            </Suspense>
        </div>
    )
}
