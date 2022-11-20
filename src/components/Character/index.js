import {
  CharacterItem,
  CharacterCount,
  CharacterDetails,
} from './styledComponents'

const Character = props => {
  const {characterDetails} = props
  const {characters, characterCount} = characterDetails

  return (
    <CharacterItem>
      <CharacterDetails>
        {characters} : <CharacterCount> {characterCount}</CharacterCount>
      </CharacterDetails>
    </CharacterItem>
  )
}

export default Character
