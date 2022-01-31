import React from 'react';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

import './App.css';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
     <Router>
      <Header />
      <div className='my-0 mx-10'> 
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/movie/:imdbID' component={MovieDetails}></Route>
     <Route  component={PageNotFound}></Route>
     </Switch>
     </div>
     <Footer/>

     </Router>
    </div>
  );
}

export default App;
