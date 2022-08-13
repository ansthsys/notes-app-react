import React from 'react'

export class NoteSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search : '',
    }

    this.onTitleChange = this.onTitleChange.bind(this)
  }

  onTitleChange(event) {
    console.log(event.target.value)
    this.setState(() => {
      return {
          search: event.target.value,
        }
    })

    this.props.onSearch(event.target.value)
  }

  render() {
    return (
      <div className="note-search">
        <input
        type="text"
        placeholder="Search title"
        value={this.state.search}
        onChange={this.onTitleChange}/>
      </div>
    )
  }
}
