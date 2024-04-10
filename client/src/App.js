import { React,useContext , useState} from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import AppEditor from './components/editor/src/App'
import TodoList from './components/todol/TodoList'
import ProtectedRoute from '../src/components/login/ProtectedRoute'; // Import ProtectedRoute
import AuthContext from '../src/components/login/AuthContext';
import { AuthProvider } from'../src/components/login/AuthContext';
import PieChart from './components/Analytics/PieChart';


// const AppEditor = () => <Landing />; // Define this function outside of the JSX

// import AppLogin from './components/login/src/App.tsx'
// import AppC from './components/chatbot/Chatbot'


const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(AuthContext); // Add this line
  return (
    <AuthProvider value={{ isLoggedIn, setIsLoggedIn }}> {/* Wrap your app with AuthContext.Provider */}
    <div id='top' className={`${themeName} app`}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/analytics" element={<PieChart />} />
          <Route path="/editor" element={isLoggedIn ? <AppEditor /> : <Navigate to="/login" replace />} />
          <Route path="/todol" element={isLoggedIn ? <TodoList /> : <Navigate to="/login" replace />} />
          {/* <Route path="/editor" element={<AppEditor />} /> */}
          <Route 
            path="/" 
            element={
              (
                <>
                  <Header />
                  <main>
                    <About />
                    <MyComponent />
                    <Projects />
                    <Skills />
                    <Contact />
                  </main>
                  <Footer />
                  <ScrollToTop />
                </>
              )  
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
};

export default App



