import profilePic from "../assets/profile-pic.jpeg";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <>
      <img src={profilePic} alt="" className="hero-img" />
      <div className="hero-text">
        <h1>Christoffer Smithmountain</h1>
        <p>Junior Front-end Developer</p>
      </div>
    </>
  );
}
