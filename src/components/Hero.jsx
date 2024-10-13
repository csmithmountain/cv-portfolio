import profilePic from "../assets/profile-pic.jpeg";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero-text">
        <h1>Christoffer Smithmountain</h1>
        <p>Junior Front-end Developer</p>
      </div>
      <div>
        <img src={profilePic} alt="" className="hero-img" />
        <h2>Hi!</h2>
        <p>
          I am a creative problem-solver with a unique perspective, known for my
          adabtability and qick learning. <br /> Described by colleagues as both
          innovative and calm under pressure, I bring fresh ideas and a steady
          approach to every challenge.
        </p>
      </div>
      <div>
        <h2>You can find me here:</h2>
        <a href="">LinkedIn</a>
        <a href="">GitHub</a>
      </div>
      <div>
        <h2>Tools of my trade:</h2>
        {/* Maybe have these as icon instead, try later. */}
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Figma</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
      </div>
      <div className="projects">
        {/* Find a way to add in projects from github here. 
        Create a component to then fetch the data from github 
        and render it here. */}
      </div>
      <div className="contact">{/* Create a contact form component */}</div>
    </>
  );
}
