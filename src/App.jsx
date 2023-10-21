import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import All from './components/All'
import FullStackDev from './components/FullStackDev'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import Career from './components/Career'

function App() {
  return (
    <Router>
      <div>
        <ul className="nav justify-content-center  ">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'/'}>All</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/category/full-stack-development'}>FULL STACK DEVELOPMENT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/category/data-science'}>DATA SCIENCE</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/cyber-security'}>CYBER SECURITY</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/career'}>CAREER</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/category/full-stack-development' element={<FullStackDev />} />
        <Route path='/category/data-science' element={<DataScience />} />
        <Route path='/cyber-security' element={<CyberSecurity />} />
        <Route path='/career' element={<Career />} />
      </Routes>
    </Router>
  )
}

export default App