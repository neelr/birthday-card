import Layout from '../components/Layout'
import config from '../../config'
import Header from '../components/Header'
import Timer from '../components/Countdown'

function Sign(){
    return(
        <Layout title={`Sign ${config.name}'s birthday card!`}>
            <br/>
            <Header>Sign {config.name}'s birthday card!</Header>
            <br/>
            <Timer/>
        </Layout>
    )
}

export default Sign