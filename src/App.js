// import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUS from './pages/ContactUS';
import MovieDetail from './pages/MovieDetail';
// import global style
import GlobalStyle from './components/GlobalStyle';
// import components
import Nav from './components/Nav';
// import router
import { Route, Routes, useLocation } from 'react-router-dom';

// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
const location = useLocation();

  return (
    <div>
      <GlobalStyle /> 
      <Nav />
      <AnimatePresence mode='wait'> 
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AboutUs />} />
          <Route path='work' element={<OurWork />} />
          <Route path='/work/:id'element={<MovieDetail />}  />
          <Route path='contact' element={<ContactUS />}  />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
