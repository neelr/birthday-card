import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import { Signature, Body } from '../components/Note'
import { leftPage, rightPage } from '../components/Page'
import config from '../../config'

function Index() {
    return(
        <Layout title={`🎂 Happy birthday ${config.name}!`}>
            <br/>
            <Header>`🎉Happy Birthday {config.name}!!!🎉`</Header>
            <br/>
            <br/>
            <br/>
            <Card>
                    
            </Card>
        </Layout>
    )
}

export default Index