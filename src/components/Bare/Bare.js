import React, { useState } from "react";
import "./Bare.css";
import data from "./bare-data.json";

const Bare = () => {
  const [contacts, setContacts] = useState(data);
  return (
    <div>
      <input type="text" placeholder="Search Bare Acts..." className="searchBox" />
      <table>
        <thead style={{ display: "none" }}>
          <tr>
            <th>Bare Acts Files</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.bareName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bare;
