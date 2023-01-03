import { useState } from 'react'
import './App.css';
import SeuNome from './components/stateLift/seuNome';
import Saudacao from './components/stateLift/saudacao';
// import Evento from './components/Eventos'
// import Form from './components/Form'
// import OutraLista from './components/lista/lista';
// import Condicional from './components/condicional/condicional'
// import HelloWorld from './components/HelloWorld'
// import SayMyName from './components/SayMyName'
// import Pessoa from './components/Pessoa'
// import Frase from './components/frase'
// import List from './components/List'


function App() {
const [nome, setNome] = useState('')
  // const meusItems = [
  //   'react', 'veu', 'angular'
  // ]

  // const nome = 'MARIA'
  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
      <Saudacao nome={nome}/>
      <Saudacao nome={nome}/>
     
     
      {/* <OutraLista itens={[]}/>
      <OutraLista itens={meusItems}/> */}
      {/* <Condicional /> */}
      {/* <Evento numero='1' /> */}
      {/* <Evento numero='2' /> */}
      {/* <Form /> */}
      {/* <h1>Testando o CSS</h1>
      <Frase/>
      {/* <HelloWorld/> */}
      {/* <SayMyName nome='Matheus'/>
      <SayMyName nome='Carlos'/>
      <SayMyName nome={nome} />
      <Pessoa nome='Rodrigo' idade='20' profissao='programador'/>
      <List/> */}
    </div>
  );
}

export default App;
