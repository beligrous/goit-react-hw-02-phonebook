import { Component } from 'react';
import { Form, Button, Container } from './App.styled';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  getSubmitContact(e) {
    e.preventDefault();
    console.log(e.elements.value);
  }

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  addContact() {}

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form>
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
          <Button type="submit" onClick={() => this.getSubmitContact}>
            Add contact
          </Button>
        </Form>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li></li>
          </ul>
        </div>
      </Container>
    );
  }
}
