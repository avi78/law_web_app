import React, { useState } from "react";
import "./Cases.css";
import data from "./cases-data.json";

const Cases = () => {
  const [contacts, setContacts] = useState(data);
  return (
    <div>
      <input type="text" placeholder="Search cases..." className="searchBox" />
      <table>
        <thead style={{ display: "none" }}>
          <tr>
            <th>Cases Files</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.CaseName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cases;
