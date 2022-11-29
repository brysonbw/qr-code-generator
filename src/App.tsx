import './index.css';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/** Navbar */}
      <Navbar />
      <Routes>
        {/** Home */}
        <Route path="/" element={<Home />} />
        {/** Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/** Footer */}
      <Footer />
    </main>
  );
}

export default App;
