import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import css from "./App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  submitContact = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }));
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  getFilteredContacts = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    // const { contacts } = this.state;
    return (
      <div className={css.phonebook}>
        <div>
          <h1>Phonebook</h1>
          {<ContactForm submitContact={this.submitContact} />}
          <Filter getFilteredContacts={this.getFilteredContacts} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactList
            contacts={this.filterContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
