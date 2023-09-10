import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import RBGLogo from '../assets/images/RBG-login-page.png';
import Wishfor from '../assets/images/wishfor-landing.png';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div id="main-page-container">
            <nav>
                <div className='d-flex flex-row justify-content-between align-items-center mx-5'>
                    <div>
                        <h1 className='mt-3'>RB</h1>
                    </div>
                    <div>
                        <ul className="d-flex flex-row mt-3">
                            <li className='nav-list'>About</li>
                            <li className='nav-list'>Projects</li>
                            <li className='nav-list'>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className='tag'>
                <div className='intro-section text-white d-flex flex-column align-items-center'>
                    <div>
                        <h1 className="hello-world">Hello, world! My name is</h1>
                        <h1 className='name'>Rheanne Bande </h1>
                        <h1 className='intro-3rd-row mb-4' style={{color: "#28104E"}}>I am a <span className='gradient-text'>Software Developer</span></h1>
                        <p className='small-bio mb-4'>Healthcare transitioned Software Developer based in Bay Area, CA specializing in Front End Development</p>
                        <div className='d-flex justify-content-center align-items-center mb-4'>
                            <button className='resume-btn'>Resume</button>
                        </div>
                    </div>
                    <div>
                        <ul className='d-flex flex-row p-3 mb-5'>
                            <li><Link to={"https://www.linkedin.com/in/rheanne-bande/"} target='_blank' className='text-decoration-none p-3'><i class="devicon-linkedin-plain"></i></Link></li>
                            <li><Link to={"https://github.com/Rhemb"} target='_blank' className='text-decoration-none p-3'><i class="devicon-github-original"></i></Link></li>
                        </ul>
                    </div>
                    <div className='technologies d-flex flex-column text-center'>
                        <p className='fs-2 text-white mb-5'>Technologies</p>
                        <ul className='d-flex flex-row justify-content-evenly'>
                            <li><i class="tech-icon devicon-javascript-plain"></i></li>
                            <li><i class="tech-icon devicon-python-plain"></i></li>
                            <li><i class="tech-icon devicon-mysql-plain"></i></li>
                            <li><i class="tech-icon devicon-html5-plain-wordmark"></i></li>
                            <li><i class="tech-icon devicon-css3-plain-wordmark"></i></li>
                            <li><i class="tech-icon devicon-bootstrap-plain"></i></li>
                            <li><i class="tech-icon devicon-react-original"></i></li>
                            <li><i class="tech-icon devicon-mongodb-plain-wordmark"></i></li>
                            <li><i class="tech-icon devicon-express-original"></i></li>
                        </ul>
                    </div>
                </div>
            </header>
            <section className="tag">
                <h1>About</h1>
                <div className='about-paragraph'>
                    <p>Hello! My name is Rheanne and I enjoy building websites to showcase to others! I'm a healthcare turned software engineer after I decided to try programming through various online resources. I attended Coding Dojo, a fullstack software engineering bootcamp that helped guide me to kickstart my career in tech. </p>
                    <p>When I'm not in front of a computer, I enjoy being outdoors, bowling, gaming, or spending time with my friends, family, cats and reptile.</p>
                </div>
                <div>
                    <p>Technologies I have worked with:</p>
                    <ul>
                        <li>- Javascript </li>
                        <li>- MERN</li>
                        <li>- Python</li>
                        <li>- Postman</li>
                        <li>- Bootstrap</li>
                    </ul>
                </div>
            </section>
            <h1 className='text-white mx-4'>Projects</h1>
            <section id="project1">
                <div className='project-container'>
                    <div className='project-desc-container'>
                        <h1 className='project-title'>Wishfor_</h1>
                        <p>A dark-themed website designed to curate a wishlist of items, organized into one convenient place. Built with React & Create React App</p>
                        <p>Technologies Used:</p>
                        <ul>
                            <li className='mb-3'>+ MERN</li>
                            <li className='mb-3'>+ Create React App</li>
                            <li className='mb-3'>+ Bootstrap</li>
                            <li className='mb-5'>+ Balsamiq</li>
                        </ul>
                        <button className='github-repo-btn'>Github Repo</button>
                    </div>
                    <div className='project-1 mt-5 d-flex align-items-center'>
                        <img className="project-feature" src={Wishfor} alt="landing page"/>
                    </div>
                </div>
            </section>
            <section id="project2">
                <div className="project-container">
                    <div className='project-desc-container'>
                        <h1 className='project-title'>RBG</h1>
                        <p>RBG, Reviews By Gamers, a website designed to review video games played by other gamers in the community. Built by a group of 5 with React & Vite.</p>
                        <p>Technologies Used:</p>
                        <ul>
                            <li className='mb-3'>+ Vite</li>
                            <li className='mb-3'>+ MERN</li>
                            <li className='mb-3'>+ Balsamiq</li>
                            <li className='mb-3'>+ Bootstrap</li>
                            <li><button className='github-repo-btn'>Github Repo</button></li>
                        </ul>
                    </div>
                    <div className='project-2 d-flex align-items-center'>
                        <img src={RBGLogo} alt="RBG Login Page" className="project-feature" />
                    </div>
                </div>
            </section>
            <section><h1>Lets Chat</h1><p>Thanks for taking the time to get to know me! Please feel free to reach out through my socials if you're interested</p></section>
        </div>
    )
}

export default Main;