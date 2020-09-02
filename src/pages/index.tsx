import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import Timer from '../components/Countdown'
import { Signature, Body } from '../components/Note'
import { FlipWrapper, Front, Back } from '../components/Page'
import config from '../../config'
import { useState, useEffect } from 'react'
import ConfettiGenerator from 'confetti-js'
import Button from '../components/Button'

function Index() {
    return(
        <Layout title="Birthday Card Creator">
            <Card></Card>
        </Layout>
    )
}

export default Index