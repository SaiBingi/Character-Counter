import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  padding: 20px;
`

export const Container = styled.div`
  width: 90%;
  display: flex;
`

export const DisplayCharacterCounter = styled.div`
  width: 50%;
  background-color: #ffc533;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 12px;
  min-height: 75vh;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffbf1f;
  height: 200px;
  margin-bottom: 35px;
`

export const Description = styled.h1`
  color: #334155;
  font-size: 34px;
  margin: 0;
`

export const Image = styled.img`
  width: 80%;
  display: flex;
  margin: auto;
`

export const CharacterContainer = styled.ul`
  padding-left: 30px;
  list-style-type: none;
`

export const InputCharacterCounter = styled.div`
  width: 50%;
  background-color: #0f172a;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 12px;
  padding-left: 30px;
  padding-right: 30px;
  min-height: 75vh;
`

export const Heading = styled.h1`
  color: #ffbf1f;
  text-align: center;
  font-size: 34px;
  font-weight: 500;
  margin-top: 32px;
  margin-bottom: 65px;
`

export const Form = styled.form``

export const InputContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  width: 80%;
  padding: 11px 10px 11px 10px;
`

export const InputAddContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-family: 'Roboto';
  margin: 3px;
`

export const AddButton = styled.button`
  background-color: #ffc533;
  cursor: pointer;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 16px;
  border-radius: 6px;
  color: #334155;
  font-family: 'Roboto';
  font-weight: 600;
  border: none;
`
