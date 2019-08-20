import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateDomainData} from '../action-creators/update-domain-data';

class DomainTableBase extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.props.updateDomainData();
  }

  render() {
    const { domainData } = this.props;
    console.dir(domainData)
    return (
        <ul>
        {
            domainData.length <= 0 ? 
            'NO DB ENTRIES YET' : domainData.map((item, index) => 
            (
                <li style={{ padding: '10px' }} key={index}>
                  <span style={{ color: 'gray' }}> name: </span> {item.name} <br />
                  <span style={{ color: 'gray' }}> description </span>
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