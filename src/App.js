import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import BottomNav from './components/BottomNav'
import Competition from './pages/Competition'
import Standing from './pages/Standing'
import Team from './pages/Team'

const history = createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={history}>
      <div className="app">
        <header>
          <h1>Football Corner</h1>
        </header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/standing" />} />
          {/* <Route path="/competition" element={<Competition />} /> */}
          <Route path="/standing" element={<Standing />} />
          <Route path="/standing/:teamId" element={<Team />} />
          {/* <Route path="/actor" element={<Actor />} /> */}
          {/* <Route path="/actor/:actorId" element={<ActorDetail />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <footer>
          <BottomNav />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
