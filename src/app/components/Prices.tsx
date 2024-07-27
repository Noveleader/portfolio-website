"use client"
import React, { useEffect, useRef } from "react";
import "../styles/Prices.css";

const Prices: React.FC = () => {
  const cardWrapperRef1 = useRef<HTMLDivElement>(null);
  const cardWrapperRef2 = useRef<HTMLDivElement>(null);

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
  }, []);

  const cards = [
    { img: "coinsLogo/bitcoin.png", name: "BTC", price: "$68000" },
    { img: "coinsLogo/eth.png", name: "ETH", price: "$4000" },
    { img: "coinsLogo/ada.png", name: "ADA", price: "$0.4" },
    { img: "coinsLogo/xrp.png", name: "XRP", price: "$0.6" },
    { img: "coinsLogo/bnb.png", name: "BNB", price: "$580.26" },
    { img: "coinsLogo/sol.png", name: "SOL", price: "$181.88" },
    { img: "coinsLogo/doge.png", name: "Doge", price: "$0.13" },
    { img: "coinsLogo/ton.png", name: "TON", price: "$6.74" },
    { img: "coinsLogo/tron.png", name: "TRON", price: "$0.13" },
    { img: "coinsLogo/avax.png", name: "AVAX", price: "$28.45" },
  ];

  const cards2 = [
    { img: "coinsLogo/link.png", name: "LINK", price: "$13.61" },
    { img: "coinsLogo/near.png", name: "NEAR", price: "$5.69" },
    { img: "coinsLogo/ltc.png", name: "LTC", price: "$71.29" },
    { img: "coinsLogo/matic.png", name: "MATIC", price: "$0.51" },
    { img: "coinsLogo/uni.png", name: "UNI", price: "$7.69" },
    { img: "coinsLogo/icp.png", name: "ICP", price: "$9.83" },
    { img: "coinsLogo/kas.png", name: "KAS", price: "$0.18" },
    { img: "coinsLogo/apt.png", name: "APT", price: "$7.32" },
    { img: "coinsLogo/xlm.png", name: "XLM", price: "$0.10" },
    { img: "coinsLogo/xmr.png", name: "XMR", price: "$162.54" },
  ];

  return (
    <div className="cryptoPrices">
      <div className="cardWrapper" ref={cardWrapperRef1}>
        {cards.concat(cards).map((card, index) => (
          <div className="card1" key={index}>
            <img src={card.img} alt={`${card.name} Logo`} />
            <p>{card.name}</p>
            <p>{card.price}</p>
          </div>
        ))}
      </div>
      <div className="cardWrapper reverse" ref={cardWrapperRef2}>
        {cards2.concat(cards2).map((card, index) => (
          <div className="card1" key={index}>
            <img src={card.img} alt={`${card.name} Logo`} />
            <p>{card.name}</p>
            <p>{card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
