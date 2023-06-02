import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string,
    handleChange: PropTypes.func,
  };
  render() {
    const { filter, handleChange } = this.props;
    return (
      <>
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Search contacts"
        />
      </>
    );
  }
}

export default Filter;
