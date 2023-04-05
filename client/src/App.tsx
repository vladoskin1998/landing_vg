import { Main } from "./components/main-page/main"
import { Route, Routes } from 'react-router-dom';
import { NoMatch } from "./components/no-match/noMatch";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Loader } from "./components/loader/loader";
import { ContextProvider } from './context/context'
import { Login } from "./components/admin/login";
const PhotoList = React.lazy(() => import('./components/media-list/photoList'));
const VideoList = React.lazy(() => import('./components/media-list/videoList'));
const WraperSlick = React.lazy(() => import("./components/media-list/wraperSlick"));

function App() {

    const refApp = useRef<HTMLDivElement>(null)

    return (
        <div className="App" ref={refApp}>
            <Suspense fallback={<Loader />}>
                <ContextProvider refApp={refApp}>
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
                    <Login />
                </ContextProvider>
            </Suspense>
        </div>
    )
}

export default App
