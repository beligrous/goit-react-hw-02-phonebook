import React from 'react';
import { List, Delete } from './contact-list.styled';

function ContactList({ filter, contacts, filterize, onClick }) {
  return (
    <List>
      {filter === ''
        ? contacts.map(item => {
            return (
              <li key={item.id}>
                <span>
                  {item.name}: {item.number}
                </span>
                <Delete onClick={() => onClick(item.id)} type="button">
                  Delete
                </Delete>
              </li>
            );
          })
        : filterize().map(item => {
            return (
              <li key={item.id}>
                <span>
                  {item.name}:{item.number}
                </span>

                <Delete onClick={() => onClick(item.id)} type="button">
                  Delete
                </Delete>
              </li>
            );
          })}
    </List>
  );
}

export default ContactList;
