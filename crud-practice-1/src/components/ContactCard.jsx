// import React from "react";
// import { useNavigate } from "react-router-dom";

// export const ContactCard = ({ contact, removeContactHandler }) => {
//   const { id, name, email } = contact;
//   const navigate = useNavigate();

//   return (
//     <div className="contact-card">
//       <div
//         className="detail"
//         style={{ cursor: "pointer" }}
//         onClick={() => navigate(`/contact/${id}`)}
//       >
//         <div>{name}</div>
//         <div>{email}</div>
//       </div>
//       <div style={{ textAlign: "right", marginTop: "7px" }}>
//         <i
//           className="edit alternate outline icon"
//           style={{
//             color: "blue",
//             marginRight: "20px",
//             cursor: "pointer",
//           }}
//           onClick={() => navigate(`/update/${id}`)}
//         />
//         <i
//           className="trash alternate outline icon"
//           style={{ color: "red", cursor: "pointer" }}
//           onClick={() => removeContactHandler(id)}
//         />
//       </div>
//     </div>
//   );
// };

import React from "react";
import { useNavigate } from "react-router-dom";

export const ContactCard = ({ contact, removeContactHandler }) => {
  const { id, name, email } = contact;
  const navigate = useNavigate();

  return (
    <div
      className="contact-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "25px",
      }}
    >
      <div
        className="detail"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/contact/${id}`)}
      >
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <i
          className="edit alternate outline icon"
          style={{
            color: "blue",
            marginRight: "20px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/update/${id}`)}
        />
        <i
          className="trash alternate outline icon"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => removeContactHandler(id)}
        />
      </div>
    </div>
  );
};
