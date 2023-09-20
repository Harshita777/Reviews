import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [reviews, setReviews] = useState(0);
  const { name, job, image, text } = people[reviews];

  const checkNumber = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };
  const prevPerson = () => {
    setReviews((currentReview) => {
      const newReview = currentReview - 1;

      return checkNumber(newReview);
    });
  };
  const nextPerson = () => {
    setReviews((currentReview) => {
      const newReview = currentReview + 1;

      return checkNumber(newReview);
    });
  };
  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === reviews) {
      randomNumber = reviews + 1;
    }
    setReviews(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt="" className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomReview}
        >
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
