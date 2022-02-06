import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React,{ useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1c1c1c';
      showAlert("Dark Mode has been Enabled", "Success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "Success");

    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='container my-3'>
      <Switch>
        <Route exact path="/about">
          <About showAlert={showAlert} mode={mode}/>
  </Route>
        <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode}/>
        </Route>
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
