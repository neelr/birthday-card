import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import config from '../pages/api/config/config'

export const CountWrapper = styled.div`
    padding-top: 1vh;
    vertical-align: middle;
    text-align: center;
    font-size: 160%;
    font-weight: bold;
    background: white;
    margin:0 auto;
    width: 45vw;
    height: 10vh;
    border-width: 5px;
    border-color: black;
    border-style: solid;
    border-radius: 10px;
`
//used https://github.com/do-community/react-hooks-timer/blob/master/src/App.js
export default function Timer(props){
    const calcTimeLeft = () => {
        let year = new Date().getFullYear();
        const diff = +config.activationDate - +new Date()
        let timeLeft = {}
        if (diff > 0){
            timeLeft = {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60)
            }
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calcTimeLeft())

    useEffect (() => {
        setTimeout(() => {
            setTimeLeft(calcTimeLeft())
        }, 1000)
    })
    
    const timerComponents = []

    Object.keys(timeLeft).forEach((interval) => {
        if(!timeLeft[interval]){
            return
        }

        timerComponents.push(
            <span>{timeLeft[interval]} {interval}{" "}</span>
        )
    })

    return(
        <CountWrapper>
            {timerComponents.length ? timerComponents : <span>It's {config.name}'s birthday!</span>}
            <p>{props.children}</p>
        </CountWrapper>
    )
}