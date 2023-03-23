import React, { Suspense } from "react";
import { Loader } from "../loader/loader";
import { Footer } from "./footer/footer";
const Header = React.lazy(() => import("./header/header"));
const About = React.lazy(() => import("./about/about"));
const Photo = React.lazy(() => import("./media/photo"));
const Video = React.lazy(() => import("./media/video"));
const Festival = React.lazy(() => import("./festival/festival"));
const Classes = React.lazy(() => import("./classes/classes"));
const Collaboration = React.lazy(() => import("./collaboration/collaboration"));


// const MyVideo = React.lazy(() => import('./MyVideo'));

export const Main = () => {
    return (
        <div className="main content">
            <Suspense fallback={<Loader />}>
                <Header />
                <About />
                <Photo />
                <Video />
                <Festival />
                <Classes />
                <Collaboration />
                <Footer />
            </Suspense>
        </div>
    )
}
