import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Wrapper = styled.div`
  perspective: 100vw;
  perspective-origin: center top;
  padding: 0;
  width: 30vw;
  height: 65vh;
  margin-top: 0 auto;
  margin-left: 50vw;
  transition: all 0.5s ease-out;
  &:hover{
    transform: scale(1.1);
    transition: all 0.5s ease-out;
  }
`

function Card(props){
  const [pageNum, setPage] = useState<number>(0);
  return(
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

const BodyCard = styled.div`
`
export default Card