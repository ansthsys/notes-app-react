import React from 'react'
import {NoteContent} from './NoteContent'
import {NoteAction} from './NoteAction'

export const NoteItem = ({ id, title, createdAt, body, onDelete, onArchived, archived }) => {
  return (
    <div className="note-item">
      <NoteContent title={title} body={body} createdAt={createdAt} />
      <NoteAction id={id} onDelete={onDelete} onArchived={onArchived} archived={archived} />
    </div>
  )
}
