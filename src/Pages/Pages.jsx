import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import ClientsPage from './ClientsPage/ClientsPage';
import styles from './Pages.module.scss';

function Pages() {
  return (
    <div className={styles.pages}>
      <Routes>
        <Route path="products" element={<MainPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default Pages;
