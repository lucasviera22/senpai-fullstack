
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav>      
        <h2>Lucas Viera</h2>
        <ul>  
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/experience"> Experience </Link></li>
          <li> <Link to="/projects"> Projects </Link></li>
          <li> <Link to="/contact"> Contact </Link></li>
        </ul>
        <button className ="burger-menu-btn" id="burger-menu-btn">
          <ion-icon className = "bars" name = "menu-outline"></ion-icon>
        </button>
      </nav>
    </>
  );
}
