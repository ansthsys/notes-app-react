import React from 'react'

export class NoteInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      limit: 50
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const max = 50
    const titleInputUserLength = event.target.value.length

    if (titleInputUserLength > max) {
      return;
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
        limit: max - titleInputUserLength,
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    // reset form after submiting
    this.setState(() => {
      return {
        title : '',
        body : '',
        limit : 50      }
    })

    this.props.addNote(this.state)
  }

  render() {
    return (
      <div className="note-input">
        <h2>Create new Note</h2>
        <form className='note-input' onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Remaining Character: {this.state.limit}
          </p>

          <input
          type="text"
          className="note-input__title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler} />

          <textarea
          type="text"
          className="note-input__body"
          placeholder="Input your notes here ..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler} />

          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}
