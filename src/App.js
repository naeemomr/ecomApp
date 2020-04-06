import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component.jsx'
import { Route, Switch } from 'react-router-dom'
import { auth } from './firebase/firebase.util'


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }

  }

  unSubscribeFromAuth = null

  componentDidMount() {

    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })

  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <div>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/shop' component={ShopPage}></Route>
            <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
          </div>
        </Switch>
      </div>
    );

  }

}


export default App;
