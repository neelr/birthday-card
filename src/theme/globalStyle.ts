import { createGlobalStyle } from 'styled-components'

//used https://webdevtrick.com/css-gradient-background/ for the background css animation

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
    html{
        background: linear-gradient(45deg,rgba(137,255,255,0.25),rgba(161,252,143, 0.15), rgba(255,167,137, 0.6));
        background-size: 400% 400%;
        -webkit-animation: gradientBG 10s ease infinite;
        animation: gradientBG 10s ease infinite;
        height: 100vw;
    }
    @-webkit-keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    background-size: 400% 400%;
    -webkit-animation: gradientBG 10s ease infinite;
    animation: gradientBG 10s ease infinite;
    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`
export default GlobalStyle