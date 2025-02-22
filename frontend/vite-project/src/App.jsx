import './index.css'
import Navbar from './Components/Navbaar/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Offer from './Pages/Offer';
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
import Services from './Pages/Services';
import Product from './Pages/Product';
import Portfolio from './Pages/Portfolio';
import Hero2 from './Components/Hero/Hero2';
import Product_details from './Pages/Product_details';


const router = createBrowserRouter([
  {
    path: '/',
    element:<>
            
              <Navbar/>
              <Home/>
              <Footer/>
            </>
  },
  {
    path: '/getstarted',
    element:<>
             
              <Navbar/>
              <Hero2/>
              <About/>
              <Services/>
              <Offer/>
              <Portfolio/>
              <Contact/>
              <Footer/>
            </>
  },
  {
    path: '/services',
    element: <>
              
              <Navbar/>
              <Services/>
              <Footer/>
            </>
  },
  {
    path: '/products',
    element: <>
              
              <Navbar/>
              <Product/>
              <Footer/>
            </>,
  },
  {
    path: '/product-details',
    element: <>
              <Product_details/>
            </>,
  },
  {
    path: '/contactus',
    element:<>
              
              <Navbar/>
              <Contact/>
              <Footer/>
            </>
  },
  {
    path: '/offers',
    element:<>  
             
              <Navbar/>
              <Offer/>
              <Footer/>
            </>
  },
  {
    path: '/about',
    element:<>
            
              <Navbar/>
              <About/>
              <Footer/>
            </>
  },
  {
    path: '/portfolio',
    element:<>
              
              <Navbar/>
              <Portfolio/>
              <Footer/>
            </>
  }

]);

function App() {

  return (
    <div>
        <RouterProvider router = {router}/>
    </div>
  )
}

export default App
