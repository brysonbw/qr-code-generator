import './index.css';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/** Navbar */}
      <Navbar />
      <Routes>
        {/** Home */}
        <Route path="/" element={<Home />} />
        {/** Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
