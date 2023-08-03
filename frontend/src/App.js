import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import '../src/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createUser" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
