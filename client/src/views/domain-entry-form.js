// /client/App.js
import React, { Component } from 'react';
import axios from 'axios';
import {} from '../action-creators/update-domain-data';
import * as styles from './domain-entry-form.module.scss';

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
      <section className={styles.domainEntryForm}>
          <label className={styles.domainNameLabel}>Enter domain name</label>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder="enter the domain name"
            value={this.state.name}
          />
          <label className={styles.domainDescriptionLabel}>Enter domain description</label>
          <textarea
            className={styles.domainDescription}
            type="text"
            onChange={(e) => this.setState({ description: e.target.value })}
            placeholder="enter the domain description"
            rows={10}
            value={this.state.description}
          />
          <button
            className={styles.addButton}
            disabled={!this.state.name || !this.state.description}
            onClick={() => this.putDataToDB(this.state.name, this.state.description)}
          >
            ADD
          </button>
      </section>
    );
  }
}
