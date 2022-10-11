import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="inner-footer">
        <div className="footer-text">
          <span className="hover-str">Software Developer</span>, situated in Delhi, India. 
        </div>
        <div className="contact">
          <ul className="icons">
            <h3>Contact Us</h3>
            <li className="hover-str">Jai Minocha</li>
            <li className="hover-str">jaiminochaa@gmail.com</li>
            <li className="hover-str">+91xxxxxxxxxx</li>
          </ul>
        </div>
      </div>
      <p className="copyright">Copyright &copy; 2022 <span className="hover-str">The Movie App</span> | All rights reserved.</p>
    </footer>
  )
}
