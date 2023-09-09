import React, {Component} from 'react';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
 pages = 16;
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
      <Navbar/>
      
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
  
      <Routes>
      <Route exact path='/'  element={<News key ="general" setProgress={this.setProgress} pages={this.pages} country="us" category="general" />}/>
      <Route exact path='/business'  element={<News key ="business" setProgress={this.setProgress} pages={this.pages} country="us" category="business" />}/>
      <Route exact path='/entertainment'  element={<News  key ="entertainment" setProgress={this.setProgress} pages={this.pages} country="us" category="entertainment" />}/>
      <Route exact path='/health'  element={<News key ="health" setProgress={this.setProgress} pages={this.pages} country="us" category="health" />}/>
      <Route exact path='/sports'  element={<News key ="sports" setProgress={this.setProgress} pages={this.pages} country="us" category="sports" />}/>
      <Route exact path='/technology'  element={<News key ="technology" setProgress={this.setProgress} pages={this.pages} country="us" category="technology"/>}/>
      

      </Routes>
    </Router>
        
      </>
    )
  }
}


