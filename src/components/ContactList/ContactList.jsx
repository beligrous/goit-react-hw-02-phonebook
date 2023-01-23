import React from 'react';
import PropTypes from 'prop-types';
import { List, Delete, ListItem } from './contact-list.styled';

function ContactList({ findContacts, onClick }) {
  return (
    <List>
      {findContacts().map(item => {
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
  onClick: PropTypes.func.isRequired,
  findContacts: PropTypes.func.isRequired,
};
