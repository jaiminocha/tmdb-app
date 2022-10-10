import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="inner-footer">
        <div className="footer-text">
          <span class="hover-str">Software Developer</span>, situated in Delhi, India. 
        </div>
        <div className="contact">
          <ul className="icons">
            <h3>Contact Us</h3>
            <li class="hover-str">Jai Minocha</li>
            <li class="hover-str">jaiminochaa@gmail.com</li>
            <li class="hover-str">+91xxxxxxxxxx</li>
          </ul>
        </div>
      </div>
      <p className="copyright">Copyright &copy; 2022 <span class="hover-str">The Movie App</span> | All rights reserved.</p>
    </footer>
  )
}
