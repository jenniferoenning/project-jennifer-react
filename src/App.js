import React from 'react';
import {C_Button} from './components/Components'

function App() {
  function showAlert(){
    alert('TESTE');
  }
  return (
    <div className="App">
      <header style={{backgroundColor: 'pink', padding: 20}}>
        <span>Jennifer Stang Oenning</span>
        <C_Button onClick={() => {showAlert()}} label="botao 1" />
      </header>
    </div>
  );
}

export default App;
