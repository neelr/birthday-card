import styled, {css} from 'styled-components'
import palette from '../theme/palette'


export const Signature = styled.h3`
  padding-left: 3vw;
  margin:0 auto;
  font-size: 1vw;
  font-family: 'Mr Dafoe', cursive;
  color: ${palette.colors.dark};
`

const BodyWrapper = styled.div`
  margin:0 auto;
  width: 80%;
  max-width: 80%;
`

export function Body(props){
  return(
    <BodyWrapper>
      <p>{props.children}</p>
    </BodyWrapper>
  )
}
