import React from 'react';
import './App.css';
import GuitarCard from './components/GuitarCard';
import data from './data/data.jsx';

function App() { 
  const [guitars, setGuitars] = React.useState(data);

  const guitarList = guitars.map(guitar => {
    return <GuitarCard key={guitar.id} guitar={guitar} handleToggle={handleToggle}/>
  });

  function handleToggle(id) {
    console.log(id);
    setGuitars(prevGuitars => {
      const arr = [...prevGuitars];
      for (let guitar of arr) {
        console.log(guitar);
        if (guitar.id === id) {
          guitar.available = !guitar.available;
        }
      }
      return arr;
    });
  }

  return (
    <div className="App">
      <h1>The Guitar Card Test Site</h1>
      <main>
        <div className="guitar-list">
          {guitarList}
        </div>
      </main>
    </div>
  )
}

export default App