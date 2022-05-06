import './App.css';

const tasks = [];

for (let i = 0; i <= 100; i += 1) {
  tasks.push(`This is task${i} with ${100 - i} days left.`);
}

function task(value) {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
  <ul>
    {tasks.map((theTask) => task(theTask))}
  </ul>
  )
}

export default App;
