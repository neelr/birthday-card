import styled from 'styled-components'
import palette from '../theme/palette';

const Card = styled.div`
  padding: 0;
  width: 50vw;
  height: 75vh;
  margin: 0 auto;
  transition: all 0.5s ease-out;
  &:hover{
    box-shadow: 1vw 2vh ${palette.colors.gray};
    transform: scale(1.1);
    transition: all 0.5s ease-out;
  }

  @media screen and (max-width: 950px){
    width: 90vw;
    &:hover{
      box-shadow: 1vw 2vh ${palette.colors.gray};
      transform: scale(1);
    }
  }
`

export default Card