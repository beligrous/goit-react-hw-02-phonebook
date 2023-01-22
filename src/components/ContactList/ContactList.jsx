import React from 'react';
import { List, Delete, ListItem } from './contact-list.styled';

function ContactList({ filter, contacts, filterize, onClick }) {
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
        : filterize().map(item => {
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
