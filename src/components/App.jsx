import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
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

  formSubmit = ({ name, number }) => {
    this.setState(prevState => {
      prevState.contacts.push({
        name,
        id: nanoid(),
        number,
      });
    });
  };

  onClickDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  onFilter = data => {
    this.setState({ filter: data });
  };

  filterize = () => {
    const { filter, contacts } = this.state;
    const filtered = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filtered);
    return filtered;
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <div>
          <h2>Contacts</h2>
          <Filter onChange={this.onFilter} />
          <ContactList
            filter={this.state.filter}
            contacts={this.state.contacts}
            filterize={this.filterize}
            onClick={this.onClickDelete}
          />
        </div>
      </Container>
    );
  }
}
