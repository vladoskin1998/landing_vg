import { Main } from "./components/main-page/main"
import { Route, Routes } from 'react-router-dom';
import { PhotoList } from "./components/media-list/photoList";
import { NoMatch } from "./components/no-match/noMatch";
import { VideoList } from "./components/media-list/videoList";
import { WraperSlick } from "./components/media-list/wraperSlick";
function App() {
    return (
        <div className="App">
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
        </div>
    )
}

export default App
