import './App.css'; 
import HelloWorld from './components/HelloWorld'

function App() {

const name = 'Bea'

const NewNAME = name.toUpperCase()

function sum(a,b){
  return a+b
}

const utl = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h1>Olá REACT</h1>
      <p>Alterando JSX</p>
      <p>Olá, {NewNAME}</p>
      <p>soma:  {sum(1,6)}</p>
      <img src={utl} alt='MinhaImagem' />
      <HelloWorld/>
      
    </div>
  );
}

export default App;
