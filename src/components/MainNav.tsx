import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav
      id="main-nav"
      className="m-4 bg-white border-2 border-black flex flex-col items-center p-4"
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="chi-siamo">Chi Siamo</Link>
        </li>
        <li>
          <Link to="prodotti">Catalogo Prodotti</Link>
        </li>
        <li>
          <Link to="contatti">Contatti</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
