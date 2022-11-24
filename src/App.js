// import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUS from './pages/ContactUS';

// import global style
import GlobalStyle from './components/GlobalStyle';
// import components
import Nav from './components/Nav';
// import router
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='work' element={<OurWork />} />
        <Route path='contact' element={<ContactUS />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
