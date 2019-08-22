import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateDomainData} from '../action-creators/update-domain-data';
import * as styles from './domain-table.module.scss';
import {DomainTableHeader} from './domain-table-header';
import {DomainTableRows} from './domain-table-rows';

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
        <section className={styles.domainTable}>
          {
            domainData.length <= 0 ?
            'PLEASE USE THE DOMAIN FORM TO ENTER A DOMAIN NAME AND DESCRIPTION' :
                <table>
                  <DomainTableHeader/>
                  <DomainTableRows tableItems={domainData}/>
                </table>
          }
      </section>
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
