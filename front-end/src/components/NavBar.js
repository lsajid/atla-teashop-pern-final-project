import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function NavBar() {
  return (
    <nav className="nav-bar">
        <div className="logo-container">
          <img src="https://ih1.redbubble.net/image.1421433929.8938/poster,840x830,f8f8f8-pad,1000x1000,f8f8f8.jpg"/>        
        </div>
        <div className="options">
          <h3>
              <Link to="/teas">View All Menu</Link>
          </h3>
          <h3>
              <Link to="/teas/new">Create New</Link>
          </h3>
          <h3>
              <Link to="/"> <HomeIcon/>Home </Link>
          </h3>
        </div>
    </nav>
  );
}

export default NavBar;