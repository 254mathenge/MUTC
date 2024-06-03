/* eslint-disable react/prop-types */
import "./Testimonials.css";
import person1 from "../../assets/person1.jpg";

const testimonials = [
  {
    name: "Paul Ngujiri",
    image: person1,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo error nesciunt. Sequi voluptas quos, voluptatem accusantium eum praesentium voluptates.",
  },
  {
    name: "Paul Ngujiri",
    image: person1,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo error nesciunt. Sequi voluptas quos, voluptatem accusantium eum praesentium voluptates.",
  },
  {
    name: "Paul Ngujiri",
    image: person1,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo error nesciunt. Sequi voluptas quos, voluptatem accusantium eum praesentium voluptates.",
  },
];
const TestimonialCard = (props) => {
  return (
    <div className="testimonials-card">
      <div className="testimonials-name-image">
        <div className="testimonials-image">
          <img src={props.image} alt="" />
        </div>
        <div className="testimonials-name">
          <p>{props.name}</p>
        </div>
      </div>
      <div className="testimonial-text">
        <p>{props.testimonial}</p>
      </div>
    </div>
  );
};
function Testimonials() {
  return (
    <section className="testimonials-section-content">
      <h1>Testimonials</h1>
      <div className="testimonials-cards-section">
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              testimonial={testimonial.testimonial}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Testimonials;
