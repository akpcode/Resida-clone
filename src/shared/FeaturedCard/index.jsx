import React from 'react';
import "./FCard.css"

const FeaturedCard = ({ title, image, icons, price, buttons }) => {
  return (
    <section>
      <figure>
        <div className="image_div">
          <img src={image} alt="featured-card-img" />
        </div>
        <figcaption>
          <div className="title_div">
            <p>{title}</p>
            <i>{icons}</i>
          </div>
          <article>
            <div className="button_div">
              {buttons.map((item, index) => {
                return <button key={index}>{item}</button>;
              })}
            </div>
            <div className="price_div">
              <p className="price">{price}</p>
            </div>
          </article>
        </figcaption>
      </figure>
    </section>
  );
};

export default FeaturedCard;
