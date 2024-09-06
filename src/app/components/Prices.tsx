"use client";
import React, { useEffect, useState, useRef } from "react";
import "../styles/Prices.css";
import { cards, cards2 } from "../utils/data";

interface PriceData {
  [key: string]: string;
}

const Prices: React.FC = () => {
  const cardWrapperRef1 = useRef<HTMLDivElement>(null);
  const cardWrapperRef2 = useRef<HTMLDivElement>(null);
  const [prices, setPrices] = useState<PriceData>({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch("/api/prices", {
          headers: {
            "Cache-Control":
              "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
        });
        const data: PriceData = await response.json();
        setPrices(data);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  useEffect(() => {
    const cardWrapper1 = cardWrapperRef1.current;
    const cardWrapper2 = cardWrapperRef2.current;
    if (cardWrapper1 && cardWrapper2) {
      const firstCardWidth = cardWrapper1.firstElementChild?.clientWidth || 0;
      const totalCardsWidth = firstCardWidth * cardWrapper1.childElementCount;
      const animationDuration = totalCardsWidth / 50; // Adjust this value for speed control
      cardWrapper1.style.animationDuration = `${animationDuration}s`;
      cardWrapper2.style.animationDuration = `${animationDuration}s`;
    }
  }, [prices]);

  return (
    <div className="cryptoPrices">
      <div className="cardWrapper" ref={cardWrapperRef1}>
        {cards.concat(cards).map((card, index) => (
          <a
            href={card.cmcLink}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="card1"
          >
            {/* <div className="card1" key={index}> */}
            <img src={card.img} alt={`${card.name} Logo`} />
            <p>{card.name}</p>
            <p>${prices[card.name]}</p>
            {/* </div> */}
          </a>
        ))}
      </div>
      <div className="cardWrapper reverse" ref={cardWrapperRef2}>
        {cards2.concat(cards2).map((card, index) => (
          <a
            href={card.cmcLink}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="card1"
          >
            {/* <div className="card1" key={index}> */}
            <img src={card.img} alt={`${card.name} Logo`} />
            <p>{card.name}</p>
            <p>${prices[card.name]}</p>
            {/* </div> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Prices;
