import { Component } from 'react';
import { Form, Button, Container } from './App.styled';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmitContact = e => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    this.state.contacts.push(this.state.name);
    this.reset();
  };

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  reset() {
    this.setState({ name: '' });
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmitContact}>
          <label>
            Name
            <input
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <Button type="submit">Add contact</Button>
        </Form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(item => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </Container>
    );
  }
}
