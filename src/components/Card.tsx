import styled from 'styled-components'
import palette from '../theme/palette';

const Card = styled.div`
  border-radius: 5px;
  border-color: black;
  border-width: 5px;
  border-style: solid;
  background-color: white;
  background-image: linear-gradient(#000, #000);
  background-size: 2px 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 70vw;
  height: 65vh;
  margin: 0 auto;
  transition: all 0.5s ease-out;

  &:hover{
    box-shadow: 1vw 2vh ${palette.colors.gray};
    transform: scale(1.1);
    transition: all 0.5s ease-out;
  }
`

export default Card