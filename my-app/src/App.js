import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [numberWord, setNumberWord] = useState(null);
  const [submit, setSubmit] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault()
    const convertNumber = await fetch(`http://localhost:8080/convert/number=${number}&name=${name}`)
    const convertNumberJson = await convertNumber.json();
    setNumberWord(convertNumberJson.number)
    setName(convertNumberJson.name)
    setSubmit(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <fieldset>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={(e) => {
              setName(e.target.value)
              setSubmit(false)
            }} />
          </fieldset>
          <fieldset>
            <label htmlFor="number"> Number:</label>
            <input type="number" id="number" onChange={(e) => {
              setNumber(e.target.value)
              setSubmit(false)
            }
            } />
          </fieldset>
          <input type="submit" value="Submit" onClick={(e) => handleClick(e)} />
        </form>
        {name && setNumberWord && submit &&
          <>
            <div>Name:{name}</div>
            <div>Number:{numberWord}</div>
          </>}
      </header>

    </div>
  );
}

export default App;