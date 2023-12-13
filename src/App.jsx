import { BrowserRouter } from 'react-router-dom';
import Nav from './Navigation/Nav';
import Pages from './Pages/Pages';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
