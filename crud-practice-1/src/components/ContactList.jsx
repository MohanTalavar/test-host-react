import React from "react";
import { ContactCard } from "./ContactCard";
import { useNavigate } from "react-router-dom";

export const ContactList = ({ contacts, removeContactHandler }) => {
  console.log("Contacts : ", contacts);

  const navigate = useNavigate();

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        removeContactHandler={removeContactHandler}
      />
    );
  });

  const handleAddClick = () => {
    navigate("/add");
  };

  return (
    <div>
      <h2>Contact List</h2>
      <div className="add button" style={{ textAlign: "right" }}>
        <button
          className="ui button blue"
          type="button"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
      <div className="contact-list">{renderContactList}</div>
    </div>
  );
};
