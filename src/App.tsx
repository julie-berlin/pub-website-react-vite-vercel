import { Routes, Route } from 'react-router-dom'
import LandingPage1 from '@pages/LandingPage1'
import LandingPage2 from '@pages/LandingPage2'
import Schedule from '@pages/Schedule'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage1 />} />
      <Route path="/v2" element={<LandingPage2 />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  )
}

export default App