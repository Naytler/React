import { useState } from 'react';
import Nav from './components/Navigation/Nav';
import Pages from './components/Pages/Pages';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Nav />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
