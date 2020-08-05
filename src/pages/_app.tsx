import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/globalStyle'
import defaultTheme from '../theme/palette'
export default function MyApp({Component, pageProps}){
    return(
        <ThemeProvider theme={defaultTheme}>
            <Component {...pageProps}/>
            <GlobalStyle/>
        </ThemeProvider>
    )
}