import { Main } from "./components/main-page/main"
import { Route, Routes } from 'react-router-dom';
import { NoMatch } from "./components/no-match/noMatch";
import React, { Suspense, useRef } from "react";
import { Loader } from "./components/loader/loader";
import { ContextProvider } from './context/context'
import { Login } from "./components/admin/login";
const MediaList = React.lazy(() => import('./components/media-list/mediaList'));
const SlickMedia = React.lazy(() => import("./components/slick-media/slickMedia"));

function App() {

    const refApp = useRef<HTMLDivElement>(null)

    return (
        <div className="App" ref={refApp}>
            <Suspense fallback={<Loader />}>
                <ContextProvider refApp={refApp}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/photo-list/:setId">
                            <Route path="photo/:current" element={<SlickMedia />} />
                            <Route path="" element={<MediaList />} />
                        </Route>
                        <Route path="/video-list/:setId">
                            <Route path="video/:current" element={<SlickMedia />} />
                            <Route path="" element={<MediaList />} />
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
