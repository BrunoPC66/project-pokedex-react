import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsPage from '../Pages/Details';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/Home/Home';
import PokedexPage from '../Pages/Pokedex/Pokedex';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
