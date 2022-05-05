import logo from './logo.svg';
import './App.css';

const name = 'Victor';
const lasName = 'Pagotto';
function fullNameHello(name, lastname) {
  return `Hello ${name} ${lastname}! O React finalmente está funcionando.`;
}

function App() {
  return <h1>{fullNameHello(name, lasName)}</h1>;
}

export default App;
