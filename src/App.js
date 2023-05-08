import { useState, createContext } from 'react';
import Form from './components/form'
import ReactSwitch from "react-switch"
import './App.css';

export const themeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = ( ) => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <themeContext.Provider value={{theme, toggleTheme}} >
    <div className="App" id={theme}>
      <Form/>
      <div className='switch'>
        <label> {theme === "light" ? "Light Mode" :"Dark Mode "}</label>
        <ReactSwitch  onChange={toggleTheme} checked={theme === "dark"}/>
      </div>
    </div>
    </themeContext.Provider>
  );
}

export default App;
