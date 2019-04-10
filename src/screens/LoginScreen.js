/*LoginScreen IS A class Component which has a state :
a value that respects the value of the input field in the form.
And two methods:
1-handleChange: To control and change the value of the input field in the form by using setState.
2-Login: To set the value of the input field in localStorage, and navigates to the dashboard using History.
*/

import React, { Component } from 'react';
import {Button,Form} from 'react-bootstrap';
import CardComponent from '../components/CardComponent';


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:""
       };
  this.handleChange = this.handleChange.bind(this);
  this.Login = this.Login.bind(this);
  }


/*A method which controls and changes the value of the input field in the form by using setState */
  handleChange(event) {
  this.setState({value: event.target.value});
  }

/*A method which sets the value of the input field in localStorage, and navigates to the dashboard using History.*/
  Login(event) {
    localStorage.setItem('user', this.state.value);
    this.props.history.push('/dashboard');
    event.preventDefault();
  }

  render() {
      return (
        <CardComponent info={"You need to click on the button to login:)"}>
          <Form onSubmit={this.Login}>
            <Form.Control className="inputForm" size="lg" type="text" placeholder="User" value={this.state.value}  onChange={this.handleChange} />
            <br />
            {/*We call Login method when we click the submit button in the form .*/}
            <Button className="loginBtn" variant="success" type="submit">Login</Button>
          </Form>
          <br />
      </CardComponent>
      );
  }
}


export default LoginScreen;
