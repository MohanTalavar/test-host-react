import "./App.css";
import React, { useEffect, useState } from "react";
import { AddContact } from "./components/AddContact";
import { ContactDetail } from "./components/ContactDetail";
import { ContactList } from "./components/ContactList";
import { Header } from "./components/Header";
import { UpdateContact } from "./components/UpdateContact";
import { Footer } from "./components/Footer";
import { v4 as uid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import api from "./api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const retrieveAllContacts = async () => {
    try {
      const response = await api.get("/contacts");
      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const addContatcHandler = async (contact) => {
    try {
      console.log("from add form: ", contact);
      const request = { id: uid(), ...contact };

      const response = await api.post("/contacts", request);
      console.log("response: ", response);

      setContacts([...contacts, response.data]);
      console.log(response.data.name, "added successfully");
    } catch (error) {
      console.error("Error while adding the contact!!!", contact.name);
    }
  };

  const removeContactHandler = async (id) => {
    try {
      const response = await api.delete(`/contacts/${id}`);

      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });

      setContacts(newContactList);

      alert(`${response.data.name} deleted successfully`);
      console.log(response.data.name, "is removed from contacts");
    } catch (error) {
      console.error(error.message);
    }
  };

  const getContactById = async (id) => {
    try {
      const contact = await api.get(`/contacts/${id}`);
      return contact.data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateContactHandler = async (updatedContact) => {
    try {
      const response = await api.put(
        `/contacts/${updatedContact.id}`,
        updatedContact
      );

      console.log("response :", response);

      const updatedContactList = [...contacts].map((contact) => {
        return contact.id === updatedContact.id ? updatedContact : contact;
      });
      setContacts(updatedContactList);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    console.log("In Use Effect");
    const getAllContacts = async () => {
      const allContacts = await retrieveAllContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContatcHandler={addContatcHandler} />}
          />

          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                removeContactHandler={removeContactHandler}
              />
            }
          />
          <Route
            path="/update/:id"
            element={
              <UpdateContact
                getContactById={getContactById}
                updateContactHandler={updateContactHandler}
              />
            }
          />
          <Route
            path="/contact/:id"
            element={<ContactDetail getContactById={getContactById} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
