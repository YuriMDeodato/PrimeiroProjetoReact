import Botao from './Componentes/Botão'
import './App.css';

function App() {
  return (
    <div className="App">
  <form>
    <label>User: <input type="text"/></label>
    <label>Password: <input type="password"/></label>
  </form>
  <button>Logar</button>
  <button>Esqueci a senha</button>
   <Botao descricao='componente botao'
          nome='vasco'>
   </Botao>
  </div>
  );
}

export default App;
