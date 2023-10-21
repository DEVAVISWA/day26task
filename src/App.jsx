import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Notes from './components/Notes'
import Users from './components/Users'
import NoteList from './components/NoteList'

function App({notes}) {
  const padd= {
    padding: 10    
  }
  return (
    <Router>
      <div>
        <Link to= '/' style={padd}>HOME</Link>
        <Link to= '/notes' style={padd}>NOTES</Link>
        <Link to= '/users' style={padd}>USERS</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />}>  </Route>
        <Route path='/notes' element={<Notes notes={notes} />}>  </Route>
        <Route path='/users' element={<Users />}>  </Route>
        
        <Route path='/notes/:noteid' element={<NoteList notes={notes} />} />
      </Routes>
    </Router>
  )
}

export default App