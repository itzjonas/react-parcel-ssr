// src/components/App.js
import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
 
import NameForm from './NameForm';
import '../styles/main.css';
 
class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
 
  constructor(props) {
    super(props);
 
    const { cookies } = props;
    this.state = {
      name: cookies.get('name') || 'Ben'
    };
    console.log(this.state.name)
  }
 
  handleNameChange(name) {
    const { cookies } = this.props;
 
    cookies.set('name', name, { path: '/' });
    this.setState({ name });
  }
 
  render() {
    const { name } = this.state;
 
    return (
      <div>
        <h1 className='title'>Hi</h1>
        <NameForm name={name} onChange={this.handleNameChange.bind(this)} />
        {this.state.name && <h1>Hello {this.state.name}!</h1>}
      </div>
    );
  }
}
 
export default withCookies(App);
