import styled, { css } from 'styled-components'

interface PageProps {
  readonly side: string
}

const Page = styled.div<PageProps>`
  border-radius: 5px;
  border-width: 0.25vw;
  border-style: solid;
  border-color: black;
  background-color:white;
  width: 49%;
  margin:0 auto;
  float: left;
  height: 100%;
  float: ${props => props.side};
  @media screen and (max-width: 800px){
    border-width: .75vw;
    width: 48.3%;
  }
`

export default Page