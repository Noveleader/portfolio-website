"use client";
import React, { useEffect, useState, useRef } from "react";
import "../styles/Prices.css";

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

  const cards = [
    { img: "coinsLogo/bitcoin.png", name: "BTC" },
    { img: "coinsLogo/eth.png", name: "ETH" },
    { img: "coinsLogo/ada.png", name: "ADA" },
    { img: "coinsLogo/xrp.png", name: "XRP" },
    { img: "coinsLogo/bnb.png", name: "BNB" },
    { img: "coinsLogo/sol.png", name: "SOL" },
    { img: "coinsLogo/doge.png", name: "DOGE" },
    { img: "coinsLogo/mkr.png", name: "MKR" },
    { img: "coinsLogo/tron.png", name: "TRX" },
    { img: "coinsLogo/avax.png", name: "AVAX" },
  ];

  const cards2 = [
    { img: "coinsLogo/link.png", name: "LINK" },
    { img: "coinsLogo/near.png", name: "NEAR" },
    { img: "coinsLogo/ltc.png", name: "LTC" },
    { img: "coinsLogo/matic.png", name: "MATIC" },
    { img: "coinsLogo/uni.png", name: "UNI" },
    { img: "coinsLogo/icp.png", name: "ICP" },
    { img: "coinsLogo/arb.png", name: "ARB" },
    { img: "coinsLogo/apt.png", name: "APT" },
    { img: "coinsLogo/xlm.png", name: "XLM" },
    { img: "coinsLogo/xmr.png", name: "XMR" },
  ];

  return (
    <div className="cryptoPrices">
      <div className="cardWrapper" ref={cardWrapperRef1}>
        {cards.concat(cards).map((card, index) => (
          <div className="card1" key={index}>
            <img src={card.img} alt={`${card.name} Logo`} />
            <p>{card.name}</p>
            <p>${prices[card.name]}</p>
          </div>
        ))}
      </div>
      <div className="cardWrapper reverse" ref={cardWrapperRef2}>
        {cards2.concat(cards2).map((card, index) => (
          <div className="card1" key={index}>
            <img src={card.img} alt={`${card.name} Logo`} />
            <p>{card.name}</p>
            <p>${prices[card.name]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;