"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedPrice, setSelectedPrice] = useState("monthly");
  const [showMonthlyPrice, setShowMonthlyPrice] = useState(true);

  const isSelected = (type) => selectedPrice === type;

  const handleChange = () => {
    if (showMonthlyPrice) {
      setShowMonthlyPrice(false);
      setSelectedPrice("yearly");
    } else {
      setShowMonthlyPrice(true);
      setSelectedPrice("monthly");
    }
  };

  return (
    <>
      <main className="pricing">
        <h1 className="pricing__title">Our Pricing</h1>
        <div className="toggle-pricing">
          <input
            type="radio"
            name="pricing"
            id="annually"
            className="toggle-pricing__radio toggle-pricing__radio--annually"
            checked={isSelected("yearly")}
            onChange={handleChange}
          />
          <label
            htmlFor="annually"
            className="toggle-pricing__label toggle-pricing__label--inline-start"
          >
            Annually
          </label>
          <input
            type="radio"
            name="pricing"
            id="monthly"
            className="toggle-pricing__radio toggle-pricing__radio--monthly"
            checked={isSelected("monthly")}
            onChange={handleChange}
          />
          <label
            htmlFor="monthly"
            className="toggle-pricing__label toggle-pricing__label--inline-end"
          >
            Monthly
          </label>
        </div>
        <div className="pricing__container">
          <div className="card">
            <h2 className="card__title">Basic</h2>
            <p className="card__price">
              <span className="card__monthly-price">
                <span className="card__dollar-sign">$</span>
                {showMonthlyPrice ? "19.99" : "199.99"}
              </span>
            </p>
            <ul className="card__list">
              <li className="card__item">500 GB Storage</li>
              <li className="card__item">2 Users Allowed</li>
              <li className="card__item">Send up to 3 GB</li>
            </ul>
            <Link href="/" className="button button--primary-gradient">
              Learn More
            </Link>
          </div>
          <div className="card card--highlight">
            <h2 className="card__title">Professional</h2>
            <p className="card__price">
              <span className="card__monthly-price">
                <span className="card__dollar-sign">$</span>
                {showMonthlyPrice ? "24.99" : "249.99"}
              </span>
            </p>
            <ul className="card__list">
              <li className="card__item">1 TB Storage</li>
              <li className="card__item">5 Users Allowed</li>
              <li className="card__item">Send up to 10 GB</li>
            </ul>
            <Link href="/" className="button button--white">
              Learn More
            </Link>
          </div>
          <div className="card">
            <h2 className="card__title">Master</h2>
            <p className="card__price">
              <span className="card__monthly-price">
                <span className="card__dollar-sign">$</span>
                {showMonthlyPrice ? "39.99" : "399.99"}
              </span>
            </p>
            <ul className="card__list">
              <li className="card__item">2 TB Storage</li>
              <li className="card__item">10 Users Allowed</li>
              <li className="card__item">Send up to 20 GB</li>
            </ul>
            <Link href="/" className="button button--primary-gradient">
              Learn More
            </Link>
          </div>
        </div>
      </main>
      <footer className="attribution">
        <p>
          Challenge by &nbsp;
          <a className="attribution__link" href="https://www.frontendmentor.io">
            Frontend Mentor
          </a>
          . Coded by &nbsp;
          <a className="attribution__link" href="https://github.com/vanzasetia">
            Vanza Setia
          </a>
          .
        </p>
      </footer>
    </>
  );
}

