import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
              <h2> {this.props.business.name} </h2>
              <h3> {this.props.business.address} </h3>
              <h3> {this.props.business.city} </h3>
              <h3> {this.props.business.state} </h3>
              <h3> {this.props.business.zipCode} </h3>
              <h3> {this.props.business.category} </h3>
            </div>
        );
    }
}

export default BusinessList;