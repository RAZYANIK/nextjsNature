import '../styles/globals.css'
import Navbar from './components/Navbar'
import 'react-photo-view/dist/react-photo-view.css';
import Footer from './components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <div className=''>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
