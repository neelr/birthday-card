import styled, {css} from 'styled-components'
import palette from '../theme/palette'
import theme from 'styled-theming'

const Signature = styled.h3`
    font-size: 1.5vw;
    font-family: ${palette.fonts.cursive};
    color: ${palette.colors.dark};
`

const noteStyle= theme('mode', {
    left: css`
        width: 25vw;
        marign-left: 10vw;
        border-color: ${palette.colors.primary};
    `,

    right:css`
        width: 25vw;
        margin-left: 55vw;
        border-color: ${palette.colors.contrast};
    `
}) 