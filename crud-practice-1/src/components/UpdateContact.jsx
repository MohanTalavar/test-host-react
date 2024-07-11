import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateContact = ({ getContactById, updateContactHandler }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const { id } = useParams();
  console.log("id through params: ", id);

  const { name, email } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContactDetail = async () => {
      try {
        const contact = await getContactById(id);
        setFormData(contact);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchContactDetail();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log("Value : ", value, "Id : ", id);
    setFormData({ ...formData, [id]: value });
    //The id is dynamic and depends on the which input field is changing
  };

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!!!");
      return;
    }
    updateContactHandler(formData);
    setFormData({
      name: "",
      email: "",
    });
    navigate("/");
  };
  return (
    <div className="ui main">
      <h2>Update your Details</h2>
      <form className="ui form" onSubmit={update}>
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
        <button type="submit" className="ui button green">
          Update
        </button>
      </form>
    </div>
  );
};
