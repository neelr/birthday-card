import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import Timer from '../components/Countdown'
import { FlipWrapper, Front, Back } from '../components/Page'
import config from '../../config'
import { useState, useEffect } from 'react'
import ConfettiGenerator from 'confetti-js'
import Button from '../components/Button'

function Page(){
    if(Date.now() < config.activationDate.getTime()){
        return(
            <Layout title={`No peeking!`}>
                <br/>
                <Header>It's not {config.name}'s birthday yet!</Header>
                <br/>
                <br/>
                <br/>
                <Timer>Until {config.name}'s birthday</Timer>
            </Layout>
        )
    }
    else{
        const [confettiOn, setConfetti] = useState<boolean>(true)
        useEffect(() => {
            const confettiSettings = { target: 'confetti-card', respawn: true, start_from_edge: true, max: 100}
            const confetti = new ConfettiGenerator(confettiSettings)
            
            if(!confettiOn){
                confetti.clear()
            } else {
                confetti.render()
            }
            return () => confetti.clear()
        })
        return(
            <Layout title={`🎂 Happy birthday ${config.name}!`}>
                <canvas id="confetti-card"/>
                <br/>
                <Header>🎉Happy Birthday {config.name}!!!🎉</Header>
                <br/>
                <div style={{marginLeft:"5vw", width: "5vw"}}>
                    <h4>Confetti: </h4>
                    <Button onClick={() => setConfetti(!confettiOn)}>{confettiOn ? "on":"off"}</Button>
                </div>
                <Card>
                    <FlipWrapper>
                        <Front>
                            <p>Hai</p>
                        </Front>
                        <Back>
                            <p>Hai</p>
                        </Back>
                    </FlipWrapper>
                    <FlipWrapper>
                        <Front>
                            <p>Hai1</p>
                        </Front>
                        <Back>
                            <p>Hai1</p>
                        </Back>
                    </FlipWrapper>
                    <FlipWrapper>
                        <Front>
                            <p>Hai2</p>
                        </Front>
                        <Back>
                            <p>Hai2</p>
                        </Back>
                    </FlipWrapper>
                </Card>
                <br/>
            </Layout>
        )
    }
}

export default Page