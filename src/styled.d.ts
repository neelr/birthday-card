import 'styled-components'

interface IPalette {
    
}

declare module 'styled-components'{
    export interface DefaultTheme {
        palette: {
            common: {
                gray: string
                dark: string
            }
            primary: IPalette
            secondary: IPalette
        }
    }
}