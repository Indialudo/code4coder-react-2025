import { useEffect, useState } from "react";
import styles from "./slider.module.css"
import SliderCard from "../card/SliderCard";
import { InterviewReview } from "../../constant/interview/interviewReview";


const PlacedSlider = () => {
  const [cards, setCards] = useState([]);
  const cardCount = 20; // Adjust the count based on the number of cards you want visible at once

  useEffect(() => {
    // Dynamically generate cards with data
    const generatedCards = Array.from(
      { length: cardCount * Math.ceil(InterviewReview.length / cardCount) },
      (_, index) => (
        <SliderCard
          key={index}
          review={InterviewReview[index % InterviewReview.length]}
        />
      )
    );
    setCards(generatedCards);
  }, [InterviewReview, cardCount]);

  return (
    <>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {cards.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
        </div>
        <div className={styles.marquee}>
          {cards.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
        </div>
      </div>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee1}>
          {cards.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
        </div>
        <div className={styles.marquee1}>
          {cards.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlacedSlider;
