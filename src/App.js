import './App.css';
import About from './components/About'
import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [active, setActive]= useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a382a'
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'Textutils- Dark mode'
      //   setInterval(() => {

      //     document.title='Textutils is Amazing';
      //   }, 2000);
      //   setInterval(() => {

      //     document.title=' Install Textutils now';
      //   }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success');
      // document.title='Textutils - Light mode';
    }
  }
 
 
  return (
    <>
    <Router>
        <Navbar title='Textutils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
         
          <Routes>
              
            <Route  path="/"element={<Textarea heading='Enter the text to analyze' showAlert={showAlert} mode={mode} />}>
            </Route>
            

            <Route  path="/about" element={<About mode={mode}/>}>
              
            </Route>
          </Routes>
        </div>
       
     </Router>
    
    </>
  );
}

export default App;
