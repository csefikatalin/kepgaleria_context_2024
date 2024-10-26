
import './App.css';
import NagyKep from './components/NagyKep';
import KisKepek from './components/KisKepek';
import { useContext } from 'react';
import { KepContext } from './context/KepContext';

function App() {
  const {lista,index} =useContext(KepContext)
  return (
    <div className="App">
      <header className="App-header">
       <h1>Képgaléria</h1>
      </header>
      <article>
        <section><NagyKep kep={lista[index]}/></section>

        <section className='kiskepek'><KisKepek lista={lista}/></section>
      </article>
    </div>
  );
}

export default App;
