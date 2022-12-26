import './App.css'; 
// import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './componets/frase'

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
    </div>
  );
}

export default App;
