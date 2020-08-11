import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import { Signature, Body } from '../components/Note';
import { LeftPage, RightPage } from '../components/Page'
import config from '../../config'

function Index() {
    return(
        <Layout title={`🎂 Happy birthday ${config.name}!`}>
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
        </Layout>
    )
}

export default Index