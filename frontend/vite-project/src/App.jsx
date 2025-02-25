import './index.css';
import Navbar from './Components/Navbaar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Offer from './Pages/Offer';
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
import Services from './Pages/Services';
import Product from './Pages/Product';
import Portfolio from './Pages/Portfolio';
import Hero2 from './Components/Hero/Hero2';
import Product_details from './Pages/Product_details';
import Product_details02 from './Pages/Product_details02';
import Product_details03 from './Pages/Product_details03';
import Product_details04 from './Pages/Product_details04';
import Product_details05 from './Pages/Product_details05';
import Product_details06 from './Pages/Product_details06';
import ScrollToTop from './ScrollToTop';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Home />
        <Footer />
      </>
    )
  },
  {
    path: '/getstarted',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Hero2 />
        <About />
        <Services />
        <Offer />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    )
  },
  {
    path: '/services',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Services />
        <Footer />
      </>
    )
  },
  {
    path: '/products',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Product />
        <Footer />
      </>
    )
  },
  {
    path: '/product-details',
    element: (
      <>
        <ScrollToTop />
        <Product_details />
      </>
    )
  },
  {
    path: '/product-details02',
    element: (
      <>
        <ScrollToTop />
        <Product_details02 />
      </>
    )
  },
  {
    path: '/product-details03',
    element: (
      <>
        <ScrollToTop />
        <Product_details03 />
      </>
    )
  },
  {
    path: '/product-details04',
    element: (
      <>
        <ScrollToTop />
        <Product_details04 />
      </>
    )
  },
  {
    path: '/product-details05',
    element: (
      <>
        <ScrollToTop />
        <Product_details05 />
      </>
    )
  },
  {
    path: '/product-details06',
    element: (
      <>
        <ScrollToTop />
        <Product_details06 />
      </>
    )
  },
  {
    path: '/contactus',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Contact />
        <Footer />
      </>
    )
  },
  {
    path: '/offers',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Offer />
        <Footer />
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <About />
        <Footer />
      </>
    )
  },
  {
    path: '/portfolio',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Portfolio />
        <Footer />
      </>
    )
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
