import { Component } from 'react';
import { Input } from '../ContactForm/contact-form.styled';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
    this.props.onChange(this.state);
  };

  render() {
    return (
      <label>
        Find contacts dy name:
        <Input
          type="text"
          value={this.state.filter}
          name="filter"
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default Filter;
