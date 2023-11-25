import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Contact from './component/Contact';
import About from './component/About';
import Footer from './component/Footer';
import User from './component/User';

function App(){
    return(
     <Router>
      
      <Header heading="Task to be done"/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={ <Contact/>} />
      <Route path='/user/:id' element={ <User/>} />
      </Routes>
      <Footer/>
     </Router>
     
    )
}

export default App;