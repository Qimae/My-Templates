import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Registration/Signup'
import Navigation from './components/Navigation/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route >
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
          </Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
