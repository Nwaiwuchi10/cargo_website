
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contacts' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App