import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import { useEffect } from 'react';
import Transition from '../components/Transition';
import CookieConsent from 'react-cookie-consent';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/owl.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);

  return (
    <div className="container-fluid px-0 mx-0">
      <main className="main">
        <Header />
        <div className="row mx-0">
          <div className="col px-0">
            <Transition>
              <Component {...pageProps} />
            </Transition>
          </div>
        </div>
        <Testimonials />
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="Okay"
          buttonStyle={{ backgroundColor: "blue", color: "white" }}
          style={{ backgroundColor: "black", zIndex: 9999 }}
        >
          At Flood Master Restoration, we value the privacy of our cherished customers and adhere to strict privacy policies that prohibit us from selling user information to third party advertisers. Please see our Privacy Policy for more information.
        </CookieConsent>
      </main>
    </div>
  )
}

export default MyApp;