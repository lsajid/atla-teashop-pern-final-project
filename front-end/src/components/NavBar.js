import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function NavBar() {
  return (
    <nav>
        <h3>
            <Link to="/teas">View All Menu</Link>
        </h3>
        <button>
            <Link to="/teas/new">Create New Tea</Link>
        </button>
        <h3>
            <Link to="/"> <HomeIcon/>Home </Link>
        </h3>
    </nav>
  );
}

export default NavBar;