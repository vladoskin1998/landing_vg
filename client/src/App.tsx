import { Main } from "./components/main-page/main"
import { Route, Routes } from 'react-router-dom';
import { NoMatch } from "./components/no-match/noMatch";
import React, { Suspense } from "react";
import { Loader } from "./components/loader/loader";

const PhotoList = React.lazy(() => import('./components/media-list/PhotoList'));
const VideoList = React.lazy(() => import('./components/media-list/VideoList'));
const WraperSlick = React.lazy(() => import("./components/media-list/WraperSlick"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/photo-list/:setId">
                        <Route path="photo/:current" element={<WraperSlick />} />
                        <Route path="" element={<PhotoList />} />
                    </Route>
                    <Route path="/video-list/:setId">
                        <Route path="video/:current" element={<WraperSlick />} />
                        <Route path="" element={<VideoList />} />
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
