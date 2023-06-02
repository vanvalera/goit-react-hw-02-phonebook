import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={shortid.generate()} className={css.contact__list}>
            {contact.name} : {contact.number}{' '}
            <button
              type="button"
              onClick={() => this.props.onDeleteContact(contact.id)}
              className={css.delete__contact}
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
