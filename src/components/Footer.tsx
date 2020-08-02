import styled from 'styled-components'
import React from 'react'
import palette from '../theme/palette'

const StyledBar = styled.div`
    border-top-color: ${palette.colors.dark};
`
const Tag = styled.h4`
    font-family: roboto;
    font-size: 1.5vw;
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