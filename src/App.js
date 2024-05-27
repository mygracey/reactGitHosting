import About from './About'
import Contact from './Contact'
import Services from './Services'
import Home from './Home'
// import college from "./college.mp4"
import "./App.css"

import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
function App(){

  return(
    <div>
      <Router>
      <nav>
        <h4><Link to="/" className='link'>Home</Link></h4>
        <h4><Link to="/services" className='link'>Services</Link></h4>
        <h4><Link to="/contact" className='link'>Contact</Link></h4>
        <h4><Link to="/about" className='link'>About</Link></h4>
      </nav>

      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About />} />


        <Route path='/service' element={<Services/>} />


        <Route path='/contact' element={<Contact />} />
 



      </Routes>


     </Router>
    </div>
  )

}

export default App