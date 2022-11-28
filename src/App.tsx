import './index.css';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
