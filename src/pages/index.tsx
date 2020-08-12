import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import Timer from '../components/Countdown'
import { Signature, Body } from '../components/Note';
import Page from '../components/Page'
import config from '../../config'
import React from 'react'
import ConfettiGenerator from 'confetti-js'
import Switch from '../components/Switch'

function Index() {
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
        React.useEffect(() => {
        const confettiSettings = { target: 'confetti-card', respawn: true, start_from_edge: true, max: 100}
        const confetti = new ConfettiGenerator(confettiSettings)
        confetti.render();
        return () => confetti.clear();
        }, [])
        return(
            <div style={{ overflow: 'hidden' }}>
                <canvas id="confetti-card"/>
                <Layout title={`🎂 Happy birthday ${config.name}!`}>
                    <br/>
                    <Header>🎉Happy Birthday {config.name}!!!🎉</Header>
                    <br/>
                    <br/>
                    <br/>
                    <Card>
                        <Page side="left"></Page>
                        <Page side="right"></Page>
                    </Card>
                    <br/>
                </Layout>
            </div>
        )
    }
}

export default Index