import styled from 'styled-components'
import palette from '../theme/palette'

const ButtonWrapper = styled.a`
    border-radius: 10px;
    background: ${palette.colors.light};
    border-width: 5px;
    border-color: black;
    padding: 1vw;
    border-style: solid;
    color: black;
    font-weight: 900;
`

export default function Button(props){
    return(
        <ButtonWrapper href={props.link}>
            {props.children}
        </ButtonWrapper>
    )
}