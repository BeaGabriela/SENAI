import './App.css';
// import Evento from './components/Eventos'
// import Form from './components/Form'
import OutraLista from './components/lista/lista';
// import Condicional from './components/condicional/condicional'
// import HelloWorld from './components/HelloWorld'
// import SayMyName from './components/SayMyName'
// import Pessoa from './components/Pessoa'
// import Frase from './components/frase'
// import List from './components/List'

function App() {

  const meusItems = [
    'react', 'veu', 'angular'
  ]

  // const nome = 'MARIA'
  return (
    <div className="App">
      <h1>Redenrização de listas</h1>
      <OutraLista itens={[]}/>
      <OutraLista itens={meusItems}/>
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
