import  React from 'react'
import {ButtonDelete} from './ButtonDelete'
import {ButtonArchive} from './ButtonArchive'

export const NoteAction = ({id, onDelete, onArchived, archived}) => {
  return (
    <div className="note-item__action">
      <ButtonDelete id={id} onDelete={onDelete} />
      <ButtonArchive id={id} onArchived={onArchived} archived={archived} />
    </div>
  )
}
