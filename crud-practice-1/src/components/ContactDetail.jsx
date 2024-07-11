import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ContactDetail = ({ getContactById }) => {
  const { id } = useParams();
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const { name, email } = contact;

  useEffect(() => {
    const getContactDetail = async () => {
      const fetchContact = await getContactById(id);
      console.log(fetchContact);
      setContact({
        name: fetchContact.name,
        email: fetchContact.email,
      });
      console.log("contact: ", contact);
    };
    getContactDetail();
  }, []);

  return (
    <div className="contatc-detail">
      <h2>Contact Details</h2>
      <div>Name : {name}</div>
      <p></p>
      <div>Email : {email}</div>
    </div>
  );
};
