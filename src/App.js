
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<News key ="general" pages="16" country="us" category="general" />}/>
      <Route exact path='/business' element={<News key ="business" pages="16" country="us" category="business" />}/>
      <Route exact path='/entertainment' element={<News  key ="entertainment" pages="16" country="us" category="entertainment" />}/>
      <Route exact path='/health' element={<News key ="health" pages="16" country="us" category="health" />}/>
      <Route exact path='/sports' element={<News key ="sports" pages="16" country="us" category="sports" />}/>
      <Route exact path='/technology' element={<News key ="technology" pages="16" country="us" category="technology"/>}/>
      

      </Routes>
    </Router>
  );
}

export default App;
