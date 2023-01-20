import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Container customClass='min-height'/>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/company' element= {<Company/>} />
        <Route exact path='/contact' element= {<Contact/>} /> 
        <Route exact path='/newProject' element= {<NewProject/>} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
