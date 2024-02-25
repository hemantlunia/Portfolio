

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Error from './Components/Error'
import Github from './Components/Github'
import User from './Components/User'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/about' element = {<About/>}/>
       <Route path='/contact' element = {<Contact/>}/>
       <Route path='/contact/:id' element = {<Contact/>}/>
       <Route path='/github' element = {<Github/>}/>
       <Route path='/user/:userId' element = {<User/>}/>
       <Route path='*' element = {<Error/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
