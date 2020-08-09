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
            <Header>`🎉Happy Birthday {config.name}!!!🎉`</Header>
            <br/>
            <br/>
            <br/>
            <Card>
                <LeftPage>
                    <Body>
                    This is is test note yay yay yay yay yay yay yay yay yay yay
                    </Body>
                    <Signature>Not Evan Nishi</Signature>
                </LeftPage>
                <RightPage>
                </RightPage>
            </Card>
        </Layout>
    )
}

export default Index