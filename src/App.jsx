import { BrowserRouter } from 'react-router-dom';
import Nav from './Navigation/Nav';
import Pages from './Pages/Pages';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
