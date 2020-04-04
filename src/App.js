import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import { Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <div>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
        </div>
      </Switch>
    </div>
  );
}


export default App;
