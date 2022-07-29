import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBarRoutes from './Routes';

function App() {
  return (


    <div className='App'>
      
      <Router>
        <Navbar />
        <NavBarRoutes />
       
      </Router>


    </div>

  );

}

export default App;
