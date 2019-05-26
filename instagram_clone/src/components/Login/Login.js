import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   username: '',
   password: '',
  };
 }

 handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
 };

 handleSubmit = e => {
  e.preventDefault();
  const user = this.state.username;
  localStorage.setItem('user', user);
  window.location.reload();
 };

 render() {
  return (
   <div className="mt-2">
    <Form>
     <FormGroup>
      <Label for="exampleUsername" hidden>
       Username
      </Label>
      <Input
       onChange={this.handleChange}
       name="username"
       id="exampleUsername"
       value={this.state.username}
       placeholder="username"
      />
     </FormGroup>{' '}
     <FormGroup>
      <Label for="examplePassword" hidden>
       Password
      </Label>
      <Input
       onChange={this.handleChange}
       name="password"
       id="examplePassword"
       placeholder="Password"
       value={this.state.password}
      />
     </FormGroup>{' '}
     <Button onClick={this.handleSubmit}>Submit</Button>
    </Form>
   </div>
  );
 }
}

export default Login;
