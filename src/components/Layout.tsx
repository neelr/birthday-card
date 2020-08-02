import Footer from'./Footer'
import Head from 'next/head'

function Layout(){
    return(
        <div>
            <Head>
                <title>🎂Happy Birthday Kai!</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
                <meta name='og:title' content="Kai's birthday card"/>
            </Head>
            <div style={{position:"absolute",top:0,left:0,width:"100vw"}}>
                <div id='content'>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout