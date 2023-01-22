import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../ContactForm/contact-form.styled';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
    this.props.onChange(this.state.filter);
  };

  render() {
    const { filter } = this.state;
    return (
      <label>
        Find contacts by name:
        <Input
          type="text"
          value={filter}
          name="filter"
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};
