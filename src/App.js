
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';

// add to App.js after imports


function App() {
  return (
    /*eslint-disabled-next-line no-undef*/
  <Router basename={process.env.PUBLIC_URL}>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/single' element={<Single />} />
    </Routes>
  </Router>
  );
}

export default App;


