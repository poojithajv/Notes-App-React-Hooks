// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesContainer,
  Heading,
  Form,
  TitleInput,
  NoteTextArea,
  AddButton,
  EmptyNotesViewContainer,
  Image,
  EmptyNotesHeading,
  Description,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [text, setText] = useState('')
  const [noteText, setNotesText] = useState('')
  const [notesList, setNotesList] = useState([])

  const RenderNoteText = () => (
    <NotesList>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesList>
  )

  const renderEmptyNotesView = () => (
    <EmptyNotesViewContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
      <Description>Notes you add will appear here</Description>
    </EmptyNotesViewContainer>
  )

  const onChangeTitle = event => {
    setText(event.target.value)
  }
  const onChangeNoteText = event => {
    setNotesText(event.target.value)
  }
  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      text,
      noteText,
    }
    setNotesList(prevState => [...prevState, newNote])
    setText('')
    setNotesText('')
  }
  return (
    <MainContainer>
      <NotesContainer>
        <Heading>Notes</Heading>
        <Form onSubmit={onAddNote}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={text}
            onChange={onChangeTitle}
          />
          <NoteTextArea
            placeholder="Take a Note..."
            value={noteText}
            onChange={onChangeNoteText}
            rows="3"
          />
          <AddButton type="submit">Add</AddButton>
        </Form>
        {notesList.length === 0 ? renderEmptyNotesView() : RenderNoteText()}
      </NotesContainer>
    </MainContainer>
  )
}

export default Notes
