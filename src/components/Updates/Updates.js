import React from "react";
import "./Updates.css";

const Updates = () => {
  return (
    <div className="Update-container">
      <table>
        <thead>
          <tr>
            <th style={{ color: "darkblue" }}>TOP STORY</th>
            <th style={{ color: "darkblue" }}>JUDGEMENTS</th>
            <th style={{ color: "darkblue" }}>NOTIFICATIONS</th>
            <th style={{ color: "darkblue" }}>NEWS & INFORMATION</th>
          </tr>
        </thead>
      </table>
      <img
        className="Poster_style"
        src="https://bri-wp-images.s3.amazonaws.com/wp-content/uploads/Constitution-and-quill-cta.jpg"
        alt="Poster"
      />
      <h5 style={{ color: "gray" }}>Highlights</h5>
      <p>
        India, also known as Bharat, is a Union of States. It is a Sovereign
        Socialist Secular Democratic Republic with a parliamentary system of
        government. The Republic is governed in terms of the Constitution of
        India which was adopted by the Constituent Assembly on 26th November,
        1949 and came into force on 26th January, 1950.
      </p>
      <p>
        The Constitution provides for a Parliamentary form of government which
        is federal in structure with certain unitary features. The
        constitutional head of the Executive of the Union is the President. As
        per Article 79 of the Constitution of India, the council of the
        Parliament of the Union consists of the President and two Houses known
        as the Council of States (Rajya Sabha) and the House of the People (Lok
        Sabha).
      </p>
      <a href="https://www.india.gov.in/my-government/constitution-india#:~:text=The%20Republic%20is%20governed%20in,structure%20with%20certain%20unitary%20features.">
        <p style={{ textDecoration: "underline", color: "blue" }}>
          View Full Article
        </p>
      </a>
      
    </div>
  );
};

export default Updates;
