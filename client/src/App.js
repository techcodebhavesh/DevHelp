import { useContext } from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import MyComponent from './components/chatbot/chatbot'

import Login from './components/login';
import AppP from './hello'
import Landing from './components/editor/src/components/Landing'

// import AppLogin from './components/login/src/App.tsx'
// import AppC from './components/chatbot/Chatbot'



const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    
    <div id='top' className={`${themeName} app`}>
       <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/editor" element={
        <>
        
   <AppP />
        </>} />
        <Route path="/" element={
        <> <Header />

        <main>
          <About />
          <MyComponent />
          <Projects />
          <Skills />
          <Contact />
        </main>
  
        <ScrollToTop />
        <Footer />
        </>

        } />
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

export default App
