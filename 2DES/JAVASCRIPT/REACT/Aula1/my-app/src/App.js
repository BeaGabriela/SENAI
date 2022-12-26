import './App.css'; 
// import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/frase'
import List from './components/List'

function App() {
  const nome = 'MARIA'
  return (
    <div className="App">
      <h1>Testando o CSS</h1>
      <Frase/>
      {/* <HelloWorld/> */}
      <SayMyName nome='Matheus'/>
      <SayMyName nome='Carlos'/>
      <SayMyName nome={nome} />
      <Pessoa nome='Rodrigo' idade='20' profissao='programador'/>
      <List/>
    </div>
  );
}

export default App;
