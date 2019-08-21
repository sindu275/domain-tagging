import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateDomainData} from '../action-creators/update-domain-data';
import * as styles from './domain-table.module.scss';

const sortDomainListBasedOnCreatedBy = (domainList, property) => domainList.sort((a, b) => 
      new Date(a[property]).getTime() - new Date(b.scheduled_for).getTime()).reverse();

class DomainTableBase extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.props.updateDomainData();
  }

  render() {
    const { domainData } = this.props;

    sortDomainListBasedOnCreatedBy(domainData, 'createdAt');

    return (
        <ul className={styles.domainTable}>
        {
            domainData.length <= 0 ? 
            'PLEASE USE THE DOMAIN FORM TO ENTER A DOMAIN NAME AND DESCRIPTION' : domainData.map((item, index) => 
            (
                <li key={index}>
                  <span> name: </span> {item.name} <br />
                  <span> description </span>
                  {item.description}
                </li>
            ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    domainData: state.domainData,
    ...ownProps
});

const mapDispatchToProps = {
    updateDomainData
};

export const DomainTable = connect(mapStateToProps, mapDispatchToProps)(DomainTableBase);