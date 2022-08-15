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

  if(!type) {
    return (
      <div className="notes-list">
        {
          notesAct.filter((note) => {
            if (query) return note.title.toLowerCase().includes(query.toLowerCase())
            return note
          }).map((note) => {
            return (
              <NoteItem
              key={note.id}
              id={note.id}
              archived={note.archived}
              onArchived={onArchived}
              onDelete={onDelete}
              {...note}/>
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className="notes-list">
        {
          notesArc.filter((note) => {
            if (query) return note.title.toLowerCase().includes(query.toLowerCase())
            return note
          }).map((note) => {
            return (
              <NoteItem
              key={note.id}
              id={note.id}
              archived={note.archived}
              onArchived={onArchived}
              onDelete={onDelete}
              {...note}/>
            )
          })
        }
      </div>
    )
  }
}
