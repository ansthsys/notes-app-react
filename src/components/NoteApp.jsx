import React from 'react'
import { NoteSearch } from './NoteSearch'
import { NoteInput } from './NoteInput'
import { NoteList } from './NoteList'
import { getInitialData } from '../utils/index'

export class NoteApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData(),
      search: '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onSearchHandler = this.onSearchHandler.bind(this)
  }

  onDeleteHandler(id) {
    console.log(id)
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({ notes })
  }

  onArchiveHandler(id) {
    console.log(id)
    const notes = this.state.notes.map(
      note =>
      (note.id === id)
      ? { ...note, archived : !note.archived }
      : note
    )
    this.setState({ notes })
  }

  onAddNoteHandler({title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          }
        ]
      }
    })
  }

  onSearchHandler(search) {
    console.log(search)
    this.setState({
      search : search
    })
  }

  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Notes</h1>
          <NoteSearch onSearch={this.onSearchHandler} />
        </div>

        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />

          <h2>Active Note List</h2>
          <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchiveHandler}
          query={this.state.search}
          type={false} />

          <h2>Archive Note List</h2>
          <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchiveHandler}
          query={this.state.search}
          type={true} />
        </div>
      </div>
    )
  }
}
