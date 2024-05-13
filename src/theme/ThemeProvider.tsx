import { ApplicationProvider } from "@ui-kitten/components"
import * as eva from '@eva-design/eva'

interface Props {
    children: React.ReactNode
}

export const ThemeProvider = ( {children}:Props  ) => {
    return (

        <ApplicationProvider {...eva} theme={eva.light}>
            {children}
        </ApplicationProvider>

    )
}