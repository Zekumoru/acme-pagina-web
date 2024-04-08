import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import MainNav from './components/MainNav';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import About from './components/About';
import Products from './components/Products';

function App() {
  return (
    <>
      <Header />
      <MainNav />
      <main className="m-4 p-4 bg-white border-2 border-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/prodotti" element={<Products />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <section className="flex flex-col items-center m-4">
        <button
          className="underline text-blue-700 font-semibold"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Torna all'inizio
        </button>
      </section>
    </>
  );
}

export default App;
