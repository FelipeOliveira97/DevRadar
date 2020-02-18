import React, { useState, useEffect } from 'react';
import api from './services/api';
// import React, { useState } from 'react';

// Componente : Um bloco usolado de HTML, CSS e JS, o qual nao interfere no restante da aplicação.
// Estado : é uma informação mantidas pelo componente (Lembrar : imutabilidade)
// Propridade : Informações que um componente PAI passa para o componente filho

// import Header from './Header';

// function App() {
//   const [counter, setCounter] = useState(0);

//   function incrementCounter() {
//     setCounter(counter + 1);
//   }
//   return (
//     <>
//       <h1>Contador: {counter}</h1>
//       <button onClick={incrementCounter}>Incrementar</button>

//     </>
//   );
// }

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
