//dependencies 
import { Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
//components 
import NavBar from "./components/NavBar"


const API = process.env.REACT_APP_API_URL;

function App() {

  return (
    <div>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
					<Route path="/teas" element={<Index />} />
					<Route path="/teas/new" element={<New />} />
					<Route path="/teas/:id" element={<Show />} />
					<Route path="/teas/:id/edit" element={<Edit />} />
					<Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
