import React from 'react'

export const ButtonDelete = ({ id, onDelete }) => {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      Delete
    </button>
  )
}
