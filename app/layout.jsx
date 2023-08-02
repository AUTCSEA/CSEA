import '@styles/globals.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieBanner from '@components/CookieBanner'
import { InterFont } from '@utils/fonts'

export const metadata = {
    title: 'CSEA',
    description: 'Computer Science & Engineering Association',
    openGraph: {
        siteName: 'CSEA',
        images: [
            {
                url: 'https://res.cloudinary.com/dlguyvrg5/image/upload/q_auto/fl_lossy/f_auto/v1690948956/opengraph-image_dud47c.jpg',
                width: 800,
                height: 600,
                alt: 'CSEA logo',
            },
            {
                url: 'https://res.cloudinary.com/dlguyvrg5/image/upload/q_auto/fl_lossy/f_auto/v1690948956/opengraph-image_dud47c.jpg',
                width: 1800,
                height: 1600,
                alt: 'CSEA logo',
            },
        ],
        locale: 'en_NZ',
        type: 'website',
    },
}
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
