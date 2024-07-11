import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddContact = ({ addContatcHandler }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formData;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log("Value : ", value, "Id : ", id);
    setFormData({ ...formData, [id]: value });
    //The id is dynamic and depends on the which input field is changing
  };

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!!!");
      return;
    }
    addContatcHandler(formData);
    setFormData({
      name: "",
      email: "",
    });
    navigate("/");
  };
  return (
    <div className="ui main">
      <h2>Enter your Details</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Mohan Talavar"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="mohan@gmail.com"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="ui button blue">
          Add
        </button>
      </form>
    </div>
  );
};
