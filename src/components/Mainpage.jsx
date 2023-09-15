import 'bootstrap/dist/css/bootstrap.min.css';
import RBGLogo from '../assets/images/RBG-login-page.png';
import RBGicon from '../assets/images/gamepad-logo.png';
import Wishfor from '../assets/images/wishfor-landing.png';
import waveEmoji from '../assets/images/wave-emoji.png';
import chatBubble from '../assets/images/chat_emoji.png';
import personalImg from '../assets/images/personal-image.jpg';
import crochet from '../assets/images/crochet.jpg';
import sf from '../assets/images/sf.jpg';
import stella from '../assets/images/stella.jpg';


import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    const images = [ 
        personalImg,
        stella,
        sf,
        crochet
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )};

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    
    return (
        <div id="main-page-container">
            <nav>
                <div className='d-flex flex-row justify-content-between align-items-center mx-5'>
                    <div>
                        <h1 className='mt-3'>RB</h1>
                    </div>
                    <div>
                        <ul className="d-flex flex-row mt-3">
                            <li className='nav-list'><a href='#about' className='nav-btn'>About</a></li>
                            <li className='nav-list'><a href='#projects' className='nav-btn'>Projects</a></li>
                            <li className='nav-list'><a href='#contact' className='nav-btn'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className='mb-4'>
                <div className='intro-section text-white d-flex flex-column align-items-center'>
                    <div className='introduction-container'>
                        <h1 className="hello-world">Hello, world!<img src={waveEmoji} alt='wave emoji' className='emoji mx-2' /></h1>
                        <h1 className='name'>I'm Rheanne Bande </h1>
                        <h1 className='intro-3rd-row mb-4' style={{color: "#28104E"}}>I am a <span className='gradient-text'>Software Developer</span></h1>
                        <p className='small-bio mb-4'>Healthcare transitioned Software Developer based in Bay Area, CA</p>
                        <div className='d-flex justify-content-center align-items-center mb-4'>
                            <button className='resume-btn'>Resume</button>
                        </div>
                    </div>
                    <div className='introduction-container'>
                        <ul className='d-flex flex-row p-3 mb-5'>
                            <li><Link to={"https://www.linkedin.com/in/rheanne-bande/"} target='_blank' className='text-decoration-none p-3'><i class="devicon-linkedin-plain"></i></Link></li>
                            <li><Link to={"https://github.com/Rhemb"} target='_blank' className='text-decoration-none p-3'><i class="devicon-github-original"></i></Link></li>
                        </ul>
                    </div>
                    <div className='technologies d-flex flex-column text-center'>
                        <p className='fs-2 text-white mb-5'>Top Technologies</p>
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
            <h1 className='section-title text-white mx-4 mb-4' id='about'>About</h1>
            <section className='about-section'>
                <div className="about-left">
                    <div className='about-paragraph'>
                        <p>Hi, My name is Rheanne (re-ann)! I'm a healthcare turned software engineer who decided to try programming through various online resources where I found my passion of coding.</p>
                        <p>The day I decided to make the switch, I attended Coding Dojo, an intensive fullstack software engineering bootcamp, where they provided me the structure and resources to kickstart my career in tech. Navigating my way to learning new languages and technologies has been a challenging yet-rewarding experience!</p>
                        <p>Up to today, I have been continuing to learn new technologies alongside strengthening my skills. When I'm not in front of a computer I enjoy being outdoors, bowling, gaming, or spending time with my friends, family, and pets!</p>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <p className='tech-header'>Technologies I Have Worked With</p>
                        <div className='tech-list d-flex flex-row'>
                            <ul>
                                <li>- Javascript </li>
                                <li>- Python</li>
                                <li>- Ruby</li>
                                <li>- MERN</li>
                                <li>- Git</li>
                                <li>- Create React App</li>
                            </ul>
                            <ul>
                                <li>- Vite</li>
                                <li>- Bootstrap</li>
                                <li>- Postman</li>
                                <li>- Flask</li>
                                <li>- MySQL</li>
                                <li>- Balsamiq</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="peronsal-img"> */}
                    {/* <img src={personalImg} alt="personal image" className="personal-img" /> */}
                    <div className="image-carousel">
                        <button onClick={prevSlide} className="carousel-button prev">
                        &lt;
                        </button>
                        <img
                            src={images[currentIndex]}
                            alt={`Image ${currentIndex + 1}`}
                            className="carousel-image"
                        />
                        <button onClick={nextSlide} className="carousel-button next">
                            &gt;
                        </button>
                    </div>
                {/* </div> */}
            </section>
            <h1 className='section-title text-white mx-4' id="projects">Projects</h1>
            <section id="project1">
                <div className='project-container'>
                    <div className='project-desc-container'>
                        <h1 className='project-title' style={{fontFamily:"Borel"}}>Wishfor__</h1>
                        <p>A dark-themed website designed to curate a wishlist of items, organized into one convenient place. Built with React & Create React App</p>
                        <p>Technologies Used:</p>
                        <ul>
                            <li className='mb-3'>+ MERN</li>
                            <li className='mb-3'>+ Create React App</li>
                            <li className='mb-3'>+ Bootstrap</li>
                            <li className='mb-5'>+ Balsamiq</li>
                        </ul>
                        <Link to={"https://github.com/Rhemb/wishfor__"} target='_blank'><button className='github-repo-btn'>Github Repo</button></Link>
                    </div>
                    <div className='project-1 mt-5 d-flex align-items-center'>
                        <img className="project-feature" src={Wishfor} alt="landing page"/>
                    </div>
                </div>
            </section>
            <section id="project2">
                <div className="project-container">
                    <div className='project-desc-container'>
                        <h1 className='project-title d-flex flex-row align-items-center'><img src={RBGicon} alt="gamepad logo" className="rbg-icon me-2"/>RBG</h1>
                        <p>RBG, Reviews By Gamers, a website designed to review video games played by other gamers in the community. Built by a group of 5 with React & Vite.</p>
                        <p>Technologies Used:</p>
                        <ul>
                            <li className='mb-3'>+ Vite</li>
                            <li className='mb-3'>+ MERN</li>
                            <li className='mb-3'>+ Balsamiq</li>
                            <li className='mb-5'>+ Bootstrap</li>
                            <li><Link to={'https://github.com/austinobnillas/RBG-reviews'} target='_blank'><button className='github-repo-btn'>Github Repo</button></Link></li>
                        </ul>
                    </div>
                    <div className='project-2 d-flex align-items-center'>
                        <img src={RBGLogo} alt="RBG Login Page" className="project-feature" />
                    </div>
                </div>
            </section>
            <section className={`contact-section fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef} id='contact'>
                <h1 className='contact-header d-flex align-items-center mb-3'>Lets Chat<img src={chatBubble} alt="chat bubble" className="chat-emoji" /></h1>
                <p className='contact-text'>Thanks for taking the time to get to know me! Please feel free to reach out through my socials if you're interested in connecting</p>
                <div className='d-flex flex-row'>
                    <Link to={"https://www.linkedin.com/in/rheanne-bande/"} target='_blank' className='text-decoration-none p-3'><i class="devicon-linkedin-plain contact-icon linkedin"></i></Link>
                    <Link to={"https://github.com/Rhemb"} target='_blank' className='text-decoration-none p-3'><i class="devicon-github-original contact-icon github"></i></Link>
                </div>
            </section>
        </div>
    )
}

export default Main;