import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section logo-section">
          <div className="logo-wrap">
            <div className="dot">
              <div className="purple-dot"></div>
              <div className="pink-pill"></div>
            </div>
            <h2 className="brand">DataWarehouse</h2>
          </div>
          <p>
            Warehouse Society, 234
            <br />
            Bahagia Ave Street PRBW 29281
          </p>
          <p>info@warehouse.project</p>
          <p>1-232-3434 (Main)</p>
        </div>

        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>Profile</li>
            <li>Features</li>
            <li>Careers</li>
            <li>DW News</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>Support</li>
            <li>Sign up</li>
            <li>Guide</li>
            <li>Reports</li>
            <li>Q&A</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-icons">
            <div className="icon-circle"></div>
            <div className="icon-circle"></div>
            <div className="icon-circle"></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p> Datawarehouse™, 2020. All rights reserved.</p>
        <p>Company Registration Number: 21479524.</p>
      </div>
    </footer>
  );
}
