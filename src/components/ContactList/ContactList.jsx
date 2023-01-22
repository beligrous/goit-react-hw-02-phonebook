import React from 'react';
import PropTypes from 'prop-types';
import { List, Delete, ListItem } from './contact-list.styled';

function ContactList({ filter, contacts, findContacts, onClick }) {
  return (
    <List>
      {filter === ''
        ? contacts.map(item => {
            return (
              <ListItem key={item.id}>
                <span>
                  {item.name}: {item.number}
                </span>
                <Delete onClick={() => onClick(item.id)} type="button">
                  Delete
                </Delete>
              </ListItem>
            );
          })
        : findContacts().map(item => {
            return (
              <ListItem key={item.id}>
                <span>
                  {item.name}:{item.number}
                </span>

                <Delete onClick={() => onClick(item.id)} type="button">
                  Delete
                </Delete>
              </ListItem>
            );
          })}
    </List>
  );
}

export default ContactList;

ContactList.propTypes = {
  filterize: PropTypes.func,
  onClick: PropTypes.func,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      numder: PropTypes.number,
    })
  ),
};
