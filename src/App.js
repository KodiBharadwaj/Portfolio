import kodi from './kodi.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <fieldset className="your-fieldset">
            <legend>@kodi_bharadwaj</legend>
            <header>
                <h1 align="center">KODI BHARADWAJ</h1>
                <h1 align="center"><img src={kodi} className="image_kodi" alt="Kodi's Profile" /></h1>
                <p align="center">Aspiring | Acquiring | Admiring</p>
            </header>
            <div className="container" align="center">
                <h4 align="center">bharadwaj21946@gmail.com</h4>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <p><a href="https://www.linkedin.com/in/bharadwaj-kodi-5115a223b" target="_blank" ><h3>LinkedIn</h3></a></p>
                    </div>
                    <div className="contact-box">
                        <p><a href="https://github.com/KodiBharadwaj" target="_blank" rel="noopener noreferrer"><h3>GitHub</h3></a></p>
                    </div>
                    <div className="contact-box">
                        <p><a href="https://auth.geeksforgeeks.org/user/kodib20s77p/practice" target="_blank" rel="noopener noreferrer"><h3>Geeks for Geeks</h3></a></p>
                    </div>
                    <div className="contact-box">
                        <p><a href="https://leetcode.com/Bharadwajkodi/" target="_blank" rel="noopener noreferrer"><h3>LeetCode</h3></a></p>
                    </div>
                    <div className="contact-box">
                        <p><a href="https://www.codingninjas.com/studio/profile/93cc4988-0e24-4553-ba04-46ff6650a487" target="_blank" rel="noopener noreferrer"><h3>Code Studio</h3></a></p>
                    </div>
                    <div className="contact-box">
                        <p><a href="https://mern-chat-messenger-or2l.onrender.com/" target="_blank" rel="noopener noreferrer"><h3>Project</h3></a></p>
                    </div>
                </div>
            </div>
        </fieldset>
        <footer>
            &copy; Kodi Bharadwaj. All rights reserved.
        </footer>
    </div>
  );
}

export default App;
