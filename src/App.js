import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { UWave } from './components/UWave'
import { VimeoAPI } from './components/VimeoAPI'
import { Layout } from './views/Layout'
import './App.css'

const videoId = '51712337'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/UWave" element={<UWave videoId={videoId} />} />
        <Route path="/vimeoAPI" element={<VimeoAPI videoId={videoId} />} />
      </Route>
    </Routes>
  </Router>
)

export default App
