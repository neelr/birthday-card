import styled from 'styled-components'
import palette from '../theme/palette';

const Card = styled.div`
  display:flex;
  perspective: 100vw;
  perspective-origin: center top;
  padding: 0;
  width: 30vw;
  height: 65vh;
  margin: 0 auto;
  transition: all 0.5s ease-out;
  &:hover{
    transform: scale(1.1);
    transition: all 0.5s ease-out;
  }
`

export default Card

/*
  transition: all 0.5s ease-out;
  &:hover{
    box-shadow: 1vw 2vh ${palette.colors.gray};
    transform: scale(1.1);
    transition: all 0.5s ease-out;
  }
*/