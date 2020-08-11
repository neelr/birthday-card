import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import config from '../../config'

export const CountWrapper = styled.div`
    background: black;
    border-radius: 5px;
`
//used https://github.com/do-community/react-hooks-timer/blob/master/src/App.js
export default function Timer(){
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
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </CountWrapper>
    )
}