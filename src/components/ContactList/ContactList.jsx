import React, { Component } from 'react';
import shortid from 'shortid';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={shortid.generate()}>
            {contact.name} : {contact.number}{' '}
            <button
              type="button"
              onClick={() => this.props.onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
