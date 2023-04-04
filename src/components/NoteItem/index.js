// Write your code here
import {ListItem, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {text, noteText} = noteDetails

  return (
    <ListItem>
      <Title>{text}</Title>
      <Note>{noteText}</Note>
    </ListItem>
  )
}
export default NoteItem
