import React from "react";

import "./Landing.scss";
import KavettamLogo from "../assets/kavettam.png";
import CardCarousel from "../Components/CardCarousel";

function Landing() {
  const cards = [
    {
      image: 'https://i.ibb.co/ZSDxJF6/kalajadha.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
    {
      image: 'https://i.ibb.co/rFsc8D3/fancy.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },  {
      image: 'https://i.ibb.co/313QwKh/collage.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },  {
      image: 'https://i.ibb.co/Q7VkS1C/shortfilm.jpg',
      // title: 'Card 1',
      // description: 'This is the first card.',
    },
 ];

  return (
    <div className="Landing">
      <section className="Hero">
        <p className="Dheeravam">ധീരവം കോളേജ് യൂണിയൻ അവതരിപ്പിക്കുന്നു</p>
        <img src={KavettamLogo} alt="kavettam" />
        <h4>ARTS FEST</h4>
        <p className="month">APRIL</p>
        <h3 className="date">5 6 7</h3>
        <p>GEC IDUKKI</p>
        <a href="https://drive.google.com/file/d/1mINXLnRM5IrdvVeKYNRG4ZqQ3yiwKNSM/view?usp=drive_link" target="_blank">See Guidelines</a>
        <CardCarousel cards={cards} />

      </section>

    </div>
  );
}

export default Landing;
