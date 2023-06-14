import Nav from '@components/Nav';
import Footer from '@components/Footer';


export const metadata = {
  title: 'CSEA',
  description:
    'Auckland University of Technology Computer Science and Engineering Association',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body >
        <main >
          <Nav />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
