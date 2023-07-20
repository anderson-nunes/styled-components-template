import styled from 'styled-components'

export const Botao = styled.button`
  background-color: orange;
  border: none;
  padding: 10px;
  border-radius: 10px;
  transition: all .2s ease-in;
  margin-top: 1rem;

  &:hover {
  background-color: black;
  color: white;
}

`

export const GaragemContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  
`

export const Estacionamento = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 1rem;

`