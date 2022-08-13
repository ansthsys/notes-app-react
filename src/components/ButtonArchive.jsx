import React from 'react'

export const ButtonArchive = ({ id, onArchived, archived }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onArchived(id)}>
      { archived ? 'Unarchive' : 'Archive' }
    </button>
  )
}
