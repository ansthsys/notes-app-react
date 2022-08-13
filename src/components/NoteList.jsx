import React from 'react'
import { NoteItem } from './NoteItem'

export const NoteList = ({query, notes, onDelete, onArchived, type}) => {
  let notesAct = notes.filter(note => note.archived == false)
  let notesArc = notes.filter(note => note.archived == true)

  if (notesAct.length < 1 && type == false) {
    return (<p>Active Note is empty</p>)
  }

  if (notesArc.length < 1 && type == true){
    return (<p>Archived Note is empty</p>)
  }

  return (
    <div className="notes-list">
      {
        notes.filter((note) => {
          if (query) return note.title.toLowerCase().includes(query.toLowerCase())
          return note
        }).map((note) => {
          if (!note.archived && !type) {
            return (
              <NoteItem
              key={note.id}
              id={note.id}
              archived={note.archived}
              onArchived={onArchived}
              onDelete={onDelete}
              {...note}/>
            )
          }

          if (note.archived && type) {
            return (
              <NoteItem
              key={note.id}
              id={note.id}
              archived={note.archived}
              onArchived={onArchived}
              onDelete={onDelete}
              {...note}/>
            )
          }
        })
      }
    </div>
  )
}
