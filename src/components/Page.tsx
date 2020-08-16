import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transform-origin: 100% 50%;
`

export function FlipWrapper(props){
  return(
    <Wrapper className="flip-wrapper">
      {props.children}
    </Wrapper>
  )
}

export const Front = styled.div`
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 5px;
  border-width: 0.3vw;
  border-style: solid;
  border-color: black;
  background-color:white;
  width: 100%;
  margin:0 auto;
  float: left;
  height: 100%;
  @media screen and (max-width: 800px){
    border-width: .75vw;
    width: 48.3%;
  }
`

export const Back = styled(Front)`
  transform: rotateY(180deg);
`