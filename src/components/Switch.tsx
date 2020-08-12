import styled from 'styled-components'


//yeeted from: https://www.w3schools.com/howto/howto_css_switch.asp

const Wrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input{
        opacity: 0;
        width: 0;
        height: 0;
    }

    input:checked{
        background-color: #2196F3;
    }

    input:focus{
        box-shadow: 0 0 1px #2196F3;
    }
`

const Slider = styled.span`
    background-color: #2196F3;
    box-shadow: 0 0 1px #2196F3;
    border-radius: 34px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
`