import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import '../src/style/scss/index.scss';
import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Menubar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      	<Navbar/>
      	<Switch>
      	<>
      		<div className="home">
	      		  <Route exact path="/" component={Home} />
	          	<Route exact path="/rooms/" component={Room} />
	          	<Route exact path="/rooms/:slug" component={SingleRoom} />
          	</div>
        </>
      	</Switch> 
      </BrowserRouter>    
    </div>
  );
}

export default App;
