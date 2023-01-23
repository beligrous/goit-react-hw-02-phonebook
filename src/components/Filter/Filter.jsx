import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../ContactForm/contact-form.styled';

function Filter({ filter, onChange }) {
  return (
    <label>
      Find contacts by name:
      <Input type="text" value={filter} onChange={onChange} />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
