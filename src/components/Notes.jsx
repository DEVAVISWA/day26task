import React from 'react'
import { Link } from 'react-router-dom'

function Notes({notes}) {
  return (
    <div>
        <ul>
            {
                notes.map(note=>
                        <li key={note.id}>{note.content}</li>
                    )
            }
        </ul>
    </div>
  )
}

export default Notes