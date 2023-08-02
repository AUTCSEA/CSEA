import '@styles/globals.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieBanner from '@components/CookieBanner'
import { InterFont } from '@utils/fonts'
import { Suspense } from 'react'

export const metadata = {
    metadataBase: new URL('https://csea.co.nz'),
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <Suspense fallback={<div>Loading...</div>}>
                <GoogleAnalytics GA_MEASUREMENT_ID="G-67JGV4E15D" />
            </Suspense>
            <body className={InterFont.className}>
                <main>
                    <Nav />
                    {children}
                    <CookieBanner />
                    <Footer />
                </main>
            </body>
        </html>
    )
}

export default RootLayout
