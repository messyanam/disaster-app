// Contact.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      
      <div className="intro">
        We're here to help you stay prepared and safe in case of any disaster. Please reach out to us using the contact information below:
      </div>

      <div className="row">
        {/* General Inquiries */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"><i className="fas fa-info-circle"></i> General Inquiries</h2>
              <div className="card-text">
                <strong>Name:</strong> NatCalPrep Team <br />
                <strong>Email:</strong> <a href="mailto:info@nalcalprep.org">info@nalcalprep.org</a> <br />
                <strong>Contact No.:</strong> 0821-409721
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Assistance */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"><i className="fas fa-life-ring"></i> Emergency Assistance</h2>
              <div className="card-text">
                <strong>Name:</strong> Emergency Support Team <br />
                <strong>Email:</strong> <a href="mailto:support@nalcalprep.org">support@nalcalprep.org</a> <br />
                <strong>Contact No.:</strong> 0821-409721
              </div>
            </div>
          </div>
        </div>

        {/* Media and Press */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"><i className="fas fa-bullhorn"></i> Media and Press</h2>
              <div className="card-text">
                <strong>Name:</strong> Media Relations <br />
                <strong>Email:</strong> <a href="mailto:media@nalcalprep.org">media@nalcalprep.org</a> <br />
                <strong>Contact No.:</strong> 0821-409721
              </div>
            </div>
          </div>
        </div>

        {/* Office Location */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"><i className="fas fa-map-marker-alt"></i> Office Location</h2>
              <div className="card-text">
                <strong>Address:</strong> <br />
                NalCalPrep Organization <br />
                123 Safety Lane, <br />
                Mumbai City, PC 12345 <br />
                India
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"><i className="fas fa-share-alt"></i> Follow Us</h2>
              <div className="card-text">
                <strong>Facebook:</strong> <a href="http://facebook.com/disasterpreparedness">facebook.com/nalcalprep</a> <br />
                <strong>Twitter:</strong> <a href="http://twitter.com/disasterprepared">twitter.com/nalcalprep</a> <br />
                <strong>Instagram:</strong> <a href="http://instagram.com/disasterpreparedness">instagram.com/nalcalprep</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
