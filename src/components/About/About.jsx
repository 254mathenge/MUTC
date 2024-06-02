import "./About.css";
import studyGroup from "../../assets/study-group.jpg";

export default function About() {
  return (
    <div className="about-section-content">
      <div className="about-container">
        <h2 className="about-h2">About</h2>
        <div className="about">
          <div className="about-image">
            <img src={studyGroup} alt="study-group" />
          </div>
          <div className="about-text-container">
            <div className="about-text">
              <h3>MISSION:</h3>
              <p>bridging the gap between the institute and the industry</p>
            </div>
            <div className="about-text">
              <h3>VISION:</h3>
              <p>Unleash The Power Of Technology</p>
            </div>
            <div className="about-text">
              <h3>OBJECTIVE:</h3>
              <p>
                The club conducts technical events to help students gain
                technical aspects of technologies as well as a few non-technical
                events to foster the overall development of students. It
                conducts seminars and workshops alongside other technical events
                to prepare students for their future endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
