/* eslint-disable react/prop-types */
import "./Leaders.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Header from "@/components/Header/Header";


import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";
import person5 from "@/assets/person5.jpg";
import person6 from "@/assets/person6.jpg";
import person7 from "@/assets/person7.jpg";
import person8 from "@/assets/person8.jpg";
import person9 from "@/assets/person9.jpg";
import person10 from "@/assets/person10.jpg";
import person11 from "@/assets/person11.jpg";

const leaders = [
  {
    image: person1,
    name: "Dr.John Ndia",
    biography:
      "The Patron of the Club is a dedicated benefactor, passionately supporting the club's mission, activities, and community engagement initiatives.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
  },
  {
    image: person2,
    name: "Victory Njeri",
    biography:
      "The Chairperson of the Club is a visionary leader, guiding the club's strategic direction and fostering a vibrant, inclusive community.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
  },
  {
    image: person3,
    name: "Allan Muhari ",
    biography:
      "The Vice Chairperson of the Club is a dynamic leader, assisting in strategic planning and ensuring smooth operational execution",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
  },
  {
    image: person4,
    name: "Bridget Gitonga",
    biography:
      "The Secretary of the Club is a meticulous organizer, managing communications, maintaining records, and ensuring efficient administrative operations.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
  },
  {
    image: person5,
    name: "Ruth Mutisya",
    biography:
      "The Treasurer of the Club is a detail-oriented professional, overseeing financial management, budgeting, and ensuring fiscal responsibility and transparency.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
  },
  {
    image: person6,
    name: "Webster Ifedha ",
    biography:
      "The Cyber Security Lead is a tech-savvy expert, safeguarding the club’s digital assets and ensuring robust cyber defenses and data integrity.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
  },
  {
    image: person7,
    name: "Manase Gunga ",
    biography:
      "The UI/UX Lead is a creative designer, enhancing user experiences and ensuring the club's digital platforms are intuitive and engaging.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
  },
  {
    image: person8,
    name: "Carolyne Githenduka ",
    biography:
      "The Web Development Lead is a skilled coder, responsible for building and maintaining the club's dynamic and user-friendly website.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
  },
  {
    image: person9,
    name: "Stanley Amunze ",
    biography:
      "The Mobile Apps Development Lead is an innovative developer, designing and optimizing the club's mobile applications for seamless user experiences.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
    },
  {
    image: person10,
    name: "Paul Karanja ",
    biography:
      "The cloud engineering  Lead is an innovative developer, designing and optimizing the club's mobile applications for seamless user experiences.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
    },
  {
    image: person11,
    name: "Evyonn Mbithe",
    biography:
      "The power platform Lead is an innovative developer, designing and optimizing the club's mobile applications for seamless user experiences.",
    socials: {
      fb: "",
      t: "",
      l: "",
    },
  },
];
const LeadersCard = (props) => {
  return (
    <div className="Leaders-card">
      <div className="Leaders-name-image">
        <div className="Leaders-image">
          <img src={props.image} alt="" />
        </div>
        <div className="Leaders-name">
          <p>{props.name}</p>
        </div>
      </div>
      <div className="Leaders-text">
        <p>{props.biography}</p>
      </div>
      <div className="Leaders-socials">
        <a href={props.socials.fb}>
          <FaFacebook />
        </a>

        <a href={props.socials.l}>
          <FaLinkedin />
        </a>
        <a href={props.socials.t}>
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};
function Leaders() {
  return (
    <>
      <Header />
      <section className="leaders-section-content">
        <h1>Leadership</h1>
        <div className="leaders-cards-section">
          {leaders.map((leader, index) => {
            return (
              <LeadersCard
                key={index}
                name={leader.name}
                image={leader.image}
                biography={leader.biography}
                socials={leader.socials}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Leaders;
