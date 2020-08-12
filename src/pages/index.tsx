import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import Timer from '../components/Countdown'
import { Signature, Body } from '../components/Note';
import { LeftPage, RightPage } from '../components/Page'
import config from '../../config'
import React from 'react'
import ConfettiGenerator from 'confetti-js'

function Index() {
    if(Date.now() < config.activationDate.getTime()){
        return(
            <Layout title={`No peeking!`}>
                <br/>
                <Header>It's not {config.name}'s birthday yet!</Header>
                <br/>
                <br/>
                <br/>
                <Timer/>
            </Layout>
        )
    }
    else{
        React.useEffect(() => {
        const confettiSettings = { target: 'confetti-card', respawn: true, start_from_edge: true, max: 100}
        const confetti = new ConfettiGenerator(confettiSettings)
        confetti.render();

        return () => confetti.clear();
        }, [])
        return(
            <Layout title={`🎂 Happy birthday ${config.name}!`}>
                <canvas id="confetti-card"/>
                <br/>
                <Header>🎉Happy Birthday {config.name}!!!🎉</Header>
                <a href = '/sign'>Sign</a>
                <br/>
                <br/>
                <br/>
                <Card>
                    <LeftPage>
                    </LeftPage>
                    <RightPage>
                    </RightPage>
                </Card>
                <br/>
            </Layout>
        )
    }
}

export default Index