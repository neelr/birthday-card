import styled from 'styled-components'
import palette from '../theme/palette';

const Card = styled.div`
  perspective: 100vw;
  perspective-origin: center top;
  padding: 0;
  width: 30vw;
  height: 60vh;
  margin: 0 auto;
  &:hover .flip-wrapper{
    transform: rotateY(180deg);
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