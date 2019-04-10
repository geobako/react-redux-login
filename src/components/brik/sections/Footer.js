import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer-container-1">
            <div className="column-1">
                <ul>
                    <li className='ul-header'>About</li>
                    <li>who we are</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="column-1">
                <ul>
                    <li className='ul-header'>Legal</li>
                    <li>Terms and contitions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="column-1">
                <ul>
                    <li className='ul-header'>Services</li>
                    <li>Sell your home</li>
                    <li>Buy a home</li>
                    <li>How it works</li>
                    <li>For agents</li>
                </ul>
            </div>
            <div className="column-1">
                <ul>
                    <li className='ul-header'>Contact</li>
                    <li>hello@brik.com</li>
                    <li>(800) 984-9466</li>
                </ul>
            </div>
        </div> 
        <div className="footer-container-2">
            <h1>Brik</h1>
            <p>© 2018 Brik Technologies</p>
            <span>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-twitter-square"></i>
            </span>
        </div>
    </footer>
  )
}
