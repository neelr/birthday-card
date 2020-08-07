import styled from 'styled-components'
import palette from '../theme/palette'

const StyledBar = styled.div`
    bottom: 0;
    position: fixed;
    background-color: white;
    width: 100vw;
    height: 4vw;
    text-align: center;
    color: ${palette.colors.gray};
`
const Tag = styled.h4`
    font-family: roboto;
    font-size: 0.5vw;
    color: ${palette.colors.dark};
`

function Footer(){
    return(
        <StyledBar>
            <Tag>Made with ♥ and 🍵 by Evan Nishi</Tag>
            <Tag>©2020 Evan Nishi</Tag>
        </StyledBar>
    )
}

export default Footer