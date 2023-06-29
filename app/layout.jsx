import Nav from '@components/Nav';
import Footer from '@components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@components/CookieBanner';


export const metadata = {
  title: 'CSEA | Home',
  description:
    'Auckland University of Technology Computer Science and Engineering Association',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-67JGV4E15D' />
      <body>
        <main>
          <Nav />
          {children}
          <CookieBanner />
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
