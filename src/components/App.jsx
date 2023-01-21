import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, List, Input } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  FormSubmit = data => {
    this.setState(prevState =>
      prevState.contacts.push({
        name: data.name,
        id: nanoid(),
        number: data.number,
      })
    );
  };

  filterize() {
    const filtered = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    console.log(filtered);
    return filtered;
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.FormSubmit} />
        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts dy name:
            <Input
              type="text"
              value={this.state.filter}
              name="filter"
              onChange={this.handleChange}
            />
          </label>
          <List>
            {this.state.filter === ''
              ? this.state.contacts.map(item => {
                  return (
                    <li key={item.id}>
                      {item.name}: {item.number}
                    </li>
                  );
                })
              : this.filterize().map(item => {
                  return (
                    <li key={item.id}>
                      {item.name}:{item.number}
                    </li>
                  );
                })}
          </List>
        </div>
      </Container>
    );
  }
}
