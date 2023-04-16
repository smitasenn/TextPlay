
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';



function App() {
  const [darkMode, setdarkMode] = useState('light')

  const toggleMode=()=>{
    if(darkMode==='light'){
      setdarkMode('dark');
      document.body.style.backgroundColor='#042743'
    }
    else{
      setdarkMode('light');
      document.body.style.backgroundColor='white'

    }
  }
  return (
    <>
     <Navbar title="TextPlay" mode={darkMode} toggleMode={toggleMode}/>
     <Alert alrt="Welcome, Hope You will like TextPlay"></Alert>
     <div className="container my-3">
      <Textform heading="Enter Your To Analyse" mode={darkMode}/>     
     </div>  
     
    </>
  );
}

export default App;
