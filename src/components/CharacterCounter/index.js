import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import Character from '../Character'
import {
  BgContainer,
  Container,
  DisplayCharacterCounter,
  DescriptionContainer,
  Description,
  Image,
  CharacterContainer,
  InputCharacterCounter,
  Heading,
  InputAddContainer,
  InputContainer,
  Input,
  AddButton,
  Form,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {characterCounterList: [], input: ''}

  onChangeInput = event => this.setState({input: event.target.value})

  onSubmitDetails = event => {
    event.preventDefault()
    const {input, characterCounterList} = this.state

    const newCharacter = {
      id: uuidv4(),
      characters: input,
      characterCount: input.length,
    }

    this.setState({
      characterCounterList: [...characterCounterList, newCharacter],
      input: '',
    })
  }

  render() {
    const {characterCounterList, input} = this.state
    const isCharactersExist = characterCounterList.length !== 0

    return (
      <BgContainer>
        <Container>
          <DisplayCharacterCounter>
            <DescriptionContainer>
              <Description>Count the characters like a Boss...</Description>
            </DescriptionContainer>
            {!isCharactersExist && (
              <Image
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
            {isCharactersExist && (
              <CharacterContainer>
                {characterCounterList.map(characterDetails => (
                  <Character
                    key={characterDetails.id}
                    characterDetails={characterDetails}
                  />
                ))}
              </CharacterContainer>
            )}
          </DisplayCharacterCounter>
          <InputCharacterCounter>
            <Heading>Character Counter</Heading>
            <Form onSubmit={this.onSubmitDetails}>
              <InputAddContainer>
                <InputContainer>
                  <Input
                    placeholder="Enter the Characters here"
                    type="text"
                    onChange={this.onChangeInput}
                    value={input}
                  />
                </InputContainer>
                <AddButton type="submit">Add</AddButton>
              </InputAddContainer>
            </Form>
          </InputCharacterCounter>
        </Container>
      </BgContainer>
    )
  }
}

export default CharacterCounter
