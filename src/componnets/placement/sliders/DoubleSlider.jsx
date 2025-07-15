"use client";
import { useEffect, useState } from "react";
import PlacementReviewCard from "../card/PlacementReviewCard";
import styles from "./css/doubleSlider.module.css";
import { placementReview } from "../../constant/data";

const DoubleSlider = () => {
  const [cards, setCards] = useState([]);
  const cardCount = 20; // Adjust the count based on the number of cards you want visible at once

  useEffect(() => {
    // Dynamically generate cards with data
    const generatedCards = Array.from(
      { length: cardCount * Math.ceil(placementReview.length / cardCount) },
      (_, index) => (
        <PlacementReviewCard
          key={index}
          review={placementReview[index % placementReview.length]}
        />
      )
    );
    setCards(generatedCards);
  }, [cardCount]);

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

export default DoubleSlider;
