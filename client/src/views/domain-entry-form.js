// /client/App.js
import React, { Component } from 'react';
import axios from 'axios';
import {} from '../action-creators/update-domain-data'

export class DomainEntryForm extends Component {
  state = {
    description: '',
    name: ''
  };

  putDataToDB = (name, description) => {
    axios.post('http://localhost:3001/api/addDomainName', {
      name,
      description
    });

    this.setState({
        description: '',
        name: ''
    });
  };

  render() {
    return (
      <React.Fragment>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder="enter the domain name"
            style={{ width: '200px' }}
            value={this.state.name}
          />
          <input
            type="text"
            onChange={(e) => this.setState({ description: e.target.value })}
            placeholder="enter the domain description"
            style={{ width: '200px' }}
            value={this.state.description}
          />
          <button onClick={() => this.putDataToDB(this.state.name, this.state.description)}>
            ADD
          </button>  
      </React.Fragment>
    );
  }
}