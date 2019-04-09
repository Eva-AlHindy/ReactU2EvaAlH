/* UserScreen is a class component which renders a CardComponent.
CardComponent receives match object from router as props (this.props.match.params.id)
and this represents a user.
if there is a user (props) so the CardComponent shows the user's name.
And if there isn't user so the CardComponent (shows <div>No user selected</div>)
or redirect to LoginScreen.
*/
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import CardComponent from '../components/CardComponent';

class UserScreen extends Component {
  
  render() {
    const user = this.props.match.params.id;
      return (
        <CardComponent>
        {/*user ? <div>{"Selected user : " + user}</div> :  <div>No user selected</div>*/ }
        {user ? <div>{"Selected user:  " + user}</div> : <Redirect from="/user" to="/"/>}
      </CardComponent>
      );
  }
}

export default UserScreen;
