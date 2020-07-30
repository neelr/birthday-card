import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/globalStyle'
import defaultTheme from '../theme/theme'
export default function BdayCard({Component, pageProps}){
    return(
        <ThemeProvider theme={defaultTheme}>
            <Component {...pageProps}/>
            <GlobalStyle/>
        </ThemeProvider>
    )
}