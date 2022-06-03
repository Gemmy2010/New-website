import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message_sent" style={{ marginTop: "65px" }}>
      <div
        className="message_container"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img
          src="/message_sent.svg"
          style={{ width: "200px", height: "200px" }}
        />
        <div
          className="message_body"
          style={{ width: "50%", margin: "32px auto" }}>
          <h2 style={{ textAlign: "center" }}>
            Message was sent Successfully. Thank you for contacting us
          </h2>
          <p style={{ textAlign: "center" }}>
            We will get in touch with you shortly
          </p>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Message;
