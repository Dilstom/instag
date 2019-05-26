import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
 class extends React.Component {
  constructor() {
   super();
   this.state = {
    loggedIn: false,
   };
  }

  componentDidMount() {
   if (!localStorage.getItem('user')) {
    this.setState({ loggedIn: false });
   } else {
    this.setState({ loggedIn: true });
   }
  }

  // set up our state so that we have some conditional logging
  render() {
   // if user is logged in... render app
   if (this.state.loggedIn) return <App />;

   // else render a login component
   return <Login />;
  }
 };

export default Authenticate;
