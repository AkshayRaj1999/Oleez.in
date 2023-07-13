import React from "react";
import "./Footer.css";
import footer from "../../assets/img/f1.png";
import {
  HiOutlineLocationMarker,
  HiOutlinePhoneIncoming,
  HiOutlineMail,
} from "react-icons/hi";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h4 className="footer-title">Oleez The Learners App</h4>
            </div>
            <p className="footer-box-p">Ehance Student Future Bright And Pathfull With Help Correct Mentoers And Faculties We Offer To Youre Child A  Good Career</p>
          </div>
          <div className="footer-box">
            <h4 className="footer-title">Contact Us</h4>

            <p className="footer-links">
              <HiOutlineMail size="1.5rem" />
              info@oleezapp.com
            </p>
            <p className="footer-links">
              <HiOutlinePhoneIncoming size="1.5rem" />
              +91 987654321
            </p>
            <p className="footer-links">
              <HiOutlineLocationMarker size="1.5rem" />
              Corporate Office ,Kallachi,Vadakara
            </p>
          </div>
          <div className="footer-box">
            <h4 className="footer-title">Course Offered</h4>
            <p className="footer-links">Carsh Course</p>
            <p className="footer-links">Online Tution</p>
            <p className="footer-links">Offline Tution</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
