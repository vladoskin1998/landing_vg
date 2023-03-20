import { Main } from "./components/main-page/main"
import { Route, Routes } from 'react-router-dom';
import { PhotoList } from "./components/media-list/PhotoList";
import { NoMatch } from "./components/no-match/noMatch";
import { VideoList } from "./components/media-list/VideoList";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="photo-list/:id" element={<PhotoList />} />
                <Route path="video-list/:id" element={<VideoList />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    )
}

export default App
