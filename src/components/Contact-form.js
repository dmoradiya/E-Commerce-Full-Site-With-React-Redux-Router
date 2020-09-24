import React from "react";
import { FaWindowClose } from "react-icons/fa";
import "../css/Contact-form.css";
const ContactFormComponent = () => {
  /*==================================================
            MAILTO VIA CONTACT FORM LOGIC
*==================================================
*/
  const sendMail = (e) => {
    e.preventDefault();
    let link =
      "mailto:testemail@gmail.com" +
      "?subject=" +
      encodeURIComponent(document.getElementById("subject").value) +
      "&body=" +
      encodeURIComponent(document.getElementById("message").value);
    window.location.href = link;
  };
  /*===== END OF MAILTO VIA CONTACT FORM LOGIC  ======*/

  return (
    <>
      {/* Here we wrap the Target element i.e form so as to dispaly in the Parent element which is our header to display the contact form when button is clicked */}
      <div className="contactform-overlay">
        <h2>CONTACT US</h2>

        <div id="close">
          {/* To deactivate or remove the class from Child component we use classList Remove here */}
          <button
            onClick={() => {
              document
                .getElementsByClassName("contactform-overlay")[0]
                .classList.remove("overlayShow");
            }}
          >
            <FaWindowClose />
          </button>
        </div>

        <form onSubmit={sendMail} id="contactForm">
          <label htmlFor="Email" className="screen-reader-text">
            Email Address:
          </label>
          <input
            type="text"
            placeholder="Enter your email address"
            id="email"
          />
          <label htmlFor="Subject" className="screen-reader-text">
            Subject:
          </label>
          <input type="text" placeholder="Enter the subject" id="subject" />
          <label htmlFor="Message" className="screen-reader-text">
            Message:
          </label>
          <textarea placeholder="Enter your Message" id="message" />
          <input type="submit" value="SEND" />
        </form>
      </div>
    </>
  );
};

export default ContactFormComponent;
