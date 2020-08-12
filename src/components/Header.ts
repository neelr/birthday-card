import styled from 'styled-components'
import palette from '../theme/palette'

const Header = styled.h1`
    background-color: white;
    color: ${palette.colors.dark};
    border-radius: 15px;
    margin: auto;
    text-align: center;
    padding: 3vh;
    width: 60vw;
    border:solid 5px black;
`

export default Header;