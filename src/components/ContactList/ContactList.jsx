import { List } from './contact-list.styled';

function ContactList({ filter, contacts, filterize }) {
  return (
    <List>
      {filter === ''
        ? contacts.map(item => {
            return (
              <li key={item.id}>
                {item.name}: {item.number}
              </li>
            );
          })
        : filterize.map(item => {
            return (
              <li key={item.id}>
                {item.name}:{item.number}
              </li>
            );
          })}
    </List>
  );
}

export default ContactList;
