/* eslint-disable react/prop-types */
import "./Track.css";
import Header from "@/components/Header/Header";

import CybreSecurity from "@/assets/cybre-security.jpg";
import MobileDev from "@/assets/mobile-dev.jpg";
import Uiux from "@/assets/ui-ux.jpg";
import Cloud from "@/assets/cloud-image.jpg";
import WebDev from "@/assets/web-dev.jpg";
import Power from "@/assets/ui-ux2.jpg";

const track = [
  {
    image: CybreSecurity,
    name: "Cyber Security",
    context:
      "Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.",
  },
  {
    image: Uiux,
    name: "UI/UX design ",
    context:
      "Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. By the end of the track, students will be proficient in using industry-standard design tools and techniques, enabling them to create effective, user-centric designs for websites and mobile applications.",
  },
  {
    image: WebDev,
    name: "Web development",
    context:
      " Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites.",
  },
  {
    image: MobileDev,
    name: "Mobile development",
    context:
      "Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, students will develop the skills to create user-friendly and efficient mobile applications. By the end of the track, students will be adept at building, testing, and deploying mobile apps, ready to deliver engaging and high-performance solutions for smartphones and tablets.",
  },
  {
    image: Cloud,
    name: "Cloud engineering",
    context:
      " Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Through practical projects and hands-on labs, students will gain experience in cloud architecture, virtualization, containerization, and DevOps practices. By the end of the track, students will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions, ensuring high availability and performance for applications and services.",
  },
  {
    image: Power,
    name: "Power Platform",
    context:
      "Students who select the Power Platform track will explore the capabilities of Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Through hands-on projects and interactive workshops, students will gain practical experience in leveraging these tools to enhance business processes and drive data-driven decision-making. By the end of the track, students will be proficient in developing integrated solutions using the Power Platform, enabling them to transform organizational operations and improve efficiency.",
  },
];
const TrackCard = (props) => {
  return (
    <div className="track-card">
      <div className="track-image">
        <img src={props.image} alt="" />
      </div>

      <div className="track-details">
        <div className="track-name">
          <p>{props.name}</p>
        </div>
        <div className="tracks-text">
          <p>{props.context}</p>
        </div>
      </div>
    </div>
  );
};

function Track() {
  return (
    <>
      <Header />
      <section className="track-section-content">
        <h1>Tracks</h1>
        <div className="track-cards-section">
          {track.map((track, index) => {
            return (
              <TrackCard
                key={index}
                name={track.name}
                image={track.image}
                context={track.context}
              />
            );
          })}
        </div>
        <h2 className="h2">Registration Form</h2>
        <div className="registrationForm">
          <form>
            <div className="form-text">
              <label htmlFor="FirstName" id="fname"></label>
              <input
                type="text"
                placeholder="FirstName"
                name="fname"
                required
              />
            </div>
            <div className="form-text">
              <label htmlFor="LastName" id="lname"></label>
              <input type="text" placeholder="LastName" name="lname" required />
            </div>
            <div className="form-text">
              <label htmlFor="Email" id="email"></label>
              <input
                type="Email"
                placeholder="EmailAddress"
                name="email"
                required
              />
            </div>
            <div className="form-text">
              <label htmlFor="Course" id="course"></label>
              <input type="text" placeholder="Course" name="course" required />
            </div>
            <div className="form-text">
              <label htmlFor="Year" id="year"></label>
              <input
                type="date"
                placeholder="Year of study"
                name="year"
                required
              />
            </div>
            <div className="form-text">
              <label htmlFor="tracks">Choose a track:</label>
              <select name="track" id="track">
                <option value="Cyber Security">Cyber Security</option>
                <option value="UI/UX design ">UI/UX design </option>
                <option value="Web development">Web development</option>
                <option value="Mobile apps development">
                  Mobile apps development
                </option>
                <option value="Cloud engineering ">Cloud engineering </option>
                <option value="Power Platform">Power Platform </option>
              </select>
            </div>
            <div className="form-text">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Track;
