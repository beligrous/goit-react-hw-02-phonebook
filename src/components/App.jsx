import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Button, Container, List } from './App.styled';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmitContact = e => {
    e.preventDefault();
    const contactsItem = {
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };
    this.state.contacts.push(contactsItem);
    this.reset();
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  reset() {
    this.setState({ name: '', number: '' });
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
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleChange}
              value={this.state.number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Button type="submit">Add contact</Button>
        </Form>
        <div>
          <h2>Contacts</h2>
          <List>
            {this.state.contacts.map(item => {
              return (
                <li key={item.id}>
                  {item.name}: {item.number}
                </li>
              );
            })}
          </List>
        </div>
      </Container>
    );
  }
}
