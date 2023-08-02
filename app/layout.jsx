import '@styles/globals.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieBanner from '@components/CookieBanner'
import { InterFont } from '@utils/fonts'

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <GoogleAnalytics GA_MEASUREMENT_ID="G-67JGV4E15D" />
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
