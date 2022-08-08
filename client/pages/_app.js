import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/nav/NavBar'
import Footer from '../components/footer/Footer'


function MyApp({ Component, pageProps }) {
 
  return(
    <>  
      {/* <TopProgressBar /> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
      <ToastContainer
          hideProgressBar
          position="bottom-right"
          autoClose={2000}
        />
      </>
  );
}

export default MyApp
