// /client/App.js
import React, { Component } from 'react';
import axios from 'axios';
import * as styles from './domain-entry-form.module.scss'; 
import classnames from 'classnames';

const validatedDomainName = (name) => {
  let domain = name.replace("http://","");
  domain = domain.replace("www.","");
  const reg = /^([a-z0-9]+\.)?[a-z0-9][a-z0-9-]*\.[a-z]{2,6}/;

  return reg.exec(domain);
}

export class DomainEntryForm extends Component {
  state = {
    description: '',
    name: ''
  };

  putDataToDB = (name, description) => {
    const formattedName = validatedDomainName(name);

    axios.post('http://localhost:3001/api/addDomainName', {
      name: formattedName ? formattedName[0] : name,
      description,
      isValid: Boolean(formattedName)
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
            className={classnames(styles.domainNameInput, {
              [styles.inputError]: this.state.isDomainNameInvalid
            })}
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
          <label className={styles.domainDescriptionLabel}>Enter domain description</label>
          <textarea
            className={styles.domainDescription}
            type="text"
            onChange={(e) => this.setState({ description: e.target.value })}
            rows={10}
            value={this.state.description}
          />
          <button
            className={styles.addButton}
            disabled={!this.state.name|| !this.state.description}
            onClick={() => this.putDataToDB(this.state.name, this.state.description)}
          >
            ADD
          </button>
      </section>
    );
  }
}
