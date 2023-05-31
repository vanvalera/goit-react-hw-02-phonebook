import React, { Component } from 'react';

class Filter extends Component {
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
