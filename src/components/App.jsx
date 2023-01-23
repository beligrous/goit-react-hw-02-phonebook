import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const newContact = {
      name,
      id: nanoid(),
      number,
    };
    const nonEqualArray = this.state.contacts.reduce((acc, item) => {
      item.name.toLowerCase() !== newContact.name.toLowerCase() &&
        acc.push(item);
      return acc;
    }, []);

    if (nonEqualArray.length === this.state.contacts.length) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      alert(`${newContact.name} is already in contacts!`);
    }
  };

  onClickDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findContacts = () => {
    const { filter, contacts } = this.state;
    let filtered;
    if (filter === '') {
      filtered = contacts;
    } else {
      filtered = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return filtered;
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.onFilter} />
          <ContactList
            filter={filter}
            contacts={contacts}
            findContacts={this.findContacts}
            onClick={this.onClickDelete}
          />
        </div>
      </Container>
    );
  }
}
