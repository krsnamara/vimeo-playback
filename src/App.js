import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './views/Home'
import { VideoPlayer } from './components/VideoPlayer'

const videoId = '51712337'

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/video">Video</Link>
    </nav>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/video" element={<VideoPlayer videoId={videoId} />} />
    </Routes>
  </Router>
)

export default App
