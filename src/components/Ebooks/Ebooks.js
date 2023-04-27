import React, { useState } from "react";
import "./Ebooks.css";
import data from "./ebooks-data.json";

const Ebooks = () => {
  const [contacts, setContacts] = useState(data);
  return (
    <div>
      <input type="text" placeholder="Search E-Books..." className="searchBox" />
      <table>
        <thead style={{ display: "none" }}>
          <tr>
            <th>E-books Files</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.ebookName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ebooks;
